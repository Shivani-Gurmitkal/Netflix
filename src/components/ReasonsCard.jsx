import React from 'react'

function ReasonsCard({title,desc,img}) {
  return (
    <div>

      <div className="w-[250px] h-[320px] bg-gradient-to-b from-[#0D1021] to-[#391945] text-white p-6 rounded-lg shadow-lg">
        <h2 className='text-white text-2xl font-bold'>{title}</h2>
        <p className='text-gray-300 text-[15px] mt-5'>{desc}</p>
        <p>{img}</p>
      </div>

    </div>
  )
}

export default ReasonsCard

