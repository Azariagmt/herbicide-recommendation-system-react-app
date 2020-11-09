import React from 'react';
import './Contact.css';

function Contact() {
  return (
    <div>
      <header className="left">
        <form id="form" action="https://formspree.io/f/maylqzan" method="POST">
          <span className="heading-primary--sub">
            We promise we love suggestions
          </span>
          <input type="text" name="_replyto" placeholder="email" />
          <p>Email must be a valid address, e.g. me@mydomain.com</p>
          <textarea
            name="message"
            id=""
            cols="20"
            rows="5"
            placeholder="comment"
          />
          <p>Email must be a valid address, e.g. me@mydomain.com</p>
          <button
            id="sub"
            type="submit"
            value="Send"
            className="btn btn--animated"
          >
            Send
          </button>
        </form>
      </header>
    </div>
  );
}

export default Contact;
