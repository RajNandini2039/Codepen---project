// import React, { useState } from "react";
// import logo from "../assets/codepenlogo.png";
// import UserAuthInput from "../container/UserAuthInput" // adjust path if needed
// import { FaEnvelope, FaGoogle, FaGithub } from "react-icons/fa";
// import { MdPassword } from "react-icons/md";
// import { motion } from "framer-motion";
// import { useDispatch } from "react-redux";
// import { setUser } from "../action/Action"; // update path as needed

// import {
//   GithubAuthProvider,
//   GoogleAuthProvider,
//   signInWithPopup,
//   createUserWithEmailAndPassword,
//   signInWithEmailAndPassword,
// } from "firebase/auth";
// import { auth } from "../config/firebase.config";
// import { useNavigate } from "react-router-dom";

// const SignUp = () => {
//   const navigate = useNavigate();
//   const [email, setEmail] = useState("");
//   const [password, setPassword] = useState("");
//   const [islogin, setIslogin] = useState(false);
//   const [message, setMessage] = useState("");
//   const [alertColor, setAlertColor] = useState("green");

//   const dispatch = useDispatch();

// // After login/signup successful:
// const handleSignUp = async () => {
//   try {
//     const userCred = await signInWithPopup(auth, provider);  // This should now work
//     dispatch(setUser(userCred.user));
//     navigate("/home");
//   } catch (error) {
//     console.error("Error signing up:", error);
//   }
// };


//   const loginWithGoogle = async () => {
//     const provider = new GoogleAuthProvider();
//     try {
//       await signInWithPopup(auth, provider);
//       navigate("/home");
//     } catch (error) {
//       setAlertColor("red");
//       setMessage("Google login failed ❌");
//       setTimeout(() => setMessage(""), 2000);
//     }
//   };

//   const signUpWithGitHub = async () => {
//     const provider = new GithubAuthProvider();
//     try {
//       await signInWithPopup(auth, provider);
//       navigate("/home");
//     } catch (error) {
//       setAlertColor("red");
//       setMessage("GitHub login failed ❌");
//       setTimeout(() => setMessage(""), 2000);
//     }
//   };

//   const signupWithEmail = async () => {
//     if (!email || !password) {
//       setAlertColor("red");
//       setMessage("Please fill in both fields.");
//       setTimeout(() => setMessage(""), 2000);
//       return;
//     }
//     try {
//       await createUserWithEmailAndPassword(auth, email, password);
//       setAlertColor("green");
//       setMessage("Account created successfully ✅");
//       setEmail("");
//       setPassword("");
//       setTimeout(() => {
//         setIslogin(true);
//         setMessage("");
//       }, 2000);
//     } catch (error) {
//       setAlertColor("red");
//       setMessage("Signup failed ❌");
//       setTimeout(() => setMessage(""), 2000);
//     }
//   };

//   const signInwithEmail = async () => {
//     if (!email || !password) {
//       setAlertColor("red");
//       setMessage("Please fill in both fields.");
//       setTimeout(() => setMessage(""), 2000);
//       return;
//     }
//     try {
//       await signInWithEmailAndPassword(auth, email, password);
//       setEmail("");
//       setPassword("");
//       navigate("/home");
//     } catch (error) {
//       setAlertColor("red");
//       setMessage("Login failed ❌");
//       setTimeout(() => setMessage(""), 2000);
//     }
//   };

//   return (
//     <div className="w-full py-6">
//       <img src={logo} alt="logo" className="object-contain w-32 opacity-50 h-auto" />

//       <div className="w-full flex flex-col items-center justify-center py-8">
//         <p className="py-4 text-2xl text-gray-500">Join With Us!</p>

//         <div className="px-8 w-full md:w-auto py-8 rounded-xl bg-black shadow-md flex flex-col items-center justify-center gap-6">
//           <UserAuthInput
//             label="Email"
//             placeholder="Email"
//             isPass={false}
//             key="Email"
//             setStateFunction={setEmail}
//             Icon={FaEnvelope}
//           />

//           <UserAuthInput
//             label="Password"
//             placeholder="Password"
//             isPass={true}
//             key="Password"
//             setStateFunction={setPassword}
//             Icon={MdPassword}
//           />

//           {message && (
//             <div
//               className={`w-full px-4 py-2 rounded-md text-center border ${
//                 alertColor === "green"
//                   ? "bg-green-100 text-green-700 border-green-400"
//                   : "bg-red-100 text-red-700 border-red-400"
//               }`}
//             >
//               {message}
//             </div>
//           )}

