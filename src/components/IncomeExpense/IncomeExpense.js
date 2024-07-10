import React, { useContext } from 'react'
import { GlobalContext } from '../../context/GlobalState'

export const IncomeExpense = () => {
    const { transactions } = useContext(GlobalContext);
    const amounts = transactions.map(transaction => transaction.amount);
    const income = amounts
        .filter(amount => amount > 0)
        .reduce((acc, item) => (acc += item), 0)
        .toFixed(2);
    const expense = amounts
        .filter(amount => amount < 0)
        .reduce((acc, item) => (acc += item), 0)
        .toFixed(2);

    return (
        <div className='inc-exp-container'>
            <div>
                <h4>Income</h4>
                <p id='money-plus' className='money plus'>+&#8377;{Math.abs(income)}</p>
            </div>
            <div>
                <h4>Expense</h4>
                <p id='money-minus' className='money minus'>-&#8377;{Math.abs(expense)}</p>
            </div>
        </div>
    )
}
