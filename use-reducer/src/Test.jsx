import { useReducer } from "react";

function Test() {
  const [checked, toggle] = useReducer((checked) => !checked, false);

  return (
    <div>
      <input type="checkbox" checked={checked} 
      onChange={toggle} />

      {checked ? "checked" : "not checked"}
    </div>
  );
}

export default Test;