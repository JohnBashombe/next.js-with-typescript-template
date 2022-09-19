import React from 'react';
import { NextPage } from 'next';

/**
 * @author Ntavigwa Bashombe
 * @since 0.001
 *
 * @summary This is the home page
 * @returns {JSX.Element}: JSX Code for Home
 * @license MIT
 * @version 1.0.0
 */
const Home: NextPage = (): JSX.Element => {
  return (
    <div className='flex flex-col space-y-10 w-full h-full justify-center items-center min-h-screen text-8xl text-gray-900 font-bold'>
      <p>My Next.js Template</p>
      <p className='text-base font-medium'>by Ntavigwa Bashombe</p>
    </div>
  );
};

export default Home;
