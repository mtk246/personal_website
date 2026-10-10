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
        <h3>Software & DevOps Engineer</h3>
        <p><a href="mailto:minthukyaw454@gmail.com">minthukyaw454@gmail.com</a></p>
      </header>
    </section>

    <section className="blurb">
      <h2>About</h2>
      <p>
        Software Engineer with 6+ years of professional experience developing,
        deploying, and maintaining full-stack web applications, backend
        services, containerized environments, and production infrastructure.
        Experienced with JavaScript, TypeScript, Go, PHP, Ruby, Node.js,
        Laravel, React, Vue, Next.js, PostgreSQL, MySQL, Docker, AWS, Linux,
        Nginx, and CI/CD. Hands-on experience managing both cloud/VPS
        infrastructure and physical rack-mounted servers in on-premises,
        data-center-style environments. Experienced in Linux and Windows server
        administration, containerization, microservices, REST APIs, database
        systems, automated deployments, production troubleshooting, and
        infrastructure maintenance. Strong background across the complete
        software lifecycle, including application development, system analysis,
        database design, deployment automation, server administration,
        troubleshooting, and production support.
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
