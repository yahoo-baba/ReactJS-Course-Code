import React, { useState, useMemo } from 'react'

function Parent() {
    const [count , setCount] = useState(0)

    const user = useMemo(() => ({name:"Yahubaba", age: 20}), [])

    console.log("Parent rendered")

  return (
    <div>
        <h2>Parent Count : {count}</h2>
        <button onClick={() => setCount(count + 1)}>Increase Count</button>
        <Child user={user} />
    </div>
  )
}

const Child = React.memo(({user}) => {
    console.log("Child Rendered")
    return <h3>User : {user.name} </h3>
})

export default Parent