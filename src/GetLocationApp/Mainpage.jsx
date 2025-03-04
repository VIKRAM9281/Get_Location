import { useState } from "react";
import "./mainpage.css"
const MainPage=()=>{
const [address,setAddress]=useState("");
    const getLocation=()=>{
        navigator.geolocation.getCurrentPosition((pos)=>{
            if(pos){
                fetchLocation(pos.coords.latitude,pos.coords.longitude);
            }else{
                console.log("Location Not Found")
            }
        })
        
    }
        const fetchLocation = async (latitude,longitude) => {
            try {
              const response = await fetch(`https://nominatim.openstreetmap.org/reverse?format=json&lat=${latitude}&lon=${longitude}`);
              const data = await response.json();
              console.log(data)
              setAddress(data);
            } catch (error) {
              console.error("Error fetching location:", error);
            }
          };
    return(
        <>
        {/* <div className="heading">Get Your Current Location</div> */}
        <div className="container">
            <div className="row">
                {address==="" && <div className="col-2">
                <button className="btn btn-primary" onClick={getLocation}>Get Your Location</button>
                </div>}
                <div className={`${address===""? `col-10`:`col-12`}`} >
                    {address!=="" && <table border={1} className="table table-bordered">
                        <thead>
                            <tr>
                            <th>Address</th>
                            <th>City</th>
                            <th>State</th>
                            <th>State District</th>
                            <th>Country</th>
                            <th>Postal Code</th>
                            </tr>
                        </thead>
                        <tbody>
                            {address && <tr>
                            <th>{address?.address.town}</th>
                            <th>{address?.address.city}</th>
                            <th>{address?.address.state}</th>
                            <th>{address?.address.state_district} </th>
                            <th>{address?.address.country}</th>
                            <th>{address?.address.postcode}</th>
                            </tr>}
                        </tbody>
                    </table>}
                </div>
            </div>
        </div>
        </>
    )
}
export default MainPage;