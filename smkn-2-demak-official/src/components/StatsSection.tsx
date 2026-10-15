import React, { useState, useEffect, useRef } from 'react';
import { Users, GraduationCap, Award, BookOpen } from 'lucide-react';
import { SCHOOL_STATS } from '../data/schoolData';

export const StatsSection: React.FC = () => {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.disconnect();
        }
      },
      { threshold: 0.2 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  return (
    <section
      ref={sectionRef}
      className="py-16 bg-gradient-to-r from-slate-950 via-blue-950 to-slate-900 text-white relative overflow-hidden border-y border-blue-900/60"
    >
      {/* Decorative ambient elements */}
      <div className="absolute inset-0 bg-[radial-gradient(#38bdf8_1px,transparent_1px)] [background-size:24px_24px] opacity-10 pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center max-w-2xl mx-auto mb-12">
          <p className="text-xs font-bold uppercase tracking-widest text-amber-400 mb-1">
            Statistik Capaian Pendidikan
          </p>
          <h2 className="text-2xl sm:text-3xl font-extrabold tracking-tight">
            SMK Negeri 2 Demak dalam Angka
          </h2>
          <p className="text-xs sm:text-sm text-slate-300 mt-2">
            Data operasional dan perkembangan ekosistem pembelajaran vokasi terkini.
          </p>
        </div>

        <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8">
          {SCHOOL_STATS.map((stat) => (
            <StatCard key={stat.id} stat={stat} animate={isVisible} />
          ))}
        </div>
      </div>
    </section>
  );
};

interface StatCardProps {
  stat: {
    id: string;
    label: string;
    value: number;
    suffix: string;
    description: string;
  };
  animate: boolean;
}

const StatCard: React.FC<StatCardProps> = ({ stat, animate }) => {
  const [currentValue, setCurrentValue] = useState(animate ? stat.value : 0);

  useEffect(() => {
    if (!animate) return;

    let start = 0;
    const duration = 1200; // ms
    const startTime = performance.now();

    const updateCounter = (currentTime: number) => {
      const elapsed = currentTime - startTime;
      const progress = Math.min(elapsed / duration, 1);
      // Ease out cubic
      const ease = 1 - Math.pow(1 - progress, 3);
      const val = Math.floor(ease * stat.value);
      setCurrentValue(val);

      if (progress < 1) {
        requestAnimationFrame(updateCounter);
      } else {
        setCurrentValue(stat.value);
      }
    };

    const animId = requestAnimationFrame(updateCounter);
    return () => cancelAnimationFrame(animId);
  }, [animate, stat.value]);

  const getIcon = (id: string) => {
    switch (id) {
      case 'students':
        return Users;
      case 'teachers':
        return GraduationCap;
      case 'majors':
        return BookOpen;
      case 'awards':
        return Award;
      default:
        return Award;
    }
  };

  const Icon = getIcon(stat.id);

  return (
    <div className="p-6 rounded-2xl bg-white/5 border border-white/10 backdrop-blur-sm hover:border-amber-400/40 transition-colors flex flex-col items-center text-center group">
      <div className="w-12 h-12 rounded-xl bg-blue-900/60 border border-blue-700/50 flex items-center justify-center text-amber-400 mb-4 group-hover:scale-110 transition-transform">
        <Icon className="w-6 h-6" />
      </div>

      <div className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white tracking-tight tabular-nums font-mono">
        {currentValue.toLocaleString('id-ID')}
        <span className="text-amber-400 text-2xl sm:text-3xl font-sans font-bold ml-1">
          {stat.suffix}
        </span>
      </div>

      <h3 className="text-sm font-bold text-slate-200 mt-2">
        {stat.label}
      </h3>

      <p className="text-xs text-slate-400 mt-1 line-clamp-2">
        {stat.description}
      </p>
    </div>
  );
};
