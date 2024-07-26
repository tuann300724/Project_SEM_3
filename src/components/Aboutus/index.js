import React from "react";
import styles from "./AboutUs.module.scss";
import classNames from "classnames/bind";
import catavatar from '../../public/images/catavatar.jpg';
import logo from '../../public/images/logo.svg';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { fab, faTwitterSquare, faFacebook, faLinkedin, faGithub } from "@fortawesome/free-brands-svg-icons";

function Aboutus(props) {
  const cx = classNames.bind(styles);

  let message = `Lorem ipsum dolor sit amet, consectetur adipiscing elit. \n Pellentesque purus sapien, sagittis sed ipsum eget, tincidunt rhoncus libero. Nunc ornare mattis commodo. Cras placerat elit sed bibendum ultricies.`;
  return (
    // <div className={cx("container-xl", "container-follow-location")}>
    <section className={cx("about-section")}>
      <div className={cx("contact-container")}>
        <div className={cx("container")}>
          <div className={cx("contact-item")}>
            <div className={cx("contact")}>
              <div className={cx("first-text")}>Let's get in touch</div>
              <img src={logo} alt="Logo" className="image" />
              <div className={cx("social-links")}>
                <span className={cx("second-text")}>Connect with us:</span>
                <ul className={cx("social-media")}>
                  <li>
                    <a href="#" >
                      <FontAwesomeIcon className={cx("facebook")} icon={faFacebook} />
                    </a>
                  </li>
                  <li>
                    <a href="#">
                      <FontAwesomeIcon className={cx("twitter")} icon={faTwitterSquare} />
                    </a>
                  </li>
                  <li>
                    <a href="#">
                      <FontAwesomeIcon className={cx("linkedin")} icon={faLinkedin} />
                    </a>
                  </li>
                </ul>
              </div>
            </div>
            <div className={cx("submit-form")}>
              <h4 className={cx("third-text")}>
                Contact Us
              </h4>
              <form action="">
                <div className={cx("input-box")}>
                  <input type="text" className={cx("input")} required/>
                  <label forHtml="name">Name</label>
                </div>
                <div className={cx("input-box")}>
                  <input type="email" className={cx("input")} required/>
                  <label forHtml="email">Email</label>
                </div>
                <div className={cx("input-box")}>
                  <input type="tel" className={cx("input")} required/>
                  <label forHtml="phone">Phone:</label>
                </div>
                <div className={cx("input-box")}>
                  <textarea className={cx("input")} id="message" required></textarea>
                  <label forHtml="message">Message</label>
                </div>
                <input type="submit" className={cx("btn")} value="Submit"/>
              </form>
            </div>
          </div>
        </div>
      </div>
      <div className={cx("about-container")}>
        <div className="row">
          <div className="col-md-12 text-center">
            <h2 className={cx("section-title")}>
              The Team Behind Realtors Portal
            </h2>
            <p className={cx("section-subtitle")}>
              {message}
            </p>
          </div>
          <div className="col-sm-6 col-md-3">
            <div className={cx("team-item")}>
              <img src={catavatar} width="100px" alt="Image Name" className="team-item-img" />
              <h3>Nguyen Van Nghi</h3>
              <div className={cx("team-item-info")}>
                <p>Developer</p>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque purus sapien, sagittis sed ipsum eget, tincidunt rhoncus libero. Nunc ornare mattis commodo. Cras placerat elit sed bibendum ultricies.</p>

                <ul className={cx("team-icon")}>
                  <li>
                    <a href="#" >
                      <FontAwesomeIcon className={cx("facebook")} icon={faFacebook} />
                    </a>
                  </li>
                  <li>
                    <a href="#">
                      <FontAwesomeIcon className={cx("twitter")} icon={faTwitterSquare} />
                    </a>
                  </li>
                  <li>
                    <a href="#">
                      <FontAwesomeIcon className={cx("linkedin")} icon={faLinkedin} />
                    </a>
                  </li>
                </ul>
              </div>
            </div>
          </div>

          <div className="col-sm-6 col-md-3">
            <div className={cx("team-item")}>
              <img src={catavatar} width="100px" alt="Image Name" className="team-item-img" />
              <h3>Tran Thanh Phong</h3>
              <div className={cx("team-item-info")}>
                <p>Developer</p>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque purus sapien, sagittis sed ipsum eget, tincidunt rhoncus libero. Nunc ornare mattis commodo. Cras placerat elit sed bibendum ultricies.</p>

                <ul className={cx("team-icon")}>
                  <li>
                    <a href="#">
                      <FontAwesomeIcon className={cx("facebook")} icon={faFacebook} />
                    </a>
                  </li>
                  <li>
                    <a href="#">
                      <FontAwesomeIcon className={cx("twitter")} icon={faTwitterSquare} />
                    </a>
                  </li>
                  <li>
                    <a href="#">
                      <FontAwesomeIcon className={cx("linkedin")} icon={faLinkedin} />
                    </a>
                  </li>
                </ul>
              </div>
            </div>
          </div>

          <div className="col-sm-6 col-md-3">
            <div className={cx("team-item")}>
              <img src={catavatar} width="100px" alt="Image Name" className="team-item-img" />
              <h3>Nguyen Anh Tuan</h3>
              <div className={cx("team-item-info")}>
                <p>Developer</p>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque purus sapien, sagittis sed ipsum eget, tincidunt rhoncus libero. Nunc ornare mattis commodo. Cras placerat elit sed bibendum ultricies.</p>

                <ul className={cx("team-icon")}>
                  <li>
                    <a href="#">
                      <FontAwesomeIcon className={cx("facebook")} icon={faFacebook} />
                    </a>
                  </li>
                  <li>
                    <a href="#">
                      <FontAwesomeIcon className={cx("twitter")} icon={faTwitterSquare} />
                    </a>
                  </li>
                  <li>
                    <a href="#">
                      <FontAwesomeIcon className={cx("linkedin")} icon={faLinkedin} />
                    </a>
                  </li>
                </ul>
              </div>
            </div>
          </div>

          <div className="col-sm-6 col-md-3">
            <div className={cx("team-item")}>
              <img src={catavatar} width="100px" alt="Image Name" className="team-item-img" />
              <h3>Cho In Yeong</h3>
              <div className={cx("team-item-info")}>
                <p>Developer</p>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque purus sapien, sagittis sed ipsum eget, tincidunt rhoncus libero. Nunc ornare mattis commodo. Cras placerat elit sed bibendum ultricies.</p>

                <ul className={cx("team-icon")}>
                  <li>
                    <a href="#">
                      <FontAwesomeIcon className={cx("facebook")} icon={faFacebook} />
                    </a>
                  </li>
                  <li>
                    <a href="#">
                      <FontAwesomeIcon className={cx("twitter")} icon={faTwitterSquare} />
                    </a>
                  </li>
                  <li>
                    <a href="#">
                      <FontAwesomeIcon className={cx("linkedin")} icon={faLinkedin} />
                    </a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Aboutus;

