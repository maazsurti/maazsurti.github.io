import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Loader from './components/Loader';
import MotionToggle from './components/MotionToggle';
import ScrollToTop from './components/ScrollToTop';
import AppDetail from './pages/AppDetail';
import Hero from './components/Hero';
import AppList from './components/AppList';
import Timeline from './components/Timeline';
import Skills from './components/Skills';
import Contact from './components/Contact';
import Footer from './components/Footer';

function Home() {
  return (
    <div className="min-h-screen flex flex-col bg-bg text-ink">
      <Hero />
      <AppList />
      <Timeline />
      <Skills />
      <Contact />
      <Footer />
    </div>
  );
}

function App() {
  return (
    <BrowserRouter>
      <Loader />
      {import.meta.env.DEV && <MotionToggle />}
      <ScrollToTop />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/apps/:id" element={<AppDetail />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
