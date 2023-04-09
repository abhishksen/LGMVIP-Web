import React, { useEffect, useState } from 'react'
import './result.css'

const Result = () => {

  const [profileData, setProfileData] = useState([]);

  useEffect(() => {
    const storedProfileData = JSON.parse(localStorage.getItem("profileData"));
    setProfileData(storedProfileData);
  }, []);

  if (!profileData) {
    return <div>No registered student found !</div>;
  }

  return (
    <>
      <div className='result'>
      <h3>Registered Students Details</h3>
          <img src={profileData.img} alt="img" />
          <p>Name: {profileData.name}</p>
          <p>Email: {profileData.email}</p>
          <p>Bio: {profileData.bio}</p>
      </div>
    </>
  )
}

export default Result
