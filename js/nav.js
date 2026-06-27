// nav.js — injects shared nav and footer into every page

const NAV_HTML = `
<nav>
  <a href="../index.html" class="nav-logo">
    <img src="../images/dbr-mark-white.png" alt="David Blackwell Recruitment logo" class="nav-logo-img" />
  </a>
  <ul class="nav-links">
    <li><a href="../index.html">Home</a></li>
    <li><a href="jobs.html">Jobs</a></li>
    <li><a href="employers.html">For Employers</a></li>
    <li><a href="candidates.html">For Candidates</a></li>
    <li><a href="about.html">About</a></li>
    <li><a href="contact.html" class="nav-cta">Contact Us</a></li>
  </ul>
  <button class="hamburger" aria-label="Menu">
    <span></span><span></span><span></span>
  </button>
</nav>`;

const FOOTER_HTML = `
<footer>
  <div class="footer-inner">
    <div class="footer-top">
      <div class="footer-brand">
        <a href="../index.html" style="display:inline-flex;">
          <img src="../images/dbr-logo-full-white.png" alt="David Blackwell Recruitment logo" class="footer-logo-img" />
        </a>
        <p>Engineering Talent. Let's Create Something Great.<br>
        Specialists in engineering recruitment across the UK.</p>
        <div class="social-links">
          <a href="https://www.linkedin.com/company/david-blackwell-recruitment/?viewAsMember=true" target="_blank" rel="noopener" aria-label="DBR on LinkedIn">
            <svg viewBox="0 0 24 24"><path d="M20.45 20.45h-3.56v-5.57c0-1.33-.02-3.04-1.85-3.04-1.85 0-2.14 1.45-2.14 2.94v5.67H9.34V9h3.41v1.56h.05c.48-.9 1.64-1.85 3.38-1.85 3.61 0 4.28 2.38 4.28 5.47v6.27zM5.34 7.43a2.07 2.07 0 1 1 0-4.13 2.07 2.07 0 0 1 0 4.13zM7.12 20.45H3.56V9h3.56v11.45zM22.22 0H1.77C.8 0 0 .78 0 1.75v20.5C0 23.22.8 24 1.77 24h20.45c.98 0 1.78-.78 1.78-1.75V1.75C24 .78 23.2 0 22.22 0z"/></svg>
          </a>
          <a href="https://www.facebook.com/share/1Ae9qPUbAK/?mibextid=wwXIfr" target="_blank" rel="noopener" aria-label="DBR on Facebook">
            <svg viewBox="0 0 24 24"><path d="M22 12.07C22 6.51 17.52 2 12 2S2 6.51 2 12.07c0 5.02 3.66 9.18 8.44 9.93v-7.03H7.9v-2.9h2.54V9.85c0-2.51 1.49-3.89 3.77-3.89 1.09 0 2.23.2 2.23.2v2.45h-1.26c-1.24 0-1.63.78-1.63 1.57v1.89h2.78l-.44 2.9h-2.34V22c4.78-.75 8.44-4.91 8.44-9.93z"/></svg>
          </a>
        </div>
      </div>
      <div class="footer-col">
        <h4>Quick Links</h4>
        <ul>
          <li><a href="pages/jobs.html">Current Jobs</a></li>
          <li><a href="pages/employers.html">For Employers</a></li>
          <li><a href="pages/candidates.html">For Candidates</a></li>
          <li><a href="pages/about.html">About Us</a></li>
        </ul>
      </div>
      <div class="footer-col">
        <h4>Get In Touch</h4>
        <ul>
          <li><a href="tel:+443300434199" class="phone-link">📞 0330 043 4199</a></li>
          <li><a href="mailto:info@davidblackwells.co.uk">info@davidblackwells.co.uk</a></li>
          <li><a href="pages/contact.html">Send a Message</a></li>
          <li><a href="pages/employers.html">Submit a Vacancy</a></li>
        </ul>
      </div>
    </div>
    <div class="footer-bottom">
      <p>© 2025 David Blackwell Recruitment. All rights reserved.</p>
      <p>Engineering Talent · United Kingdom</p>
    </div>
  </div>
</footer>`;

// Inject into page
document.body.insertAdjacentHTML('afterbegin', NAV_HTML);
document.body.insertAdjacentHTML('beforeend', FOOTER_HTML);
