import { useState, useMemo } from 'react'

function WithUseMemo() {
    const [count , setCount] = useState(0)
    const [text , setText] = useState("")

    const expensiveCalculation = (num) => {
        console.log("Running expensive calculation...")
        let total = 0;
        for(let i = 0; i < 1000000000; i++){
            total += i;
        }

        return total + num;
    }

    const result = useMemo(() => expensiveCalculation(count),[count] );

  return (
    <div>
        <h2>Result : {result}</h2>
        <button onClick={() => setCount(count + 1)}>Increase Count</button>
        <input type="text" value={text} 
        onChange={(e) => setText(e.target.value)}  />
        <p>Count : {count}</p>
    </div>
  )
}

export default WithUseMemo