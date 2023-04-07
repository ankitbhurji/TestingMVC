import { useEffect, useState } from 'react';
import styles from './OtpValidator.module.css';
import { BsEyeFill, BsEyeSlashFill } from 'react-icons/bs';
import { useNavigate } from "react-router-dom";
import Quries from '../../Data/Quries';

function OtpValidator(props) {

    const navigate = useNavigate();
    const [password, setPassword] = useState({
        isPasswordHash: true,
    })
    const [inputFields, setInputFields] = useState({
        password:'',
        isPasswordBlank:false
    })

    function showPassword(){
        setPassword({
            ...password,
            isPasswordHash: !password.isPasswordHash
        })
    }

    function setToken(adminId){
        localStorage.setItem("token", adminId);
    }

    async function login(){
        if(!(inputFields.password==='')){
            try{
                let quries = new Quries
                
                if(props.UserData.email){
                    const [user] = await quries.findUser(props.UserData.email)
                    if(user.email===props.UserData.email){
                        if(user.otp===+inputFields.password){
                            setToken(user.id)
                            navigate('/home')
                        }else{
                            alert('your otp is incorrect!')
                        }
                        setInputFields({
                            ...inputFields,
                            password: ''
                        })
                    }
                }
            }catch(error){
                console.log(error);
            }
        }else{
            setInputFields({
                ...inputFields,
                isPasswordBlank:true
            })
        }
    }

    
    useEffect(()=>{
        if(!props.UserData){
            navigate('/')
        }
    },[])

    return ( 
        <div className={styles.container}>
            <div className={styles.wrapper}>
                <div className={styles.input_container}>
                    <div className={styles.email_heading}>
                        Otp has been sent on {props.UserData? props.UserData.email: ''}
                    </div>
                    <div className={styles.heading}>
                        Please login to your account    
                    </div>
                    <div className={styles.password}>
                        <input
                         onChange={(e)=>{setInputFields({
                            ...inputFields, 
                            password:e.target.value,
                            isPasswordBlank:false
                            })}}
                         value={inputFields.password} 
                         type={password.isPasswordHash?'password':'tel'} 
                         maxLength='6'
                         placeholder='ENTER OTP'
                        />
                        <div onClick={showPassword} className={styles.eye_icon}>
                            {
                            password.isPasswordHash
                            ?
                            <BsEyeSlashFill />
                            :
                            <BsEyeFill />
                            }
                        </div>
                    </div>
                    <div>
                        <button 
                        onClick={login} 
                        className={styles.login_button}
                        >LOG IN
                        </button>
                    </div>
                    <div className={styles.warning}>
                        {
                        inputFields.isPasswordBlank?'PLEASE ENTER OTP !'
                        :
                        ''
                        }
                    </div>
                </div>
            </div>
        </div>
    );
}

export default OtpValidator;