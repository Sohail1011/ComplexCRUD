/* eslint-disable react/prop-types */
/* import { useEffect, useState } from "react"; */

export const List = ({ setInfo, info }) => {

    /*     const [users, setUsers] = useState([])
    
        useEffect(() => {
            async function getUsers() {
                const request = await fetch('http://localhost:3000/users');
                const response = await request.json();
                setUsers(response);
            }
            getUsers()
        }, []) */

    const handleDelete = (elementId) => {
        const newArray = info.filter((user) => user.id != elementId);
        setInfo(newArray);
    }

    return (
        <article className="listado">
            <h2>Lista de usuarios</h2>
            <ul>
                {
                    info.map((user) => (
                        <li key={user.id} className="card">
                            <div className="information">
                                <h3>{user.name}</h3>
                                <p>{user.work}</p>
                                <p>{user.age}</p>
                            </div>
                            <div className="options">
                                <button>Editar</button>
                                <button onClick={() => handleDelete(user.id)}>Eliminar</button>
                            </div>
                        </li>
                    ))
                }
            </ul>
        </article>
    )
}
