function expencesCalculate() {
    const incomeField = document.getElementById('inputIcome');
    const income = (parseFloat(incomeField.value)).toFixed(2);
    console.log(income);
    const foodField = document.getElementById('food');
    const food = (parseFloat(foodField.value)).toFixed(2);
    console.log(food);
    const rentField = document.getElementById('rent');
    const rent = (parseFloat(rentField.value)).toFixed(2);
    console.log(rent);
    const clothesFiled = document.getElementById('clothes');
    const clothes = (parseFloat(clothesFiled.value)).toFixed(2);
    console.log(typeof(clothes));
    const totalExpences = (parseFloat(food) + parseFloat(rent) + parseFloat(clothes));
    const expencesElement = document.getElementById('totalExpences');
    expencesElement.innerText = totalExpences;
    const totalBalance = income - totalExpences;
    const balanceElement = document.getElementById('totalBalance');
    balanceElement.innerText = totalBalance;
    return totalBalance;

}

function saveCalculation() {
    const incomeField = document.getElementById('inputIcome');
    const incomeString = (parseFloat(incomeField.value)).toFixed(2);
    const income = parseInt(incomeString);
    const savingField = document.getElementById('saveField');
    const savingPercent = parseInt(savingField.value);
    const saving = ((savingPercent / 100) * income);
    const savingElemt = document.getElementById('saveAmount');
    savingElemt.innerText = saving;

}

document.getElementById('calculatorBtn').addEventListener('click', function() {
    expencesCalculate();
})
document.getElementById('saveField').addEventListener('click', function() {
    saveCalculation();
})