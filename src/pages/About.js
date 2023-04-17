import React from 'react';
import { Link } from 'react-router-dom';

import Main from '../layouts/Main';

const About = () => (
  <Main
    title="About"
    description="Learn about Min Thu Kyaw"
  >
    <article className="post markdown" id="about">
      <header>
        <div className="title">
          <h2><Link to="/about">About Me</Link></h2>
        </div>
      </header>
      <p>
        Seeking a challenging position as a Software Developer where I can utilize
        my logical and analytical skills, knowledge, and experiences. Focus to work
        in a challenging environment that would offer me various opportunities of working
        on the leading edge technology, handling responsibilities, and career growth.
      </p>
    </article>
  </Main>
);

export default About;
