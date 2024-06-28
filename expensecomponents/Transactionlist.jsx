import React from 'react'
import { useState , useEffect,useContext } from 'react'
import { GlobalContext } from '../ExpenseContext/GlobalContext'
import Transaction from './Transactions'

const Transactionlist = () => {
    const {transactions} =useContext(GlobalContext)
  return (
    <div>
        <h3>Transaction History</h3>
        <ul className="list">
        {transactions.map(transaction => (<Transaction key={transaction.id} transaction={transaction} />))}
      </ul>
      
    </div>
  )
}

export default Transactionlist
