/**
 * Callback functions;
 *
 * - Sometime we pass a function as a parameter of another function, that function is called Callback Functions
 */

const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

const getOddNumbers = (number) => number % 2;

const oddNumbers = numbers.filter(getOddNumbers);

console.log({ oddNumbers });

// Another Example
const download = (url) => console.log(`Downloading from ${url}`);

const process = (image) => console.log(`Processing the image: ${image}`);

const addBootCamp = (download, process) => {
  download("https://google.com");
  process("ImageFile");
};

addBootCamp(download, process);
