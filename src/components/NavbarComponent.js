import React from 'react';

class NavbarComponent extends React.Component {
  render() {
    return (
      <React.Fragment>
        <nav className="navbar__nav">
          <ul className="navbar__ul">
            <li className="navbar__li">
              <a href="#">Link 1</a>
            </li>
            <li className="navbar__li">
              <a href="#">Link 2</a>
            </li>
            <li className="navbar__li">
              <a href="#">Link 3</a>
            </li>
          </ul>
        </nav>
      </React.Fragment>
    );
  }
}

export { NavbarComponent };
