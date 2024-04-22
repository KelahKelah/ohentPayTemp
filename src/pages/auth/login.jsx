import { First, Second, Third }  from '../../assets/index'
import Carousel from 'react-multi-carousel'
import "react-multi-carousel/lib/styles.css";
import { useState } from 'react'
// import { OTP } from './pages/otpPage'
import './auth.css'

export const Login = () => {
  const [loginData, setLoginData] = useState({email: '', password: ''})
  const [error, setError ] = useState(false)

  const handleLoginChage = (e) => {
    setLoginData((prevState) => ({...prevState, [e.target.name] : e.target.value}))
    console.log('000', loginData)
  }


const responsive = {
  desktop: {
    breakpoint: { max: 2000, min: 0 },
    items: 1,
  },
};

  return (
    <div className='main-wrap'>
      <div className='image-wrap'>
        <Carousel
          swipeable={true}
          draggable={true}
          showDots={false}
          responsive={responsive}
          infinite={true}
          autoPlay={true}
          autoPlaySpeed={2000}
          keyBoardControl={true}
          customTransition="all .5"
          transitionDuration={500}
          containerClass="carousel-container"
          removeArrowOnDeviceType={["desktop", "tablet", "mobile"]} >
          <img className='login-img' src={First} alt='login image' />
          <img className='login-img' src={Third} alt='login image' />
          <img className='login-img' src={Second} alt='login image' />
        </Carousel>
      </div>

      <form className='login-content-wrap' onSubmit={handleSubmit}>
        <div className='banner'>Please ensure you're on <span>https://app.ohentpay.com</span></div>
        <p className='welcome-back-text'>Welcome Back!</p>
        <p className='login-text'>Login to your <span>OhentPay</span> Account</p>

        <p className='input-label'>Email address</p>
        <input 
        className='input-field' 
        type='text' 
        placeholder='Enter your email here'
        name='email'
        value={setLoginData.email}
        onChange={handleLoginChage} 
        />
        {error ? <p className='validation-text'>Email is incorrect</p> : <></> }
        <p className='input-label'>Password</p>

        <input 
        className='input-field' 
        type='type' 
        placeholder='Password'
        name='password'
        value={setLoginData.password}
        onChange={handleLoginChage} 
         />

        {error ? <p className='validation-text'>Password is incorrect</p> : <></> }

        <button className='login-button' type='submit'>Login</button>
        <p className='tc-text'>By logging in, you agree to our <span>Terms of Service</span> and <span>Privacy Policy</span></p>

        <p className='register-tag'>Dont have an account? <span>Click here to register </span></p>
      </form>

    </div>
  )
}






  // const handleSubmit = (e) => {
  //   console.log('-----')
  //   e.preventDefault()
  //   if(Response.data) {
  //     console.log('submitted Successfully')
  //   } else {
  //     setError(true)
  //   }
  //   console.log()
  // }
