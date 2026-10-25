import { Link } from 'react-router-dom';
import { TypeAnimation } from 'react-type-animation';
import { ArrowRight, ArrowUpRight, CheckCircle2, FileText } from 'lucide-react';
import { FaGithub, FaLinkedin, FaWhatsapp, FaXTwitter } from 'react-icons/fa6';
import { Mail } from 'lucide-react';
import eli3 from '../pics/pc.jpg';
import eli1 from '../pics/bg-null.png';
import projects from './json/projects.json';

const products = [
  {
    name: 'KlassApp',
    role: 'Co-founder',
    tagline: 'School management SaaS for African schools',
    detail:
      'A production school-management SaaS serving 1,700+ students across multiple schools in Uganda. Schools run their whole day on it — learner records, attendance, academics, bursary and storekeeper operations — through role-based dashboards for administrators, teachers, bursars and storekeepers. Parents stay in the loop with automated WhatsApp notifications for fees, results and school announcements.',
    points: [
      'Report cards that took weeks of manual work now generate as instant PDFs',
      'Role-based access and audit trails for admins, teachers, bursars and storekeepers',
      'Event-driven WhatsApp notifications — fee reminders, results, alerts',
      'Dockerized Laravel + React stack deployed on hardened Nginx / Linux VPS',
    ],
    url: 'https://klassapp.xyz/',
    stack: ['React', 'TypeScript', 'Laravel', 'PostgreSQL'],
  },
  {
    name: 'AfroDuuka',
    role: 'Founder',
    tagline: 'Multi-tenant inventory SaaS for small businesses',
    detail:
      'A multi-tenant inventory and business-management SaaS I founded for small and growing African businesses — real-time control over products, stock, purchases, sales, cash flows and branches, with strict business- and branch-level data isolation. Event-driven automation and queued WhatsApp notifications handle the follow-up quietly in the background: low-stock alerts, daily sales summaries and subscription lifecycle events.',
    points: [
      'Multi-tenant architecture with business- and branch-level data isolation',
      'Automated WhatsApp low-stock alerts and daily sales summaries',
      'One-click profit & loss reports and sales analytics',
      'AfroDuuka Assistant — AI business intelligence answered in plain language',
    ],
    url: 'https://afroduuka.app/',
    stack: ['React', 'TypeScript', 'Laravel', 'PostgreSQL'],
  },
];

const stats = [
  { value: '3+', label: 'Years building production SaaS' },
  { value: '1,700+', label: 'Students served on KlassApp' },
  { value: '2', label: 'Live products built & run end-to-end' },
  { value: '24/7', label: 'Systems I monitor and support in production' },
];

const journey = [
  {
    year: '2022',
    text: 'Self-taught the fundamentals — HTML, CSS and responsive layout, building page after page until the structure of the web made sense.',
  },
  {
    year: '2023',
    text: 'Moved into JavaScript and React for dynamic interfaces, then went deep on backend engineering with PHP and Laravel through Laracasts.',
  },
  {
    year: '2024',
    text: 'Shipped contract work for real clients — a league-management platform and a national engagement platform — from requirements to deployment.',
  },
  {
    year: '2025',
    text: 'Scaled KlassApp in production: PostgreSQL under real load, Docker, CI/CD with GitHub Actions, and day-to-day VPS operations on Linux.',
  },
  {
    year: '2026',
    text: 'Co-founded KlassApp and launched AfroDuuka — multi-tenant SaaS with event-driven automation and AI-assisted workflows.',
  },
];

const skillGroups = [
  {
    title: 'Backend',
    blurb: 'APIs and domain logic that hold up under daily production use.',
    skills: ['PHP 8', 'Laravel', 'Node.js', 'Express', 'REST APIs', 'Eloquent ORM', 'Actions & Service Classes', 'Queued Jobs', 'Events & Listeners', 'PHPUnit'],
  },
  {
    title: 'Frontend',
    blurb: 'Interfaces that stay fast and clear as the product grows.',
    skills: ['React', 'TypeScript', 'Next.js', 'Tailwind CSS', 'Redux / RTK Query', 'Reusable Components'],
  },
  {
    title: 'Data & Infrastructure',
    blurb: 'The schemas, queries and pipelines behind live systems.',
    skills: ['PostgreSQL', 'MySQL', 'Database Design', 'Docker', 'Nginx', 'Linux / VPS', 'GitHub Actions CI/CD'],
  },
  {
    title: 'Integrations & Automation',
    blurb: 'Connecting products to the channels users already live on.',
    skills: ['WhatsApp Business APIs', 'Webhooks', 'Background Jobs', 'PDF Generation', 'AI-Assisted Development', 'Agentic Coding Workflows'],
  },
];

