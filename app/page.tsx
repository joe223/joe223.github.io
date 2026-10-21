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
          I'm a Staff-level Web Multimedia and AI Systems Engineer. I build
          browser-based video editors, media ingestion and processing pipelines,
          and the WebCodecs and WebAssembly infrastructure that supports them.
          My work also includes AI-agent-driven creative workflows.
        </p>
        <p className="intro">
          I've led a 3–5 person engineering squad, taking responsibility for
          architecture, delivery, performance, compatibility, and cross-functional
          execution. I like staying close to the implementation while keeping
          the wider system and the people using it in view.
        </p>
        <p className="intro">
          Currently focused on{" "}
          <a className="app-link" href="https://github.com/joe223/AriaType">
            <img
              src="/ariatype-logo.png"
              alt="AriaType logo"
              className="inline-logo"
            />
            AriaType
          </a>, a local-first voice keyboard for macOS. I'm also building{" "}
          <a className="app-link" href="https://orino.ai/en/">
            <img
              src="/orino-logo.png"
              alt="Orino logo"
              className="inline-logo"
              width="64"
              height="64"
            />
            Orino
          </a>, a workspace for reading and writing;{" "}
          <a className="app-link" href="/app/scavenger/">
            <img
              src="/scavenger-logo.svg"
              alt="Scavenger logo"
              className="inline-logo"
              width="64"
              height="64"
            />
            Scavenger
          </a>, a way to understand the projects,
          dependencies, and agent records taking up space on a Mac; and{" "}
          <a className="app-link" href="/app/amidnature/">
            <img
              src="/amidnature-logo.png"
              alt="AmidNature logo"
              className="inline-logo"
              width="64"
              height="64"
            />
            AmidNature
          </a>, a quiet place to take a walk
          through a mountain landscape.
        </p>
        <p className="intro">
          Earlier projects include{" "}
          <a href="https://github.com/joe223/tiny-swiper">tiny-swiper</a> (a
          lightweight carousel library),{" "}
          <a href="https://github.com/iException/anka">anka</a> (WeChat
          miniprogram development framework), and a{" "}
          <a href="https://github.com/joe223/tab-manager">tab manager</a>{" "}
          extension. Contributor to{" "}
          <a href="https://github.com/stylelint/stylelint">stylelint</a>.
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