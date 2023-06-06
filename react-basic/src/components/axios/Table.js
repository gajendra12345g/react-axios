import useFetch from "./useFetch";
let Table = () => {
    const [data] = useFetch("https://jsonplaceholder.typicode.com/users");
    return(
        <>
<div className="container">
    <div className="sub-container">
        <h1 className="h1">table data</h1>
        <table>
            <thead>
                <tr>
                    <th>ID</th>
                    <th>Name</th>
                    <th>Email</th>
                    <th>City</th>
                </tr>
            </thead>
            <tbody>
                {
                    data.map((user , index) => {
                        return <tr key={index}>
                            <td>{user.id}</td>
                            <td>{user.name}</td>
                            <td>{user.email}</td>
                            <td>{user.address.city}</td>

                        </tr>
                    })                       
                }
            </tbody>
        </table>
    </div>
</div>
</>
);
}
export default Table;
