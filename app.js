var number1 = document.getElementById("num1");
var number2 = document.getElementById("num2");
var resultsButton = document.getElementById("buttonResults");
var resultsPTag = document.getElementById("results");
var clearButton = document.getElementById("buttonClear");
var add = function (num1, num2) {
    return num1 + num2;
};
var clear = function () {
    number1.value = '';
    number2.value = '';
    resultsPTag.innerHTML = "";
};
resultsButton.addEventListener("click", function () {
    console.log(add(+number1.value, +number2.value));
    resultsPTag.innerHTML = add(+number1.value, +number2.value);
});
clearButton.addEventListener("click", function () {
    number1.value.innerHTML = clear();
});
