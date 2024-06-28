import React from 'react'
import { useState , useEffect , useContext} from 'react'
import { GlobalContext } from '../ExpenseContext/GlobalContext'

const AddTransaction = () => {
    const [text , setText] = useState("")
    const [amount,setAmount] = useState(0)
    const { addTransaction } = useContext(GlobalContext);

    function handleTextChange(event){
        setText(event.target.value)
    }
    function handleAmountChange(event){
        setAmount(event.target.value)
    }
    

    const onSubmit =(event)=>{
        event.preventDefault();

        const newTransaction = {
            id: Math.floor(Math.random() * 100000000),
            
            text,
            amount:+amount,
            
        }
        
        addTransaction(newTransaction);
        setText("");
        setAmount(0)
    }



  return (
    <>
      <h3>Add new transaction</h3>
      <form onSubmit = {onSubmit}>
        
        <div className ="form-control">
          <label htmlFor="amount">
            Amount <br />
            (negative - expense, positive - income)
          </label>
          <input type="number" value={amount} onChange={handleAmountChange} placeholder="Enter amount..." />
        </div>
        <div className="form-control">
          <label htmlFor="text">Text</label>
          <input type="text" value = {text} onChange={handleTextChange} placeholder="Enter text..." />
        </div>
        <button className ="btn">Add transaction</button>
      </form>
    </>
  )
}

export default AddTransaction
