import axios from "axios" ; 
import { useState } from "react";
import { useNavigate } from "react-router-dom";


function Register() {

  const [username , setUsername] = useState("") ; 
  const [email , setEmail] = useState("") ; 
  const [password , setPassword] = useState("") ; 
  const [error , setError] = useState("") ; 
  const navigate = useNavigate() ;  

  const handleSubmit = async(event: React.FormEvent<HTMLFormElement>)=>{
    event.preventDefault() ; 

    try{

      const response = await axios.post("http://localhost:3000/auth/signup" , {
                  username : username ,
                  email : email , 
                  password : password
      })

      let data = response.data ; 
      console.log(data) ; 
      if(data && data.token){
        localStorage.setItem("token" , data.token)
        localStorage.setItem("team" , data.team) ; 
        navigate("/landing") ;
        window.location.reload();
      }

    }catch(err){
      setError("Login Failed. Please try again.")
    }
  }

  return (
    
    <div className="flex min-h-full flex-col justify-center px-6 py-12 lg:px-8">
      <div className="sm:mx-auto sm:w-full sm:max-w-sm">
        <h2 className="mt-10 text-center text-2xl font-bold leading-9 tracking-tight text-gray-900">
          Register
        </h2>
      </div>

      <div className="mt-10 sm:mx-auto sm:w-full sm:max-w-sm">
        <form className="space-y-6" onSubmit={handleSubmit}>
          <div>
            <label
              htmlFor="email"
              className="block text-sm font-medium leading-6 text-gray-900"
            >
              User Name
            </label>
            <div className="mt-2">
              <input
                id="userName"
                name="userName"
                type="text"
                autoComplete="name"
                required
                className="pl-2 block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-black sm:text-sm sm:leading-6"
                onChange={(e)=>{setUsername(e.target.value)}}
              />
            </div>
          </div>
          <div>
            <label
              htmlFor="email"
              className="block text-sm font-medium leading-6 text-gray-900"
            >
              Email address
            </label>
            <div className="mt-2">
              <input
                id="email"
                name="email"
                type="email"
                autoComplete="email"
                required
                className="pl-2 block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-black sm:text-sm sm:leading-6"
                onChange={(e)=>{setEmail(e.target.value)}}
              />
            </div>
          </div>

          <div>
            <div className="flex items-center justify-between">
              <label
                htmlFor="password"
                className="block text-sm font-medium leading-6 text-gray-900"
              >
                Password
              </label>
              
            </div>
            <div className="mt-2">
              <input
                id="password"
                name="password"
                type="password"
                autoComplete="current-password"
                required
                className="pl-2 block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-back sm:text-sm sm:leading-6"
                onChange={(e)=>setPassword(e.target.value)}
              />
            </div>
          </div>

          <div>
            <button
              type="submit"
              
              className="flex w-full justify-center rounded-md bg-black px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-slate-700 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
            >
              Register
            </button>
          </div>
        </form>

        {error &&(<p className="mt-4 text-center text-sm text-red-500">{error}</p>)}

        <p className="mt-10 text-center text-sm text-gray-500">
        Have account?{' '}
          <a href="/signin" className="font-semibold leading-6 black hover:text-slate-700">
            Signin
          </a>
        </p>
      </div>
    </div>
  );
}

export default Register;
