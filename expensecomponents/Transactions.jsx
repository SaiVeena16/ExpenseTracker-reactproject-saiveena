import React,{useContext}from 'react'
import { GlobalContext } from '../ExpenseContext/GlobalContext';

const Transaction = ({transaction}) => {
    const sign = transaction.amount < 0 ? '-':'+';
    const {deleteTransaction} = useContext(GlobalContext);

  return (
    <li className = {transaction.amount < 0 ? 'minus':'plus'}>
        {transaction.text} <span>{sign}Rs{Math.abs(transaction.amount)}</span>
        <button className='delete-btn' onClick ={()=> deleteTransaction(transaction.id)}>X</button>
    </li>
  )
}

export default Transaction
