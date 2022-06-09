import React, { useEffect } from 'react';
import { useForm,  } from 'react-hook-form';
import axios from 'axios';



const defaultValues = { first_name: "", last_name: "", email: "", password: "", birthday: ""}


const UserForm = ({getUsers, userSelected, deselectUser}) => {

    const { register, handleSubmit, reset } = useForm();
    
    useEffect(() => {
        if(userSelected){
            reset(userSelected)
        }else{
            reset(defaultValues)
        }

    }, [reset,userSelected])
    


    const sumit = (data,e) => {
        console.log(data)
        e.preventDefault();
        if(userSelected !== null){
            axios
            .put(`https://users-crud1.herokuapp.com/users/${userSelected.id}/`, data)
                .then(()=> getUsers())
                .catch((error) => console.log(error.response));
        }else{
            axios
            .post("https://users-crud1.herokuapp.com/users/", data)
            /*recibimos la funcion de los usuarios con el .then 
            para que haga el render de la pagina al cambiar.*/
                    .then(() => getUsers())
                    .catch((error) => console.log(error.response));
        }
        
        
        
    }

    return (
        <div className='back-form'>
            
            <form onSubmit={handleSubmit(sumit)} className="form" action=''>

                <h2><span>Please sign in to continue</span></h2>
                <div className='name-input'>
                    <label htmlFor='first_name_input'><i className="fas fa-users"></i>Name</label>
                    <input type="text" id='first_name_input' {...register("first_name")}/>
                    <input type="text" id='last_name_input'{...register("last_name")}/>
                </div>
                <div>
                    <label htmlFor='email_input'><i className="fa-solid fa-envelope"></i>Email</label>
                    <input type="email" id='email_input'{...register("email")}/>
                </div>
                <div className='input'>
                    <label htmlFor='password_input'><i className="fa fa-key"></i>Password </label>
                    <input type="password" id='password_input'{...register("password")}/>
                </div>
                <div className='input'>
                    <label htmlFor='birthday_input'>Birthday </label>
                    <input type="date" id='birthday_input'{...register("birthday")}/>
                </div>
                <button className='btn-form upload'>Upload</button>
                {
                    userSelected && 
                    <button onClick={deselectUser} className="btn-form cancel">Cancel</button>
                }
            </form>
        </div>
        
    );
};

export default UserForm;