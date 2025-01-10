import './index.css'; // Link to your CSS file
import Header from './components/Header.jsx'
import Footer from './components/Footer.jsx'


import AllRoutes from './routes/AllRoutes.jsx'
import MobileNavigation from './components/MobileNavigation.jsx';

function App() {
  return (
    <main className=''>
      <Header/>
      <div className='min-h-[90vh]'>
           <AllRoutes/>
      </div>
      <Footer/>
      <MobileNavigation/>
    </main>
  );
}
export default App;
