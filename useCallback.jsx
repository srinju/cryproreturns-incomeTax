import { memo, useCallback, useEffect, useMemo, useState } from 'react'
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
    setExchange1Data({ //happens immediately
      returns :100
    })
  } , [])

  useEffect(() => {
    //some operation to get the data
    setExchange2Data({ //happens immediately
      returns:100
    });
  } , [])

  useEffect(() => {
    //some operation to get the income >>
    setTimeout(() => { //happens after some time
      setBankData({
        income : 100
      })
    } , 5000)
  } , [])
 
  
  //const cryptoReturns = exchange1Data.returns + exchange2Data.returns ; //this line runs whenever the settime out function is triggered , if neitheer of the returns and income tax is not changed then this line should not re render or re run again
  //useCallback is not about minimising the amount of code that is run 
  //useCallback is about not rendering a child, if the function hasnt/dosent need to change across rerenders

  const calculateCryptoReturns = useCallback(() => { //so the calculatecrypto returns changes only when exchang1 and exchange2 data changes altho it changes referentially
    return exchange1Data.returns + exchange2Data.returns;
  },[exchange1Data,exchange2Data])

  //use memo gives you that when we use usememo the thing on the left got a value and when we use usecallback then it gets a function and it runs whenever the operation runs whenever the exchgange1data and exchange2data changes 

  return ( //react dosent understand whether thr prvs calccrypto return func and now are the same because function body can be same but both functions are never equal they are referentially different all the time , so we wrap that function inside a useCallback
    <div>
      <CryptoGainsCalculator calculateCryptoReturns={calculateCryptoReturns}/>
      <Dummy />
    </div>
  )

}

 const Dummy  = memo(() => { //now this dummy dunction will not re render because we used memo here coz the dummy function is not dynamic it is static and re rendering of static elements whenever soemthing dyncmic is re rendered is very useless so we use memo here whih prevents the static elements to re render 
  console.log("hi there re rendered")
  return <div>
    hi there!!
  </div>
 })

 const CryptoGainsCalculator = memo(({calculateCryptoReturns}) => {   
  console.log("crypto child re rendeered!!");
  return <div>
    your crypto returns are {calculateCryptoReturns()}
  </div>
 })

export default App

