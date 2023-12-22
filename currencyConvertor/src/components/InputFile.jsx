import react ,{useId} from 'react'

 function Input(
    {
        label ,
        amount,
        onAmountChange,
        onCurrencyChange,
        currencyOption = [],
        selectCurrency = "usd",
        amountDiasable = false,
        currencyDisable = false
    }
 ){
    const amounInputId = useId()

    return(
        <div>
            <div className="main flex justify-center mt-40">
        
        <div className="flex flex-wrap bg-orange-500 w-96 h-40">
          <label htmlFor={amounInputId} className="p-5 w-60"> {label} </label>
          <div className='px-4'>
            <input 
            id={amounInputId}
            type="number"
            value={amount}
            disabled={amountDiasable}
            onChange={(e) => onAmountChange && 
                onAmountChange(Number(e.target.value))}
            className='outline-none w-80'
            />
          </div>

        </div>
        
        <div className="flex flex-wrap bg-yellow-500 w-56 h-40 justify-center pt-4">
          <label htmlFor="" className='h-6'>Currency Type</label>
          <select name="" id=""
                disabled={currencyDisable}
                value={selectCurrency}
                onChange={(e) => onCurrencyChange && onCurrencyChange(e.target.value)}
                className='rounded-lg outline-none w-full h-6 m-16'>
          
                {currencyOption.map((curr) => (
                    <option key ={curr} value={curr}>e</option>
                ))}

          </select>
        </div>
        
      </div>
        </div>
    )
 }

 export default Input;