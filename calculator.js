const bill = document.getElementById('input-bill');

bill.addEventListener('input',setBillValue);
let billValue = 0.0;

function setBillValue()
{
    
    billValue = parseFloat(bill.value);
    console.log(billValue);
}

