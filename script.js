document.getElementById("calculate-btn").addEventListener("click", function () {
  const income = document.getElementById("income");
  const incomevalue = parseFloat(income.value);

  const foodExpense = document.getElementById("food");
  const foodValue = parseFloat(foodExpense.value);

  const rentExpense = document.getElementById("rent");
  const rentValue = parseFloat(rentExpense.value);

  const clothesExpense = document.getElementById("clothes");
  const clothesValue = parseFloat(clothesExpense.value);

  if (
    incomevalue < 0 ||
    incomevalue == "" ||
    foodValue < 0 ||
    foodValue == "" ||
    rentValue < 0 ||
    rentValue == "" ||
    clothesValue < 0 ||
    clothesValue == ""
  ) {
    alert("Inputs must be positive numbers");
    return;
  }

  const totalExpense = foodValue + rentValue + clothesValue;

  if (totalExpense > income.value) {
    alert("Expenses can't be more than Income");
    return;
  }

  const TotalExpenseCalculate = document.getElementById("total-expense");
  TotalExpenseCalculate.innerText = totalExpense;

  const balance = document.getElementById("balance");
  balance.innerText = incomevalue - totalExpense;

  document.getElementById("save-btn").addEventListener("click", function () {
    const saveAmount = document.getElementById("save");
    saveValue = saveAmount.value;

    if (saveAmount.value < 0 || saveAmount.value > 100) {
      alert("Can't save more than 100%");
      return;
    }

    const savingAmount = document.getElementById("saving-amount");

    const income = document.getElementById("income");
    const incomevalue = parseFloat(income.value);

    const saveCalculate = (incomevalue * saveValue) / 100;
    savingAmount.innerText = saveCalculate;

    const remainingBalance = document.getElementById("remaining-balance");
    remainingBalance.innerText = balance.innerText - savingAmount.innerText;
  });
});
