import './styles.css';

const tipTen = document.getElementById('tipTen') as HTMLInputElement;;
const tipFifteen = document.getElementById('tipFifteen') as HTMLInputElement;;
const tipTwenty = document.getElementById('tipTwenty') as HTMLInputElement;;
const selectedTip = document.getElementById("selectedTipPercent") as HTMLInputElement;;
let billAmtValue: any = 0;

const billAmountInput    = document.getElementById("billAmtInput") as HTMLInputElement;
billAmountInput.addEventListener('input', function(){
    billAmtValue = Number(billAmountInput.value);
    tipTen.disabled=false;
    tipFifteen.disabled=false;
    tipTwenty.disabled=false;    
});

const billAmount = document.getElementById("billAmt") as HTMLInputElement ;
const tipPercentage = document.getElementById("tipPercent") as HTMLInputElement;
const tipAmount = document.getElementById("tipAmt") as HTMLInputElement;
const totalAmount = document.getElementById("totAmt") as HTMLInputElement;

tipTen.addEventListener('click',  calculateTip10);
tipFifteen.addEventListener('click', calculateTip15);
tipTwenty.addEventListener('click', calculateTip20);

function calculateTip10() {
    tipTen.disabled=true;
    tipFifteen.disabled=false;
    tipTwenty.disabled=false;
    const tip: number = (billAmtValue * 10)/100;
    updateScreen(tip,10);
};

function calculateTip15() {
    tipFifteen.disabled=true;
    tipTen.disabled=false;
    tipTwenty.disabled=false;
    const tip: number = (billAmtValue * 15)/100;
    updateScreen(tip, 15);
};
    
function calculateTip20() {
    tipTwenty.disabled=true;
    tipTen.disabled=false;
    tipFifteen.disabled=false;
    const tip: number = (billAmtValue * 20)/100;
    updateScreen(tip, 20);
};
        
function updateScreen(tip: number, tipPercent: number) {
    let tipAmountVerbiage: string = "You are tipping 10%"
    let tipRounded: number = +tip.toFixed(2);
    selectedTip.innerText=tipAmountVerbiage;
    billAmount.value=billAmtValue.toString();
    tipPercentage.value=tipPercent.toString();
    tipAmount.value=tipRounded.toString();
    let totalBillPlusTip: number = (billAmtValue + tipRounded).toFixed(2);
    totalAmount.value=totalBillPlusTip.toString();
}
