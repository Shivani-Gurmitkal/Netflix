import React, { useState } from 'react'

let ShowContent = ()=>(
  <svg xmlns="http://www.w3.org/2000/svg" width="36" height="36" fill="currentColor" class="bi bi-plus" viewBox="0 0 16 16">
  <path d="M8 4a.5.5 0 0 1 .5.5v3h3a.5.5 0 0 1 0 1h-3v3a.5.5 0 0 1-1 0v-3h-3a.5.5 0 0 1 0-1h3v-3A.5.5 0 0 1 8 4"/>
</svg>
);

let HideContent = ()=>(
  <svg xmlns="http://www.w3.org/2000/svg" width="36" height="36" fill="currentColor" class="bi bi-x" viewBox="0 0 16 16">
  <path d="M4.646 4.646a.5.5 0 0 1 .708 0L8 7.293l2.646-2.647a.5.5 0 0 1 .708.708L8.707 8l2.647 2.646a.5.5 0 0 1-.708.708L8 8.707l-2.646 2.647a.5.5 0 0 1-.708-.708L7.293 8 4.646 5.354a.5.5 0 0 1 0-.708"/>
</svg>
);


function ContentCard({question,answer}) {
  let [isOpen, setIsOpen] = useState(false);

  function faqHandler(){
    setIsOpen((prev)=>!prev)
  }

  return (
    <div>

      <div className="mt-4 w-full">
      <button onClick={faqHandler} className="flex items-center justify-between w-full text-white bg-[#2d2d2d] hover:bg-[#414141] p-5 font-semibold text-2xl">{question}<span>{isOpen ? <HideContent /> : <ShowContent />}</span></button>
      <div className={`overflow-hidden transition-all duration-300 ${isOpen ? "max-h-40 opacity-100 p-5 font-medium text-2xl bg-[#2d2d2d] text-white mt-[1px]" : "max-h-0 opacity-0"}`}>{answer}</div>
      </div>

    </div>
  )
}

export default ContentCard;
