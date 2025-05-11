// import React from "react";
// import { motion } from "motion/react";
// // import {slideUpOut} from "../animation";

// const Alert = ({status,alertMsg}) => {
//     return(
//         <motion.div>
//             {
//                 status === "Success" && (
//                     <div className="px-4 py-2 rounded-md bg-emerald-500 shadow-md">
//                         <p className="text-lg text-gray-800">{alertMsg}</p>

//                     </div>
//                 )
//             }

//             {
//                 status === "Warning" && (
//                     <div className="px-4 py-2 rounded-md bg-yellow-500 shadow-md">
//                         <p className="text-lg text-gray-800">{alertMsg}</p>

//                     </div> 
//             )}

            
//             {
//                 status === "Danger" && (
//                     <div className="px-4 py-2 rounded-md bg-red-500 shadow-md">
//                         <p className="text-lg text-gray-800">{alertMsg}</p>

//                     </div> 
//             )}
//         </motion.div>
//     )
// }
// export default Alert;
// Alert.jsx
import React from "react";
import { motion } from "framer-motion";

const Alert = ({ status, alertMsg }) => {
  const getColor = () => {
    switch (status) {
      case "Success":
        return "bg-emerald-500";
      case "Warning":
        return "bg-yellow-500";
      case "Danger":
        return "bg-red-500";
      default:
        return "bg-gray-300";
    }
  };

  return (
    <motion.div
      className={`fixed top-6 right-6 z-50 px-4 py-2 rounded-full shadow text-sm font-medium text-white ${getColor()}`}
      initial={{ opacity: 0, y: -20 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -20 }}
    >
      {alertMsg}
    </motion.div>
  );
};

export default Alert;
