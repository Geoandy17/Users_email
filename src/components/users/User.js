import React, {useState, useEffect} from "react";
import axios from "axios";
import { Link, useParams } from "react-router-dom";

const User = () => {
    const [user, setUser] = useState({
        name: "",
        username: "",
        email: "",
        phone: "",
        website: ""
    });

    const { id } = useParams();

    useEffect(() => {
        loadUsers();
    }, []);
    const loadUsers = async () => {
        const res = await axios.get(`http://localhost:3001/users/${id}`);
        setUser(res.data);
    };
    return (
        <div className="container py-4">
            <Link className="btn btn-primary" to="/">
                Revenir sur Home
            </Link>
            <h1 className="display-4"> User Id: {id} </h1>
            <hr />
            <ul className="list-group w-50">
                <li className="list-group-item">Nom: {user.name} </li>
                <li className="list-group-item">Nom d'utilisateur: {user.username} </li>
                <li className="list-group-item">E_mail: {user.email} </li>
                <li className="list-group-item">Nummero de Telephone {user.phone} </li>
                <li className="list-group-item">Site Web: {user.website} </li>
            </ul>
        </div>
    );
};

export default User;