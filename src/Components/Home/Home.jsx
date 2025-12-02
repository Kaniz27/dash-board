import React from 'react';
import Sidebar from '../Sidebar';
import ChatList from '../ChatList';

import ProfilePanel from '../ProfilePanel';


const Home = () => {
    return (
        <div className='flex'>
           <Sidebar></Sidebar>
           <ChatList></ChatList>
          <ProfilePanel></ProfilePanel>
          
        </div>
    );
};

export default Home;