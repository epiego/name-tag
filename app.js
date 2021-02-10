console.log('hello console');
const nameInput = document.getElementById('name-input');
const changeButton = document.getElementById('name-change-button');
const nameDisplay = document.getElementById('name-section');
console.log(changeButton);
console.log(nameInput);

changeButton.addEventListener('click', () => {
    console.log(nameDisplay.textContent = nameInput.value);
});


