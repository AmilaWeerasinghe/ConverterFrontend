import './App.css';
import React from 'react';
import axios from 'axios';

function App() {
  const [date, setDate] = React.useState('');
  const [amountInSourceCurrency, setAmountInSourceCurrency] = React.useState('');
  const [sourceCurrency, setSourceCurrency] = React.useState('');
  const [targetCurrency, setTargetCurrency] = React.useState('');
  const [convertedAmount, setConvertedAmount] = React.useState('');

  const handleConvert = async () => {
    try {
      const response = await axios.post('http://localhost:5002/api/convert',{date,amountInSourceCurrency:parseFloat(amountInSourceCurrency),sourceCurrency,targetCurrency});
      setConvertedAmount(response.data);
    }catch(e) {
      console.log("error in converting",e);
    }
   

  }
  return (
   
    <div className="App">
       <label>Date format YYYY-MM-DD
       <input type='text' value={date} onChange={(e)=>{setDate(e.target.value)}}></input>
       </label>
       <label>amountInSourceCurrency
       <input type='text' value={amountInSourceCurrency} onChange={(e)=>{setAmountInSourceCurrency(e.target.value)}}></input>
       </label>
       <label>sourceCurrency
       <input type='text' value={sourceCurrency} onChange={(e)=>{setSourceCurrency(e.target.value)}}></input>
       </label>
       <label>targetCurrency
       <input type='text' value={targetCurrency} onChange={(e)=>{setTargetCurrency(e.target.value)}}></input>
       </label>
       <button onClick={handleConvert}>Convert</button>
       {convertedAmount && <p>{amountInSourceCurrency} {sourceCurrency} = {convertedAmount} {targetCurrency}</p>}
     
    </div>
  );
}

export default App;
