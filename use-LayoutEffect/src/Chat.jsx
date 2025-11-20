import { useLayoutEffect, useRef } from 'react'

function Chat() {
    const chatRef = useRef(null)

    useLayoutEffect(() => {
        chatRef.current.scrollTop = chatRef.current.scrollHeight;
    }, [])

  return (
        <div ref={chatRef} 
            style={{ 
                    height: "150px", 
                    border:"1px solid #ccc", 
                    overflowY: "scroll"
                }}>
            <p>Hello</p>
            <p>How are you ?</p>
            <p>Welcome to chat</p>
            <p>Testing.....</p>
            <p>Hello</p>
            <p>How are you ?</p>
            <p>Welcome to chat</p>
            <p>Testing.....</p>
        </div>
  )
}

export default Chat