'use client';

import styles from './page.module.css';
import React from 'react';

import Homepage from '../screens/homepage';
import About from '../screens/about';
import Projects from '../screens/projects';

type View = 'home' | 'about' | 'projects';

const NAV_ITEMS: { view: View; label: string }[] = [
  { view: 'home', label: 'Home' },
  { view: 'about', label: 'About' },
  { view: 'projects', label: 'Projects' },
];

export default function Home() {
  const [view, updateView] = React.useState<View>('home');

  function go(next: View) {
    updateView(next);
    window.scrollTo(0, 0);
  }

  return (
    <div className={styles.page}>
      <nav className={styles.nav} aria-label="Main">
        {NAV_ITEMS.map((item) => (
          <button
            key={item.view}
            type="button"
            className={`${styles.navButton} ${view === item.view ? styles.active : ''}`}
            aria-current={view === item.view ? 'page' : undefined}
            onClick={() => go(item.view)}
          >
            {item.label}
          </button>
        ))}
      </nav>

      {view === 'home' && <Homepage />}
      {view === 'about' && <About />}
      {view === 'projects' && <Projects />}
    </div>
  );
}
