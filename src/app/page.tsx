import   styles     from './page.module.css';
import   React      from 'react';

import { Homepage } from '../pages/homepage.tsx';
import { About    } from '../pages/about.tsx';
import { Projects } from '../pages/projects.tsx';



export default function Home() {
  let current_page = <Homepage/>;
  //TODO

  return (
    <div className = {styles.page}>
      <div>{current_page}</div>
    </div>
  );
}
