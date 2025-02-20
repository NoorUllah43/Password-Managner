import Heading from "./Components/Heading"
import Navbar from "./Components/Navbar"
import { useState, useEffect, useRef } from "react"
import { v4 as uuidv4 } from 'uuid';



function App() {

  const [form, setform] = useState({ site: '', email: '', password: '' });
  const [Todos, setTodos] = useState([]);
  const [passhideshow, setpasshideshow] = useState(true);
  const showHide = useRef();
  const changePassIcon = useRef();

  useEffect(() => {
    let passwords = localStorage.getItem('passwords')
    if (passwords) {
      setTodos(JSON.parse(passwords));
    }

  }, [])


  const savePassword = () => {
    if (form.site != '' && form.email != '', form.password != '') {

      setTodos([...Todos, { ...form, id: uuidv4() }]);
      localStorage.setItem('passwords', JSON.stringify([...Todos, { ...form, id: uuidv4() }]));
      setform({ site: '', email: '', password: '' })
    }
  }

  const handleChange = (e) => {
    setform({ ...form, [e.target.name]: e.target.value })
  }

  const deletepassword = (id) => {
    const newTodos = Todos.filter((item => item.id != id))
    setTodos(newTodos);
    localStorage.setItem('passwords', JSON.stringify(newTodos));

  }

  const eidtpassword = (id) => {
    const Todo = Todos.filter((item => item.id === id))
    setform(...Todo);
    const newTodos = Todos.filter((item => item.id != id))
    setTodos(newTodos);
    localStorage.setItem('passwords', JSON.stringify(newTodos));
  }

  const showhidepass = () => {
    if (passhideshow) {
      showHide.current.type = 'text';
      changePassIcon.current.innerHTML = '<i class="fa-solid fa-eye-slash"></i>';
      setpasshideshow(false);

    }
    else {
      showHide.current.type = 'password';
      changePassIcon.current.innerHTML = '<i class="fa-solid fa-eye"></i>';
      setpasshideshow(true);
    }
  }

  const copyText = (text) => {
    navigator.clipboard.writeText(text);
  }
  


  return (
    <>
      <Navbar />
      <Heading />


      <div className='w-full h-[110px] flex items-center justify-center mb-12 '>
        <div className='w-[70%] flex items-center justify-center flex-col'>
          <input type="text" value={form.site} name='site' onChange={handleChange} placeholder='Enter Website URL ' className='w-full h-8 rounded-lg px-2 border-[1px] border-green-500 bg-green-50 text-lg text-green-800 mb-4 ' />
          <div className='w-full flex  items-center justify-between flex-col sm:flex-row '>
            <input type="text" value={form.email} name='email' onChange={handleChange} placeholder='email' className='sm:w-[70%] w-full h-8 rounded-lg px-2 border-[1px] border-green-500 bg-green-50 text-lg text-green-800 mb-4 ' />
            <span className='sm:w-[28%] w-full h-8 rounded-lg border-[1px] border-green-500 bg-green-50 text-lg text-green-800 mb-4 flex items-center justify-center'>
              <input type="password" ref={showHide} value={form.password} name='password' onChange={handleChange} placeholder='password' className='w-[90%] h-full  outline-none rounded-lg px-2 border-none bg-green-50 text-lg text-green-800 ' />
              <span onClick={() => showhidepass()} ref={changePassIcon} className="mx-2"><i className="fa-solid fa-eye"></i></span>
            </span>
          </div>


          <button onClick={savePassword} className='h-11 w-26 p-3 border-[1px] border-gray-600 bg-green-400 text-black hover:bg-green-500 duration-100 rounded-[50px] flex items-center justify-center text-2xl font-bold  '>
            <lord-icon
              src="https://cdn.lordicon.com/jgnvfzqg.json"
              trigger="hover"
              style={{ width: "40px", height: "40px" }}>
            </lord-icon>
            <span className='px-2'>save</span>
          </button>

        </div>
      </div>
      <div className='w-full flex items-center justify-center my-10'>

        <div className='w-[70%] overflow-auto'>
          <table className="min-w-full bg-white border border-gray-300 ">
            <thead className="bg-slate-900 text-white">
              <tr>
                <th className="w-1.3/4 py-3 px-4 uppercase font-semibold text-sm text-left">Website URL</th>
                <th className="w-1.3/4 py-3 px-4 uppercase font-semibold text-sm text-left">Email</th>
                <th className="w-0.9/4 py-3 px-4 uppercase font-semibold text-sm text-left">Password</th>
                <th className="w-0.5/4 py-3 px-4 uppercase font-semibold text-sm text-left">Actions</th>
              </tr>
            </thead>
            <tbody className="text-gray-700">

              {
                Todos.map((item) => {
                  return (
                    <tr className="border-b " key={item.id}>
                      <td className="py-3 px-4">
                        <span>{item.site}</span>
                        <span onClick={()=>copyText(item.site)} className="mx-2 hover:text-green-700 "><i class="fa-solid fa-copy"></i></span>
                      </td>
                      <td className="py-3 px-4">
                        <span>{item.email}</span>
                        <span onClick={()=>copyText(item.email)} className="mx-2 hover:text-green-700 "><i class="fa-solid fa-copy"></i></span>
                      </td>
                      <td className="py-3 px-4">
                        <span>{item.password}</span>
                        <span onClick={()=>copyText(item.password)} className="mx-2 hover:text-green-700 "><i class="fa-solid fa-copy"></i></span>
                      </td>
                      <td className="py-3 px-4">

                        <button onClick={() => eidtpassword(item.id)} className=" text-white  font-bold m-2 ">
                          <lord-icon
                            src="https://cdn.lordicon.com/ghhwiltn.json"
                            trigger="hover"
                            colors="primary:#30e849,secondary:#30e849"
                            style={{ width: "30px", height: "30px" }}>
                          </lord-icon>
                        </button>
                        <button onClick={() => deletepassword(item.id)} className="text-white font-bold m-2">
                          <lord-icon
                            src="https://cdn.lordicon.com/drxwpfop.json"
                            trigger="hover"
                            colors="primary:#e83a30,secondary:#e83a30"
                            style={{ width: "30px", height: "30px" }}>
                          </lord-icon>
                        </button>
                      </td>
                    </tr>
                  )
                }
                )
              }


            </tbody>
          </table>
        </div>
      </div>










      <div className="absolute inset-0 -z-10 h-full w-full bg-white bg-[linear-gradient(to_right,#f0f0f0_1px,transparent_1px),linear-gradient(to_bottom,#f0f0f0_1px,transparent_1px)] bg-[size:6rem_4rem]"><div className="absolute bottom-0 left-0 right-0 top-0 bg-[radial-gradient(circle_500px_at_50%_200px,#c9ffcf,transparent)]"></div></div>
    </>
  )
}

export default App
