const sum = document.getElementById('sum');
const price = document.getElementById('price');
const form = document.getElementById('main-form');
const changeToShow = document.getElementById('change');

form.addEventListener('submit', e => countChange(e));

function countChange(e) {
    const result = {}

    let sumValue = sum.value.split('.').join('');
    let priceValue = price.value.split('.').join('');
    let temp;
    const nominal = ['dollars', 'fifty cents', 'twenty five cents', 'ten cents', 'five cents', 'one cent'];

    temp = sumValue - priceValue;

    result.dollars = Math.floor(temp/100);
    temp = temp % 100;
    const cents = temp;

    result.fiftyCents = Math.floor(temp/50);
    temp = temp % 50;

    result.twentyFiveCents = Math.floor(temp/25);
    temp = temp % 25;

    result.tenCents = Math.floor(temp/10);
    temp = temp % 10;

    result.fiveCents = Math.floor(temp/5);
    temp = temp % 5;

    result.oneCents = temp;

    let i = 0;
    let nominalMessage = `Your rest is ${result.dollars} dollars and ${cents} cents (by nominal value of `
    for (let key in result) {
        if(result[key]){
             nominalMessage += ` ${result[key]} ${nominal[i]}`;
        }
        i++;
    }
    nominalMessage += ')'

    changeToShow.innerHTML = nominalMessage;
    e.preventDefault();
}