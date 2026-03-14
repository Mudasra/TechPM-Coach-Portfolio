const AboutProse = ({ visible }) => (
  <>
    <div className={`about-eyebrow ${visible ? "vis" : ""}`} aria-hidden="true">
      <div className="ae-line" />
      <span className="ae-text">Your Coach</span>
    </div>

    <h2 className={`about-h2 ${visible ? "vis" : ""}`}>
      I Was <em>Exactly</em> Where
      <br />You Are, and I
      <br />Found the Way Out
    </h2>

    <div className={`about-prose ${visible ? "vis" : ""}`}>
      <p>
        Six years ago, I was a Senior Marketing Manager at a Fortune 500 company.
        Good salary, decent title, but I was bored out of my mind and had no idea
        how to break into tech without a CS degree.
      </p>
      <p>
        I tried self-study. I tried LinkedIn spraying. I applied to 100 jobs. Nothing worked.
        Then I cracked it: <strong>marketers have exactly the skills tech PMs need</strong> ,
        we just need to position them right, fill specific gaps, and build credibility
        in the right places.
      </p>
      <p>
        I joined Google's PM team 6 months later without writing a single line of code.
        Since then, I've systematized that exact path for 200+ professionals.
      </p>
    </div>
  </>
);

export default AboutProse;