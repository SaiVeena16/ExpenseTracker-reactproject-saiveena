import React from 'react';
import Header from './expensecomponents/Header';
import Balance from './expensecomponents/Balance';
import IncomeExpense from './expensecomponents/Expenses';
import Transactionlist from './expensecomponents/Transactionlist';
import AddTransaction from './expensecomponents/AddTransaction';
import { GlobalContext, GlobalProvider } from './ExpenseContext/GlobalContext';
function App() {
   return(
      <GlobalProvider>
      <Header/>
      <div className="container">
         <Balance/>
         <IncomeExpense/>
         <Transactionlist/>
         <AddTransaction/>
         
      </div>
      
      </GlobalProvider>
   )
   
}

export default App
