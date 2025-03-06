import React from 'react'

function MainCard({img,title}) {
  return (
    <div>

        <div className="w-[200px] h-[300px] cursor-pointer">
            <img src={img} alt={title} className='object-cover rounded-lg'/>
        </div>

    </div>
  )
}

export default MainCard
