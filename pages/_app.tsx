import React from 'react';
import '../styles/globals.css';

/**
 * @author Ntavigwa Bashombe
 * @since 0.001
 *
 * @summary This is the main app that imports our styles
 * @returns {JSX.Element}: JSX Code for App
 * @license MIT
 * @version 1.0.0
 */
const App = () => {
  return (
    <div className='w-screen h-screen'>
      <div className='flex flex-col w-full h-full justify-center items-center'>
        <p className='font-bold underline text-8xl text-gray-800 my-5 cursor-pointer selection:text-white selection:bg-green-700/70'>
          Next JS Template
        </p>
        <p className='text-gray-800 font-mono text-xl my-5 selection:text-white selection:bg-green-700/70'>
          By Ntavigwa Bashombe
        </p>
      </div>
    </div>
  );
};

export default App;
