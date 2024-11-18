import { IoCalendarOutline, IoChevronDownOutline, IoLocationOutline, IoLogoFacebook, IoLogoInstagram, IoLogoTwitter, IoMailOutline, IoPhonePortrait, IoPhonePortraitOutline } from 'react-icons/io5'
import Image from 'next/image'
export default function Sidebar() {
  return (
    <aside className="sidebar" data-sidebar>

    <div className="sidebar-info">

      <figure className="avatar-box">
        <Image src="/assets/images/my-avatar.png" quality={100} loading='lazy' alt="Richard hanrick" width={80} height={80} style={{ width: '80', height: 'auto'}} />
      </figure>

      <div className="info-content">
        <h1 className="name" title="Ferdinand Anggris">Ferdinand Anggris</h1>

        <p className="title">Programmer</p>
      </div>

      <button className="info_more-btn" data-sidebar-btn>
        <span>Show Contacts</span>

        <IoChevronDownOutline />
      </button>

    </div>

    <div className="sidebar-info_more">

      <div className="separator"></div>

      <ul className="contacts-list">

        <li className="contact-item">

          <div className="icon-box">
            <IoMailOutline />
          </div>

          <div className="contact-info">
            <p className="contact-title">Email</p>

            <a href="mailto:ferdinandanggris@gmail.com" className="contact-link">ferdinandanggris@gmail.com</a>
          </div>

        </li>

        <li className="contact-item">

          <div className="icon-box">
            <IoPhonePortraitOutline />
          </div>

          <div className="contact-info">
            <p className="contact-title">Whatsapp</p>

            <a href="wa.me/6282131955087" className="contact-link">+6282131955087</a>
          </div>

        </li>

        <li className="contact-item">

          <div className="icon-box">
            <IoCalendarOutline />
          </div>

          <div className="contact-info">
            <p className="contact-title">Birthday</p>

            <time dateTime={"2002-02-23"}>February 2002</time>
          </div>

        </li>

        <li className="contact-item">

          <div className="icon-box">
            <IoLocationOutline/>
          </div>

          <div className="contact-info">
            <p className="contact-title">Location</p>

            <address>Jawa Timur, Indonesia</address>
          </div>

        </li>

      </ul>

      <div className="separator"></div>

      <ul className="social-list">

        <li className="social-item">
          <a href="https://www.facebook.com/ferdinandanggris" target='_blank' className="social-link">
            <IoLogoFacebook />
          </a>
        </li>
        <li className="social-item">
          <a href="https://www.instagram.com/ferdinandanggris_/" target='_blank' className="social-link">
            <IoLogoInstagram/>
          </a>
        </li>

      </ul>

    </div>

  </aside>
  )
}