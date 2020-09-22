import React from 'react';
import Footer from 'react';

class Navbar extends React.Component {
  render() {
    return (
      <div className="Footer">
        <p className="footer-copyright mb-0">
          AJ &copy; {new Date().getFullYear()} Copyright
        </p>
      </div>
    );
  }
}

export default Footer;
