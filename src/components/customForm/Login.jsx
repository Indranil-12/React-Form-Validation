import React from 'react'

const Login = () => {
  return (
    <div className="container card my-3 p-3 d-flex justify-content-center bg-dark" style={{width:"500px", paddingTop:"20px"}}>
      <h1 className='text-white text-center'>Log in <hr /></h1>
      <form style={{width: "450px"}} className='text-white'>
        <div className="mb-3">
          <label className="form-label">Email address</label>
          <input type="email" className="form-control" name='email'/>
        </div>
        <div className="mb-3">
          <label className="form-label">Password</label>
          <input type="password" className="form-control" name='pwd'/>
        </div>
        <button type="submit" className="btn btn-primary">Submit</button>
      </form>
    </div>
  )
}

export default Login