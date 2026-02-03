'use client';

import styles from './page.module.css';
import React from 'react';

import Homepage from '../screens/homepage';
import About from '../screens/about';
import Projects from '../screens/projects';



export default function Home() {
  const [view, updateView] = React.useState<'home' | 'about' | 'projects'>('home');

  return (
    <div className={styles.page}>
      <button onClick={() => updateView('home')    }>Home    </button>
      <button onClick={() => updateView('about')   }>About   </button>
      <button onClick={() => updateView('projects')}>Projects</button>

      {view === 'home'     && <Homepage/>}
      {view === 'about'    && <About/>   }
      {view === 'projects' && <Projects/>}
    </div>
  );
}
