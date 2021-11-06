const listItemWarpperElement = document.querySelector(".list-item-wrap");
const paginationWrapperElement = document.querySelector(".pagination");

let offset = 1;
let limit = 3;
let data = [];

function fetchData() {
  return new Promise((resolve, reject) => {
    try {
      fetch("https://jsonplaceholder.typicode.com/users").then((response) => {
        {
          resolve(response.json());
        }
      });
    } catch (err) {
      reject([]);
    }
  });
}

fetchData().then((result) => {
  data = result;
  const todalData = result.length;
  const totalPages = Math.ceil(todalData / limit);

  updateData(offset, data);
  createPagination(totalPages);
  addEventToPagination();
});

function populateData(data) {
  let elements = "";
  for (let i = 0; i < data.length; i++) {
    elements += `<div class="list-itme">
    <span>${data[i].id}</span>
    <span>${data[i].name}</span>
  </div>`;
  }
  listItemWarpperElement.innerHTML = elements;
}

function createPagination(pages) {
  paginationWrapperElement.innerHTML = "";

  for (let i = 1; i <= pages; i++) {
    paginationWrapperElement.innerHTML += `<li data-page=${i}>${i}</li>`;
  }
}

function addEventToPagination() {
  const paginations = Array.from(paginationWrapperElement.children);
  paginations.forEach((item) => {
    item.addEventListener("click", function (e) {
      const index = e.target.dataset.page;
      updateData(index, data);
    });
  });
}

function updateData(index, data) {
  offset = index;
  let startPosition = (offset - 1) * limit;
  let currentData = data.slice(startPosition, startPosition + limit);
  populateData(currentData);
}