//           <motion.div
//             whileTap={{ scale: 0.95 }}
//             className="flex items-center justify-center w-full py-3 rounded-xl hover:bg-emerald-400 cursor-pointer bg-emerald-500"
//           >
//             <button
//               onClick={islogin ? signInwithEmail : signupWithEmail}
//               className="text-xl text-white"
//             >
//               {islogin ? "Login" : "Sign Up"}
//             </button>
//           </motion.div>

//           {islogin ? (
//             <p className="text-sm text-purple-500">
//               Don't have an account?{" "}
//               <span
//                 onClick={() => {
//                   setIslogin(false);
//                   setMessage("");
//                 }}
//                 className="text-emerald-500 cursor-pointer"
//               >
//                 Create here
//               </span>
//             </p>
//           ) : (
//             <p className="text-sm text-purple-500">
//               Already have an account?{" "}
//               <span
//                 onClick={() => {
//                   setIslogin(true);
//                   setMessage("");
//                 }}
//                 className="text-emerald-500 cursor-pointer"
//               >
//                 Login here
//               </span>
//             </p>
//           )}

//           <motion.div
//             className="flex items-center justify-center gap-3 bg-[rgba(256,256,256,0.2)] backdrop-blur-md w-full py-3 rounded-xl hover:bg-[rgba(256,256,256,0.4)] cursor-pointer"
//             whileTap={{ scale: 0.95 }}
//             onClick={loginWithGoogle}
//           >
//             <FaGoogle className="text-3xl" />
//             <span className="text-xl text-white">Sign in with Google</span>
//           </motion.div>

//           <div className="flex items-center justify-center gap-6 w-full">
//             <div className="h-[1px] bg-[rgba(256,256,256,0.2)] rounded-md w-24"></div>
//             <p className="text-sm text-[rgba(256,256,256,0.4)]">Or</p>
//             <div className="h-[1px] bg-[rgba(256,256,256,0.2)] rounded-md w-24"></div>
//           </div>

//           <motion.div
//             className="flex items-center justify-center gap-3 bg-[rgba(256,256,256,0.2)] backdrop-blur-md w-full py-3 rounded-xl hover:bg-[rgba(256,256,256,0.4)] cursor-pointer"
//             whileTap={{ scale: 0.95 }}
//             onClick={signUpWithGitHub}
//           >
//             <FaGithub className="text-3xl text-white" />
//             <span className="text-xl text-white">Sign in with GitHub</span>
//           </motion.div>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default SignUp;
import React, { useState } from "react";
import logo from "../assets/codepenlogo.png";
import UserAuthInput from "../container/UserAuthInput"; // adjust path if needed
import { FaEnvelope, FaGoogle, FaGithub } from "react-icons/fa";
import { MdPassword } from "react-icons/md";
import { motion } from "framer-motion";
import { useDispatch } from "react-redux";
import { setUser } from "../reducers/userReducer"// update path as needed

import {
  GithubAuthProvider,
  GoogleAuthProvider,
  signInWithPopup,
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
} from "firebase/auth";
import { auth } from "../config/firebase.config";
import { useNavigate } from "react-router-dom";

