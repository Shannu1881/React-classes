import React, { useEffect, useState } from 'react'

const Class2 = () => {

  const [username, setUsername] = useState('');
  const [mobile, setMobile] = useState();
  const [password, setPassword] = useState("");

  const [userList, setUserList] = useState([]);

  const sendData = (e) =>{
    e.preventDefault();
    console.log(username);
    console.log(mobile);
    console.log(password);
  }

  const getData = async () =>{
   let res = await fetch('https://jsonplaceholder.typicode.com/users');
   let data = await res.json();
   console.log(data);
   setUserList(data);
  }

  useEffect(()=>{
    getData();
  })

  return (
    <div>
      <h2> Login Page</h2>
      <div>
        <form action="">
          <label htmlFor="">Username</label> <br />
          <input type="text" name="" id="" onChange={(obj)=>{ setUsername(obj.target.value) }} /> <br />
          <label htmlFor="">Mobile</label> <br />
          <input type="number" name="" id="" onChange={(e)=>{ setMobile(e.target.value) }} /> <br />
          <label htmlFor="">Password</label> <br />
          <input type="password" name="" id="" onChange={(e)=>{ setPassword(e.target.value) }}/> <br /><br />
          <button onClick={sendData}> Submit </button>
        </form>
      </div>

      <div>
         <table border={1} style={{borderCollapse:'collapse', width:'60%'}}>
          <thead>
            <tr>
              <th>Sno</th>
              <th>Name</th>
              <th>Username</th>
              <th>Email</th>
              <th>Address</th>
            </tr>
          </thead>
          <tbody>
            {
              userList.map((item, index)=>{
                return(
                  <tr key={index} >
                    <td> {item.id} </td>
                    <td> {item.name} </td>
                    <td> {item.username} </td>
                    <td> {item.email} </td>
                    <td> {item.address.city} </td>
                  </tr>
                )
              })
            }
          </tbody>
         </table>
      </div>
    </div>
  )
}

export default Class2