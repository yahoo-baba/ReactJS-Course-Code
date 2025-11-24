import useFetch from "./hooks/useFetch";

function Users(){
    const { data, loading, error} = useFetch("https://jsonplaceholder.typicode.com/users")

    if(loading) return <h3>Loading...</h3>
    if(error) return <h3>Error occurred!</h3>

    return (
        <ul>
            {data.map(user => (
                <li key={user.id}>{user.name}</li>
            ))}
        </ul>
    )
}

export default Users;