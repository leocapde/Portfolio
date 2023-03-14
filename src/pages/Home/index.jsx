import AboutMe from '../../components/AboutMe';
import Footer from '../../components/Footer';
import Formations from '../../components/Formations';
import Frameworks from '../../components/Frameworks';
import Header from '../../components/Header';
import Projects from '../../components/Projects';

export default function Home() {
  return (
    <div id="Home" className="bg-black">
      <Header />
      <AboutMe />
      <Frameworks />
      <Projects />
      <Formations />
      <Footer />
    </div>
  );
}