const socials = [
  { href: 'https://github.com/Elicom256', icon: <FaGithub className='h-5 w-5' />, label: 'GitHub' },
  { href: 'https://www.linkedin.com/in/mugisha-elijah-88a291239/', icon: <FaLinkedin className='h-5 w-5' />, label: 'LinkedIn' },
  { href: 'https://x.com/ElicomElijah', icon: <FaXTwitter className='h-5 w-5' />, label: 'X' },
  { href: 'https://wa.me/256781490899/?text=Hello%20Elicom', icon: <FaWhatsapp className='h-5 w-5' />, label: 'WhatsApp' },
  { href: 'mailto:elicomelijah@gmail.com', icon: <Mail className='h-5 w-5' />, label: 'Email' },
];

const SectionHeading = ({ eyebrow, title, subtitle }) => (
  <div className='text-center'>
    <p className='text-sm font-semibold uppercase tracking-[0.4em] text-amber-300/90'>{eyebrow}</p>
    <h2 className='mt-4 text-3xl font-semibold tracking-tight text-white sm:text-4xl'>{title}</h2>
    {subtitle && <p className='mx-auto mt-3 max-w-2xl text-base leading-7 text-slate-400'>{subtitle}</p>}
  </div>
);

const Hero = () => (
  <section id='home' className='relative overflow-hidden pt-24'>
    <div className='absolute inset-0 bg-slate-950/95' />
    <div
      className='absolute inset-0 bg-cover bg-center opacity-40'
      style={{ backgroundImage: `url(${eli3})` }}
    />
    <div className='absolute inset-0 bg-[radial-gradient(circle_at_top,_rgba(16,185,129,0.24),_transparent_35%),linear-gradient(180deg,rgba(15,23,42,0.93),rgba(15,23,42,0.9))]' />

    <div className='relative z-10 mx-auto max-w-7xl px-4 pb-20 pt-10 sm:px-6 lg:px-8'>
      <div className='flex flex-col gap-12 lg:flex-row lg:items-center lg:justify-between'>
        <div className='max-w-2xl space-y-6 text-center lg:text-left'>
          <p className='text-sm uppercase tracking-[0.35em] text-amber-300/90'>
            Full-Stack Laravel Developer · SaaS · AI Automation
          </p>

          <h1 className='text-3xl font-semibold leading-tight tracking-tight text-white sm:text-5xl lg:text-6xl'>
            Hi, I’m <span className='text-amber-300'>Mugisha Elijah</span>,
            building products people use every day.
          </h1>

          <div className='italic leading-8 text-slate-200 max-w-xl sm:text-xl'>
            <span>
              I design, build and operate production SaaS end-to-end — database
              schema, API architecture, React frontends, Docker deployment and
              ongoing production support. Over the last 3+ years I’ve done it
              with Laravel, Node.js, React, TypeScript and PostgreSQL, shipping
              two live products of my own: KlassApp, a school-management
              platform serving 1,700+ students, and AfroDuuka, a multi-tenant
              inventory system for growing businesses. What drives me is
              software that deletes real manual work — report cards generated
              in seconds instead of weeks, fee reminders delivered over
              WhatsApp, stock alerts that reach shop owners where they already
              are.
            </span>
          </div>

          <div className='text-2xl font-semibold text-amber-300'>
            <TypeAnimation
              sequence={[
                'Software Engineer',
                2500,
                'Co-founder of KlassApp',
                2500,
                'Founder of AfroDuuka',
                2500,
                'Laravel · Node.js · React · PostgreSQL',
                2500,
              ]}
              wrapper='span'
              speed={50}
              repeat={Infinity}
            />
          </div>

          <div className='flex flex-col items-center justify-center gap-4 sm:flex-row sm:justify-start'>
            <a
              href='#products'
              className='inline-flex items-center justify-center rounded-full bg-amber-400 px-6 py-3 text-sm font-semibold text-slate-950 shadow-xl shadow-amber-400/20 transition hover:bg-amber-300'
            >
              View my work
              <ArrowRight className='ml-2 h-4 w-4' />
            </a>

            <Link
              to='/resume'
              className='inline-flex items-center justify-center rounded-full border border-slate-700 bg-slate-900/80 px-6 py-3 text-sm font-semibold text-slate-100 transition hover:border-amber-300 hover:text-amber-300'
            >
              <FileText className='mr-2 h-4 w-4' />
              Resume
            </Link>
          </div>
        </div>

        <div className='mx-auto flex w-full max-w-xs justify-center lg:mx-0 lg:max-w-sm'>
          <div className='relative overflow-hidden rounded-[2rem] border border-slate-700/80 bg-slate-950/70 p-4 shadow-2xl shadow-slate-950/40 backdrop-blur-xl'>
            <img src={eli1} alt='Elicom' className='w-full rounded-3xl object-cover shadow-xl' />
          </div>
        </div>
      </div>

      <div className='mt-16 grid gap-4 sm:grid-cols-2 lg:grid-cols-4'>
        {stats.map((stat) => (
          <div
            key={stat.label}
            className='rounded-3xl border border-slate-800/80 bg-slate-900/80 p-6 text-center shadow-xl shadow-slate-950/10'
          >
            <p className='text-3xl font-bold text-amber-300'>{stat.value}</p>
            <p className='mt-2 text-sm leading-5 text-slate-400'>{stat.label}</p>
          </div>
        ))}
      </div>
    </div>
  </section>
);

