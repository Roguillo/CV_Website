'use client';

import styles   from './page.module.css';
import React    from 'react';

import Homepage from '../screens/homepage';
import About    from '../screens/about';
import Projects from '../screens/projects';



export default function Home() {
  let current_page = <Homepage/>;
  //TODO

  return (
    <div className = {styles.page}>
      <div>{current_page}</div>
    </div>
  );
}
