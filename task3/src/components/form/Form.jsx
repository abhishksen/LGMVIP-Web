import React, { useState } from 'react'
import './form.css'

const Form = () => {

const [name, setName] = useState("");
const [email, setEmail] = useState("");
const [bio, setBio] = useState("");
const [img, setImg] = useState("");

const handleSubmit = (e) => {
  e.preventDefault();
  const profileData = { name, email, bio, img };
  localStorage.setItem("profileData", JSON.stringify(profileData));
  setName("");
  setEmail("");
  setBio("");
  setImg("")
};

const handleClear = (e) => {
  e.preventDefault();
  setName("");
  setEmail("");
  setBio("");
  setImg("")
};

const handleNameChange = (e) => {
  setName(e.target.value);
};

const handleEmailChange = (e) => {
  setEmail(e.target.value);
};

const handleBioChange = (e) => {
  setBio(e.target.value);
};

const handleImgChange = (e) => {
  setImg(e.target.value);
};

return (
  <div className='form'>
    <h3>Enter students details</h3>
    <form>
      <div className='input_box'>
        <label htmlFor="name">Name:</label>
        <input type="text" id="name" value={name} onChange={handleNameChange} />
      </div>
      <div className='input_box'>
        <label htmlFor="email">Email:</label>
        <input type="email" id="email" value={email} onChange={handleEmailChange} />
      </div>
      <div className='input_box'>
        <label htmlFor="bio">Bio:</label>
        <input type="text" id="bio" value={bio} onChange={handleBioChange} />
      </div>
      <div className='input_box'>
        <label htmlFor="image">Img Url:</label>
        <input type='text' id="img" value={img} onChange={handleImgChange} />
      </div>
      <button onClick={handleSubmit}>Save</button>
      <button onClick={handleClear} className='clear'>Clear</button>
    </form>
  </div>
);
}

export default Form;