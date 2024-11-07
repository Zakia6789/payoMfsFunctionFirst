//1. Function for input fields 
function getInputFieldValueById(id){
    const inputValue = document.getElementById(id).value;
    const inputNumber = parseFloat(inputValue);
    // console.log(id, inputValue, inputNumber);
    return inputNumber;

}

//2.Function for account balance 
function getTextFieldValueById(id){
    const textValue = document.getElementById(id).innerText;
    const textNumber = parseFloat(textValue);
    return textNumber;
}

// 3.Functions for buttons/showSection
function showSectionById(id){
    // hide all the the sections 
    document.getElementById('add-money-form').classList.add('hidden');
    document.getElementById('cash-out-form').classList.add('hidden');
    document.getElementById('transaction-section').classList.add('hidden');
    // show the section with the provided id as parameter
    document.getElementById(id).classList.remove('hidden');
}