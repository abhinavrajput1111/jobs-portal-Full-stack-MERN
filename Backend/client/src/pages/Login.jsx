import { useState } from "react";
import {Link} from "react-router-dom";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault(); // Prevent form submission from refreshing the page

    // Basic validation to ensure both fields are filled
    if (!email || !password) {
      alert("Kindly Enter Both fields!");
      return;
    }

    // Define the password regex pattern
    const passwordRegExp = /^(?=.*[A-Za-z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/;

    // Validate password with regex
    if (!passwordRegExp.test(password)) {
      alert("Password must include at least one of each type of character: Uppercase, Lowercase, Number, Symbol");
      return;
    }

    console.log("Email:", email, "Password:", password);
  };

  return (
    <>
      <h3 className="text-center my-3 text-3xl">Login</h3>
      <div className="h-full w-full p-3 flex justify-center">
        <div className="w-1/2 h-auto flex items-center justify-center">
          <form onSubmit={handleSubmit}>
            {/* Wrapper for email and password fields */}
            <div className="bg-red-100 p-3 w-auto justify-center items-center">
              {/* Email Input */}
              <div className="md:flex md:items-center mb-6 w-full">
                <div className="flex justify-center items-center mx-5">
                  <div className="p-2 px-5 w-24">
                    <label htmlFor="email">Email</label>
                  </div>
                  <div>
                    <input
                      type="email"
                      id="email"
                      placeholder="user@user.com"
                      className="p-1 px-4"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      required
                    />
                  </div>
                </div>
              </div>

              {/* Password Input */}
              <div className="md:flex md:items-center mb-6">
                <div className="flex justify-center items-center mx-5">
                  <div className="p-2 px-5 w-24">
                    <label htmlFor="password">Password</label>
                  </div>
                  <div>
                    <input
                      type="password"
                      id="password"
                      placeholder="**********"
                      className="p-1 px-4"
                      value={password}
                      onChange={(e) => setPassword(e.target.value)}
                      required
                    />
                  </div>
                </div>
              </div>

              <div className="flex justify-center items-center p-2 w-full h-auto">
                {/* Login Button */}
                <button
                  type="submit"
                  className="px-4 py-2 bg-blue-600 text-white font-semibold rounded hover:bg-blue-800 hover:font-bold"
                >
                  Login
                </button>
              </div>
            </div>
            <div className="text-center font-thin my-2">
            <Link to="/register" element={<register/>}>Not reigster Yet! <span className="text-lg hover:text-yellow-200 font-semibold px-2 py-1 bg-green-500 text-white mx-2 hover:bg-green-600">Register</span></Link>
            </div>
          </form>

        </div>
      </div>
    </>
  );
};

export default Login;
