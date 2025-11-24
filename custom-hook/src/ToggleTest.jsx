import useToggle from "./hooks/useToggle";

function ToggleTest(){
    const [isOpen, toggleOpen] = useToggle()
    const [isTest, toggleTest] = useToggle()

    return (
        <div>
            <div>
                <button onClick={toggleOpen}>Toggle</button>
                {isOpen && <p>Hello, this is visible!</p>}
            </div>
            <div>
                <button onClick={toggleTest}>Toggle Test</button>
                {isTest && <p>Hello, this is Yahubaba!</p>}
            </div>
        </div>
    )
}

export default ToggleTest;