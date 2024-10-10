// App.js
import React from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import About from './Components/Home';
 import Contact from './Components/Explore';
 import Download from './Components/Download';
 import Educationalcontact from './Components/Educationalcontact';
 import Profile from './Components/Profile';
//  import SideNav
//   from './Components/SideNav';
 
 
 
function App() {
  return (<>
  <div>
    
  </div>
   
    <Router>
      <div className="flex min-h-screen">
        
        <aside className="w-64 bg-gray-800 text-white
        ">
          <nav className="flex flex-col h-full p-4 space-y-4">
          <Link to="/Profile" className="text-xl hover:bg-gray-700 p-2 rounded">
            Profile
            </Link>
             
            <Link to="/about" className="text-xl hover:bg-gray-700 p-2 rounded">
        
              Home
            </Link>
            <Link to="/contact" className="text-xl hover:bg-gray-700 p-2 rounded">
              Explore
            </Link>
              
            <Link to="/Download" className="text-xl hover:bg-gray-700 p-2 rounded">
              Download
            </Link>
            
          </nav>
        </aside>

        {/* Main Content */}
        <main className="flex-1 p-8">
          <Routes>
          <Route path="/Profile" element={<Profile />} />
            <Route path="/about" element={<About />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/Download" element={<Download/>} />
            <Route path="/Educationalcontact" element={<Educationalcontact />} />
          </Routes>
        </main>
 
      </div>
      
    </Router>
    </>
  );
}

export default App;