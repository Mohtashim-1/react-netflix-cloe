import React from 'react'
import { Link } from 'react-router-dom'
import logo from '../img/logo.png'
import './Header.scss'
import { FaSearch } from 'react-icons/fa'
const Header = () => {
  return (
    <nav className="header">
      <img src={logo} alt="logo" />
      <div>
        <Link to="/TvShows">Tv Shows</Link>
        <Link to="/Movies">Movies</Link>
        <Link to="/RecentlyAdded">Recently Added</Link>
        <Link to="/MyList">My List</Link>
      </div>
      <FaSearch />
    </nav>
  )
}

export default Header
