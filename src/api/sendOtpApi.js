import axios from "axios";

async function sendOtpApi(email, otp) {
    console.log(email, otp);

    // const payload = {
    //     email:email,
    //     otp:otp
    // }
    // const postData = await axios({
    //     method: 'post',
    //     url: 'https://allauthor.com/nj/sendemail.php',
    //     data: payload, 
    // })
    // return postData;
}

export default sendOtpApi;