const SignUp = () => {
  const navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [islogin, setIslogin] = useState(false);
  const [message, setMessage] = useState("");
  const [alertColor, setAlertColor] = useState("green");

  const dispatch = useDispatch();

  const loginWithGoogle = async () => {
    const provider = new GoogleAuthProvider();
    try {
      const userCred = await signInWithPopup(auth, provider);
      console.log(userCred);
      dispatch(setUser(userCred.user));
    
      navigate("/home");
      localStorage.setItem("user",JSON.stringify(email));
    } catch (error) {
      setAlertColor("red");
      setMessage("Google login failed ❌");
      setTimeout(() => setMessage(""), 2000);
    }
  };
//   const loginWithGoogle = async () => {
//   const auth = getAuth();
//   const provider = new GoogleAuthProvider();
//   try {
//     const result = await signInWithPopup(auth, provider);
//     const user = result.user;
//     dispatch(setUser(user)); // Save user in Redux store
//     setIslogin(true); // Update local state if needed
//   } catch (error) {
//     console.error("Login error", error.message);
//   }
// };

  const signUpWithGitHub = async () => {
    const provider = new GithubAuthProvider();
    try {
      const userCred = await signInWithPopup(auth, provider);
      dispatch(setUser(userCred.user));
      localStorage.setItem("user",JSON.stringify(email));
      navigate("/home");
       
    } catch (error) {
      setAlertColor("red");
      setMessage("GitHub login failed ❌");
      setTimeout(() => setMessage(""), 2000);
    }
  };

  const signupWithEmail = async () => {
    if (!email || !password) {
      setAlertColor("red");
      setMessage("Please fill in both fields.");
      setTimeout(() => setMessage(""), 2000);
      return;
    }
    try {
      await createUserWithEmailAndPassword(auth, email, password);
      
      setAlertColor("green");
      setMessage("Account created successfully ✅");
      setEmail("");
      setPassword("");
      setTimeout(() => {
        setIslogin(true);
        setMessage("");
      }, 2000);
    } catch (error) {
      setAlertColor("red");
      setMessage("Signup failed ❌");
      setTimeout(() => setMessage(""), 2000);
    }
  };

  const signInwithEmail = async () => {
    if (!email || !password) {
      setAlertColor("red");
      setMessage("Please fill in both fields.");
      setTimeout(() => setMessage(""), 2000);
      return;
    }
    try {
      await signInWithEmailAndPassword(auth, email, password);
      dispatch(setUser(userCred.user));
      localStorage.setItem("user",JSON.stringify(email));
      setEmail("");
      setPassword("");
      navigate("/home");
    } catch (error) {
      setAlertColor("red");
      setMessage("Login failed ❌");
      setTimeout(() => setMessage(""), 2000);
    }
  };

  

  return (
    <div className="w-full py-6">
      <img src={logo} alt="logo" className="object-contain w-32 opacity-50 h-auto" />

      <div className="w-full flex flex-col items-center justify-center py-8">
        <p className="py-4 text-2xl text-gray-500">Join With Us!</p>

        <div className="px-8 w-full md:w-auto py-8 rounded-xl bg-black shadow-md flex flex-col items-center justify-center gap-6">
          <UserAuthInput
            label="Email"
            placeholder="Email"
            isPass={false}
            key="Email"
            setStateFunction={setEmail}
            Icon={FaEnvelope}
          />

          <UserAuthInput
            label="Password"
            placeholder="Password"
            isPass={true}
            key="Password"
            setStateFunction={setPassword}
            Icon={MdPassword}
          />

          {message && (
            <div
              className={`w-full px-4 py-2 rounded-md text-center border ${
                alertColor === "green"
                  ? "bg-green-100 text-green-700 border-green-400"
                  : "bg-red-100 text-red-700 border-red-400"
              }`}
            >
              {message}
            </div>
          )}

          <motion.div
            whileTap={{ scale: 0.95 }}
            className="flex items-center justify-center w-full py-3 rounded-xl hover:bg-emerald-400 cursor-pointer bg-emerald-500"
          >
            <button
              onClick={islogin ? signInwithEmail : signupWithEmail}
              className="text-xl text-white"
            >
              {islogin ? "Login" : "Sign Up"}
            </button>
          </motion.div>

          {islogin ? (
            <p className="text-sm text-purple-500">
              Don't have an account?{" "}
              <span
                onClick={() => {
                  setIslogin(false);
                  setMessage("");
                }}
                className="text-emerald-500 cursor-pointer"
              >
                Create here
              </span>
            </p>
          ) : (
            <p className="text-sm text-purple-500">
              Already have an account?{" "}
              <span
                onClick={() => {
                  setIslogin(true);
                  setMessage("");
                }}
                className="text-emerald-500 cursor-pointer"
              >
                Login here
              </span>
            </p>
          )}

          <motion.div
            className="flex items-center justify-center gap-3 bg-[rgba(256,256,256,0.2)] backdrop-blur-md w-full py-3 rounded-xl hover:bg-[rgba(256,256,256,0.4)] cursor-pointer"
            whileTap={{ scale: 0.95 }}
            onClick={loginWithGoogle}
          >
            <FaGoogle className="text-3xl" />
            <span className="text-xl text-white">Sign in with Google</span>
          </motion.div>

          <div className="flex items-center justify-center gap-6 w-full">
            <div className="h-[1px] bg-[rgba(256,256,256,0.2)] rounded-md w-24"></div>
            <p className="text-sm text-[rgba(256,256,256,0.4)]">Or</p>
            <div className="h-[1px] bg-[rgba(256,256,256,0.2)] rounded-md w-24"></div>
          </div>

          <motion.div
            className="flex items-center justify-center gap-3 bg-[rgba(256,256,256,0.2)] backdrop-blur-md w-full py-3 rounded-xl hover:bg-[rgba(256,256,256,0.4)] cursor-pointer"
            whileTap={{ scale: 0.95 }}
            onClick={signUpWithGitHub}
          >
            <FaGithub className="text-3xl text-white" />
            <span className="text-xl text-white">Sign in with GitHub</span>
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default SignUp;
