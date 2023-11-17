import React, { useState, useEffect} from "react";
import axios from "axios";
import { Link } from "react-router-dom";

const Home = () => {
   const [users, setUser] = useState([]);

    useEffect(() => {
        loadUsers();
    }, []);


    const loadUsers = async () => {
        const result = await axios.get("http://localhost:3001/users");
        console.log("users",result);
        setUser(result.data.reverse());
    } ;

    const deleteUser = async id => {
        await axios.delete(`http://localhost:3001/users/${id}`);
        loadUsers();
    };
    /*user = {
        post: {

        }
    }*/

    /*componentDidMount(
        fetch('http://localhost:3001/users')
        .then((response) => {
            return response.json()
        })
        .then((result) => {
            this.setUser({post: result})
        })
    ) */
    /*const [columns, setColumns] = useState([])
    const [records, setRecords] = useState([])

    useEffect(() => {
        axios.get("http://localhost:3001/users")
        .then(res => {
            setColumns(Object.keys(res.data[0]))
            setRecords(res.data)
        })
    }, [])  */
    

    return (
        <div className="container">
            <div className="py-4">
                <h1>Home page</h1>
                <table class="table table-secondary table-striped border shadow">
                    <thead>
                        <tr>
                        <th scope="col">#</th>
                        <th scope="col">First</th>
                        <th scope="col">Last</th>
                        <th scope="col">Handle</th>
                        <th scope="col">Action</th>
                        </tr>
                    </thead>
                    <tbody>
                        {users.map((user, index) => (
                            <tr>
                                <th scope="row">{index + 1}</th>
                                <td>{user.name}</td>
                                <td>{user.username}</td>
                                <td>{user.email}</td>
                                <td>
                                    <Link class="btn btn-secondary border me-2" to={`/users/${user.id}`} >Voir</Link>
                                    <div class="vr"></div>
                                    <Link class="btn btn-outline-success me-2" to={`/users/edit/${user.id}`}>Editer</Link>
                                    <div class="vr"></div>
                                    <Link class="btn btn-danger me-2" onClick={() => deleteUser(user.id)} >Supprimer</Link>
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default Home;