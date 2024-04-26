'use client'
import React from 'react'
import axios from 'axios';
import { useRouter } from "next/navigation";
import { useForm } from "react-hook-form";

interface typeData {
    name: string;
    email: string;
    password: string;
}

const Register = () => {
    const router = useRouter();
    const { handleSubmit, register,reset } = useForm<typeData>();
    const submit = (data: typeData) => {
        axios.post('http://localhost:8000/api/register', data).then((res) => {
            console.log(res)
            router.push('/login')
        }).catch((err) => {
            console.log(err)
        })
        reset();
    }
  return (
    <div className="container">
      <form className="pt-8 w-[100%]" onSubmit={handleSubmit(submit)}>
        <div className="">
          <input
            {...register("name")}
            className="border-blue-400 border-2 w-full py-1 rounded-lg"
            placeholder="name"
            type="text"
          />
        </div>
        <div>
          <input
            {...register("email")}
            className="border-blue-400 border-2 w-full py-1 rounded-lg my-4"
            placeholder="email"
            type="text"
          />
        </div>
        <div>
          <input
            {...register("password")}
            className="border-blue-400 border-2 w-full py-1 rounded-lg"
            placeholder="password"
            type="text"
          />
        </div>
        <div className="flex flex-col gap-5 mt-7">
          <button
            type="submit"
            className="border-blue-400 border-2 w-full py-1 rounded-lg"
          >
            send
          </button>
          <button className='bg-green-400 rounded-lg py-1' onClick={() => router.push("/login")}>login</button>
        </div>
      </form>
    </div>
  );
}

export default Register