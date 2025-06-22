import React from "react";
import { Link } from "react-router-dom";

// Import your real homepage components
import Aboutus from "../components/aboutus/Aboutus";
import Hero2 from "../components/hero2/Hero2";
import Services from "../components/services/Services";
import Hero3 from "../components/hero2/Hero3";

const Home = () => {
  return (
    <div>
      {/* 🔐 Login link at the top */}
      <div style={{
        width: '100%',
        padding: '10px 20px',
        backgroundColor: '#f2f2f2',
        display: 'flex',
        justifyContent: 'flex-end',
        boxShadow: '0 2px 4px rgba(0,0,0,0.1)'
      }}>
        <Link to="/login" style={{
          textDecoration: 'none',
          fontWeight: 'bold',
          color: '#333'
        }}>
          Login
        </Link>
      </div>

      {/* 🏠 Real homepage content */}
      <Hero2 />
      <Aboutus />
      <Services />
      <Hero3 />
    </div>
  );
};

export default Home;