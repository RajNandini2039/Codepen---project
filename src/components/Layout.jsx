
import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { Link, Outlet } from "react-router-dom";
import logo from "../assets/codepenlogo.png";
import { HiChevronDoubleLeft } from "react-icons/hi";
import { MdHome } from "react-icons/md";
import { FaSearchengin } from "react-icons/fa6";
import { auth } from "../config/firebase.config.js";
import { onAuthStateChanged, signOut } from "firebase/auth";
import { useDispatch } from "react-redux";
import  {setUser}  from "../reducers/userReducer";

const Layout = () => {
  const [isSideMenu, setIsSideMenu] = useState(false);
  const [user, setUser] = useState(null);

  const dispatch = useDispatch();

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
      setUser(currentUser);
      dispatch(setUser(currentUser)); // Redux mein set
    });

    return () => unsubscribe();
  }, []);

  const handleLogout = () => {
    signOut(auth)

      .then(() => {
        localStorage.removeItem("user");
        alert("Successfully logged out.");
      })
      .catch((error) => {
        alert("Error during logout: " + error.message);
      });
  };

  return (
    <div className="w-full h-screen flex items-start justify-start">
      {/* Sidebar */}
      <div
        className={`${
          isSideMenu ? "w-16" : "w-64"
        } min-h-screen max-h-screen relative bg-white px-3 py-6 flex flex-col items-center justify-start gap-4 transition-all duration-200 ease-in-out`}
      >
        <motion.div
          whileTap={{ scale: 0.9 }}
          onClick={() => setIsSideMenu(!isSideMenu)}
          className="w-8 h-8 bg-black rounded-tr-lg rounded-br-lg absolute -right-6 flex items-center justify-center cursor-pointer"
        >
          <HiChevronDoubleLeft className="text-white text-xl" />
        </motion.div>

        <div className="overflow-hidden w-full flex flex-col gap-4">
          <Link to="/home">
            {!isSideMenu && (
              <img src={logo} alt="logo" className="object-contain w-72 h-auto" />
            )}
          </Link>
          <Link to="/newProject">
            <div className="px-6 py-3 flex items-center justify-center rounded-xl border border-gray-400 cursor-pointer group-hover:border-gray-200">
              {!isSideMenu && (
                <p className="text-gray-400 group-hover:text-gray-200 capitalize">
                  Start Coding
                </p>
              )}
            </div>
          </Link>
          {user && (
            <Link to="/home/projects" className="flex items-center justify-center gap-6">
              <MdHome className="text-gray-700 text-xl" />
              {!isSideMenu && <p className="text-gray-700">Home</p>}
            </Link>
          )}
        </div>
      </div>

      {/* Main Content */}
      <div className="flex-1 min-h-screen max-h-screen overflow-y-scroll h-full flex-col items-start justify-start px-4 md:px-12 py-4 md:py-12">
        {/* Top Bar */}
        <div className="w-full flex items-center justify-between gap-3 mb-4">
          <div className="bg-gray-800 w-full px-4 py-3 rounded-md flex items-center justify-center gap-3">
            <FaSearchengin className="text-2xl text-purple-400" />
            <input
              type="text"
              className="flex-1 px-4 py-1 text-xl bg-transparent outline-none border-none text-purple-400 placeholder:text-gray-600"
              placeholder="Search here...."
            />
          </div>

          {user ? (
            <div className="flex items-center gap-4">
              {/* Avatar */}
              <div className="w-10 h-10 rounded-full bg-purple-500 text-white flex items-center justify-center text-xl font-bold uppercase">
                {user.displayName
                  ? user.displayName.charAt(0)
                  : user.email.charAt(0)}
              </div>
              {/* Logout Button */}
              <motion.button
                whileTap={{ scale: 0.9 }}
                onClick={handleLogout}
                className="bg-red-500 px-4 py-2 rounded-md text-white text-sm hover:bg-red-700"
              >
                Logout
              </motion.button>
            </div>
          ) : (
            <motion.div whileTap={{ scale: 0.9 }}>
              <Link
                to="/home/auth"
                className="bg-emerald-500 px-6 py-2 rounded-md text-white text-lg cursor-pointer hover:bg-emerald-700"
              >
              signUp
              </Link>
            </motion.div>
          )}
        </div>

        {/* Nested Routes */}
        <Outlet />
      </div>
    </div>
  );
};

export default Layout;
