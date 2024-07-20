import { useEffect, useState } from 'react'
import './App.css'

/*

let's say you have your crypto stpred in 3 different exchanges like wazirx,binance,coincdx

you got the returns from all three places

you added them and gave it to the CA

now you got your income report


The code >>
1> gets data from exhcnage 1
2> gets data from exchange 2
3> gets income details from the bank
4> renders the returns on the screen

*/

function App() {

  const [exchange1Data , setExchange1Data] = useState({});
  const [exchange2Data , setExchange2Data] = useState({});
  const [bankData , setBankData] = useState({});

  useEffect(() => {
    //some operation to get the data
    setExchange1Data({
      returns :100
    })
  } , [])

  useEffect(() => {
    //some operation to get the data
    setExchange2Data({
      returns:100
    });
  } , [])

  useEffect(() => {
    //some operation to get the income >>
    setTimeout(() => {
      setBankData({
        income : 100
      })
    } , 2000)
  } , [])

  const cryptoReturns = exchange1Data.returns + exchange2Data.returns ; 
  const incomeTax = (cryptoReturns + bankData.income) * 0.3;

  return (
    <div>
      hi there , your income tax returns are {incomeTax}
    </div>
  )

}  

export default App
