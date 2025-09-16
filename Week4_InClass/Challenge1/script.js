function calculate() {

    // YOUR CODE GOES HERE
    let num1 = document.getElementById('number1');
    let num2 = document.getElementById('number2');
    let sum = 0;

    num1 = Number(num1.value);
    num2 = Number(num2.value);

    for (let i = num1; i <= num2; i++) {
        sum += i;
    }
    
    result.innerText = "The sum is: " + sum;
}