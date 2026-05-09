import Hero from './components/Hero';
import AppList from './components/AppList';
import Timeline from './components/Timeline';
import Skills from './components/Skills';
import Footer from './components/Footer';

function App() {
  return (
    <div className="min-h-screen flex flex-col bg-bg text-ink">
      <Hero />
      <AppList />
      <Timeline />
      <Skills />
      <Footer />
    </div>
  );
}

export default App;
