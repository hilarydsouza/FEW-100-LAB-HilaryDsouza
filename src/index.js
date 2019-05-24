function doIt() {
    
    const tipTen = document.getElementById('tipTen');
    const tipFifteen = document.getElementById('tipFifteen');
    const tipTwenty = document.getElementById('tipTwenty');
    var billAmtValue = 0;

    const billAmount    = document.getElementById('billAmtInput');
    billAmount.addEventListener('input', function(){
        billAmtValue = billAmount.value;
    });

    tipTen.addEventListener('click', calculateTip(billAmtValue, 10));
    tipFifteen.addEventListener('click', calculateTip(billAmtValue, 15));
    tipTwenty.addEventListener('click', calculateTip(billAmtValue, 20));

    

    function calculateTip(billAmtValue, tipPercent) {
        const tip = (billAmtValue * tipPercent)/100;
        document.getElementById("billAmt").innerText = billAmtValue;
        document.getElementById("tipPercentage").innerText=tipPercent;
        document.getElementById("tipAmount").innerText = tip;
        document.getElementById("totAmount").innerText = billAmtValue + tip;
    };

}