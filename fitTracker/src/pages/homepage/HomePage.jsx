
import React, { useState } from 'react';
import { Button, Input } from '@material-tailwind/react';
import registration from './fetch/registration';
import { useForm } from "react-hook-form"
import login from './fetch/login';

function HomePage() {

    const { register, handleSubmit, watch, formState: { errors } } = useForm();

    const onSubmit = data => login(data);
    const onRegister = data => registration(data);
    
    return (

        <div className='bg-red-100'>
            <div className='bg-orange-100 mr-auto ml-auto'>
                <form className='flex flex-col items-center' onSubmit={handleSubmit(onSubmit)}>
                    <h1 className='text-center text-4xl font-bold pb-7 pt-12'>Login</h1>

                    <div className='w-1/2 mt-6'>
                        <Input label="Login" className=''  {...register("identifier")} />
                    </div>

                    <div className='w-1/2 mt-6'>
                        <Input label="Password" className=''  {...register("pass")} />
                    </div>
                    
            
                    <Button className='mt-6 mb-5' onClick={handleSubmit(onSubmit)}>LOGIN</Button>

                </form>
            </div>

            <div className='bg-orange-100 mr-auto ml-auto mt-12'>
                <form className='flex flex-col items-center' onSubmit={handleSubmit(onSubmit)}>
                    <h1 className='text-center text-4xl font-bold pb-7 pt-12'>Register</h1>

                    <div className='w-1/2 mt-6'>
                        <Input label="Username" className='' {...register("username")} />
                    </div>

                    <div className='w-1/2 mt-6'>
                        <Input label="Email" className=''  {...register("email")} />
                    </div>

                    <div className='w-1/2 mt-6'>
                        <Input label="Password" className=''  {...register("password")} />
                    </div>
                    
                
                    <Button className='mt-6 mb-5' onClick={handleSubmit(onRegister)}>REGISTER</Button>

                </form>
            </div>
        </div>
        

        
    );
}

export default HomePage;