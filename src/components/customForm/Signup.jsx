import React, { useState } from 'react'

const Signup = () => {

  // const [imageState,setImageState]=useState('');

  const [fromState, setFormState] = useState({
    fullName: '',
    roll: '',
    email: '',
    pwd: '',
    chpwd: '',
    img: '',
    error: {
      fullName: '',
      roll: '',
      email: '',
      pwd: '',
      chpwd: '',
      img: '',
    }
  });

  const FormHandler = (e) => {
    let { name, value } = e.target;

    // Error Handling
    let err = { ...fromState.error };

    switch (name) {
      case 'fullName': err.fullName = value.length < 5 ? "Minimun 5 Characters Required" : ""
        break;
      case 'roll': err.roll = value.length < 5 ? "Minimun 5 Numbers Rwquired" : ""
        break;
      case 'pwd':
        break;
      case 'chpwd': err.chpwd = value != fromState.pwd ? "Password Does Not Match" : ""
        break;
      default: console.log("Not Aplicable");
    }


    // console.log(name,value);
    // setFormState({ ...fromState, [name]: value })
    setFormState({ ...fromState, [name]: value, error: err })

  }

  const FormSubmit = (e) => {
    // Stop automatic browser refreshing
    e.preventDefault();

    let {error}=fromState;
    if (error.fullName=='' && error.roll=='' && error.chpwd=='') {
      console.log(fromState);
    }else{
      alert("Fill all Fields Properly");
    }


  }

  // Image File Handel
  const imgHandler = (e) => {
    // console.log(e.target.files[0]);
    // setImageState(e.target.files[0]);
    setFormState({ ...fromState, img: e.target.files[0] })
  }


  return (
    <div className="container card my-3 p-3 d-flex justify-content-center bg-dark" style={{ width: "500px", paddingTop: "20px" }}>
      <h1 className='text-white text-center'>SignUp <hr /></h1>
      <form style={{ width: "460px" }} className='text-white' onSubmit={FormSubmit}>
        <div className="mb-3">
          <label className="form-label">Name</label>
          <input
            type="text"
            className="form-control"
            required
            name='fullName'
            autoComplete='false'
            onChange={FormHandler} />
          <p className='text-danger text-end'>{fromState.error.fullName}</p>
        </div>
        <div className="mb-3">
          <label className="form-label">Roll</label>
          <input
            type="number"
            className="form-control"
            required
            name='roll'
            autoComplete='false'
            onChange={FormHandler} />
          <p className='text-danger text-end'>{fromState.error.roll}</p>
        </div>
        <div className="mb-3">
          <label className="form-label">Email address</label>
          <input
            type="email"
            className="form-control"
            required
            name='email'
            autoComplete='false'
            onChange={FormHandler} />
        </div>
        <div className="mb-3">
          <label className="form-label">Profile Image</label>
          <input
            type="file"
            className="form-control"
            name='img'
            onChange={imgHandler} />
        </div>
        <div className="mb-3">
          <label className="form-label">Password</label>
          <input
            type="password"
            className="form-control"
            required
            name='pwd'
            onChange={FormHandler} />
        </div>
        <div className="mb-3">
          <label className="form-label">Confirm Password</label>
          <input
            type="password"
            className="form-control"
            required
            name='chpwd'
            onChange={FormHandler} />
          <p className='text-danger text-end'>{fromState.error.chpwd}</p>
        </div>
        <button type="submit" className="btn btn-primary">Submit</button><span> | </span>
        <button type="reset" className="btn btn-warning">Reset</button>
      </form>
    </div>
  )
}

export default Signup