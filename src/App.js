import './App.css';
import { Header } from './components/Header';
import { Footer } from './components/Footer';
import { AllRoutes } from './routes/AllRoutes';


function App() {
  return (
    <>
      <Header />
      <main>
        <AllRoutes />
      </main>   
      <Footer />
    </>
  );
}

export default App;
