'use client'
import { NextPage } from 'next'
import { useForm } from "react-hook-form";
import { signIn } from 'next-auth/react';
import React from 'react'

const Login:NextPage = () => {
    const { handleSubmit, register } = useForm();

    const submit = (data: any) => {
        signIn("credentials", {
            email: data.email,
            password: data.password,
            callbackUrl: "/profile",
        }).then((res) => {
            if(res?.error){
             return alert(res.error)
            }
        })
    }

  return (
    <div className="container">
      <form className="pt-8 w-[100%]" onSubmit={handleSubmit(submit)}>
        <div>
          <input
            {...register("email")}
            className="border-blue-400 border-2 w-full py-1 rounded-lg"
            placeholder="email"
            type="text"
          />
        </div>
        <div>
          <input
            {...register("password")}
            className="border-blue-400 border-2 w-full py-1 rounded-lg my-5"
            placeholder="password"
            type="text"
          />
        </div>
        <button className="bg-blue-400 border-2 w-full py-1 rounded-lg">
          send
        </button>
      </form>
    </div>
  );
}

export default Login