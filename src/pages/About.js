import React from 'react';
import { Link } from 'react-router-dom';

import Main from '../layouts/Main';

const About = () => (
  <Main title="About" description="Learn about Min Thu Kyaw">
    <article className="post markdown" id="about">
      <header>
        <div className="title">
          <h2>
            <Link to="/about">Professional Summary</Link>
          </h2>
        </div>
      </header>
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
    </article>
  </Main>
);

export default About;
