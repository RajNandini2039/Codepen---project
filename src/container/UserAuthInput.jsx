import React, { useState } from "react";
import { FaEye, FaEyeSlash } from "react-icons/fa";
import { motion } from "framer-motion";

const UserAuthInput = ({
  label,
  placeholder,
  isPass,
  setStateFunction,
  Icon,
  setgetEmailValidationStatus,
}) => {
  const [value, setValue] = useState("");
  const [showPass, setShowPass] = useState(false);
  const [isEmailValid, setIsEmailValid] = useState(true); // default to true

  const handleTextChange = (e) => {
    const newValue = e.target.value;
    setValue(newValue);
    setStateFunction(newValue);

    if (placeholder === "Email") {
      const emailregex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
      const status = emailregex.test(newValue);
      setIsEmailValid(status);
      if (setgetEmailValidationStatus) setgetEmailValidationStatus(status);
    }
  };

  return (
    <div className="flex flex-col items-start justify-start gap-1 w-full">
      <label className="text-gray-300 text-sm">{label}</label>
      <div
        className={`flex items-center justify-center gap-3 w-full md:w-96 rounded-md py-1 px-4 bg-gray-500 text-lg ${
          !isEmailValid && placeholder === "Email" && value.length > 0
            ? "border-2 border-red-500"
            : ""
        }`}
      >
        <Icon className="text-white text-2xl" />
        <input
          type={isPass && !showPass ? "password" : "text"}
          placeholder={placeholder}
          className="w-full px-4 py-2 rounded-md bg-gray-800 text-white placeholder-gray-400 outline-none"
          value={value}
          onChange={handleTextChange}
        />
        {isPass && (
          <motion.div
            whileTap={{ scale: 0.9 }}
            onClick={() => setShowPass(!showPass)}
            className="cursor-pointer"
          >
            {showPass ? (
              <FaEye className="text-white text-2xl" />
            ) : (
              <FaEyeSlash className="text-white text-2xl" />
            )}
          </motion.div>
        )}
      </div>
    </div>
  );
};

export default UserAuthInput;