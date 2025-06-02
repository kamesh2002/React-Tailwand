import React,{useState} from "react";
import {v4 as uuid} from 'uuid';


const App = () =>{
  const[users,setUsers] = useState([]);

  const [buttonState, setButtonState] = useState("add");

  const [userInfo, setUsersInfo] = useState({
    id:uuid(),
    name :"",
    age :"",
    email: "",
    phone:"",
  });
  const handleChange = (e) =>{
    const {name,value} = e.target;
    setUsersInfo((currInfo) =>{
      return{
        ...currInfo,
        [name]: value,
      }
    })
  }
  const addData =() => {
    setUsers((currUsers) => [...currUsers, userInfo]);
    setUsersInfo({
      id:uuid(),
      name: "",
      age: "",
      email: "",
      phone: "",
    });
  };

  const deleteData = (id) => {
    setUsers((currUsers) =>{
      return currUsers.filter((user) =>{
        return user.id !== id;
      });
    });

  };

  const startEditing = (user) =>{
    setUsersInfo(user);
    setButtonState("edit");
  };
  const cancelEditing =() =>{
    setUsersInfo({
       id:uuid(),
      name: "",
      age: "",
      email: "",
      phone: "",

    });
    setButtonState("add");
  };

  const updateData = () =>{
    setUsers((currUsers) => {
      return currUsers.map((user) => {
        if(user.id === userInfo.id) {
          return userInfo;
        }
        return user;
      });
    });
    cancelEditing();
  }

  return(
    <div className=" bg-white-500 ">
      <div className="bg-gray-200 mt-10 mx-auto w-max p-4 rounded-2xl">
        <input type="text" placeholder="Enter your name" 
        value={userInfo.name} name="name" onChange={handleChange} className="text-2xl placeholder-grey-200 placeholder-opacity-75 placeholder-rounded pt-1 pb-1" />
        <br />
        <input type="number" placeholder="Enter your age"
        value={userInfo.age} name="age" onChange={handleChange} className="text-2xl placeholder-grey-200 placeholder-opacity-75 placeholder-rounded pt-1 pb-1"/>
        <br />
        <input type="email" placeholder="Enter your email" 
        value={userInfo.email} name='email' onChange={handleChange}className="text-2xl placeholder-grey-200 placeholder-opacity-75 placeholder-rounded pt-1 pb-1" />
        <br />
        <input type="number" placeholder="Enter your phone" 
        value={userInfo.phone} name='phone' onChange={handleChange}className="text-2xl placeholder-grey-200 placeholder-opacity-75 placeholder-rounded pt-1 pb-1" />

        <br />

        {
          buttonState === "add" ?  
          (<button onClick={addData} className="bg-green-500 hover:bg-green-600 text-white font-semibold py-1 px-4 rounded shadow" >Add</button>

           )
          :  (
            <div className="">
              <button onClick={updateData} className="bg-green-500 hover:bg-green-600 text-white font-semibold py-1 px-4 rounded shadow" >Update</button>
              <button onClick={cancelEditing} className="bg-red-500 hover:bg-green-600 text-white font-semibold py-1 px-4 rounded shadow">Cancel</button>
              </div>


          ) 
        }
       
      </div>

      <div className="mx-auto w-max m-2">
        <table
    className="border-separate border border-gray-300"
    style={{ borderSpacing: '2px' }} // tiny 2px gap between cells
  >
          <thead >
            <tr className="p-10">
              <th className="bg-white border border-gray-300 px-4 py-2 text-left">Name</th>
              <th className="bg-white border border-gray-300 px-4 py-2 text-left">Age</th>
              <th className="bg-white border border-gray-300 px-4 py-2 text-left">Email</th>
              <th className="bg-white border border-gray-300 px-4 py-2 text-left">Phone</th>
              <th className="bg-white border border-gray-300 px-4 py-2 text-left">Action</th>
            </tr>
          </thead>
          <tbody> 
            {users.map((user,index) =>{
              return (
                <tr key={index}>
                  <td className="bg-white border border-gray-300 px-4 py-2">{user.name}</td>
                  <td className="bg-white border border-gray-300 px-4 py-2">{user.age}</td>
                  <td className="bg-white border border-gray-300 px-4 py-2"  >{user.email}</td>
                  <td className="bg-white border border-gray-300 px-4 py-2">{user.phone}</td>
                  <td className="bg-white border border-gray-300 px-4 py-2">
                    <button onClick={() => startEditing(user)} className="bg-green-500 hover:bg-green-600 text-white font-semibold py-1 px-4 rounded shadow" >Edit</button>
                    <button onClick={() => deleteData(user.id)}  className="bg-red-500 hover:bg-red-600 text-white font-semibold py-1 px-4 rounded shadow">Delete</button>
                  </td>
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default App;