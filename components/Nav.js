import html from "html-literal";

export default links => html`
  <nav>
    <i class="fas fa-bars"></i>
    <ul class="hidden--mobile nav-links">
      <li><a href="Home.js">Home</a></li>
      <li><a href="Bio.js">Bio</a></li>
      <li><a href="Gallery.js">Gallery</a></li>
      <li><a href="Register.js">Register</a></li>
    </ul>
  </nav>
`;
