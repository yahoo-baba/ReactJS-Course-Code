
function withAuth(WrappedComponent) {
  return function Protected(props){
    const isLoggedIn = true;

    if(!isLoggedIn) return <h3>Please login to continue..</h3>

    return <WrappedComponent {...props} />
  }
}

export default withAuth