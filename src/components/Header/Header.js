import React from 'react';
import './Header.css';

import { Link } from 'react-scroll';

function Header() {
  return (
    <header className="header">
      <div className="header__text-box">
        <h1 className="heading-primary">
          <span className="heading-primary--main">Weed Ai</span>
          <span className="heading-primary--sub">
            Eradicating invasive species by 2030
          </span>
        </h1>
        <Link
          href="https://exp-shell-app-assets.s3.us-west-1.amazonaws.com/android/%40jedisam/weed-ai-a3467740ffd14cdb9d0cd3344f62c849-signed.apk"
          className="btn btn--white btn--animated"
        >
          Download app
        </Link>
        <Link
          href="#try"
          to="try"
          className="btn btn--white btn--animated"
          spy={true}
          smooth={true}
        >
          Try online
        </Link>
        <Link
          href="https://github.com/Azariagmt/gdg-v09-hackathon.git"
          className="btn btn--white btn--animated"
        >
          Github link
        </Link>
      </div>
    </header>
  );
}

export default Header;
