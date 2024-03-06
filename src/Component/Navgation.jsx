import React from 'react';
import { Link } from 'react-router-dom';

import './Navigation.css';

const Navgation = () => {
  return (
    <div>
        <nav className='navigation'>
            <li> <Link to="/"> Class 1</Link> </li>
            <li> <Link to="class2"> Class 2</Link> </li>
            <li> <Link to="class3"> Class 3</Link> </li>
            <li> <Link to="class4"> Class 4</Link> </li>
        </nav>
    </div>
  )
}

export default Navgation;