import logo from './logo.svg';
import './App.css';
import {Outlet,Link} from 'react-router-dom'
function App() {
  const username=sessionStorage.getItem("username")
  if(username!=null)
  {
  return (
    <div className="App">
      <h3>{username}</h3>
    <h1>Application for Coffee App</h1>
    <nav>
   <Link to="/main/home">Home</Link>|
   <Link to="/main/about">About Us</Link>|
   <Link to="/main/contact">Contact Us</Link>
    </nav>
 <div style={{backgroundColor:"aqua",width:"1000px",height:"300px"}}>
   <table style={{margin:"25px",padding:"10px"}}><tr><td>
     <nav>
       <Link to="/main/view/0">Black Cofee</Link><br/>
       <Link to="/main/view/1">Espresso</Link><br/>
       <Link to="/main/view/2">Latte</Link><br/>
       <Link to="/main/view/3">Colombo</Link><br/>
     </nav>
     </td><td><Outlet/></td></tr></table>
 </div>


    </div>
  );
  }
  else
  {
    return <h1>You have to login first</h1>
  }
}

export default App;
