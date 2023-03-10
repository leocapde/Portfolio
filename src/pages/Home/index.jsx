import AboutMe from '../../components/AboutMe';
import Formations from '../../components/Formations';
import Frameworks from '../../components/Frameworks';
import Header from '../../components/Header';
import Projects from '../../components/Projects';

export default function Home() {
  return (
    <div className="Home">
      <Header />
      <AboutMe />
      <Frameworks />
      <Projects />
      <Formations />
    </div>
  );
}
