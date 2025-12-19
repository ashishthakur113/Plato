import React, { useContext, useEffect, useState } from 'react'
import { MdSearch } from "react-icons/md";
import './Navbar.css'
import { useLocation, useNavigate } from 'react-router-dom';
import { StoreContext } from '../../context/StoreContext';

export default function SearchBar() {

    const { searchTerm, setSearchTerm} = useContext(StoreContext);
    const [inputValue, setInputValue] = useState('')
    const navigate = useNavigate();
    const location = useLocation();

    useEffect(() => {
        if (location.pathname !== '/search') {
            setInputValue('')
        }
    }, [location.pathname])

    const handleKey = (e) => {
        if (e.key === "Enter" && inputValue.trim() !== "") {
            setSearchTerm(inputValue)
            localStorage.setItem('searchTerm', inputValue);
            navigate('/search')
        }
    }

    useEffect(() => {
        if (
            location.pathname === "/search" &&
            inputValue.trim() === ""
        ) {
            const timer = setTimeout(() => {
                setSearchTerm("");
                navigate("/");
            }, 2000);

            return () => clearTimeout(timer);
        }
    }, [inputValue, location.pathname, navigate, setSearchTerm]);


    return (
        <div className="navbar-search">
            <MdSearch className="search-icon" />
            <input
                type="text"
                placeholder="Search dishes"
                value={inputValue}
                onChange={(e) => setInputValue(e.target.value)}
                onKeyDown={handleKey}
            />
        </div>
    )
}
