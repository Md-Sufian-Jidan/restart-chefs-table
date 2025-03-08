const Header = () => {
    return (
        <div className="navbar my-5">
            <div className="navbar-start">
                <div className="dropdown">
                    <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"> <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /> </svg>
                    </div>
                    <ul
                        tabIndex={0}
                        className="menu menu-sm dropdown-content bg-base-100 rounded-box z-1 mt-3 w-52 p-2 shadow">
                        <li><a className="text-base text-[#150B2BB3]">Home</a></li>
                        <li><a className="text-base text-[#150B2BB3]">Recipes</a></li>
                        <li><a className="text-base text-[#150B2BB3]">About</a></li>
                        <li><a className="text-base text-[#150B2BB3]">Search</a></li>
                    </ul>
                </div>
                <a className="md:text-3xl text-base font-bold text-[#150B2B]">Recipe Calories</a>
            </div>
            <div className="navbar-center hidden lg:flex">
                <ul className="menu menu-horizontal px-1">
                    <li><a className="text-base text-[#150B2BB3]">Home</a></li>
                    <li><a className="text-base text-[#150B2BB3]">Recipes</a></li>
                    <li><a className="text-base text-[#150B2BB3]">About</a></li>
                    <li><a className="text-base text-[#150B2BB3]">Search</a></li>
                </ul>
            </div>
            <div className="navbar-end">
                <label className="input w-[260px] rounded-full mr-2">
                    <svg className="h-[1em] opacity-50" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><g strokeLinejoin="round" strokeLinecap="round" strokeWidth="2.5" fill="none" stroke="currentColor"><circle cx="11" cy="11" r="8"></circle><path d="m21 21-4.3-4.3"></path></g></svg>
                    <input type="search" className="grow" placeholder="Search" />
                </label>
                <div className="avatar">
                    <div className="w-10 rounded-full">
                        <img src="https://img.daisyui.com/images/stock/photo-1534528741775-53994a69daeb.webp" />
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Header;