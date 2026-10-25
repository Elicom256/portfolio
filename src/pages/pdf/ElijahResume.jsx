import { Document, Page, PDFViewer, Text, View, Link } from '@react-pdf/renderer';
import { styles } from './styles';

const SectionTitle = ({ children }) => (
  <View style={styles.sectionTitleRow}>
    <Text style={styles.sectionTitle}>{children}</Text>
  </View>
);

const SkillRow = ({ label, children }) => (
  <View style={styles.bullet}>
    <Text style={styles.bulletDot}>•</Text>
    <Text style={styles.bulletText}>
      <Text style={{ fontWeight: 'bold' }}>{label}: </Text>
      {children}
    </Text>
  </View>
);

const Bullet = ({ children }) => (
  <View style={styles.bullet}>
    <Text style={styles.bulletDot}>•</Text>
    <Text style={styles.bulletText}>{children}</Text>
  </View>
);

const Experience = ({ role, org, dates, bullets, tech }) => (
  <View style={styles.expBlock}>
    <View style={styles.expHeader}>
      <Text style={styles.role}>{role}</Text>
      <Text style={styles.dates}>{dates}</Text>
    </View>
    <Text style={styles.orgLine}>{org}</Text>
    {bullets.map((bullet) => (
      <Bullet key={bullet.slice(0, 32)}>{bullet}</Bullet>
    ))}
    {tech && <Text style={styles.techLine}>Tech: {tech}</Text>}
  </View>
);

