import React from 'react';
import Sidebar from '../Sidebar';
// import ChatList from '../ChatList';

import ProfilePanel from '../ProfilePanel';
import Footer from '../Footer';


const Home = () => {
    return (
        <div className='flex'>
           <Sidebar></Sidebar>
           <Footer></Footer>
           {/* <ChatList></ChatList> */}
          {/* <ProfilePanel></ProfilePanel> */}
          
        </div>
    );
};

export default Home;