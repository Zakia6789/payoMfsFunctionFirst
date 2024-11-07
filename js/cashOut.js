document.getElementById('btn-cash-out').addEventListener('click', function(event){
    event.preventDefault();
    // console.log('inside the click handler');

    // to get cash out and pin number input fields 
    const cashOut = getInputFieldValueById('input-cash-out');
    const pinNumber = getInputFieldValueById('input-cash-out-pin-number');
    // console.log('C, P', cashOut, pinNumber);
    if(isNaN(cashOut)){
        alert('Failed to cash out.');
        return;
    }

    // verify the pin (wrong way to verify)
    if(pinNumber === 1234){
        // console.log('Money will exist');
        // get balance 
        const balance = getTextFieldValueById('account-balance');
        // console.log('Current balance:', balance);
        if(cashOut > balance){
            alert('You do not have enough money to cash out');
            return;
        }

        const nwewBalance = balance - cashOut;
        // UI/DOM 
        document.getElementById('account-balance').innerText = nwewBalance;



        //add a div to transaction history
        const div = document.createElement('div');
        div.classList.add('bg-yellow-300');
        div.innerHTML= `
        <h4 class="text-2xl font-bold">Cash Out </h4>
        <p>${cashOut} withdraw. New Balance ${nwewBalance}</p> 
        `
        document.getElementById('transaction-container').appendChild(div);

    }
    else{
        alert('No mon ey for you....DGM');
    }
})