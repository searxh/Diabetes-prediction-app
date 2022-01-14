import React from 'react'
import { Link } from 'react-router-dom';

export default function NavigationBar() {
    return (
        <div className='bg-amber-400 w-full h-10 py-2 px-2 rounded'>
            <Link to='/'> Home / </Link>
            <Link to='/Questions'> Questions </Link>
        </div>
    )
}
