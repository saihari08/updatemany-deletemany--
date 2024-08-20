import { useSelector } from 'react-redux'
import TopNavigation from './TopNavigation'
import { Link, useLocation, useNavigate } from 'react-router-dom'

function Dashboard() {
  
let navigate=useNavigate();
  let storeObj=useSelector((store)=>{
    return store;
  })

  let deleteProfile=async()=>{

    let dataToSend=new FormData();
    dataToSend.append("email",storeObj.loginDetails.email);

    let reqOption={
      method:"DELETE",
      body:dataToSend,
    };
    let JSONData=await fetch("http://localhost:2120/deleteProfile",reqOption);

  let JSOData=await JSONData.json();
  alert(JSOData.msg);

  if(JSOData.status=="success"){
 navigate("/")
  }

};
  
  return (
    <div className='dashboard'>
      <TopNavigation></TopNavigation>
      <h2>Welcome{storeObj.loginDetails.firstName}{" "}{storeObj.loginDetails.lastName}</h2>
      <h2>
      <button onClick={()=>{
        deleteProfile();
      }}> Delete Profile</button>
      </h2>
      <br></br>
     <img  src={`http://localhost:2120/${storeObj.loginDetails.profilePic}`}></img>
      </div>
  )
}

export default Dashboard
