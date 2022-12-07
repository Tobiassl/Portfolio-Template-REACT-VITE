import React from 'react';
import { About } from '../About';
import { Hero } from '../Hero';
import { Skills } from '../Skills';
import { Thinkless } from '../thinkless';


const Main = () => {
    return(
        <div>
       
        <Hero/>
        <About/>
        <Skills/>
        <Thinkless/>
        </div>
    )
}

export { Main }