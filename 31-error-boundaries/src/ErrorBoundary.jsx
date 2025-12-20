import { Component } from "react";

class ErrorBoundary extends Component{
   constructor(props){
      super(props);
      this.state = { hasError: false, error: null, errorInfo: null }
   }

   static getDerivedStateFromError(error){
      return { hasError: true, error: error }
   }

   componentDidCatch(error, errorInfo){
      console.log("ErrorBoundary caught an error:", error, errorInfo);
   }

   render(){
      if(this.state.hasError){
         // return <h2>Something went wrong!</h2>;
         return (
            <div style={{ border: '1px solid red', background: "pink" , padding: '20px' }}>
               <h2>Oops! Something went wrong!</h2>
               <p>{this.props.fallback}</p>
               <p>{this.state.error.message}</p>
            </div>
         )
      }

      return this.props.children;
   }
}

export default ErrorBoundary;