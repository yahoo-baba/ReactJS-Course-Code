import { useEffect, useLayoutEffect} from 'react'

function Test() {

    useEffect(() => {
        console.log("useEffect Message")
    }, [])

    useLayoutEffect(() => {
        console.log("useLayoutEffect Message")
    }, [])

  return (
    <div>Test</div>
  )
}

export default Test