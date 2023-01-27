import React, {useContext} from 'react';

import { Button, Input } from '@material-tailwind/react';
import { useForm } from "react-hook-form"
import { useNavigate } from "react-router-dom"

import login from './fetch/login';
import registration from './fetch/registration';

import AuthContext from '../../context/authContext';


function HomePage() {

    // eslint-disable-next-line no-unused-vars
    const { register, handleSubmit } = useForm();
    const {setIsLoggedIn} = useContext(AuthContext)
    const navigate = useNavigate()

    const onSubmit = data => login.login(data).then((e) => {
        setIsLoggedIn(e)
        if (e === true)
            navigate("/programmes")
    })
    //setIsLoggedIn(true)
    //redirect("/programmes")
  
    const onRegister = data => registration(data).then((e) => {
        setIsLoggedIn(e)
        if (e === true)
            navigate("/programmes")
    });
    
    return (

        <div className='bg-red-100'>
            <div className='bg-orange-100 mr-auto ml-auto'>
                <form className='flex flex-col items-center'>
                    <h1 className='text-center text-4xl font-bold pb-7 pt-12'>Login</h1>

                    <div className='w-1/2 mt-6'>
                        <Input label="Login" className=''  {...register("identifier")} />
                    </div>

                    <div className='w-1/2 mt-6'>
                        <Input label="Password" className='' {...register("pass")} />
                    </div>
                    <Button className='mt-6 mb-5' onClick={handleSubmit(onSubmit)}>LOGIN</Button>

                </form>
            </div>

            <div className='bg-orange-100 mr-auto ml-auto mt-12'>
                <form className='flex flex-col items-center'>
                    <h1 className='text-center text-4xl font-bold pb-7 pt-12'>Register</h1>

                    <div className='w-1/2 mt-6'>
                        <Input label="Username" className='' {...register("username")} />
                    </div>

                    <div className='w-1/2 mt-6'>
                        <Input label="Email" className=''  {...register("email")} />
                    </div>

                    <div className='w-1/2 mt-6'>
                        <Input label="Password" className=''  {...register("password",{
                            minLength: {
                                value:6,
                                message:"Mot de passe trop court"
                            },
                        })} />
                    </div>
                    <Button className='mt-6 mb-5' onClick={handleSubmit(onRegister)}>REGISTER</Button>
                </form>
            </div>
        </div>
        

        
    );
}

export default HomePage;