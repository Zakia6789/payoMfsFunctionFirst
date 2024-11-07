document.getElementById('btn-cash-out').addEventListener('click', function(event){
    event.preventDefault();
    // console.log('inside the click handler');

    // to get cash out and pin number input fields 
    const cashOut = getInputFieldValueById('input-cash-out');
    const pinNumber = getInputFieldValueById('input-cash-out-pin-number');
    // console.log('C, P', cashOut, pinNumber);

    // verify the pin (wrong way to verify)
    if(pinNumber === 1234){
        // console.log('Money will exist');
        // get balance 
        const balance = getTextFieldValueById('account-balance');
        // console.log('Current balance:', balance);
        const nwewBalance = balance - cashOut;
        // UI/DOM 
        document.getElementById('account-balance').innerText = nwewBalance;

    }
    else{
        alert('No mon ey for you....DGM');
    }
})