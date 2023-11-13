import React from 'react';
// import react router dom
import {BrowserRouter as Router, Route, Routes} from 'react-router-dom'
//import pages
import Home from './pages/Home';
import ProductDetails from './pages/ProductDetails'
import Finish from './pages/Finish'
//import components
import SidebarFinish from './components/SidebarFinish'
import Sidebar from './components/Sidebar'
import Header from './components/Header'
import Footer from './components/Footer'


const App = () => {
  return <div className='overflow-hidden'>
    <Router>
      <Header />
      <Routes>
        <Route path='/' element={<Home />}/>
        <Route path='/product/:id' element=
        {<ProductDetails />} />
        <Route path='/FinishBuy' element=
        {<Finish />}/>
      </Routes>
      <SidebarFinish />
      <Sidebar />
      <Footer />
    </Router>
  </div>;
};

export default App;
