import { IoBookOutline } from "react-icons/io5";

export default function page() {
  return (
    <article className="resume" data-page="resume">
      <header>
        <h2 className="h2 article-title">Resume</h2>
      </header>

      <section className="timeline">
        <div className="title-wrapper">
          <div className="icon-box">
            <IoBookOutline />
          </div>

          <h3 className="h3">Education</h3>
        </div>

        <ol className="timeline-list">
          <li className="timeline-item">
            <h4 className="h4 timeline-item-title">
              D3 Informatic Engineering - PENS
            </h4>

            <span>2020 — 2023</span>

            <p className="timeline-text">
              in this faculty, I learned about the basics of programming, such
              as C, C++, and Java. I also learned about the basics of web
              development.
            </p>
          </li>

          <li className="timeline-item">
            <h4 className="h4 timeline-item-title">SMAN 2 Ponorogo</h4>

            <span>2018 - 2020</span>

            <p className="timeline-text">
              in this school, I take the science class, in this class more focus on the science subjects such as physics, chemistry, and biology.
            </p>
          </li>
        </ol>
      </section>

      <section className="timeline">
        <div className="title-wrapper">
          <div className="icon-box">
            <IoBookOutline />
          </div>

          <h3 className="h3">Experience</h3>
        </div>

        <ol className="timeline-list">
          <li className="timeline-item">
            <h4 className="h4 timeline-item-title">Programmer</h4>

            <span>2024 — Present</span>

            <p className="timeline-text">
              I am handle dekstop application development and make Rest API for mobile application.
            </p>
          </li>

          <li className="timeline-item">
            <h4 className="h4 timeline-item-title">Web Programmer</h4>

            <span>2022 — 2024</span>

            <p className="timeline-text">
              I am handle web development and make Rest API for mobile application.
            </p>
          </li>
        </ol>
      </section>
    </article>
  );
}
