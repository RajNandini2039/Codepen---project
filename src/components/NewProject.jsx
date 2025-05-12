import Split from 'react-split';
import { FaHtml5, FaCss3, FaJs, FaChevronDown } from "react-icons/fa";
import { FcSettings } from "react-icons/fc";
import './NewProject.css';
import CodeMirror from '@uiw/react-codemirror';
import { javascript } from '@codemirror/lang-javascript';
import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import logo from "../assets/codepenlogo.png";
import { AnimatePresence, motion } from 'framer-motion';
import { MdCheck, MdEdit } from "react-icons/md";
import { useSelector } from "react-redux";
import Alert from "../container/Alert";
import { doc, setDoc } from "firebase/firestore";
import { db } from "../config/firebase.config";
import { useDispatch } from "react-redux";
import { setUser } from "../reducers/userReducer";

const NewProject = () => {
  const [html, setHtml] = useState("");
  const [css, setCss] = useState("");
  const [js, setJs] = useState("");
  const [output, setOutput] = useState("");
  const [isTitle, setIsTitle] = useState("");
  const [title, setTitle] = useState("Untitle");
  const [alert, setAlert] = useState(false);

  const user = useSelector((state) => state.user.user);
  // console.log(user);

  useEffect(() => {
    updateOutput();
  }, [html, css, js]);

 const updateOutput = () => {
  const combinedOutput = `
    <html>
      <head>
        <style>
          html, body {
            margin: 0;
            padding: 1rem;
            height: 100%;
            overflow: auto;
            box-sizing: border-box;
          }
          ${css}
        </style>
      </head>
      <body>
        ${html}
        <script>${js}</script>
      </body>
    </html>
  `;
  setOutput(combinedOutput);
};


  // const saveProgram = async () => {
  //   const id = `${Date.now()}`;
  //   const _doc = {
  //     id,
  //     title,
  //     html,
  //     css,
  //     js,
  //     output,
  //     user,
  //   };

  //   await setDoc(doc(db, "Project", id), _doc)
  //     .then(() => {
  //       setAlert(true);
  //       setTimeout(() => setAlert(false), 3000);
  //     })
  //     .catch((err) => console.log("Error saving document:", err));
  // };
  const saveProgram = async () => {
  const id = `${Date.now()}`;
  const name = user.displayName;
 
  const _doc = {
    id,
    title,
    html,
    css,
    js,
    output,
    user:name
  };

  try {
    await setDoc(doc(db, "Project", id), _doc);
    setAlert(true);
    setTimeout(() => setAlert(false), 3000);
  } catch (err) {
    console.log("Error saving document:", err);
  }
};


useEffect(() => {
  const storedUser = JSON.parse(localStorage.getItem("user"));
  if (storedUser) {
    dispatch(setUser(storedUser));
  }
}, []);


  return (
    <div className="w-screen h-screen overflow-hidden flex flex-col">

      {/* Alert */}
      <AnimatePresence>
        {alert && (
          <motion.div
            className="absolute top-5 right-5 z-50"
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
          >
            <Alert status={"Success"} alertMsg={"Project Saved..."} />
          </motion.div>
        )}
      </AnimatePresence>

      {/* Header */}
      <header className='w-full flex items-center justify-between px-12 py-4'>
        <div className='flex items-center gap-6'>
          <Link to="/home/projects">
            <img src={logo} alt="Logo" className="w-32 h-auto object-contain" />
          </Link>

          <div className='flex flex-col items-start'>
            <div className='flex items-center gap-3'>
              <AnimatePresence>
                {isTitle ? (
                  <motion.input
                    key={"TitleInput"}
                    type="text"
                    className='px-3 py-2 rounded-md bg-transparent text-gray-200 text-base outline-none border-none'
                    value={title}
                    onChange={(e) => setTitle(e.target.value)}
                  />
                ) : (
                  <motion.p key={"titleLabel"} className='px-3 py-2 text-white text-lg'>
                    {title}
                  </motion.p>
                )}
              </AnimatePresence>

              <AnimatePresence>
                {isTitle ? (
                  <motion.div
                    key={"MdCheck"}
                    whileTap={{ scale: 0.9 }}
                    className='cursor-pointer'
                    onClick={() => setIsTitle(false)}
                  >
                    <MdCheck className='text-2xl text-gray-500' />
                  </motion.div>
                ) : (
                  <motion.div
                    key={"MdEdit"}
                    whileTap={{ scale: 0.9 }}
                    className='cursor-pointer'
                    onClick={() => setIsTitle(true)}
                  >
                    <MdEdit className='text-2xl text-gray-500' />
                  </motion.div>
                )}
              </AnimatePresence>
            </div>

            <div className='flex items-center px-3 -mt-2 gap-2'>
              <p className='text-gray-200 text-sm'>
                {user?.displayName || user?.email.split("@")[0]}
              </p>
              <motion.p
                whileTap={{ scale: 0.9 }}
                className='text-[10px] bg-emerald-500 rounded-sm px-2 py-[1px] text-gray-900 font-semibold cursor-pointer'
              >
                +Follow
              </motion.p>
            </div>
          </div>
        </div>

        {user && (
          <div className='flex items-center gap-4'>
            <motion.button
              onClick={saveProgram}
              className='px-6 py-4 bg-amber-200 text-black font-semibold rounded-md'
            >
              Save
            </motion.button>
          </div>
        )}
      </header>

      {/* Editor & Output */}
      <Split className="flex flex-col h-full" direction="vertical" sizes={[50, 50]} gutterSize={10}>
        {/* Editors */}
        <Split className="flex flex-row w-full h-full" gutterSize={10}>
          {/* HTML */}
          <div className='flex flex-1 flex-col bg-gray-900 text-white overflow-hidden'>
            <div className='flex justify-between bg-gray-800 px-4 py-2'>
              <div className='flex gap-2'>
                <FaHtml5 className='text-xl text-red-500' />
                <p className='font-semibold'>HTML</p>
              </div>
              <div className='flex gap-3'>
                <FcSettings className='text-xl' />
                <FaChevronDown className='text-gray-400' />
              </div>
            </div>
            <div className='w-full h-full overflow-auto px-2'>
              <CodeMirror
                value={html}
                height="100%"
                theme="dark"
                extensions={[javascript({ jsx: true })]}
                onChange={(value) => setHtml(value)}
              />
            </div>
          </div>

          {/* CSS */}
          <div className='flex flex-1 flex-col bg-gray-900 text-white overflow-hidden'>
            <div className='flex justify-between bg-gray-800 px-4 py-2'>
              <div className='flex gap-2'>
                <FaCss3 className='text-xl text-blue-500' />
                <p className='font-semibold'>CSS</p>
              </div>
              <div className='flex gap-3'>
                <FcSettings className='text-xl' />
                <FaChevronDown className='text-gray-400' />
              </div>
            </div>
            <div className='w-full h-full overflow-auto px-2'>
              <CodeMirror
                value={css}
                height="100%"
                theme="dark"
                extensions={[javascript({ jsx: true })]}
                onChange={(value) => setCss(value)}
              />
            </div>
          </div>

          {/* JS */}
          <div className='flex flex-1 flex-col bg-gray-900 text-white overflow-hidden'>
            <div className='flex justify-between bg-gray-800 px-4 py-2'>
              <div className='flex gap-2'>
                <FaJs className='text-xl text-yellow-500' />
                <p className='font-semibold'>JavaScript</p>
              </div>
              <div className='flex gap-3'>
                <FcSettings className='text-xl' />
                <FaChevronDown className='text-gray-400' />
              </div>
            </div>
            <div className='w-full h-full overflow-auto px-2'>
              <CodeMirror
                value={js}
                height="100%"
                theme="dark"
                extensions={[javascript({ jsx: true })]}
                onChange={(value) => setJs(value)}
              />
            </div>
          </div>
        </Split>

        {/* Output */}
        {/* <div className="bg-white w-full h-full overflow">
          Output / Preview Section
         <iframe
  title="Result"
  sandbox="allow-scripts"
  srcDoc={output}
  style={{
    border: "none",
    width: "100%",
    height: "100%",
  }}
/> */}
{/* Output */}
{/* <div></> */}
{/* Output */}
<div className="output-container relative bg-white w-full h-full overflow-auto">
  {/* Fullscreen Button */}
  <button
    onClick={() => {
      const blob = new Blob([output], { type: "text/html" });
      const url = URL.createObjectURL(blob);
      window.open(url, "_blank");
    }}
    className="absolute top-2 right-4 bg-black text-white px-3 py-1 rounded-md text-sm z-10 hover:bg-gray-800 transition"
  >
    Fullscreen Preview
  </button>

  {/* Iframe */}
  <iframe
    title="Result"
    srcDoc={output}
    sandbox="allow-scripts"
    style={{
      border: "none",
      width: "100%",
      height: "100%",
      minHeight: "100%",
      overflow: "auto",
    }}
  />








</div>
      </Split>
    </div>
  );
};

export default NewProject;
