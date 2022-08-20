function expencesCalculate() {
    const incomeField = document.getElementById('inputIcome');
    const income = (parseFloat(incomeField.value)).toFixed(2);
    const foodField = document.getElementById('food');
    const food = (parseFloat(foodField.value)).toFixed(2);
    const rentField = document.getElementById('rent');
    const rent = (parseFloat(rentField.value)).toFixed(2);
    const clothesFiled = document.getElementById('clothes');
    const clothes = (parseFloat(clothesFiled.value)).toFixed(2);
    const totalExpences = food.value + rent.value + clothes.value;
    const expencesElement = document.getElementById('totalExpences');
    expencesElement.innerText = totalExpences;
    const totalBalance = income - totalExpences;
    const balanceElement = document.getElementById('totalBalance');
    balanceElement.innerText = totalBalance;

}
document.getElementById('calculatorBtn').addEventListener('click', function() {
    expencesCalculate();
})