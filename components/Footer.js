import React from 'react'
import style from '../styles/footer.module.scss'
import {
  AiFillInstagram,
  AiFillFacebook,
  AiFillLinkedin,
  AiFillTwitterSquare,
} from 'react-icons/ai'
import Link from 'next/link'
const Footer = () => {
  return (
    <footer className={style.footer_wrapper}>
      <div className="container">
        {/* menu item */}
        <div className={style.menu_wrapper}>
          <div className="row">
            <div className="col-12 mb-5 md:col-6 lg:col-5 lg:mb-0">
              <div className="row">
                <div className="col-12 border-r pr-10 lg:col-10">
                  <div className={[style.title, style.logo].join(' ')}>
                    <h3>Humat NFT</h3>
                  </div>
                  <div
                    className={[style.footer_text, style.footer_about].join(
                      ' '
                    )}
                  >
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Saepe, molestias.
                  </div>
                  <div className={style.contact}>
                    <p>01794383900</p>
                    <p>MAP / DIRECTION</p>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-12 mb-5 md:col-6 lg:col-3 lg:mb-0">
              <div>
                <h3 className={[style.title, style.menu_title].join(' ')}>
                  Sitemap
                </h3>
                <ul className={style.menu_item}>
                  <li>
                    <Link href={`#`}>Categorize your website's content</Link>
                  </li>
                  <li>
                    <Link href={`#`}>Improve your site's navigation</Link>
                  </li>
                  <li>
                    <Link href={`#`}>Organize large websites</Link>
                  </li>
                  <li>
                    <Link href={`#`}>Categorize your website's content</Link>
                  </li>
                  <li>
                    <Link href={`#`}>Improve your site's navigation</Link>
                  </li>
                  <li>
                    <Link href={`#`}>Organize large websites</Link>
                  </li>
                </ul>
              </div>
            </div>
            <div className="col-12 mb-5 md:col-6 lg:col-3 lg:mb-0">
              <div>
                <h3 className={[style.title, style.menu_title].join(' ')}>
                  Resource & Tools
                </h3>
                <ul className={style.menu_item}>
                  <li>
                    <Link href={`#`}>Easy to assign resources</Link>
                  </li>
                  <li>
                    <Link href={`#`}>
                      ustomized time tracking and reporting features
                    </Link>
                  </li>
                  <li>
                    <Link href={`#`}>
                      Integration with many project management systems
                    </Link>
                  </li>
                  <li>
                    <Link href={`#`}>Starts at $6 /month with a higher</Link>
                  </li>
                  <li>
                    <Link href={`#`}>check it out</Link>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
        {/* menu item */}
        <div className={style.bottom_footer}>
          <div className={style.copy_right}>
            <p>
              &copy; {new Date().getFullYear()} Humat NFT is all rights reserved
            </p>
          </div>
          <div className={style.icon_wrapper}>
            <ul>
              <li>
                <a href="#">
                  <AiFillFacebook size="20px" color="#fff" />
                </a>
              </li>
              <li>
                <a href="#">
                  <AiFillInstagram size="20px" color="#fff" />
                </a>
              </li>
              <li>
                <a href="#">
                  <AiFillLinkedin size="20px" color="#fff" />
                </a>
              </li>
              <li>
                <a href="#">
                  <AiFillTwitterSquare size="20px" color="#fff" />
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer
