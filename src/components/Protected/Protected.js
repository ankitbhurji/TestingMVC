import { useState } from "react";
import { useEffect } from "react";
import { useNavigate } from "react-router-dom";


function Protected(props) {

    const navigate = useNavigate();
    const {Component} = props
    const [protect, setProtect] = useState()
    console.log(props);

    // useEffect(()=>{
    //     // if(true){
    //     //     navigate("/");
    //     // }
    // },[])

    return ( 
        <div>
            <Component />
        </div>
     );
}

export default Protected;