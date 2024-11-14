import React from 'react';


const Weather = ({weatherData}) => {
    if(!weatherData || !weatherData.weather || !weatherData.main){
        return <div>weather data is not avaliable</div>
    }
  return (
    <div>
        {weatherData.weather ? (
            <div className='w-[400px] h-[300px] bg-gray-300 shadow-lg rounded-xl m-auto relative px-6 top-[10%]'>
                <div className='flex justify-between w-full '>
                    <div className="w-1/2 my-4 mx-auto flex justify-between items-center">
                        <div className='flex flex-col text-center justify-around h-full'>
                            <div className=''>
                                <p className='text-xl'>
                                    {weatherData.name}
                                    {weatherData.sys.country}
                                </p>
                                <p className='text-sm justify-end'>
                                    {weatherData.weather[0].description}
                                </p>
                            </div>
                            <div className='flex justify-center'>
                                <h1 className='text-6xl font-semibold'>
                                    {weatherData.main.temp.toFixed()} °C
                                </h1>
                            </div>
                        </div>
                    </div>
                    <div className='w-1/2 flex flex-col justify-between items-center'>
                        <div className='relative'>
                            <img src={`http://openweathermap.org/img/wn/${weatherData.weather[0].icon}@2x.png`}
                            className='w-[120px]' />
                        </div>
                        {weatherData.name !== undefined ? (
                          <div className='flex flex-col items-center gap-y-2 my-4 mx-auto text-xs'>
                            <div className='flex-justify-between gap-x-8'>
                                <p>Feels Like</p>
                                <p className='font-bold w-20'>
                                    {weatherData.main.feels_like} °C
                                </p>
                            </div>
                            <div className='flex-justify-between gap-x-8'>
                                <p>Humidity</p>
                                <p className='font-bold w-20'>
                                    {weatherData.main.humidity} %
                                </p>
                            </div>
                            <div className='flex-justify-between gap-x-8'>
                                <p>Wind Speed</p>
                                <p className='font-bold w-20'>
                                    {weatherData.main.wind_speed} KPH
                                </p>
                            </div>
                            <div className='flex-justify-between gap-x-8'>
                                <p>Pressure</p>
                                <p className='font-bold w-20'>
                                    {weatherData.main.pressure} hPa
                                </p>
                            </div>
                          </div>  
                        ):null}
                    </div>
                </div>
            </div>
        ): null}
    </div>
  )
}

export default Weather