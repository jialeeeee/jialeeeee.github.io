const button = document.getElementById('justin-btn');

// Task 1
// Add an event listner to the button (the user drags his mouse over the button)

button.addEventListener("mouseover",function() {
    result.innerText = "Welcome to My Heart";
    result.style.backgroundColor = 'pink';
    result.style.color = 'blue';
});

// Task 2
// Add an event listner to the button (the user drags his mouse out of the button)

button.addEventListener("mouseout",function(){
    result.innerText = "Don't Leave Me Please";
    result.style.backgroundColor = 'black';
    result.style.color = 'red';
});