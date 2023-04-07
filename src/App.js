import { useState } from "react";
import OtpGenerator from "./components/OtpGenerator/OptGenerator";
import OtpValidator from "./components/OtpValidator/OtpValidator";
import { Routes, Route } from "react-router-dom";
import Protected from "./components/Protected/Protected";
import HomePage from "./components/HomePage/HomePage";


function App() {

  const [userData, setUserData] = useState()


  return (
    <div>
    <Routes>
      <Route path="/" element={<OtpGenerator UserData={setUserData} />} />
      <Route path="/login" element={<OtpValidator UserData={userData} />} />
      <Route path="/home" element={<HomePage />} />

    {/* <Route path="/" element={<Protected Component={OtpGenerator} page='home'/>} /> */}
    {/* <Route path="/login" element={<Protected Components={OtpValidator} />} />   */}
    </Routes>
    </div>
  );
}

export default App;
