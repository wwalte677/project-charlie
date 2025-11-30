import React, { useState } from 'react'; 
import Navbar from '../components/NavBar.jsx';

import GoalSection from "../components/GoalSection.jsx";
import Login from "../windows/Login.jsx";
import Register from "../windows/Register.jsx";
import VotingPage from "../windows/VotingWindow.jsx";
import ResultsPage from "../windows/ResultsWindow.jsx";
import About from "../windows/About.jsx";
import Credits from "../windows/Credits.jsx";
import Contact from "../windows/Contact.jsx";
import Footer from '../components/Footer.jsx';
import AdminDashboard from "../windows/AdminDashboard.jsx";


export default function Home() {

  const [currentPage, setCurrentPage] = useState("home");
  const navigateTo = (page) => setCurrentPage(page);

  // The different windows that need to be rendered
  const renderPage = () => {
    switch (currentPage) {
      case "home": return <GoalSection />;
      case "about": return <About />;
      case "contact": return <Contact />;
      case "vote": {
        const storedUser = localStorage.getItem("user");
        const user = storedUser ? JSON.parse(storedUser) : null;

        // If user is an admin voting page is turned into admin dashboard
        if (user && user.role === "ADMIN") {
          return <AdminDashboard navigateTo={navigateTo} />;
        } else {
          return <VotingPage navigateTo={navigateTo} />; 
        }
      }
      case "results": return <ResultsPage />;
      case "register": return <Register />;
      case "login": return <Login navigateTo={navigateTo} />;
      case "credits": return <Credits />;
      case "admin": return <AdminDashboard />;
      default: return <GoalSection />;
    }
  };

  return (
    // Add Navbar and Footer components to the Home Window
    <div>
      <Navbar currentPage={currentPage} navigateTo={navigateTo} />
      <main className='content-layout'>
        {renderPage()}
      </main>
      <Footer />
    </div>
  );
}