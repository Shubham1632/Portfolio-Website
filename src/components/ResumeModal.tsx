import { useEffect, useRef } from 'react';
import { createPortal } from 'react-dom';
import { AnimatePresence, motion } from 'framer-motion';
import { Download, ExternalLink, FileText, X } from 'lucide-react';
import { playClick, playPop } from '@/hooks/useSoundEffects';

interface ResumeModalProps {
  isOpen: boolean;
  onClose: () => void;
  resumeUrl?: string;
  downloadName?: string;
}

const ResumeModal = ({
  isOpen,
  onClose,
  resumeUrl = '/cv.pdf',
  downloadName = 'cv.pdf',
}: ResumeModalProps) => {
  const closeButtonRef = useRef<HTMLButtonElement>(null);

  useEffect(() => {
    if (!isOpen) return;

    document.body.style.overflow = 'hidden';
    const focusTimer = setTimeout(
      () => closeButtonRef.current?.focus(),
      300,
    );

    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === 'Escape') {
        playPop();
        onClose();
      }
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => {
      clearTimeout(focusTimer);
      document.body.style.overflow = '';
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [isOpen, onClose]);

  return createPortal(
    <AnimatePresence>
      {isOpen && (
        <motion.div
          className="fixed inset-0 z-[9999] flex items-center justify-center p-4 sm:p-6 md:p-10"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          onClick={(event) => {
            if (event.target === event.currentTarget) {
              playPop();
              onClose();
            }
          }}
          role="dialog"
          aria-modal="true"
          aria-label="Resume Preview"
        >
          <div className="absolute inset-0 bg-black/80 backdrop-blur-sm" />
          <motion.div
            className="relative w-full max-w-4xl h-[90vh] flex flex-col bg-white border-4 border-black shadow-[16px_16px_0px_0px_rgba(0,0,0,1)]"
            initial={{ opacity: 0, y: 60, scale: 0.95 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 40, scale: 0.97 }}
          >
            <div className="flex items-center justify-between px-5 py-3 border-b-4 border-black bg-black text-white">
              <div className="flex items-center gap-3">
                <FileText className="w-4 h-4 text-white/70" />
                <span className="font-mono text-xs uppercase tracking-[0.2em]">
                  Shubham_Gangurde_CV.pdf
                </span>
              </div>
              <div className="flex items-center gap-2">
                <a
                  href={resumeUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  onClick={playClick}
                  aria-label="Open CV in new tab"
                  className="p-2 border border-white/20 hover:bg-white/10"
                >
                  <ExternalLink className="w-4 h-4" />
                </a>
                <a
                  href={resumeUrl}
                  download={downloadName}
                  onClick={playClick}
                  className="flex items-center gap-2 px-4 py-1.5 border-2 border-white bg-white text-black font-mono text-xs font-black uppercase tracking-widest hover:bg-black hover:text-white"
                >
                  <Download className="w-3.5 h-3.5" />
                  <span className="hidden sm:inline">Download</span>
                </a>
                <button
                  ref={closeButtonRef}
                  onClick={() => {
                    playPop();
                    onClose();
                  }}
                  aria-label="Close CV preview"
                  className="p-2 border border-white/20 hover:bg-red-600 hover:border-red-600"
                >
                  <X className="w-4 h-4" />
                </button>
              </div>
            </div>
            <div className="relative flex-1 min-h-0 bg-zinc-100">
              <iframe
                src={resumeUrl}
                title="Shubham Gangurde CV"
                className="w-full h-full border-0"
              />
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>,
    document.body,
  );
};

export default ResumeModal;
