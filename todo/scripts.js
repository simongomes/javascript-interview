(function () {
  let _todos = [
    {
      todo: "Complete Bootcamp Module",
      status: false,
      order: 2,
    },
    {
      todo: "Complete Marketing Kit Module",
      status: true,
      order: 1,
    },
    {
      todo: "Complete Firebase Analytics Integration",
      status: false,
      order: 3,
    },
  ];

  let todos = _todos.sort((firstElement, secondElement) => {
    return firstElement.order - secondElement.order;
  });

  let todoText = "";

  const todoInput = document.querySelector(".todo-input");
  const addButton = document.querySelector(".todo-add");
  const todosElement = document.querySelector(".todo-list");

  todoInput.addEventListener("input", function (e) {
    todoText = e.target.value;
  });

  addButton.addEventListener("click", function () {
    if (todoText && todoText !== "") {
      const newTodo = {
        todo: todoText,
        status: false,
      };

      todos.push(newTodo);
      reRenderTodos();
    }
  });

  reRenderTodos();

  function reRenderTodos() {
    todosElement.innerHTML = "";

    let todoElements = "";

    todos.forEach((item, index) => {
      todoElements += `<div class="todo-item">
      <div class="todo-text ${item.status ? "done" : ""}">
        <span class="number">${index + 1}</span> <span class="todo">${
        item.todo
      }</span>
      </div>
      <div class="check"><input class="checkbox" type="checkbox" ${
        item.status ? "checked" : ""
      } data-index=${index} />
      <button class='delete-button' data-index=${index}>Delete<button>
      </div>
    </div>`;
    });

    todosElement.innerHTML = todoElements;
    addCheckBoxEventListener();
    addDeleteEventListener();
  }

  function addCheckBoxEventListener() {
    const checkBoxes = document.querySelectorAll(".checkbox");
    checkBoxes.forEach(function (checkbox) {
      checkbox.addEventListener("click", handleChecked);
    });
  }

  function addDeleteEventListener() {
    const deleteButtons = document.querySelectorAll(".delete-button");
    deleteButtons.forEach(function (deleteButton) {
      deleteButton.addEventListener("click", handleDelete);
    });
  }

  function handleChecked(e) {
    const complete = e.target.checked;
    const index = parseInt(e.target.dataset.index);
    todos[index].status = complete;

    reRenderTodos();
  }

  function handleDelete(e) {
    const index = e.target.dataset.index;
    todos.splice(index, 1);
    reRenderTodos();
  }
})();
