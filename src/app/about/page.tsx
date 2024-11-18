import Image from 'next/image'
import { IoCloseOutline } from 'react-icons/io5'
export default function page() {
  return (
    <article className="about  active" data-page="about">

    <header>
      <h2 className="h2 article-title">About me</h2>
    </header>

    <section className="about-text">
      <p>
        I&apos;am Ferdinand Anggris Winarko, a D3 Informatics graduate from Politeknik Elektronika Negeri Surabaya (2020–2023), skilled in PHP and JavaScript, along with technologies like Laravel, JQuery, Angular, MySQL, MongoDB, and Git. Currently, I work as a Web Developer at Venturo Pro Indonesia, where I initially joined as an intern in 2022 before moving into a full-time role.
      </p>

      <p>
      In my career, I have contributed to the development of a learning management system (LMS) for auditor training applications and a virtual event management application. My experience includes optimizing data retrieval processes and enhancing various features within both mobile and web applications.
      </p>
    </section>
  </article>
  )
}