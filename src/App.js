import React from 'react';
import Navbar from './components/Navbar'
import Video from './components/Video'
import Notes from './components/Notes'
import { BrowserRouter } from 'react-router-dom'
function App() {
  return (
    <>
      <BrowserRouter>
        <Navbar />
        <Video />
        <Notes />
      </BrowserRouter>
    </>
  );
}

export default App;
