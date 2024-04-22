import   { First, Second, Third }   from '../../assets/index'
import Carousel from 'react-multi-carousel'
import "react-multi-carousel/lib/styles.css";
import { useEffect, useState } from 'react'
import './auth.css'

export const OTP = () => {
  const responsive = {
    desktop: {
      breakpoint: { max: 2000, min: 0 },
      items: 1,
    },
  };

  const [otp, setOpt ] = useState([])
  const [timer, setTimer ] = useState(59) 

 

    const handleVerifyOtp = async (e) => {
      e.preventDefault()
      const newOtp = otp.join('')
      console.log('handle', newOtp)
      try {
        const response = await axios.post('url', {newOtp})
      } catch {
        
      }
    }

  return (
    <form onSubmit={handleVerifyOtp} className='main-wrap'>
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
        removeArrowOnDeviceType={["desktop", "tablet", "mobile"]}
      >
        <img className='login-img' src={First} alt='login image' />
        <img className='login-img' src={Third} alt='login image' />
        <img className='login-img' src={Second} alt='login image' />
      </Carousel>

      </div>

      <div className='login-content-wrap'>
      <p className='welcome-back-text'>Get it quick!</p>
      <p className='login-text'>Enter OTP</p>
      <p className='opt-text'>An OTP was sent to the email 
      the and to you phone or get an OTP directly from your mobile app
      </p>

      <div className='otp-fields-wrap'>
        <input 
        className='otp-fields' 
        type='text'
        maxLength={1} 
        value={otp[0]} 
        onChange={(e)=>handleOtpChange(e, 0)} 
        />
        <input 
        className='otp-fields' 
        type='text'
        maxLength={1} 
        value={otp[1]} 
        onChange={(e)=>handleOtpChange(e, 1)} 
        />
        <input 
        className='otp-fields' 
        type='text'
        maxLength={1} 
        value={otp[2]} 
        onChange={(e)=>handleOtpChange(e, 2)} 
        />
        <input 
        className='otp-fields' 
        type='text'
        maxLength={1} 
        value={otp[3]} 
        onChange={(e)=>handleOtpChange(e, 3)} 
        />
        <input 
        className='otp-fields' 
        type='text'
        maxLength={1} 
        value={otp[4]} 
        onChange={(e)=>handleOtpChange(e, 4)} 
        />
        <input 
        className='otp-fields' 
        type='text' 
        maxLength={1} 
        value={otp[5]} 
        onChange={(e)=>handleOtpChange(e, 5)} 
        />
      </div>

      <div className='time-text-wrap'>
        {timer > 0 ? <p className='timer-text'>0:{timer}</p> : <p className='timer-text' >Time's up!</p> }
      </div>

      <button 
      className='login-button' 
      type='submit' 
      // disabled={timer === 0} 
      disabled
      >Continue</button>
      <p className='register-tag'>Didnt get the code? <span>Resend</span></p>
    </div>

    </form>
  )
}

export default OTP












  // const handleOtpChange = (e, index) => {
  //   const x = otp
  //   x[index] = e.target.value;
  //   setOpt(x)
  //   console.log('otp',otp.join(''))
  // }


 // useEffect(() => {
  //   console.log('999')
  //   const handleTimer = () => {
  //     setInterval(()=> { setTimer(prevState => prevState - 1)}, 1000)
  //   }
  //   handleTimer()
  // }, [])