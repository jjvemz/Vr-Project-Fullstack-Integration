import React from 'react';
import Navbar from '../../components/Admin/Navbar/Navbar';
import Sidebar from '../../components/Admin/Sidebar/Sidebar';

export default function Admin(){
    return(
        <div className='admin-home'>
            <Sidebar />
            <div className='homeContainer'>
                <Navbar />
                <div className="widgets"></div>
            </div>
        </div>
    );
}