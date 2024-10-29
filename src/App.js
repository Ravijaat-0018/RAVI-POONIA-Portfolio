// src/App.js
import React from 'react';
import './App.css';
import AboutMe from './components/AboutMe';
import Skills from './components/Skills';
import Projects from './components/Projects';
import Header from './components/Header';
import Footer from './components/Footer';
import Contact from './components/Contact';

function App() {
    return (
        <div className="App">
            <Header />
            <section id="about"><AboutMe /></section>
            <section id="skills"><Skills /></section>
            <section id="projects"><Projects /></section>
            <section id="contact"><Contact /></section>
            <Footer />
        </div>
    );
}

export default App;
