import './ExpenseItem.css';

function ExpenseItem() {

  const expenseDate = new Date(2021, 2, 28);
  const expneseTitle = 'Car Insurance';
  const expneseAmount = 294.67;
	return (
		<div className="expense-item">
			<div>{expenseDate.toLocaleDateString()}</div>
			<div className="expense-item__description">
				<h2>{expneseTitle}</h2>
				<div className="expense-item__price">${expneseAmount}</div>
			</div>
		</div>
	);
}

export default ExpenseItem;
