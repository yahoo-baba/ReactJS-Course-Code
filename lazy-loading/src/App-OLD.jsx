import { useState, Suspense, lazy } from "react"
// import Post from "./Post"
const Post = lazy(() => import("./Post"))

function App() {
  const [showPost, setShowPost] = useState(false)

  return (
    <>
      <button onClick={() => setShowPost(true)}>Show Posts</button>
      
      {showPost && (
        <Suspense fallback={<p>Loading Post....</p>}>
          <Post />
        </Suspense>
      )}
    </>
  )
}

export default App
