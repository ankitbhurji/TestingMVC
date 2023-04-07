import { useState } from 'react';
import styles from './OtpGenerator.module.css';
import { useNavigate } from "react-router-dom";
import Quries from '../../Data/Quries';
import sendOtpApi from '../../api/sendOtpApi';

function OtpGenerator(props) {

    const navigate = useNavigate();
    const [inputFields, setInputFields] = useState({
        userEmail:'',
        isUserEmailBlank:false,
    })

    async function sendOtp(){
        if(!(inputFields.userEmail==="")){
            var digits = '0123456789'; 
            let OTP = '';
            for (let i = 0; i < 6; i++ ) {
                OTP += digits[Math.floor(Math.random()*10)];
            }
            let quries = new Quries

            const userType = 'ADMIN'
            const user = await quries.findUser(inputFields.userEmail, userType)
            const [disUser] = user
            
            if(user.length>0){
                if(disUser.userType==='ADMIN'){
                    try{
                        await quries.updateUserOtp(user, OTP)
                        props.UserData({email:inputFields.userEmail})
                        navigate("/login");
                        console.log('OTP Updated');
                    }catch(error){
                        console.log(error);
                    }   
                }else{
                    alert('opps...! You are not an admin')
                }
            }else{
                alert('user not found')
            }
        }else{
            setInputFields({
                ...inputFields,
                isUserEmailBlank:true
            })
        }


    }













    async function updateOtp(otp){
        // if(usersData){
        //     const user = usersData.find((data)=>{
        //         return data.email===inputFields.userEmail
        //     })
        //     if(user){
        //         if(user.userType==null || !(user.userType=='ADMIN')){
        //             alert('Opps...! you are not an admin')
        //         }else{
        //             try{
        //                 // const updateAdmin = await DataStore.save(
        //                 //     UserModel.copyOf(user, (update)=>{
        //                 //         update.otp = +otp
        //                 //     })
        //                 // )
        //                 // console.log(otp, updateAdmin);
        //                 await sendOtpApi(inputFields.userEmail, otp)
        //                 navigate("/login");
        //             }catch(error){
        //                 console.log(error);
        //             }
        //         }
        //     }else{
        //         alert('please enter valid  email.')
        //     }
        // }else{
        //     alert('admin fields not available or something went wrong')
        // }  

    }
    

    return ( 
        <div className={styles.container}>
            <div className={styles.wrapper}>
                <div className={styles.input_container}>
                    <div className={styles.heading}>
                        Enter Your Email Address
                    </div>
                    <div className={styles.username}>
                        <input
                        onChange={(e)=>{setInputFields({
                            ...inputFields, 
                            userEmail:e.target.value,
                            isUserEmailBlank:false
                            })}}
                        value={inputFields.userEmail}
                        type="email"
                        placeholder='USER EMAIL' 
                        />
                    </div>
                    <div>
                        <button 
                        onClick={sendOtp} 
                        className={styles.login_button}
                        >SEND OTP
                        </button>
                    </div>
                    <div className={styles.warning}>
                        {
                        inputFields.isUserEmailBlank?'PLEASE ENTER EMAIL !'
                        :
                        ''
                        }
                    </div>
                </div>
            </div>
        </div>
    );
}

export default OtpGenerator;