import { Link, Outlet } from 'react-router-dom'
import Header from "../robin/Header.js";

import Intro from '../robin/Intro.js';
import ProfileHighlights from '../ProfileHighlights.js';
import PlaceholderSqlBox from '../PlaceholderSqlBox.js';
import FormFooter from '../FormFooter.js';
import { motion, useScroll } from "framer-motion";

export default function Home() {
    const { scrollYProgress } = useScroll();
    return (
        <section>
            <Header />
            <h2>TEAM BIBBLE</h2>
            <ul>
                <li>
                    <Link to='/about' className='nav-btn'>Go to About</Link>
                </li>
                <li>
                    <Link to='/login' className='nav-btn'>Go to Login</Link>
                </li>        
            </ul>
            {/* <Outlet /> */}
            <div>
                <div className="App">
                    <motion.div className="progress-bar" style={{ scaleX: scrollYProgress }}/>
                </div>
                <div className="innerApp">
                    <Intro />
                    <ProfileHighlights />
                    <PlaceholderSqlBox />
                </div>
            </div>  
            <FormFooter />
        </section>
    )
  }