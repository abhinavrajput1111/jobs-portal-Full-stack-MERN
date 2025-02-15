import { useState } from "react";
import { Link } from "react-router-dom";
import {useDispatch} from "react-redux"
import { useNavigate } from "react-router-dom";
import { showLoading, hideLoading } from "../Redux/features/alertSlice";
import axios from 'axios';

const Register = () => {
  const [name, setName] = useState("");
  const [lastName, setLastName] = useState("");
  const [location, setLocation] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [state, setState] = useState("");

  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      dispatch(showLoading())
      const response = await axios.post("http://localhost:6969/jobs/registerUser", {name,lastName, email, password, state, location})
      dispatch(hideLoading());
      console.log(response.data);

      if(response.data.status === true){
        alert(response.data.message);
        navigate("/login");
      }

      // if(data.success){

      // }
    } catch (error) {
      dispatch(hideLoading());
      alert("There is some error in Application, try after some time.");
      console.log(error);
    }
    // console.log({ name, lastName, location, email, password, state });
  };


// hum is form me ek label aur input field ka field wale div ko reusable
// bana sakte hain, aur jo bhi hume values pass krni usko reuse krne ke
// time par hum use props ki trh pass kr skte hain.



  return (
    <>
      <div className="w-full min-h-screen flex items-center justify-center bg-red-100">
        <div className="border border-red-500 p-5 rounded-lg bg-pink-50">
          <h1 className="my-4 text-2xl text-center text-blue-800 font-mono">
            Register with Us!
          </h1>
          <form className="w-full max-w-lg" onSubmit={handleSubmit}>
            <div className="flex flex-wrap -mx-3 mb-6">
              <div className="w-full md:w-1/2 px-3 mb-6 md:mb-0">
                <label
                  className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
                  htmlFor="first-name"
                >
                  First Name
                </label>
                <input
                  className="appearance-none block w-full bg-gray-200 text-gray-700 border border-red-500 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white"
                  name="name"
                  type="text"
                  placeholder="Jane"
                  value={name}
                  onChange={(e) => setName(e.target.value)} // Directly updating state here
                 required/>
                <p className="text-red-500 text-xs italic">Please fill out this field.</p>
              </div>
              <div className="w-full md:w-1/2 px-3">
                <label
                  className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
                  htmlFor="last-name"
                >
                  Last Name
                </label>
                <input
                  className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
                  id="grid-last-name"
                  type="text"
                  name="lastName"
                  placeholder="Doe"
                  value={lastName}
                  onChange={(e) => setLastName(e.target.value)} // Directly updating state here
                 required/>
              </div>
            </div>

            <div className="flex flex-wrap -mx-3 mb-6">
              <div className="w-full px-3">
                <label
                  className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
                  htmlFor="email"
                >
                  Email
                </label>
                <input
                  className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
                  name="email"
                  type="email"
                  placeholder="user@user.com"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)} // Directly updating state here
                 required/>
                <p className="text-gray-600 text-xs italic">Register with your unique Email</p>
              </div>

              <div className="w-full px-3 mt-5">
                <label
                  className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
                  htmlFor="password"
                >
                  Password
                </label>
                <input
                  className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
                  type="password"
                  name="password"
                  placeholder="******************"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)} // Directly updating state here
                 required/>
                <p className="text-gray-600 text-xs italic">Make it as long and as crazy as you'd like</p>
              </div>
            </div>

            <div className="flex flex-wrap -mx-3 mb-2">
              <div className="w-full md:w-1/3 px-3 mb-6 md:mb-0">
                <label
                  className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
                  htmlFor="location"
                >
                  Location
                </label>
                <input
                  className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
                  name="location"
                  type="text"
                  placeholder="Delhi"
                  value={location}
                  onChange={(e) => setLocation(e.target.value)} // Directly updating state here
                 required/>
              </div>
              <div className="w-full md:w-1/3 px-3 mb-6 md:mb-0">
                <label
                  className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
                  htmlFor="state"
                >
                  State
                </label>
                <div className="relative">
                  <select
                    className="block appearance-none w-full bg-gray-200 border border-gray-200 text-gray-700 py-3 px-4 pr-8 rounded leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
                    name="state"
                    value={state}
                    onChange={(e) => setState(e.target.value)} // Directly updating state here
                  >
                    <option>Delhi</option>
                    <option>Assam</option>
                    <option>Uttar Pradesh</option>
                    <option>Uttarakhand</option>
                    <option>J&K</option>
                    <option>Chhattisgarh</option>
                    <option>HP</option>
                    <option>Mizoram</option>
                    <option>Andhra Pradesh</option>
                    <option>Arunachal Pradesh</option>
                    <option>Kerala</option>
                    <option>Karnataka</option>
                    <option>Others</option>
                  </select>
                  <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-gray-700">
                    <svg className="fill-current h-4 w-4" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20">
                      <path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z"/>
                    </svg>
                  </div>
                </div>
              </div>
            </div>

            <div className="flex items-center justify-center">
              <button className="bg-blue-800 hover:bg-blue-600 text-white font-mono px-2 py-2 border-b-4 border-blue-700 hover:border-blue-600 rounded">
                Register
              </button>
            </div>

            <div className="flex justify-center items-center my-2 text-green-600 hover:text-green-400">
              <Link to="/login">Already Registered, Login Here</Link>
            </div>
          </form>
        </div>
      </div>
    </>
  );
};

export default Register;
