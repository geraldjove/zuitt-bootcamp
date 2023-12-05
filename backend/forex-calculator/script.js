let baseCurr = document.querySelector("#baseCurr");
let targetCurr = document.querySelector("#targetCurr");
let convButton = document.querySelector("#convButton");
let ammConv = document.querySelector("#ammConv");
let convAmm = document.querySelector("#convAmm");
let bCurrConv;
let tCurrConv;
let bCurrConvText;
let tCurrConvText;

fetch('https://api.fxratesapi.com/latest')
.then(res=>res.json())
.then(data => showCurrency(data));

const showCurrency = (currency) => {
    let baseEntries = "";
    let targetEntries = "";
    const {rates} = currency;
    for(const [curr, rate] of Object.entries(rates)){
        baseEntries = baseEntries + `
       <option value="${rate}">${curr}</option>
        `;
        targetEntries = targetEntries + `
        <option value="${rate}">${curr}</option>
        `;
    }
    baseCurr.innerHTML = baseEntries;
    targetCurr.innerHTML = targetEntries;
}

baseCurr.addEventListener('change', ()=>{
    let selectedBaseOption = baseCurr.options[baseCurr.selectedIndex];
    let selectedBaseText = selectedBaseOption.text;
    bCurrConv = Number(baseCurr.value);
    bCurrConvText = selectedBaseText;
})

targetCurr.addEventListener('change', ()=>{
    let selectedTargetOption = targetCurr.options[targetCurr.selectedIndex];
    let selectedTargetText = selectedTargetOption.text;
    tCurrConv = Number(targetCurr.value);
    tCurrConvText = selectedTargetText;
})

convButton.addEventListener('click', (event)=>{
    let showConversion = "";
    event.preventDefault();
    const convertedCurrency = (ammConv.value / bCurrConv) * tCurrConv;
    showConversion = showConversion + `
    <h1>${bCurrConvText} ${ammConv.value} = ${tCurrConvText} ${convertedCurrency.toFixed(2)}</h1>
    `
    convAmm.innerHTML = showConversion;
})