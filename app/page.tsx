import Nav from './components/Nav';

export default function Home() {
  return (
    <>
      <Nav />
      <main>
        <section className="intro-section">
          <p className="intro">
          Hi, I'm Zachari.
        </p>
        <p className="intro">
          Frontend engineer & indie developer. Building tools that make
          developers' lives easier—with an eye for design.
        </p>
        <p className="intro">
          Currently focused on{" "}
          <a href="https://github.com/joe223/AriaType">
            <img
              src="/ariatype-logo.png"
              alt="AriaType logo"
              className="inline-logo"
            />
            AriaType
          </a>, a local-first voice keyboard for macOS. Earlier projects
          include{" "}
          <a href="https://github.com/joe223/tiny-swiper">tiny-swiper</a> (a
          lightweight carousel library),{" "}
          <a href="https://github.com/iException/anka">anka</a> (WeChat
          miniprogram development framework), and a{" "}
          <a href="https://github.com/joe223/tab-manager">tab manager</a>{" "}
          extension. Contributor to{" "}
          <a href="https://github.com/stylelint/stylelint">stylelint</a>.
        </p>
        <p className="intro">
          Comfortable across JavaScript, TypeScript, Vue, React, and Rust.
          Whatever gets the job done well.
        </p>
        </section>

        <section className="contact">
        <h2>Find Me</h2>
        <nav>
          <a href="https://github.com/joe223">GitHub</a>
          <a href="https://x.com/_ButteredCat">Twitter</a>
          <a href="https://www.instagram.com/hello_joeharris/">Instagram</a>
          <a href="https://dribbble.com/joe223">Dribbble</a>
          <a href="https://lobste.rs/~JoeHarris">Lobsters</a>
        </nav>
      </section>
    </main>
    </>
  );
}