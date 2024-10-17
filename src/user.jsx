import { useEffect, useState } from "react"

export default function users(){

    const [users, setUsers] = useState([])

    // useEffect function duita parameter nay // 1. callback function 2. dependency
    useEffect(() => {
        fetch('https://jsonplaceholder.typicode.com/users')
        .then(res => res.json())
        .then(data => setUsers(data))
    } ,[])

    return(
        <div>
            <h3>Users: {users.length}</h3>
            
        </div>
    )
}


/**
 * 1. declare a state to hold the data
 * 2. useEffect with call back and dependency array
 * 3. use fetch to load data
*/