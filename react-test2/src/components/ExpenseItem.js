import './ExpenseItem.css';

const ExpenseItem = () => {
    const expenseBody = (expenseDate, expenseTitle, expenseAmount) => {
        return {expenseDate, expenseTitle, expenseAmount}
      };

    const insuranceValue = expenseBody(Date(2021, 2, 28), "Car Insurance", 294.67)

  return (
    <div className="expense-item">
      <div>{insuranceValue.expenseDate}</div>
      <div className="expense-item__description">
        <h2>{insuranceValue.expenseTitle}</h2>
        <div className="expense-item__price">${insuranceValue.expenseAmount}</div>
      </div>
    </div>
  );
};

export default ExpenseItem;
