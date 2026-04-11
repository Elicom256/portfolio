import { Document, Page, PDFViewer, Text, View, Link } from '@react-pdf/renderer';
import { styles } from './styles';

const HR = () => <View style={styles.hr} />;

const ResumePDF = () => (
  <Document>
    <Page size='A4' style={styles.page}>
      {/* HEADER */}
      <View style={styles.header}>
        <Text style={styles.name}>MUGISHA ELIJAH</Text>
        <Text style={styles.title}>
          Full-Stack Developer | React, Next.js, Node.js, Laravel | Scalable Systems Builder
        </Text>

        <View style={styles.contactRow}>
          <Text style={styles.contactItem}>+256 781 490 899</Text>
          <Text style={styles.contactItem}>elicomelijah@gmail.com</Text>
          <Link src='https://github.com/Elijah-ug' style={styles.contactItem}>
            github.com/Elijah-ug
          </Link>
          <Link src='https://linkedin.com/in/mugisha-elijah-88a291239' style={styles.contactItem}>
            linkedin.com/in/mugisha-elijah-88a291239
          </Link>
          <Text style={styles.contactItem}>Kabale, Uganda</Text>
        </View>
      </View>

      <HR />

      {/* SUMMARY */}
      <View>
        <Text style={styles.sectionTitle}>Professional Summary</Text>
        <Text style={styles.paragraph}>
          Results-driven Full-Stack Developer with 3+ years of experience building and deploying scalable web
          applications using React.js, Next.js, Node.js, Laravel, and PostgreSQL. Led the end-to-end development of
          KlassApp, a production system serving 1,700+ students across multiple schools. Strong focus on performance,
          automation, and clean architecture. Experienced in Docker, CI/CD pipelines, and VPS infrastructure. Proven
          ability to deliver impactful, real-world solutions.
        </Text>
      </View>

      <HR />

      {/* SKILLS */}
      <View>
        <Text style={styles.sectionTitle}>Technical Skills</Text>

        <View style={styles.bullet}>
          <Text style={styles.bulletDot}>•</Text>
          <Text style={styles.bulletText}>
            <Text style={{ fontWeight: 'bold' }}>Frontend:</Text> React.js, Next.js, TypeScript, Tailwind CSS, Chart.js,
            HTML5, CSS3
          </Text>
        </View>

        <View style={styles.bullet}>
          <Text style={styles.bulletDot}>•</Text>
          <Text style={styles.bulletText}>
            <Text style={{ fontWeight: 'bold' }}>Backend:</Text> Node.js, Express.js, PHP, Laravel, REST APIs, GraphQL,
            JWT/OAuth
          </Text>
        </View>

        <View style={styles.bullet}>
          <Text style={styles.bulletDot}>•</Text>
          <Text style={styles.bulletText}>
            <Text style={{ fontWeight: 'bold' }}>Database:</Text> PostgreSQL, Prisma ORM, Database Design, Query
            Optimization
          </Text>
        </View>

        <View style={styles.bullet}>
          <Text style={styles.bulletDot}>•</Text>
          <Text style={styles.bulletText}>
            <Text style={{ fontWeight: 'bold' }}>DevOps & Tools:</Text> Docker, GitHub Actions (CI/CD), VPS (Vultr),
            Nginx, Git, Vercel
          </Text>
        </View>
      </View>

      <HR />

      {/* PROJECTS */}
      <View>
        <Text style={styles.sectionTitle}>Key Projects</Text>

        {/* KLASSAPP */}
        <View style={styles.bullet}>
          <Text style={styles.bulletDot}>•</Text>
          <Text style={styles.bulletText}>
            <Text style={{ fontWeight: 'bold' }}>KlassApp – School Management System (Production)</Text> —{' '}
            <Link src='https://klassapp.xyz'>klassapp.xyz</Link>
            {'\n'}
            Led end-to-end development of a full-stack platform serving 1,700+ students across multiple schools.
            {'\n'}
            Automated report card generation, reducing processing time from weeks to minutes and eliminating manual
            administrative workload.
            {'\n'}
            Built secure multi-role dashboards (Admin, Teachers, Bursar, Storekeeper).
            {'\n'}
            Containerized with Docker and deployed on VPS using Nginx.
            {'\n'}
            <Text style={{ fontStyle: 'italic' }}>Tech: Laravel, PostgreSQL, Docker, Nginx</Text>
          </Text>
        </View>

        {/* LEAGUE */}
        <View style={styles.bullet}>
          <Text style={styles.bulletDot}>•</Text>
          <Text style={styles.bulletText}>
            <Text style={{ fontWeight: 'bold' }}>Rubanda Corporate League Platform (2024)</Text>
            {'\n'}
            Built an automated league system reducing admin workload by 80%.
            {'\n'}
            Delivered real-time standings and match updates to 1,000+ users weekly.
            {'\n'}
            <Text style={{ fontStyle: 'italic' }}>Tech: PERN Stack, Prisma, Tailwind CSS</Text>
          </Text>
        </View>

        {/* NRM */}
        <View style={styles.bullet}>
          <Text style={styles.bulletDot}>•</Text>
          <Text style={styles.bulletText}>
            <Text style={{ fontWeight: 'bold' }}>NRM Youth Digital Platform (2024)</Text>
            {'\n'}
            Developed dashboards and real-time engagement features for a 5,000+ user platform.
            {'\n'}
            Improved engagement through interactive UI and backend integrations.
            {'\n'}
            <Text style={{ fontStyle: 'italic' }}>Tech: PERN Stack, Prisma, Tailwind CSS</Text>
          </Text>
        </View>
      </View>

      <HR />

      {/* EXPERIENCE */}
      <View>
        <Text style={styles.sectionTitle}>Professional Experience</Text>

        <View style={styles.twoCol}>
          <Text style={styles.role}>Full-Stack Developer — NRM Kimeeza (Nov 2024 – Dec 2025)</Text>

          <View style={styles.descs}>
            <View style={styles.descRow}>
              <Text style={styles.bulletDot}>•</Text>
              <Text style={styles.desc}>Built scalable dashboards and engagement tools for a national platform.</Text>
            </View>

            <View style={styles.descRow}>
              <Text style={styles.bulletDot}>•</Text>
              <Text style={styles.desc}>Integrated chatbot systems with Node.js and JWT authentication.</Text>
            </View>

            <View style={styles.descRow}>
              <Text style={styles.bulletDot}>•</Text>
              <Text style={styles.desc}>Managed deployments using Docker and CI/CD pipelines.</Text>
            </View>
          </View>
        </View>

        <View style={styles.twoCol}>
          <Text style={styles.role}>Contract Full-Stack Developer — Rubanda Corporate League (Oct 2024 – Present)</Text>

          <View style={styles.descs}>
            <View style={styles.descRow}>
              <Text style={styles.bulletDot}>•</Text>
              <Text style={styles.desc}>Built and maintained automated league management systems.</Text>
            </View>

            <View style={styles.descRow}>
              <Text style={styles.bulletDot}>•</Text>
              <Text style={styles.desc}>Delivered real-time match updates and notifications.</Text>
            </View>

            <View style={styles.descRow}>
              <Text style={styles.bulletDot}>•</Text>
              <Text style={styles.desc}>Managed infrastructure, deployments, and CI/CD workflows.</Text>
            </View>
          </View>
        </View>
      </View>

      <HR />

      {/* EDUCATION */}
      <View>
        <Text style={styles.sectionTitle}>Education & Continuous Learning</Text>

        <View style={styles.bullet}>
          <Text style={styles.bulletDot}>•</Text>
          <Text style={styles.bulletText}>Self-Taught Software Engineer — Full-Stack Development & DevOps Focus</Text>
        </View>

        <View style={styles.bullet}>
          <Text style={styles.bulletDot}>•</Text>
          <Text style={styles.bulletText}>Core Web Development — W3Schools (2022)</Text>
        </View>

        <View style={styles.bullet}>
          <Text style={styles.bulletDot}>•</Text>
          <Text style={styles.bulletText}>Backend Development (PHP/Laravel) — Laracasts (2023)</Text>
        </View>
      </View>
    </Page>
  </Document>
);

export const ElijahResume = () => (
  <PDFViewer style={{ width: '100%', height: '100vh' }}>
    <ResumePDF />
  </PDFViewer>
);
