import "./App.css";
import axios from "axios";
import React, { useState } from "react";
import Image from './images/bg.jpg'

function App() {
  let [data, setdata] = useState();
  let [newentry, setentry] = useState({
    location: {
      name: "",
    region:"",
    country:'',  
    lat:'',
    
  },current:{
    temp_c:'',
    humidity: '',
icon:''


  },
  
  
  });
  const Fc = () => {
    setdata([newentry, ...data]);
    console.log(data);
  };
  const handlechange = (event) => {
    setdata(([event.target.name] = event.target.value));

    console.log(event.target.value);
  };

  const abc = async (e) => {
    e.preventDefault();

    const api = await axios.get(
      `http://api.weatherapi.com/v1/current.json?key=e4e23bf29ee941efa7674348220108 &q=${data}&aqi=yes`
    );
    setentry(api.data);

    console.log(newentry);
    
  };
   
      
  return (
    <React.Fragment>
      <div>
        <div className="image_container"> 
<img src={Image}></img>
</div>  
 <div className="container">
      <input type="text" name="data" onChange={handlechange}></input>
      <button onClick={abc}>Search</button>
     </div>
 <section className="value">         <ul className="list">
        <li>{data}</li>
        
      </ul>
      </section>
      <section className="data">
      <ul className="second_list">
        <li> {newentry.location.name ? newentry.location.name : ""}</li>
        <li> region  {newentry.location.name ? newentry.location.region : ""}</li>
 
 
        <li>country  {newentry.location.country ? newentry.location.country : ""}</li>
 
        <li> lat  {newentry.location.region ?  newentry.location.lat : ""}</li>
 
        
        <li >temp C {newentry.location.region ? newentry.current.temp_c  : ""}</li>
        <li > humidity {newentry.location.region ? newentry.current.humidity  : ""}</li>
      
            </ul>
      </section>
      </div>
    </React.Fragment>
  );
}

export default App;
