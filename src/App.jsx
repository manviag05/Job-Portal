import React from 'react'
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import HomeCards from './components/HomeCards';
import  JobLisiting  from './components/JobLisiting';

const App = () => {
  return (
    <>
    <Navbar /> 
    <Hero />
    <HomeCards />
    <JobLisiting />
  

   
    

 
   

    <section className="m-auto max-w-lg my-10 px-6">
      <a
        href="jobs.html"
        className="block bg-black text-white text-center py-4 px-6 rounded-xl hover:bg-gray-700"
        >View All Jobs</a>
    </section>
    </>
  );
};

export default App































// import React from 'react'

// const App = () => {
// const names=['brad','mary','john'];
// const loggedin=false;
// const styles={
//   color:'red',
//   fontSize:'24px'
// }



//   return (
//     <>
//     <div classNameName='text-5xl' style={{color:'red', fontSize:'24px'}}>App</div> 
//     <p style={styles}>my name is</p>
    
//     <ul>
//       {names.map((name, index)=>(
//         <li key={index}>{name}</li>
//       ))}
//     </ul>
// {loggedin? <h1>member</h1> : <h1>guest</h1>}  
// {loggedin && <h1>member</h1>}

//     </>
//   );
// }

// export default App