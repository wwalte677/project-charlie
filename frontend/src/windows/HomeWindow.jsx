import React, { useState } from 'react'; 
import Navbar from '../components/NavBar.jsx';

import GoalSection from "../components/GoalSection.jsx";
import Login from "../windows/Login.jsx";
import Register from "../windows/Register.jsx";
import VotingPage from "../windows/VotingPage.jsx";
import ResultsPage from "../windows/ResultsPage.jsx";
import About from "../windows/About.jsx";
import Credits from "../windows/Credits.jsx";
import Contact from "../windows/Contact.jsx";
import Footer from '../components/Footer.jsx';

export default function Home() {

  const [currentPage, setCurrentPage] = useState("home");
  const navigateTo = (page) => setCurrentPage(page);

  // The different windows that need to be rendered
  const renderPage = () => {
    switch (currentPage) {
      case "home": return <GoalSection />;
      case "about": return <About />;
      case "contact": return <Contact />;
      case "vote": return <VotingPage />;
      case "results": return <ResultsPage />;
      case "register": return <Register />;
      case "login": return <Login />;
      case "credits": return <Credits />;
      default: return <GoalSection />;
    }
  };

  return (
    <div>
      <Navbar currentPage={currentPage} navigateTo={navigateTo} />
      <main className='content-layout'>
        {renderPage()}
      </main>
      <Footer />
    </div>
  );
}