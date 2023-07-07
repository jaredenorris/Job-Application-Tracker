//Navigate from page to page

import React from 'react';
import { Link } from 'react-router-dom';


function Nav() {
  return (
    <nav className="App-nav">
        <Link to="/">Home</Link>
        <Link to="../GalleryPage">Gallery</Link>
        <Link to="../StaffPage">Staff</Link>
        <Link to="../OrderPage">Order</Link>
        <Link to="../LogPage">Log</Link>
        <Link to="../TopicsPage">Topics</Link>


    </nav>
  );
}

export default Nav;
