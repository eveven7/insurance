import './App.scss';
import {Faq, Hero} from './components/blocks';
import { Footer, Navigation } from './components';


function App() {
  return (
    <>
      <Navigation/>
      <Hero/>
     
      <Faq/>
      <Footer/>
    </>
  );
}

export default App;