const Products = () => (
  <section id='products' className='mx-auto max-w-7xl px-4 py-20 sm:px-6 lg:px-8'>
    <SectionHeading
      eyebrow='Core products'
      title='Two live products, built and run end-to-end'
      subtitle='From architecture to deployment to production support — these are systems real schools and businesses depend on every day. I built them, I run them, and I answer for them when something breaks.'
    />

    <div className='mt-12 grid gap-6 lg:grid-cols-2'>
      {products.map((product) => (
        <a
          key={product.name}
          href={product.url}
          target='_blank'
          rel='noreferrer'
          className='group relative overflow-hidden rounded-3xl border border-slate-800/80 bg-slate-900/80 p-8 shadow-xl shadow-slate-950/10 transition-all duration-300 ease-in-out hover:-translate-y-1 hover:border-amber-300/50'
        >
          <div className='absolute right-0 top-0 h-28 w-28 rounded-bl-[3rem] bg-gradient-to-bl from-amber-400/15 via-amber-400/5 to-transparent' />

          <div className='relative'>
            <div className='flex items-start justify-between gap-4'>
              <div>
                <div className='flex flex-wrap items-center gap-3'>
                  <span className='inline-flex items-center gap-2 rounded-full bg-amber-400/10 px-3 py-1 text-xs font-semibold uppercase tracking-widest text-amber-300'>
                    <span className='relative flex h-2 w-2'>
                      <span className='absolute inline-flex h-full w-full animate-ping rounded-full bg-amber-400 opacity-60' />
                      <span className='relative inline-flex h-2 w-2 rounded-full bg-amber-400' />
                    </span>
                    Live
                  </span>
                  <span className='rounded-full border border-slate-700 px-3 py-1 text-xs font-semibold uppercase tracking-widest text-slate-300'>
                    {product.role}
                  </span>
                </div>
                <h3 className='mt-4 text-2xl font-bold text-white transition group-hover:text-amber-300 sm:text-3xl'>
                  {product.name}
                </h3>
                <p className='mt-1 text-lg text-amber-200/80'>{product.tagline}</p>
              </div>
              <ArrowUpRight className='h-6 w-6 shrink-0 text-slate-500 transition group-hover:text-amber-300' />
            </div>

            <p className='mt-4 text-sm leading-7 text-slate-300'>{product.detail}</p>

            <ul className='mt-5 space-y-2.5'>
              {product.points.map((point) => (
                <li key={point} className='flex items-start gap-2.5 text-sm leading-6 text-slate-300'>
                  <CheckCircle2 className='mt-1 h-4 w-4 shrink-0 text-amber-300' />
                  <span>{point}</span>
                </li>
              ))}
            </ul>

            <div className='mt-6 flex flex-wrap gap-2'>
              {product.stack.map((tech) => (
                <span
                  key={tech}
                  className='rounded-full bg-slate-950/80 px-3 py-1 text-xs font-semibold text-slate-400 ring-1 ring-slate-800'
                >
                  {tech}
                </span>
              ))}
            </div>
          </div>
        </a>
      ))}
    </div>
  </section>
);

