const number1 = document.getElementById("num1")! as HTMLInputElement;
const number2 = document.getElementById("num2")! as HTMLInputElement;
const resultsButton = document.getElementById("buttonResults")
const resultsPTag = document.getElementById("results")
const clearButton = document.getElementById("buttonClear")



const add = (num1: number, num2:number) => {
    return num1 + num2;
}

const clear = () => {
    number1.value = '';
    number2.value = '';
    resultsPTag.innerHTML = "";
}

resultsButton.addEventListener("click", () => {
    console.log(add(+number1.value, +number2.value));
    resultsPTag.innerHTML = add(+number1.value, +number2.value);
})

clearButton.addEventListener("click", () => {
    number1.value.innerHTML = clear();
})



