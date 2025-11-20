import { useLayoutEffect, useRef } from 'react'

function Example2() {
    const boxRef = useRef(null)

    useLayoutEffect(() => {
           const el = boxRef.current  
        
           const width = el.offsetWidth;

           el.style.transform = `translateX(${width}px)`

    }, [])

  return (
        <div ref={boxRef} 
            style={{ 
                    padding: "30px", 
                    background:"skyblue", 
                    transition: "3s"
                }}>
            Animated Box
        </div>
  )
}

export default Example2