const ResumePDF = () => (
  <Document>
    <Page size='A4' style={styles.page}>
      {/* HEADER */}
      <View style={styles.header}>
        <Text style={styles.name}>MUGISHA ELIJAH</Text>
        <View style={styles.accentBar} />
        <Text style={styles.title}>
          Full-Stack Developer | Laravel · Node.js | React + TypeScript | SaaS & AI Automation
        </Text>
        <View style={styles.contactRow}>
          <Text style={styles.contactItem}>+256 781 490 899</Text>
          <Text style={styles.sep}>·</Text>
          <Text style={styles.contactItem}>elicomelijah@gmail.com</Text>
          <Text style={styles.sep}>·</Text>
          <Link src='https://github.com/Elicom256' style={styles.contactLink}>
            github.com/Elicom256
          </Link>
          <Text style={styles.sep}>·</Text>
          <Link src='https://linkedin.com/in/mugisha-elijah-88a291239' style={styles.contactLink}>
            linkedin.com/in/mugisha-elijah
          </Link>
          <Text style={styles.sep}>·</Text>
          <Text style={styles.contactItem}>Uganda — Open to Remote Worldwide</Text>
        </View>
      </View>

      {/* SUMMARY */}
      <View style={styles.section}>
        <SectionTitle>Professional Summary</SectionTitle>
        <Text style={styles.paragraph}>
          Full-Stack Developer with 3+ years designing, shipping and operating production SaaS on
          Laravel and Node.js backends with React + TypeScript frontends. Co-founder of KlassApp
          (1,700+ students) and founder of AfroDuuka — two live multi-tenant products I own
          end-to-end: schema, APIs, Docker deployment, CI/CD and production support. Strong in
          event-driven automation, WhatsApp integration and AI-assisted engineering workflows.
        </Text>
      </View>

      {/* SKILLS */}
      <View style={styles.section}>
        <SectionTitle>Technical Skills</SectionTitle>
        <SkillRow label='Backend'>
          PHP 8, Laravel, Node.js, Express, REST API Design, Eloquent ORM, Prisma, Actions &
          Service Classes, Events, Listeners & Queued Jobs, PHPUnit
        </SkillRow>
        <SkillRow label='Frontend'>
          React.js, TypeScript, Next.js, Tailwind CSS, Redux / RTK Query, Component-Driven UI
        </SkillRow>
        <SkillRow label='Data & Infrastructure'>
          PostgreSQL, MySQL, Database Design, Query Optimization, Docker, Nginx, Linux / VPS,
          GitHub Actions CI/CD
        </SkillRow>
        <SkillRow label='Integrations & AI'>
          WhatsApp Business API, Webhooks, Scheduled & Background Jobs, PDF Generation,
          LLM-Powered Features, AI-Assisted & Agentic Workflows
        </SkillRow>
        <SkillRow label='Practices'>
          OOP & SOLID · Clean Architecture · System Design · Root-Cause Analysis · Production
          Debugging
        </SkillRow>
      </View>

      {/* EXPERIENCE */}
      <View style={styles.section}>
        <SectionTitle>Experience & Key Products</SectionTitle>

        <Experience
          role='Co-founder & Full-Stack Developer — KlassApp'
          dates='2025 – Present'
          org={
            <Text>
              School-management SaaS · <Link src='https://klassapp.xyz' style={styles.contactLink}>klassapp.xyz</Link> · 1,700+ students, multiple schools
            </Text>
          }
          bullets={[
            'Co-founded and engineer a production platform schools run their day on — learner records, attendance, academics, bursary and storekeeper operations.',
            'Replaced a weeks-long manual reporting cycle with on-demand PDF report-card generation.',
            'Built role-based dashboards and authorization boundaries for administrators, teachers, bursars and storekeepers.',
            'Shipped event-driven WhatsApp notification workflows; containerized with Docker and deployed on Nginx / Linux VPS infrastructure with CI/CD.',
          ]}
          tech='Laravel · React · TypeScript · PostgreSQL · Docker · Nginx · WhatsApp Business API'
        />

        <Experience
          role='Founder & Full-Stack Developer — AfroDuuka'
          dates='2026 – Present'
          org={
            <Text>
              Multi-tenant inventory & business-management SaaS ·{' '}
              <Link src='https://afroduuka.app' style={styles.contactLink}>afroduuka.app</Link>
            </Text>
          }
          bullets={[
            'Architected a multi-tenant platform with strict business- and branch-level data isolation across products, inventory, purchases, sales and financial reporting.',
            'Automated operations with event-driven jobs and queued WhatsApp notifications for sales, purchases, low-stock and subscription lifecycle events.',
            'Built the AfroDuuka Assistant — an AI layer that answers business-intelligence questions in plain language, moving the product beyond CRUD.',
            'Own the full lifecycle: tenant-aware schema design, Laravel API, React dashboard and production support.',
          ]}
          tech='Laravel · React · TypeScript · PostgreSQL · Sanctum · Docker · WhatsApp Business API'
        />

        <Experience
          role='Full-Stack Developer — Contract & Freelance'
          dates='2024'
          org='Independent client work — requirements through deployment'
          bullets={[
            'Shipped client platforms end-to-end, including a league-management system and a national engagement platform.',
            'Built an investment portfolio app and a location-based marketplace with Node.js, Express and Prisma.',
          ]}
        />
      </View>

      {/* SELECTED PROJECTS */}
      <View style={styles.section}>
        <SectionTitle>Selected Projects</SectionTitle>
        <View style={styles.expBlock}>
          <View style={styles.expHeader}>
            <Text style={styles.role}>Afro Invest — Secure investment platform for African SMEs</Text>
            <Link src='https://afro-invest.vercel.app' style={styles.contactLink}>
              afro-invest.vercel.app
            </Link>
          </View>
          <Bullet>
            Portfolio and transaction management with JWT authentication, strict validation on every
            financial figure, and auditable records. Node.js · Express · PostgreSQL · Prisma · React
          </Bullet>
        </View>
        <View style={styles.expBlock}>
          <View style={styles.expHeader}>
            <Text style={styles.role}>Local Marketplace — Location-based e-commerce</Text>
            <Link src='https://shopping-cart-mauve-theta.vercel.app' style={styles.contactLink}>
              live demo
            </Link>
          </View>
          <Bullet>
            Matches nearby buyers and sellers with distance-ranked listings and real-time alerts for
            new local listings, powered by background jobs. React · Node.js · PostgreSQL
          </Bullet>
        </View>
      </View>

      {/* EDUCATION */}
      <View style={styles.section}>
        <SectionTitle>Education & Continuous Learning</SectionTitle>
        <Bullet>
          Self-taught Full-Stack Developer — Laravel, PHP, Node.js, React, TypeScript, SaaS
          architecture · Backend Development with Laravel — Laracasts (2023 – ongoing) · continuous
          study in clean architecture, testing and DevOps
        </Bullet>
      </View>
    </Page>
  </Document>
);

export const ResumeDocument = ResumePDF;

export const ElijahResume = () => (
  <PDFViewer style={{ width: '100%', height: '100%' }} showToolbar={false}>
    <ResumePDF />
  </PDFViewer>
);
