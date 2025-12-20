import UserProfile from "./UserProfile";
import ErrorBoundary from "./ErrorBoundary";

function App() {

  const userData = {
    name: "John Doe",
    age: 25,
  };

  const userData1 = null;

  return (
    <>
      <ErrorBoundary>
        <UserProfile userData={userData} />
      </ErrorBoundary>

      <ErrorBoundary fallback={<p>Error in User Profile</p>}>
        <UserProfile userData={userData1} />
      </ErrorBoundary>
    </>
  )
}

export default App

