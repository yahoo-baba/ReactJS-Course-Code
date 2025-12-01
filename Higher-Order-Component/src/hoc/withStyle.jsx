
function withStyle(WrappedComponent) {
  return function NewComponent(props){
    return (
        <div style={{ border:'2px solid red', padding: '10px'}}>
            <WrappedComponent {...props} />
        </div>
    )
  }
}

export default withStyle