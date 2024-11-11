import { Link } from "react-router-dom";


function NavBar(){
    return (
        <>
        <div className="bg w-full flex items-center  justify-between absolute top-0  text-white">
            <div className="flex items-center gap-10">
            <img src="src\assets\Netflix-Logo.png" className="w-[100px] ml-10" alt="" />
            <div className="flex items-center gap-5 font-semibold text-sm">
                <p>Home</p>
                <p className="text-[#b8b8b8] hover:text-neutral-400 hover:cursor-pointer">TV Shows</p>
                <Link to="/movies"><p className="text-[#b8b8b8] hover:text-neutral-400">Movies</p></Link>
                <p className="text-[#b8b8b8] hover:text-neutral-400 hover:cursor-pointer">New & Popular</p>
                <p className="text-[#b8b8b8] hover:text-neutral-400 hover:cursor-pointer">My List</p>
                <p className="text-[#b8b8b8] hover:text-neutral-400 hover:cursor-pointer">Browse by Languages</p>
            </div>
            </div>

            <div className="flex items-center gap-5 mr-28">
            <svg xmlns="http://www.w3.org/2000/svg" width="22" height="22" fill="currentColor" class="bi bi-search" viewBox="0 0 16 16">
                <path d="M11.742 10.344a6.5 6.5 0 1 0-1.397 1.398h-.001q.044.06.098.115l3.85 3.85a1 1 0 0 0 1.415-1.414l-3.85-3.85a1 1 0 0 0-.115-.1zM12 6.5a5.5 5.5 0 1 1-11 0 5.5 5.5 0 0 1 11 0"/>
            </svg>
            <p>Children</p>
            <svg xmlns="http://www.w3.org/2000/svg" width="22" height="22" fill="currentColor" class="bi bi-bell" viewBox="0 0 16 16">
                <path d="M8 16a2 2 0 0 0 2-2H6a2 2 0 0 0 2 2M8 1.918l-.797.161A4 4 0 0 0 4 6c0 .628-.134 2.197-.459 3.742-.16.767-.376 1.566-.663 2.258h10.244c-.287-.692-.502-1.49-.663-2.258C12.134 8.197 12 6.628 12 6a4 4 0 0 0-3.203-3.92zM14.22 12c.223.447.481.801.78 1H1c.299-.199.557-.553.78-1C2.68 10.2 3 6.88 3 6c0-2.42 1.72-4.44 4.005-4.901a1 1 0 1 1 1.99 0A5 5 0 0 1 13 6c0 .88.32 4.2 1.22 6"/>
            </svg>
            </div>
        </div>
        
        </>
    )
}

export default NavBar;