import React, {useState, useEffect} from "react";
import axios from "axios";
import { useHistory, useParams } from "react-router-dom";


const EditUser = () => {
    let history = useHistory();
    const { id } = useParams();
    const [ user, setUser] = useState({
        name: "",
        username: "",
        email: "",
        phone: "",
        website: ""
    });

    const {name, username, email, phone, website} = user;
    const onInputChange = e => {
        setUser({...user,[e.target.name]: e.target.value})
    };


    useEffect(()  => {
        loadUsers();
    }, []);


    const onSubmit = async e => {
        e.preventDefault();
        await axios.put(`http://localhost:3001/users/${id}`, user);
        history.push("/");
    };

    const loadUsers = async () => {
        const result = await axios.get(`http://localhost:3001/users/${id}`);
        setUser(result.data);
    }
    return (
        <div className="edituser container text-center col align-self-center mx-auto d-block">
           <div className="w-75 mx-auto shadow p-5  text-center col align-self-center mx-auto d-block">
            <h2 className="text-center mb-4">EBORNE17</h2>
            <form onSubmit={e => onSubmit(e)}>
                <div className="form-group">
                    <input 
                        type="text"
                        className="form-control from-control-lg"
                        placeholder="Entrer votre blaze"
                        name="name"
                        value={name}
                        onChange={e => onInputChange(e)}
                        />                
                </div>
                <hr />
                <div className="form-group">
                    <input 
                        type="text"
                        className="form-control from-control-lg"
                        placeholder="Entrer votre blaze d'utilisateur"
                        name="username"
                        value={username}
                        onChange={e => onInputChange(e)}
                        />                
                </div>
                <hr />
                <div className="form-group">
                    <input 
                        type="text"
                        className="form-control from-control-lg"
                        placeholder="Entrer votre adresse E-mail"
                        name="email"
                        value={email}
                        onChange={e => onInputChange(e)}
                        />                
                </div>
                <hr />
                <div className="form-group">
                    <input 
                        type="text"
                        className="form-control from-control-lg"
                        placeholder="Entrer votre nummero de telephones"
                        name="phone"
                        value={phone}
                        onChange={e => onInputChange(e)}
                        />                
                </div>
                <hr />
                <div className="form-group">
                    <input 
                        type="text"
                        className="form-control from-control-lg"
                        placeholder="Entrer votre site web"
                        name="website"
                        value={website}
                        onChange={e => onInputChange(e)}
                        />                
                </div>
                <br/>
                <button className="btn btn-warning btn-block col-6 mx-auto d-grid gap-2">Editer User</button>
            </form>
           </div>
        </div>
    );
};

export default EditUser;
