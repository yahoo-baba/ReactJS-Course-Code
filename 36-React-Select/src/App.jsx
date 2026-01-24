import Select from "react-select";
import CreatableSelect from "react-select/creatable";
import AsyncSelect from "react-select/async";
import { useState } from "react";

function App() {
  // const [fruit, setFruit] = useState(null);

  const options = [
    { value: "chocolate", label: "Chocolate" },
    { value: "strawberry", label: "Strawberry" },
    { value: "vanilla", label: "Vanilla" },
  ];

  const customStyles = {
    control: (base) => ({
      ...base,
      borderColor: "red",
      borderWidth: "4px",
      padding: "5px",
    }),
    option: (base) => ({
      ...base,
      color: "blue",
      backgroundColor: "white",
    }),
    singleValue: (base) => ({
      ...base,
      color: "red",
      fontWeight: "bold",
    }),
  };

  return (
    <div style={{ width: "300px" }}>
      <CreatableSelect
        options={options}
        onChange={(selected) => console.log(selected)}
        isMulti
        placeholder="Select your fruit"
        isClearable
        // isDisabled={false}
        // defaultValue={options[1]}
        // isSearchable={false}
        // styles={customStyles}
      />
      {/* <p>{fruit?.label}</p> */}
      <br />

      <AsyncSelect
        loadOptions={(input) =>
          fetch(`https://jsonplaceholder.typicode.com/users?username=${input}`)
            .then((res) => res.json())
            .then((data) =>
              data.map((user) => ({
                value: user.id,
                label: user.name,
              })),
            )
        }
      />
    </div>
  );
}

export default App;
