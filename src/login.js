import { useNavigate } from "react-router-dom"
import { useState } from "react"

export default function Login()
{

    const [username,setUserName]=useState('')
    const [password,setPassword]=useState('')
   const [message,setMessage]=useState('')
    const navigate=useNavigate()
    return(<div>
      
   <table>
       <tr>
           <td>
               Enter User Name 
           </td>
            <td>
                <input type='text'  onChange={(e)=>{
                    setUserName(e.target.value)
                }}/>
            </td>
       </tr>
        <tr>
            <td>
                Enter Password
            </td>
    <td>
        <input type='password' onChange={(e)=>{
            setPassword(e.target.value)
        }}/>
    </td>
  <tr>
       
       <td>
           <input type='button'  value="Login"
           
           onClick={()=>{

         if(username==="admin" && password==="password123")
         {
            sessionStorage.setItem("username",username)
            navigate('/main')
         }
         else{
            setMessage('invalid details')
         }


             
           }}
           
           
           
           
           />
       </td>
         <td>
            {message}
         </td>
       </tr>        


        </tr>
   </table>
    </div>)
}