import React from 'react'

function Container({
  type,
  options,
  currency,
  Amount,
  onAmountChange = null,
  onCurrencyChange = null,
  disabledFlag = false
})
{
    
  return (
    <div className="flex flex-col bg-white rounded-xl mb-4 p-6 gap-4">
      <div className="flex justify-between gap-80">
        <p>{type} </p>
        <p>Currency type</p>
      </div>
      <div className="flex justify-between ">

        <input value={Amount} disabled={disabledFlag}
          onChange={(e) => onAmountChange && onAmountChange(e.target.value)}
          className='border-2 border-black rounded-md pl-4' type="text" />
        
        <select value={currency} onChange={(e)=> onCurrencyChange && onCurrencyChange(e.target.value)}
          className="rounded select bg-gray-200 pr-8 py-1 pl-1 text-black">
          
          {options.map(val => <option key={val} >{val}</option>)}

        </select>
      </div>
    </div>
  );
}

export default Container