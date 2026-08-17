import { Outlet } from 'react-router-dom';
import Header from './components/Header';
import './utils/i18';
import Footer from './components/Footer';
import { ScrollToTop } from './utils/helperFunctions';
import { useData } from './context/DataContext';
import { FooterCopyright } from './components/elementTemplates/FooterCopyright ';

// Imports for Toast

// import { ToastContainer } from 'react-toastify';
// import 'react-toastify/dist/ReactToastify.css';
// import { useEffect } from 'react';
// import { ShowChristmasToast } from './ShowChristmasToast';
// import { ShowVacationToast } from './ShowVacationToast';

export default function App() {
  const { stylePreset } = useData();


  // Comment out useEffect hook below to inactivate toat pop-up

  // Always show the Toast after loading the app
  // useEffect(() => {
  //   // Add subtile delay to draw the attention more effectivly
  //   const timer = setTimeout(() => {
  //     // ShowChristmasToast(); 
  //     ShowVacationToast();
  //   }, 1000); // Delay

  //   return () => clearTimeout(timer); // cleanup at unmount
  // }, []);

  return (
    <div
      className={`
        flex flex-col relative min-h-screen font-sans
        ${stylePreset.overall.textColorPrimary}  
        ${stylePreset.overall.backgroundColor}  
      `}
    >
      <Header />
      <div className="flex flex-grow h-full overflow-hidden">
        {/* // Make sure the scroll postion is set to the top of the page when rendered */}
        <ScrollToTop />
        <Outlet />
      </div>
      <Footer />
      <FooterCopyright />

      {/* Toast component */}

      {/* <ToastContainer
        position="bottom-right"
        autoClose={10000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        pauseOnHover
        draggable
        theme="light"
      /> */}
    </div>
  );
}
