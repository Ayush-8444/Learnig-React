import { useState } from 'react'
import './App.css'
import Container from './components/Container'
import CurrencyInfo from './hooks/CurrencyInfo'

function App() {
  const [from, setFrom] = useState("usd")
  const [to, setTo] = useState("inr")
  const [amount, setAmount] = useState(0)
  const [convertedAmount , setConvertedAmount] = useState(0)
  
  const currencyInfo = CurrencyInfo(from)
  const options = Object.keys(currencyInfo)

  const swap = () => {
    setFrom(to)
    setTo(from)
    setAmount(convertedAmount)
    setConvertedAmount(amount)
  }
  const convert = () => {
    setConvertedAmount( amount * currencyInfo[to])
  }
  

  return (
    <div className='flex justify-center'>
      <div className='bg-[rgba(222,222,222,0.8)] rounded-xl p-8 '>

        <Container type="From"
          options={options} currency={from} Amount={amount}
          onAmountChange={setAmount} onCurrencyChange={setFrom} />
        
        <button onClick={swap}
          className='bg-blue-700 rounded absolute top-44 left-[47%] text-white  px-6 py-1'>
          Swap</button>
        
        <Container type="To"
          options={options} currency={to} disabledFlag={true}
          Amount={convertedAmount} onCurrencyChange={setTo} />
        
        <button onClick={convert }
          className='bg-blue-700 w-full p-4 rounded-xl text-white'>
          Convert {from.toUpperCase()} to {to.toUpperCase()} </button>
      </div>
    </div>
  )
}

export default App
