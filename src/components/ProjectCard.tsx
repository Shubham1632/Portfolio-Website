import { useState, useRef, useEffect } from 'react';
import { Github, ExternalLink } from 'lucide-react';
import { Badge } from './ui/badge';
import { playClick, playHover } from '@/hooks/useSoundEffects';
import { gsap } from '@/lib/gsap';
import { useGSAPContext } from '@/hooks/useGSAPContext';

interface Project {
  title: string;
  isNew?: boolean;
  badge?: string;
  tagline?: string;
  description: string;
  tags: string[];
  categories: { key: string; label: string }[];
  githubUrl: string;
  liveUrl?: string;
}

interface ProjectCardProps {
  project: Project;
  index: number;
}

export const ProjectCard = ({ project, index }: ProjectCardProps) => {
  const [isMobile, setIsMobile] = useState(() =>
    typeof window !== 'undefined' ? window.innerWidth < 640 : false,
  );
  const cardRef = useRef<HTMLDivElement>(null);

  // Track breakpoint for tag count — avoids reading window during render
  useEffect(() => {
    const mq = window.matchMedia('(max-width: 639px)');
    const onChange = (e: MediaQueryListEvent) => setIsMobile(e.matches);
    mq.addEventListener('change', onChange);
    return () => mq.removeEventListener('change', onChange);
  }, []);

  useGSAPContext(
    () => {
      if (!cardRef.current) return;

      // Subtle parallax for the background number
      gsap.to(cardRef.current.querySelector('.parallax-number'), {
        y: -60,
        ease: 'none',
        scrollTrigger: {
          trigger: cardRef.current,
          start: 'top bottom',
          end: 'bottom top',
          scrub: 1, // Smooth scrub
        },
      });
    },
    cardRef,
    [],
  );

  return (
    <div
      ref={cardRef}
      className="project-card-wrapper w-full h-full relative"
      onMouseEnter={playHover}
    >
      <div
        className={[
          'group w-full h-full relative border-2 border-black px-5 py-8 md:px-6 md:py-10 flex flex-col justify-between',
          'shadow-brutal-3d hover:shadow-brutal-3d-hover transition-all duration-200 ease-out',
          'hover:-translate-x-2 hover:-translate-y-2 active:translate-x-1 active:translate-y-1 active:!shadow-none',
          'bg-white rounded-none min-h-[420px] md:min-h-[480px]',
        ].join(' ')}
      >
        {/* Parallax Background Number Container */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none z-0">
          <div className="parallax-number absolute -right-4 -bottom-20 text-[14rem] font-black text-black/[0.03] group-hover:text-black/[0.06] group-hover:scale-105 transition-all duration-500 leading-none select-none">
            {(index + 1).toString().padStart(2, '0')}
          </div>
        </div>

        {/* CRT pixel scanline overlay */}
        <div aria-hidden="true" className="pixel-scanline-overlay z-0" />

        {/* ── "Latest Work" or Custom badge ── */}
        {(project.badge || project.isNew) && (
          <div className="absolute -top-3 right-1 md:-right-3 bg-black text-white px-2 py-1 md:px-3 text-[8px] md:text-[9px] font-black uppercase tracking-wider md:tracking-widest border-2 border-black z-20 rotate-0 md:rotate-3 hover:rotate-0 transition-transform whitespace-nowrap origin-top-right">
            {project.badge || 'Latest Work'}
          </div>
        )}

        {/* ── Card Content ── */}
        <div className="relative z-10">
          {/* Category dots */}
          <div className="flex gap-1.5 mb-4">
            {project.categories.map((cat) => (
              <span
                key={cat.key}
                title={cat.label}
                className="font-mono text-[9px] uppercase tracking-widest px-1.5 py-0.5 border border-black/10 bg-black/4 text-foreground/50"
              >
                {cat.label}
              </span>
            ))}
          </div>

          <div
            className={`flex justify-between items-start ${project.tagline ? 'mb-2' : 'mb-6'}`}
          >
            <h3 className="font-black text-foreground leading-tight text-xl">
              {project.title}
            </h3>
          </div>

          {project.tagline && (
            <p className="font-mono text-[10px] md:text-xs font-bold text-foreground/50 mb-4 uppercase tracking-widest">
              {project.tagline}
            </p>
          )}

          <p className="body-text mb-6 md:mb-8 font-normal leading-relaxed text-foreground/80 text-xs line-clamp-4 md:line-clamp-6">
            {project.description}
          </p>

          <div className="flex flex-wrap gap-1.5 mb-5 md:mb-6">
            {project.tags.slice(0, isMobile ? 5 : 8).map((tag) => (
              <Badge
                key={tag}
                variant="secondary"
                className="font-mono text-[9px] font-bold border border-black/5 bg-black/5 px-2 py-0.5 rounded-none group-hover:bg-black group-hover:text-white transition-colors duration-300"
              >
                {tag}
              </Badge>
            ))}
            {project.tags.length > 8 && (
              <span className="text-[9px] font-bold opacity-30">
                +{project.tags.length - 8}
              </span>
            )}
          </div>
        </div>

        {/* ── Project actions ── */}
        <div className="project-action-buttons mt-auto flex gap-3 relative z-10">
          <a
            href={project.githubUrl}
            target="_blank"
            rel="noopener noreferrer"
            onClick={(e) => {
              e.stopPropagation();
              playClick();
            }}
            aria-label={`View ${project.title} source code on GitHub`}
            className="project-card-btn border-black bg-white text-foreground hover:bg-black hover:text-white active:scale-95"
          >
            <Github className="w-4 h-4 flex-shrink-0" />
            <span>GitHub Repo</span>
          </a>
          {project.liveUrl && (
            <a
              href={project.liveUrl}
              target="_blank"
              rel="noopener noreferrer"
              onClick={(e) => {
                e.stopPropagation();
                playClick();
              }}
              aria-label={`View ${project.title} live demo`}
              className="project-card-btn border-black bg-black text-white hover:bg-white hover:text-black active:scale-95"
            >
              <ExternalLink className="w-4 h-4 flex-shrink-0" />
              <span>Live Demo</span>
            </a>
          )}
        </div>
      </div>
    </div>
  );
};

export default ProjectCard;
