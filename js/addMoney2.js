// Set an event handler
document.getElementById('btn-add-money').addEventListener('click', function(event){
    // set preventDefault() behavior
    event.preventDefault();
    // to get input fields and values 
    const addMoney = getInputFieldValueById('input-add-money');
    const pinNumber= getInputFieldValueById('input-pin-number');
    // console.log('add money inside addMoney2.js', addMoney, pinNumber);

    if(isNaN(addMoney)){
        alert('Failed to add money');
        return;
    }

    // to get pin number (wrong way to verify. do not try it at your serious website)
    if(pinNumber === 1234){
        // to get balance 
        const balance =getTextFieldValueById('account-balance');
        // console.log('b, m', balance, addMoney);
        const nwewBalance = balance + addMoney;
        // UI/DOM 
        document.getElementById('account-balance').innerText = nwewBalance;



        // add to transaction history 
        const p = document.createElement('p');
        p.innerText = `Added: ${addMoney} Tk. New balance ${nwewBalance} Tk`;
        console.log(p);
        // should be a common function 
        document.getElementById('transaction-container').appendChild(p);
    }

    else{
        alert('Failed to add money.')
    }


})