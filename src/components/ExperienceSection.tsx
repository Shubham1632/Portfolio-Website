import SectionBlock from './SectionBlock';
import { ScrollReveal } from './ui/ScrollReveal';

const experiences = [
  {
    role: 'Full Stack Intern',
    company: 'PenguinPass SRL — Milan, Italy',
    period: '[NOV 2024 – JAN 2025]',
    description:
      'Enhanced an event management portal with React Native, Vue.js, Next.js, GraphQL, SQLite, and TypeScript. Built a cross-platform mobile application, implemented offline mode, and optimized a legacy React Native application by resolving critical bugs and integrating new functionality.',
  },
  {
    role: 'Software Craftsperson',
    company: 'Incubyte — Remote, India',
    period: '[JUL 2023 – SEP 2024]',
    description:
      'Developed an AI-based solution accelerator with Next.js, Java, TypeScript, NestJS, Docker, OpenAI APIs, LLMs, vector embeddings, and semantic codebase analysis to modernize legacy applications.',
  },
  {
    role: 'Software Development Intern',
    company: 'Incubyte — Remote, India',
    period: '[JAN 2023 – JUL 2023]',
    description:
      'Developed an outdoor events management portal with Angular and NestJS, implemented Azure Active Directory authentication, and followed test-driven development and clean coding practices.',
  },
  {
    role: 'Summer Intern',
    company: 'Persistent Systems Ltd. — Pune, India',
    period: '[JUN 2022 – AUG 2022]',
    description:
      'Reduced application loading time by 40% through lazy loading, improved routing, refactored component structure, and fixed a background-animation bug using Angular, TypeScript, Three.js, Java, and Spring Boot.',
  },
];

const ExperienceSection = () => (
  <SectionBlock id="experience" title="Experience">
    <ScrollReveal animation="stagger-fade-up" className="space-y-12">
      {experiences.map((exp) => (
        <div
          key={exp.role}
          className="relative pl-8 md:pl-0 border-l md:border-l-0 border-black/20 md:grid md:grid-cols-[1fr_2fr] md:gap-8 pb-12 last:pb-0"
        >
          <div className="md:text-right md:pr-8 md:border-r border-black/20 relative">
            <div className="hidden md:block absolute top-1 -right-[5px] w-[9px] h-[9px] rounded-none bg-black"></div>
            <div className="md:hidden absolute top-1 -left-[5px] w-[9px] h-[9px] rounded-none bg-black"></div>

            <h4 className="font-mono text-xs tracking-widest text-foreground/60 uppercase mb-1">
              {exp.period}
            </h4>
            <h3 className="font-bold text-base md:text-lg">{exp.company}</h3>
          </div>

          <div className="mt-2 md:mt-0">
            <h3 className="text-base font-bold text-foreground md:hidden mb-2">
              {exp.role}
            </h3>
            <h3 className="text-lg font-bold text-foreground hidden md:block mb-3">
              {exp.role}
            </h3>
            <p className="body-text text-sm">{exp.description}</p>
          </div>
        </div>
      ))}
    </ScrollReveal>
  </SectionBlock>
);

export default ExperienceSection;
