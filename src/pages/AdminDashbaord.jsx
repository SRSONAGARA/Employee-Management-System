import React from 'react'
import Header from '../components/Dashboard/Header';
import CreateTask from '../components/Dashboard/CreateTask';

const AdminDashbaord = () => {
  return (
    <div
      className="text-white min-h-screen w-full
        flex  flex-col items-center justify-start
        gap-10
        p-10
        // bg-[#0e2dae]
        bg-[url('https://img.freepik.com/free-photo/artistic-blurry-colorful-wallpaper-background_58702-8311.jpg')]
        bg-cover bg-center bg-no-repeat
        "
    >
      <Header/>
      <CreateTask/>
    </div>
  );
}

export default AdminDashbaord
