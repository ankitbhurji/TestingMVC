import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import Quries from '../../Data/Quries';

function HomePage() {
    const navigate = useNavigate();

    async function getToken(){
        const token = localStorage.getItem('token')
        let quries = new Quries
        const userEmail = ''
        const userType = ''
        const [user] = await quries.findUser(userEmail, userType, token)
        console.log(user);

        if(!user){
            navigate('/')
        }else{
            if(!(user.id==token)){
                navigate('/')
            }
        }

    }

    function setToken(){
        localStorage.setItem("token", '');
    }

    function logout(){
        setToken()
        navigate('/')
    }

    useEffect(()=>{
        getToken()
    },[])


    return ( 
        <div>
            <div>
                <h1>home page</h1>
            </div>
            <div>
                <button onClick={logout}>logout</button>
            </div>
        </div>
     );
}

export default HomePage;