import { useState } from 'react'
import useCurrencyInfo from './hooks/UseCurrencyInfo'
import Input from './components/InputFile'

function App() {
  const [amount, setAmount] = useState(0)
  const [from, setFrom] = useState("inr")
  const [to,setTo] =useState("usd")
  const [convertedAmount,setConvertedAmount] = useState()
  
  const CurrencyInfo = useCurrencyInfo(from)

  const options = Object.keys(CurrencyInfo)

const convert = () => {
  setConvertedAmount(amount * options[to] )
}

  return (
    <>
     <div>
        <form onSubmit={(e) =>{
          e.preventDefault();
          convert()
          }}>
              <div>
                <Input
                  label="from"
                  amount={amount}
                  currencyOption ={options}
                  onCurrencyChange={(Currency)=>{
                      setAmount(Currency)
                  }}
                  selectCurrency={from}
                  onAmountChange={(Currency)=>{
                    setAmount(Currency)
                  }}
                />
              </div>

            <div>
               <Input
                 label="To"
                 amount={convertedAmount}
                 currencyOption={options}
                 onCurrencyChange={(Currency)=>{
                    setTo(Currency)
                 }}
                 selectCurrency={from}
                amountDiasable
              />
            </div>

            <button type='submit'>
                  submit
            </button>
        </form>
      </div>          
       
    </>
  )
}

export default App
