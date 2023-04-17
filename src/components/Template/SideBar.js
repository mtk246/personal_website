import React from 'react';
import { Link } from 'react-router-dom';

import ContactIcons from '../Contact/ContactIcons';

const SideBar = () => (
  <section id="sidebar">
    <section id="intro">
      <Link to="/" className="logo">
        <img src="https://images.pexels.com/photos/1287145/pexels-photo-1287145.jpeg?cs=srgb&dl=pexels-eberhard-grossgasteiger-1287145.jpg&fm=jpg" alt="" />
      </Link>
      <header>
        <h2>Min Thu Kyaw</h2>
        <p><a href="mailto:minthukyaw454@gmail.com">minthukyaw454@gmail.com</a></p>
      </header>
    </section>

    <section className="blurb">
      <h2>About</h2>
      <p>
        Seeking a challenging position as a Software Developer
        where I can utilize my logical and analytical skills, knowledge, and experiences.
        Focus to work in a challenging environment that would offer me various opportunities
        of working on the leading edge technology, handling responsibilities, and career growth.
      </p>
      <ul className="actions">
        <li>
          {!window.location.pathname.includes('/resume') ? <Link to="/resume" className="button">Learn More</Link> : <Link to="/about" className="button">About Me</Link>}
        </li>
      </ul>
    </section>

    <section id="footer">
      <ContactIcons />
      <p className="copyright">&copy; Min Thu Kyaw <Link to="/">portfolio.mtktechlab.com</Link>.</p>
    </section>
  </section>
);

export default SideBar;
