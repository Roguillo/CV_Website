import   styles     from './page.module.css';
import   React      from 'react';

import Homepage from './homepage/page.tsx';
import About    from './about/page.tsx';
import Projects from './projects/page.tsx';



export default function Home() {
  let current_page = <Homepage/>;
  //TODO

  return (
    <div className = {styles.page}>
      <div>{current_page}</div>
    </div>
  );
}
