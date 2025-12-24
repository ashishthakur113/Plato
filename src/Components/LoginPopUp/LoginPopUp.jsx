import React, { useState, useEffect } from 'react'
import './LoginPopUp.css'
import { RxCross2 } from "react-icons/rx";
import { useDispatch } from 'react-redux';
import { loginSuccess} from '../../redux-tookit/AuthSlice';
import { loadCartForUser } from '../../redux-tookit/CartSlice';

export default function LoginPopUp({ setShowLogin }) {

  const [currState, setCurrState] = useState("Login")
  const dispatch = useDispatch();

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    password: "",
  });

  const handleSubmit = (e) => {
    e.preventDefault();

    const userData = {
      name: currState === "Sign Up" ? formData.name : "User",
      email: formData.email,
    };

    dispatch(loginSuccess(userData));
    dispatch(loadCartForUser());
    setShowLogin(false);
  };

  useEffect(() => {
    setFormData({ name: "", email: "", password: "" });
  }, [currState]);

  return (
    <div className='login-popup'>
      <form className='login-popup-cont' onSubmit={handleSubmit}>
        <div className="login-popup-title">
          <h2>{currState}</h2>
          <RxCross2 onClick={() => setShowLogin(false)} />
        </div>

        <div className='login-popup-inputs'>
          {currState === "Sign Up" && (
            <input
              type="text"
              placeholder='Your Name'
              value={formData.name}
              onChange={(e) =>
                setFormData({ ...formData, name: e.target.value })
              }
              required
            />
          )}

          <input
            type="email"
            placeholder='Your email'
            value={formData.email}
            onChange={(e) =>
              setFormData({ ...formData, email: e.target.value })
            }
            required
          />

          <input
            type="password"
            placeholder='Enter Password'
            value={formData.password}
            onChange={(e) =>
              setFormData({ ...formData, password: e.target.value })
            }
            required
          />
        </div>

        <button>
          {currState === "Sign Up" ? "Create account" : "Login"}
        </button>

        <div className="login-popup-condition">
          <input type="checkbox" required />
          <p>By Continuing, I agree to the Terms of use & Privacy Policy.</p>
        </div>

        {currState === "Login" ? (
          <p>
            Create a new Account?{" "}
            <span onClick={() => setCurrState("Sign Up")}>Click here</span>
          </p>
        ) : (
          <p>
            Already have an account?{" "}
            <span onClick={() => setCurrState("Login")}>Login here</span>
          </p>
        )}
      </form>
    </div>
  );
}
