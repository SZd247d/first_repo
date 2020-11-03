import React, { useContext } from 'react';
import { GlobalContext } from './context/GlobalState';

export const IncomeExpenses = () => {
  const { transactions } = useContext(GlobalContext);
  const amounts = transactions.map(transaction => transaction.amount);

  const income = amounts
    .filter(amount => amount > 0)
    .reduce((acc, income) => (acc += income), 0)
    .toFixed(2);
  const expense =
    amounts
      .filter(amount => amount < 0)
      .reduce((acc, income) => (acc += income), 0) * -1;
  return (
    <div className='inc-exp-container'>
      <div>
        <h4>Income</h4>
        <p className='money plus'>{income}</p>
      </div>
      <div>
        <h4>Expense</h4>
        <p className='money minus'>{expense}</p>
      </div>
    </div>
  );
};
