import React from 'react';

const UserList = ({users,selectUser,removeUser}) => {
    //recibimos mediante props para listar mediante el metodo map el formulario.
    return (
        <div>
            <div className='users'>
                <ul className='users-content'>
                    {  
                        // listamos mediante el metodo map 
                        users.map(user => (
                            <li key={user.id} className='content-item'>
                                <div className='item-info'>
                                    <div className='info-text'>
                                        <h3><i className="fas fa-users"></i> {user.first_name} {user.last_name}</h3>
                                        <p><i className="fa-solid fa-envelope"></i> {user.email}</p>
                                        <p><i className="fa-solid fa-cake-candles"></i> {user.birthday}</p>
                                    </div>
                                </div>
                                <div className='item-btn'>
                                        <button
                                        //con esta funcion seleccionamos el usuariopasamos mediante props
                                        onClick={() => selectUser(user)}
                                        className="btn"
                                        >
                                            <i className="btn-edit fa-solid fa-square-pen"></i>
                                        </button>
                                        <button  
                                        onClick={ () => removeUser(user.id)}
                                        className="btn"
                                        >
                                            <i className="btn-remove fa-solid fa-trash"></i>
                                        </button>
                                    </div>
                            </li>
                        ))
                    }
                </ul>
            </div>
        </div>
    );
};

export default UserList;