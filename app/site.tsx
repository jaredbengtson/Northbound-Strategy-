"use client";
import Image from "next/image";
import Link from "next/link";
import { Box, Button, Container, Grid, TextField } from "@mui/material";
import {
  ExploreOutlined,
  GroupsOutlined,
  TrendingUpOutlined,
  FlagOutlined,
  SearchOutlined,
  MapOutlined,
  CheckCircleOutlineOutlined as CheckCircleOutline,
  ShieldOutlined,
  LightbulbOutlined,
  TrackChangesOutlined,
  Phone,
  Email,
  LinkedIn,
  Instagram,
  ArrowOutward,
} from "@mui/icons-material";

const teal = "#2ca9b4";
const navy = "#061d33";
const services = [
  {
    icon: <ExploreOutlined />,
    title: "Strategic Planning",
    text: "We work with you to clarify goals, assess opportunities, and define a roadmap for success.",
  },
  {
    icon: <GroupsOutlined />,
    title: "Organizational Alignment",
    text: "Aligning teams, systems, and resources to ensure everyone is moving in the same direction.",
  },
  {
    icon: <TrendingUpOutlined />,
    title: "Performance Optimization",
    text: "Improve efficiency, drive accountability, and build measurable momentum across your organization.",
  },
  {
    icon: <FlagOutlined />,
    title: "Leadership Advisory",
    text: "Equip leaders with the insight and support to make better decisions and lead with confidence.",
  },
];
const nav = ["Home", "About", "Services", "Approach", "Resources"];
function Header({ page }: { page: string }) {
  return (
    <header>
      <Container maxWidth="lg" className="nav">
        <Link href="/">
          <Image
            src="/NORTHBOUND_LOGOS_black.png"
            alt="Northbound Strategy"
            width={480}
            height={152}
            className="logo"
            priority
          />
        </Link>
        <nav>
          {nav.map((n) => (
            <Link
              className={page === n.toLowerCase() ? "active" : ""}
              href={n === "Home" ? "/" : `/${n.toLowerCase()}`}
              key={n}
            >
              {n}
            </Link>
          ))}
          <Button component={Link} href="/contact" variant="outlined">
            Contact
          </Button>
        </nav>
      </Container>
    </header>
  );
}
function Hero({ page }: { page: string }) {
  let over = "";
  let title: React.ReactNode;
  let sub = "";
  if (page === "home") {
    title = (
      <>
        Strategy.
        <br />
        Alignment.
        <br />
        <em>Ascent.</em>
      </>
    );
    sub =
      "Northbound Strategy partners with organizations and leaders to chart a clear path forward and achieve meaningful, measurable results.";
  } else if (page === "about") {
    over = "About Northbound Strategy";
    title = (
      <>
        Clarity in Direction.
        <br />
        Alignment in Action.
        <br />
        <em>Impact That Lasts.</em>
      </>
    );
    sub =
      "We partner with organizations to navigate complexity, align teams, and build strategies that drive meaningful, measurable results.";
  } else if (page === "services") {
    over = "Our Services";
    title = (
      <>
        Strategic Solutions.
        <br />
        <em>Real Results.</em>
      </>
    );
    sub =
      "We help organizations solve their toughest challenges and unlock new opportunities for growth.";
  } else {
    over = "Get in Touch";
    title = (
      <>
        Let’s Build
        <br />
        <em>What’s Next.</em>
      </>
    );
    sub =
      "Have a question or ready to start a conversation? We’d love to hear from you.";
  }
  return (
    <section className={`hero ${page === "home" ? "heroHome" : ""}`}>
      <div className="slash" />
      <Container maxWidth="lg" className="heroInner">
        {over && <span className="eyebrow">{over}</span>}
        <h1>{title}</h1>
        <i />
        <p>{sub}</p>
        {page === "home" && (
          <Button
            component={Link}
            href="/contact"
            variant="contained"
            endIcon={<ArrowOutward />}
          >
            Let’s climb higher
          </Button>
        )}
      </Container>
    </section>
  );
}
function Footer() {
  return (
    <>
      <section className="cta">
        <Container maxWidth="lg">
          <div>
            <h2>Ready to chart your northbound path?</h2>
            <p>
              Let’s connect and explore how we can help you reach new heights.
            </p>
          </div>
          <Button
            component={Link}
            href="/contact"
            variant="contained"
            endIcon={<ArrowOutward />}
          >
            Schedule a consultation
          </Button>
        </Container>
      </section>
      <footer>
        <Container maxWidth="lg" className="foot">
          <Image
            src="/logo-light.png"
            alt="Northbound"
            width={851}
            height={1124}
            className="footerLogo"
          />
          <div>
            <b>Company</b>
            <Link href="/about">About</Link>
            <Link href="/approach">Approach</Link>
            <Link href="/resources">Resources</Link>
          </div>
          <div>
            <b>Services</b>
            {services.map((s) => (
              <span key={s.title}>{s.title}</span>
            ))}
          </div>
          <div>
            <b>Contact</b>
            <span>
              <Phone />
              303.478.9416
            </span>
            <span>
              <Email />
              jaredbengtson@northboundstrategy.org
            </span>
          </div>
        </Container>
        <Container maxWidth="lg" className="copyright">
          © 2026 Northbound Strategy, LLC. All rights reserved.
        </Container>
      </footer>
    </>
  );
}
function Home() {
  const steps = [
    [
      "Discover",
      "We listen, learn, and understand your unique challenges and opportunities.",
      <SearchOutlined />,
    ],
    [
      "Design",
      "We craft a tailored strategy and actionable plan aligned to your goals.",
      <MapOutlined />,
    ],
    [
      "Deliver",
      "We partner with you to execute with focus, discipline, and measurable progress.",
      <FlagOutlined />,
    ],
    [
      "Elevate",
      "We evaluate results and refine to ensure sustainable success over the long term.",
      <CheckCircleOutline />,
    ],
  ];
  return (
    <>
      <section className="intro">
        <Container maxWidth="lg">
          <div>
            <span className="eyebrow">Who we are</span>
            <h2>
              Guiding Organizations
              <br />
              Toward What’s Next
            </h2>
            <p>
              We help organizations navigate complexity, define direction,
              <br />
              and build strategies that drive lasting impact.
            </p>
          </div>
          <Image
            src="/mark.png"
            alt="Northbound mark"
            width={250}
            height={250}
          />
        </Container>
      </section>
      <section className="dark">
        <Container maxWidth="lg">
          <span className="eyebrow">What we do</span>
          <h2>Strategic Solutions. Real Results.</h2>
          <Grid container>
            {services.map((s) => (
              <Grid
                size={{ xs: 12, sm: 6, md: 3 }}
                className="service"
                key={s.title}
              >
                <div className="icon">{s.icon}</div>
                <h3>{s.title}</h3>
                <p>{s.text}</p>
              </Grid>
            ))}
          </Grid>
        </Container>
      </section>
      <section className="approach">
        <Container maxWidth="lg">
          <div className="approachLead">
            <span className="eyebrow">Our approach</span>
            <h2>
              A Proven Path
              <br />
              to the Summit
            </h2>
            <p>
              We combine clarity, collaboration, and experience to deliver
              strategies that are practical, actionable, and built for long-term
              impact.
            </p>
            <Button component={Link} href="/approach" variant="contained">
              Learn our approach
            </Button>
          </div>
          {steps.map((s, i) => (
            <div className="step" key={s[0] as string}>
              <b>{i + 1}</b>
              {s[2]}
              <h3>{s[0]}</h3>
              <p>{s[1]}</p>
            </div>
          ))}
        </Container>
      </section>
    </>
  );
}
function About() {
  const vals = [
    ["Integrity", <ShieldOutlined />],
    ["Collaboration", <GroupsOutlined />],
    ["Curiosity", <LightbulbOutlined />],
    ["Impact", <TrackChangesOutlined />],
  ];
  return (
    <>
      <section className="purpose">
        <Container maxWidth="lg">
          <div>
            <span className="eyebrow">Our purpose</span>
            <p>
              To be a trusted guide for organizations seeking to move forward
              with confidence in a rapidly changing world.
            </p>
          </div>
          {[
            ["Guide", <ExploreOutlined />],
            ["Align", <GroupsOutlined />],
            ["Achieve", <FlagOutlined />],
          ].map((x) => (
            <div className="value" key={x[0] as string}>
              {x[1]}
              <h3>{x[0]}</h3>
              <p>
                We bring clarity, alignment, and purposeful action to every
                challenge.
              </p>
            </div>
          ))}
        </Container>
      </section>
      <section className="founder">
        <Container maxWidth="lg">
          <Image
            src="/JaredProfile.jpeg"
            alt="Jared Bengtson, founder of Northbound Strategy"
            width={170}
            height={190}
            className="portrait"
          />
          <div>
            <span className="eyebrow">Founder</span>
            <h2>Jared Bengtson</h2>
            <p>
              With more than 20 years of experience leading digital, marketing,
              and enterprise transformation initiatives, Jared partners with
              executives to solve complex challenges and unlock growth.
            </p>
            <Button
              component="a"
              href="https://www.linkedin.com/in/jared-bengtson/"
              target="_blank"
              rel="noopener noreferrer"
              variant="outlined"
            >
              Connect on LinkedIn
            </Button>
          </div>
        </Container>
      </section>
      <section className="values">
        <Container maxWidth="lg">
          <span className="eyebrow">Our values</span>
          <Grid container>
            {vals.map((v) => (
              <Grid
                size={{ xs: 6, md: 3 }}
                className="value"
                key={v[0] as string}
              >
                {v[1]}
                <h3>{v[0]}</h3>
                <p>
                  We stay focused on what matters and create meaningful impact.
                </p>
              </Grid>
            ))}
          </Grid>
        </Container>
      </section>
    </>
  );
}
function Services() {
  return (
    <section className="serviceList">
      <Container maxWidth="lg">
        {services.map((s, i) => (
          <div className="serviceRow" key={s.title}>
            <div className="bigIcon">{s.icon}</div>
            <div>
              <h2>{s.title}</h2>
              <p>
                {s.text} We help organizations apply practical methods that
                support sustainable growth.
              </p>
            </div>
            <ul>
              {[
                "Strategy & Roadmaps",
                "Team Alignment",
                "Measurable Outcomes",
              ].map((x) => (
                <li key={x}>{x}</li>
              ))}
            </ul>
          </div>
        ))}
      </Container>
    </section>
  );
}
function Contact() {
  return (
    <>
      <section className="contact">
        <Container maxWidth="lg">
          <div>
            <h2>Send us a message</h2>
            <Grid container spacing={2}>
              <Grid size={{ xs: 12, sm: 6 }}>
                <TextField fullWidth label="First Name" />
              </Grid>
              <Grid size={{ xs: 12, sm: 6 }}>
                <TextField fullWidth label="Last Name" />
              </Grid>
              <Grid size={12}>
                <TextField fullWidth label="Work Email" />
              </Grid>
              <Grid size={12}>
                <TextField fullWidth label="Company" />
              </Grid>
              <Grid size={12}>
                <TextField
                  fullWidth
                  multiline
                  rows={4}
                  label="How can we help?"
                />
              </Grid>
            </Grid>
            <Button variant="contained">Send message</Button>
          </div>
          <aside>
            <h3>Contact information</h3>
            <p>
              <Phone />
              303.478.9416
            </p>
            <p>
              <Email />
              jaredbengtson@northboundstrategy.org
            </p>
            <h3>Connect</h3>
            <LinkedIn />
            <Instagram />
          </aside>
        </Container>
      </section>
    </>
  );
}
export function Site({ page }: { page: string }) {
  const body =
    page === "home" ? (
      <Home />
    ) : page === "about" ? (
      <About />
    ) : page === "services" ? (
      <Services />
    ) : page === "contact" ? (
      <Contact />
    ) : (
      <Home />
    );
  return (
    <>
      <Header page={page} />
      <Hero page={page} />
      {body}
      <Footer />
    </>
  );
}
