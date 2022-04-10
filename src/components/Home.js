import About from './About';
import Contact from './Contact';
import Footer from './Footer';
import Me from './Me';
import Projects from './Projects';
import SideBar from './SideBar';
import Skills from './Skills';

function Home() {
  return (
    <>
      <SideBar />
      <Me />
      <About />
      <Skills />
      <Projects />
      <Contact />
      <Footer />
    </>
  );
}

export default Home;