const About = () => (
  <section id='about' className='border-y border-slate-800/60 bg-slate-950/60'>
    <div className='mx-auto max-w-7xl px-4 py-20 sm:px-6 lg:px-8'>
      <SectionHeading
        eyebrow='About'
        title='Engineer, founder — and the person on call'
        subtitle="I take features from requirements through implementation, deployment and production support, and I work directly with users to turn recurring problems into product improvements. Being a founder-engineer means I've done every part of the job — and I bring that ownership to every codebase I touch."
      />

      <div className='mt-12 grid gap-6 lg:grid-cols-2'>
        <div className='rounded-3xl border border-slate-800/80 bg-slate-900/80 p-8'>
          <h3 className='text-xl font-semibold text-amber-300'>How I work</h3>
          <p className='mt-4 leading-8 text-slate-300'>
            I build software for real-world operational environments — school
            administration, retail and inventory, financial operations and
            automated notifications. That means the features I ship are ones
            people rely on to run their day: attendance has to be taken every
            morning, stock counts have to be right, report cards have to go out
            on time. My focus is clean architecture, service- and
            action-oriented Laravel design, and third-party integrations that
            quietly remove manual work from people's days.
          </p>
          <p className='mt-4 leading-8 text-slate-300'>
            I use AI coding agents critically — to investigate production
            issues, implement features, write tests and improve maintainability
            — while owning every decision they help me make. A bug isn't closed
            until I understand why it happened; I care about root-cause fixes
            over short-term workarounds.
          </p>
          <p className='mt-4 leading-8 text-slate-300'>
            Whether the product is mine or yours, I work the same way: talk to
            the users, write the schema, ship the feature, deploy it, and be
            reachable when it matters. That end-to-end ownership — from whiteboard
            to 2 a.m. production incident — is the way I've always worked.
          </p>
        </div>

        <div className='rounded-3xl border border-slate-800/80 bg-slate-900/80 p-8'>
          <h3 className='text-xl font-semibold text-amber-300'>The journey so far</h3>
          <ul className='mt-6 space-y-5'>
            {journey.map((item) => (
              <li key={item.year} className='flex gap-4'>
                <span className='w-14 shrink-0 text-sm font-bold text-amber-300'>{item.year}</span>
                <span className='border-l border-slate-700 pl-4 text-sm leading-6 text-slate-300'>
                  {item.text}
                </span>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  </section>
);

const Skills = () => (
  <section id='skills' className='mx-auto max-w-7xl px-4 py-20 sm:px-6 lg:px-8'>
    <SectionHeading
      eyebrow='Skills'
      title='The stack behind the products'
      subtitle='Chosen for production reliability — everything here runs inside systems real users depend on daily. Nothing on this list is theoretical.'
    />

    <div className='mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-4'>
      {skillGroups.map((group) => (
        <div
          key={group.title}
          className='rounded-3xl border border-slate-800/80 bg-slate-900/80 p-6 transition-all duration-300 hover:-translate-y-1'
        >
          <h3 className='text-lg font-semibold text-amber-300'>{group.title}</h3>
          <p className='mt-1.5 text-sm leading-6 text-slate-400'>{group.blurb}</p>
          <div className='mt-4 flex flex-wrap gap-2'>
            {group.skills.map((skill) => (
              <span
                key={skill}
                className='rounded-full bg-slate-950/80 px-3 py-1 text-xs font-medium text-slate-300 ring-1 ring-slate-800'
              >
                {skill}
              </span>
            ))}
          </div>
        </div>
      ))}
    </div>
  </section>
);

const Projects = () => {
  const side = projects.filter((project) => !project.featured);

  return (
    <section id='projects' className='border-y border-slate-800/60 bg-slate-950/60'>
      <div className='mx-auto max-w-7xl px-4 py-20 sm:px-6 lg:px-8'>
        <SectionHeading
          eyebrow='More projects'
          title='Other things I’ve built'
          subtitle='Selected contract and personal projects along the way — each one designed, shipped and still live.'
        />

        <div className='mt-12 grid gap-6 md:grid-cols-2'>
          {side.map((project) => (
            <div
              key={project.title}
              className='rounded-3xl border border-slate-800/80 bg-slate-900/80 p-6 shadow-xl shadow-slate-950/10'
            >
              <div className='flex items-center justify-between gap-4'>
                <h3 className='text-xl font-semibold text-amber-300'>{project.title}</h3>
                <span className='inline-flex items-center gap-2 rounded-full bg-emerald-400/10 px-3 py-1 text-xs font-semibold uppercase tracking-widest text-emerald-300'>
                  <span className='relative flex h-2 w-2'>
                    <span className='absolute inline-flex h-full w-full animate-ping rounded-full bg-emerald-400 opacity-60' />
                    <span className='relative inline-flex h-2 w-2 rounded-full bg-emerald-400' />
                  </span>
                  Live
                </span>
              </div>
              <p className='mt-2 text-slate-300'>{project.description}</p>
              <p className='mt-3 text-sm leading-6 text-slate-400'>{project.content}</p>

              <div className='mt-4 flex flex-wrap gap-2'>
                {project.stack.map((tech) => (
                  <span
                    key={tech}
                    className='rounded-full bg-slate-950/80 px-3 py-1 text-xs font-medium text-slate-400 ring-1 ring-slate-800'
                  >
                    {tech}
                  </span>
                ))}
              </div>

              <div className='mt-5 flex items-center gap-5 border-t border-slate-800/70 pt-4'>
                {project.github && (
                  <a
                    href={project.github}
                    target='_blank'
                    rel='noreferrer'
                    className='inline-flex items-center gap-2 text-sm font-semibold text-slate-300 transition hover:text-amber-300'
                  >
                    <FaGithub className='h-4 w-4' /> Source
                  </a>
                )}
                <a
                  href={project.website}
                  target='_blank'
                  rel='noreferrer'
                  className='inline-flex items-center gap-1.5 text-sm font-semibold text-slate-300 transition hover:text-sky-300'
                >
                  Visit <ArrowUpRight className='h-4 w-4' />
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

const Contact = () => {
  const handleSubmit = (event) => {
    event.preventDefault();
    const form = new FormData(event.target);
    const name = form.get('name') || 'Visitor';
    const email = form.get('email') || '';
    const message = form.get('message') || '';
    const subject = encodeURIComponent(`Portfolio message from ${name}`);
    const body = encodeURIComponent(`${message}\n\nFrom: ${name} (${email})`);
    window.location.href = `mailto:elicomelijah@gmail.com?subject=${subject}&body=${body}`;
  };

  return (
    <section id='contact' className='mx-auto max-w-7xl px-4 py-20 sm:px-6 lg:px-8'>
      <div className='mx-auto max-w-3xl'>
        <SectionHeading
          eyebrow='Contact'
          title="Let's build something together"
          subtitle='Open to remote work worldwide. I’m at my best taking a product problem end-to-end — a Laravel or Node.js backend, a React frontend, the integrations and the deployment — or joining an existing SaaS team to help ship faster. Tell me what you’re building and where it hurts.'
        />

        <div className='mt-12 rounded-3xl border border-slate-800/80 bg-slate-950/90 p-8 shadow-2xl shadow-slate-950/30'>
          <form className='grid gap-6' onSubmit={handleSubmit}>
            <div className='grid gap-6 sm:grid-cols-2'>
              <input
                id='name'
                name='name'
                placeholder='Your name'
                className='rounded-xl border border-slate-800/90 bg-slate-900/80 px-4 py-3 text-base text-slate-100 outline-none transition placeholder:text-slate-500 focus:border-amber-300'
              />
              <input
                id='email'
                name='email'
                type='email'
                placeholder='Your email'
                className='rounded-xl border border-slate-800/90 bg-slate-900/80 px-4 py-3 text-base text-slate-100 outline-none transition placeholder:text-slate-500 focus:border-amber-300'
              />
            </div>
            <textarea
              id='message'
              name='message'
              rows='5'
              placeholder='Tell me about your project — what it does, who it serves, and what you need built'
              className='min-h-[140px] resize-none rounded-xl border border-slate-800/90 bg-slate-900/80 px-4 py-3 text-base text-slate-100 outline-none transition placeholder:text-slate-500 focus:border-amber-300'
            />
            <div className='flex justify-center'>
              <button
                type='submit'
                className='rounded-full bg-amber-400 px-8 py-3 text-sm font-semibold text-slate-950 shadow-xl shadow-amber-400/20 transition hover:bg-amber-300'
              >
                Send message
              </button>
            </div>
          </form>

          <div className='mt-10 border-t border-slate-800/70 pt-8'>
            <p className='text-center text-sm uppercase tracking-[0.35em] text-slate-500'>Elsewhere</p>
            <p className='mx-auto mt-3 max-w-md text-center text-sm leading-6 text-slate-400'>
              Fastest response on WhatsApp or email — I usually reply within a day,
              wherever in the world you are.
            </p>
            <div className='mt-6 flex flex-wrap justify-center gap-4'>
              {socials.map((social) => (
                <a
                  key={social.label}
                  href={social.href}
                  target={social.href.startsWith('mailto') ? undefined : '_blank'}
                  rel='noreferrer'
                  className='inline-flex h-12 w-12 items-center justify-center rounded-2xl border border-slate-800/90 bg-slate-900/90 text-slate-100 transition hover:border-amber-300 hover:text-amber-300'
                  aria-label={social.label}
                >
                  {social.icon}
                </a>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

const Home = () => {
  return (
    <>
      <Hero />
      <Products />
      <About />
      <Skills />
      <Projects />
      <Contact />
    </>
  );
};

export default Home;
