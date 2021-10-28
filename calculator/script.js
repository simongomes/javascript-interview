(function () {
  let numbers = [2, 5];
  let operand = "";

  let add = function (a, b) {
    return Number(a) + Number(b);
  };

  let substruct = function (a, b) {
    return Number(a) - Number(b);
  };

  let multiply = function (a, b) {
    return Number(a) * Number(b);
  };

  let divide = function (a, b) {
    return Number(a) / Number(b);
  };

  Array.prototype.calculate = function (method) {
    return method(this[0], this[1]);
  };

  let input = document.querySelector("#input");
  let buttons = document.querySelectorAll(".button");

  buttons.forEach((button) => {
    button.addEventListener("click", function (e) {
      const action = this.dataset.operand;
      switch (action) {
        case "=": {
          numbers[1] = input.value;
          switch (operand) {
            case "+":
              input.value = numbers.calculate(add);
              break;
            case "-":
              input.value = numbers.calculate(substruct);
              break;
            case "*":
              input.value = numbers.calculate(multiply);
              break;
            case "/":
              input.value = numbers.calculate(divide);
              break;
          }
          break;
        }
        default:
          operand = action;
          console.log(operand);
          numbers[0] = input.value;
          input.value = "";
      }
    });
  });
})();
