import { useLayoutEffect, useState, useRef } from 'react'

function Example1() {
    const boxRef = useRef(null)
    const [height, setHeight] = useState(0)

    useLayoutEffect(() => {
        setHeight(boxRef.current.clientHeight)
    }, [])

  return (
    <div>
        <div ref={boxRef} style={{width:"200px", padding: "20px", background:"#eee"}}>
            Hello World! Measure Me
        </div>
        <p>Height: {height}</p>
    </div>
  )
}

export default Example1