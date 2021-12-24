import React from 'react';

// import Article from './components/Article/Article'
// import Brand from './components/Brand/Brand'
// import CTA from './components/CTA/CTA';
// import Feature from './components/Feature/Feature';
// import Navbar from './components/Navbar/Navbar';

import { Footer, Blog, Possibility, Features, WhatGPT3, Header} from './containers';
import { CTA, Brand, Navbar } from './components';

const App = () => {
    return (
        <div className="App">
            <div className="gradient__bg">
                <Navbar />
                <Header />
            </div>
            <Brand />
            <WhatGPT3 />
            <Features />
            <Possibility />
            <CTA />
            <Blog />
            <Footer />
        </div>
    )
}

export default App
