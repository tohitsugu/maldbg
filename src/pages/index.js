import clsx from 'clsx';
import Link from '@docusaurus/Link';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import Layout from '@theme/Layout';
import Heading from '@theme/Heading';
import styles from './index.module.css';

function HomepageHeader() {
  const {siteConfig} = useDocusaurusContext();
  return (
    <header className={clsx('hero', styles.heroBanner)}>
      <div className="container">
        <Heading as="h1" className={styles.heroTitle}>
          Technical Writing Portfolio
        </Heading>
        <p className={styles.heroSubtitle}>
          Welcome to my collection of technical documentation examples
        </p>
      </div>
    </header>
  );
}

function PortfolioSection() {
  const portfolioItems = [
    {
      title: 'API Documentation',
      description: 'Comprehensive API references and integration guides',
      link: '/docs/api-reference',
    },
    {
      title: 'User Guides',
      description: 'Step-by-step tutorials and how-to articles',
      link: '/docs/mobile-user-guide',
    },
    {
      title: 'Release Notes',
      description: 'Product updates and version release documentation',
      link: '/docs/release-notes',
    },
    {
      title: 'Marketing Materials',
      description: 'Color pages with graphhics',
      link: '/docs/marketing',
    },
  ];

  return (
    <section className={styles.portfolioSection}>
      <div className="container">
        <Heading as="h2" className={styles.sectionTitle}>
          My Work
        </Heading>
        <div className={styles.portfolioGrid}>
          {portfolioItems.map((item, idx) => (
            <div key={idx} className={styles.portfolioCard}>
              <Heading as="h3" className={styles.cardTitle}>
                {item.title}
              </Heading>
              <p className={styles.cardDescription}>{item.description}</p>
              <Link className={styles.cardLink} to={item.link}>
                View Documentation →
              </Link>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function AboutSection() {
  return (
    <section className={styles.aboutSection}>
      <div className="container">
        <div className={styles.aboutContent}>
          <Heading as="h2" className={styles.sectionTitle}>
            About Me
          </Heading>
          <p className={styles.aboutText}>
            Hi, my name is Ian. I'm a technical writer passionate about creating clear, concise, and user-friendly documentation.
            With expertise in various documentation tools and modern methodologies, I help bridge the gap between
            complex technical concepts and end users.
          </p>
          <div className={styles.buttons}>
            <Link
              className={styles.secondaryButton}
              to="/blog">
              Read Blog
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}

export default function Home() {
  const {siteConfig} = useDocusaurusContext();
  return (
    <Layout
      title={`${siteConfig.title}`}
      description="Technical Writing Portfolio">
      <HomepageHeader />
      <main>
        <PortfolioSection />
        <AboutSection />
      </main>
    </Layout>
  );
}
