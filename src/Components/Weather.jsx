import React, { useEffect, useRef, useState } from 'react'
import { IoSearch } from "react-icons/io5";

const Weather = () => {
  const inputRef = useRef()
const [weatherData, setWeatherData] = useState(false)
  const search = async(city)=>{
  try {
    const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&units=metric&appid=${import.meta.env.VITE_APP_ID}`

    const response = await fetch(url)
    const data = await response.json()
    console.log(data)
    console.log(data.name)

    setWeatherData({
      humidity:data.main.humidity,
      windSpeed:data.wind.speed,
      temperature: Math.floor(data.main.temp),
      location:data.name,

    })
  } catch (error) {
    console.log(error);
    
  }
  }

  useEffect(()=>{
    search()
  },[])
  return (
    <>
      <div className='max-w-screen-2xl container mx-auto flex flex-col items-center bg-slate-500 h-screen'>
        <div className='w-96 bg-white
           mt-3 p-6 broder-[2px] border-rose-500 rounded-xl'>
          <h1 className='w-fullm-4 text-center text-4xl font-bold'>Wheather app</h1> 
          <hr className='w-full' />
          <div className='flex justify-center m-3 space-x-3'>
            <input ref={inputRef} className=' bg-slate-200 px-3 py-2 rounded-full w-[80%] broder-[2px] broder-black' type="text" placeholder='Enter your city name' />
            <IoSearch onClick={()=>search(inputRef.current.value)} className='text-4xl rounded-full bg-red-400 text-white hover:bg-red-200' />
          </div>

          <div className='flex justify-center'>
            <img className='h-[150px] w-full' src="https://cdn.pixabay.com/photo/2020/02/04/03/50/sky-4817252_1280.jpg" alt="" />
          </div>
          <p className='flex justify-center text-4xl'>{weatherData.temperature}°C</p>
          <p className='flex justify-center text-xl'>{weatherData.location}</p>

          <div className='flex justify-between'>
            <div className='flex space-x-2'>
              <img className='w-[20px] h-[20px]' src="data:image/png;base64,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" alt="" />
              <div className='flex flex-col'>
                <p className='text-2xl font-sm'>{weatherData.humidity} %</p>
              <p className='text-2xl font-semibold'>Humidity</p> 
              </div>
            </div>
            <div className='flex space-x-2'>
              <img className='w-[20px] h-[20px]' src="data:image/png;base64,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" alt="" />
              <div className='flex flex-col'>
                <p className='text-2xl font-sm'>{weatherData.windSpeed} km/h</p>
              <p className='text-2xl font-semibold'>Wind speed</p> 
              </div>
            </div>
          </div>

        </div>
      </div>
    </>
  )
}

export default Weather