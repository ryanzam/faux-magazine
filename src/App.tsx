import './App.css'
import Footer from './components/Footer';
import Header from './components/Header';
import Nav from './components/Nav';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import All from './pages/All';
import Experiences from './pages/Experiences';
import Thoughts from './pages/Thoughts';
import NotFound from './pages/NotFound';
import PostDetails from './pages/PostDetails';
import Login from './components/Login';
import Signup from './components/Signup';

function App() {

  return (
    <>
      <Header />
      <Nav />
      <Router>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/all" element={<All />} />
          <Route path="/experiences" element={<Experiences />} />
          <Route path="/thoughts" element={<Thoughts />} />
          <Route path="/login" element={<Login />} />
          <Route path="/signup" element={<Signup />} />

          <Route path="/post/:id" element={<PostDetails />} />

          <Route path="*" element={<NotFound />} />
        </Routes>
      </Router>
      <Footer />
    </>
  )
}

export default App
