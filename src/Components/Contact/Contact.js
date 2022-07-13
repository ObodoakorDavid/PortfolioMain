/** @format */

import React from "react";
import "./Contact.css";
import { BsGithub, BsTwitter, BsLinkedin } from "react-icons/bs";

const Contact = () => {
  return (
    <div className="contact">
      <h1>
        CONTACT <span>ME</span>
      </h1>
      <div className="form-div">
        <div className="leftside">
          <p>
            If you have a project you'd like me to work on or just want to
            collaborate a new or existing project, You can also fill and submit
            the form and i'll get back to you as soon as possible.
          </p>
          <div>
            <div className="contact-info-items">
              <div className="contact-info-pairs">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="16"
                  height="16"
                  fill="currentColor"
                  class="bi bi-geo-alt-fill"
                  viewBox="0 0 16 16"
                >
                  <path d="M8 16s6-5.686 6-10A6 6 0 0 0 2 6c0 4.314 6 10 6 10zm0-7a3 3 0 1 1 0-6 3 3 0 0 1 0 6z" />
                </svg>
                <p>Location</p>
              </div>
              <p>Lagos, Nigeria</p>
            </div>
            <div className="contact-info-items">
              <div className="contact-info-pairs">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="16"
                  height="16"
                  fill="currentColor"
                  class="bi bi-envelope-fill"
                  viewBox="0 0 16 16"
                >
                  <path d="M.05 3.555A2 2 0 0 1 2 2h12a2 2 0 0 1 1.95 1.555L8 8.414.05 3.555ZM0 4.697v7.104l5.803-3.558L0 4.697ZM6.761 8.83l-6.57 4.027A2 2 0 0 0 2 14h12a2 2 0 0 0 1.808-1.144l-6.57-4.027L8 9.586l-1.239-.757Zm3.436-.586L16 11.801V4.697l-5.803 3.546Z" />
                </svg>{" "}
                <p>Email</p>
              </div>
              <a href="mailto:ObodoakorDavid@gmail.com">
                ObodoakorDavid@gmail.com
              </a>
            </div>
            <div className="contact-info-items">
              <div className="contact-info-pairs">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="16"
                  height="16"
                  fill="currentColor"
                  class="bi bi-telephone-fill"
                  viewBox="0 0 16 16"
                >
                  <path
                    fill-rule="evenodd"
                    d="M1.885.511a1.745 1.745 0 0 1 2.61.163L6.29 2.98c.329.423.445.974.315 1.494l-.547 2.19a.678.678 0 0 0 .178.643l2.457 2.457a.678.678 0 0 0 .644.178l2.189-.547a1.745 1.745 0 0 1 1.494.315l2.306 1.794c.829.645.905 1.87.163 2.611l-1.034 1.034c-.74.74-1.846 1.065-2.877.702a18.634 18.634 0 0 1-7.01-4.42 18.634 18.634 0 0 1-4.42-7.009c-.362-1.03-.037-2.137.703-2.877L1.885.511z"
                  />
                </svg>{" "}
                <p>Phone Number</p>
              </div>
              <a href="tel:+2348182921822">Call Me</a>
            </div>
          </div>
        </div>

        <div className="rightside">
          <form action="">
            <input type="text" placeholder="Your Name" />
            <input type="email" placeholder="Your Email" />
            <input type="text" placeholder="Email Subject" />
            <textarea
              name=""
              id=""
              cols="30"
              rows="10"
              placeholder="Message Here..."
            ></textarea>
            <button>Submit</button>
          </form>
        </div>
      </div>

      <div className="icons-socials">
        <a href="https://github.com/ObodoakorDavid">
          <BsGithub className="socials" />
        </a>
        <a href="https://twitter.com/UnseenDavid">
          <BsTwitter className="socials" />
        </a>
        <a href="#">
          <BsLinkedin className="socials" />
        </a>
      </div>
    </div>
  );
};

export default Contact;
