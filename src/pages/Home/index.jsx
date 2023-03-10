import AboutMe from '../../components/AboutMe';
import Frameworks from '../../components/Frameworks';
import Header from '../../components/Header';

export default function Home() {
  return (
    <div className="Home">
      <Header />
      <AboutMe />
      <Frameworks />
    </div>
  );
}
