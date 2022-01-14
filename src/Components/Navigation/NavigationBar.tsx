import React from 'react'
import { Link } from 'react-router-dom';

export default function NavigationBar() {
    return (
        <div>
            <Link to='/'> Home / </Link>
            <Link to='/Questions'> Questions </Link>
        </div>
    )
}
