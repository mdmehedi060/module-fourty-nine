import React from 'react';
import { Outlet } from 'react-router-dom';
import Header from '../Components/Header/Header';

const Main = () => {
    return (
        <div className='m-auto text-center items-center'>
            <Header></Header>
         <Outlet></Outlet>   
        </div>
    );
};

export default Main;