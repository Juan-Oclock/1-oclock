import React from 'react';
import { useScrollAnimation } from '../hooks/useScrollAnimation';

type AnimationType = 'fade-up' | 'fade-in' | 'slide-left' | 'slide-right' | 'scale' | 'text-reveal';

interface AnimateOnScrollProps {
  children: React.ReactNode;
  animation?: AnimationType;
  delay?: number;
  className?: string;
  threshold?: number;
  rootMargin?: string;
  as?: keyof JSX.IntrinsicElements;
}

const AnimateOnScroll: React.FC<AnimateOnScrollProps> = ({
  children,
  animation = 'fade-up',
  delay = 0,
  className = '',
  threshold = 0.1,
  rootMargin = '0px 0px -50px 0px',
  as: Component = 'div'
}) => {
  const { ref, isVisible } = useScrollAnimation<HTMLDivElement>({
    threshold,
    rootMargin,
    triggerOnce: true
  });

  const animationClass = `animate-${animation}`;
  const visibleClass = isVisible ? 'visible' : '';

  const style: React.CSSProperties = delay > 0 ? { transitionDelay: `${delay}ms` } : {};

  return (
    <Component
      ref={ref as any}
      className={`${animationClass} ${visibleClass} ${className}`}
      style={style}
    >
      {children}
    </Component>
  );
};

// Staggered list animation wrapper
interface StaggeredListProps {
  children: React.ReactNode[];
  animation?: AnimationType;
  staggerDelay?: number;
  className?: string;
  itemClassName?: string;
  threshold?: number;
  as?: keyof JSX.IntrinsicElements;
  itemAs?: keyof JSX.IntrinsicElements;
}

export const StaggeredList: React.FC<StaggeredListProps> = ({
  children,
  animation = 'fade-up',
  staggerDelay = 100,
  className = '',
  itemClassName = '',
  threshold = 0.1,
  as: Component = 'div',
  itemAs: ItemComponent = 'div'
}) => {
  const { ref, isVisible } = useScrollAnimation<HTMLDivElement>({
    threshold,
    triggerOnce: true
  });

  const animationClass = `animate-${animation}`;
  const visibleClass = isVisible ? 'visible' : '';

  return (
    <Component ref={ref as any} className={className}>
      {React.Children.map(children, (child, index) => (
        <ItemComponent
          key={index}
          className={`${animationClass} ${visibleClass} ${itemClassName}`}
          style={{ transitionDelay: `${index * staggerDelay}ms` }}
        >
          {child}
        </ItemComponent>
      ))}
    </Component>
  );
};

// Text reveal animation - reveals each line or word
interface TextRevealProps {
  text: string;
  as?: keyof JSX.IntrinsicElements;
  className?: string;
  splitBy?: 'word' | 'line';
  staggerDelay?: number;
}

export const TextReveal: React.FC<TextRevealProps> = ({
  text,
  as: Component = 'div',
  className = '',
  splitBy = 'word',
  staggerDelay = 50
}) => {
  const { ref, isVisible } = useScrollAnimation<HTMLDivElement>({
    threshold: 0.1,
    triggerOnce: true
  });

  const parts = splitBy === 'word' ? text.split(' ') : text.split('\n');
  const visibleClass = isVisible ? 'visible' : '';

  return (
    <Component ref={ref as any} className={className}>
      {parts.map((part, index) => (
        <span
          key={index}
          className={`inline-block animate-fade-up ${visibleClass}`}
          style={{ transitionDelay: `${index * staggerDelay}ms` }}
        >
          {part}
          {splitBy === 'word' && index < parts.length - 1 ? '\u00A0' : ''}
        </span>
      ))}
    </Component>
  );
};

// Parallax wrapper component
interface ParallaxProps {
  children: React.ReactNode;
  speed?: number;
  className?: string;
}

export const Parallax: React.FC<ParallaxProps> = ({
  children,
  speed = 0.5,
  className = ''
}) => {
  const ref = React.useRef<HTMLDivElement>(null);
  const [offset, setOffset] = React.useState(0);

  React.useEffect(() => {
    const handleScroll = () => {
      if (!ref.current) return;

      const rect = ref.current.getBoundingClientRect();
      const windowHeight = window.innerHeight;
      const elementCenter = rect.top + rect.height / 2;
      const viewportCenter = windowHeight / 2;
      const distanceFromCenter = elementCenter - viewportCenter;

      setOffset(distanceFromCenter * speed * -0.1);
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    handleScroll();

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, [speed]);

  return (
    <div
      ref={ref}
      className={`parallax-slow ${className}`}
      style={{ transform: `translateY(${offset}px)` }}
    >
      {children}
    </div>
  );
};

export default AnimateOnScroll;
