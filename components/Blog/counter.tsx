"use client";

import { useEffect, useState, useRef } from 'react';
type CounterProps = {
  endValue : number,
  duration : number
}
const Counter = ({ endValue, duration } : CounterProps) => {
  const [value, setValue] = useState(0);
  const [isCounting, setIsCounting] = useState(false);
  const ref = useRef(null);

  useEffect(() => {
    const handleIntersection = (entries : any) => {
      entries.forEach((entry : any)  => {
        if (entry.isIntersecting) {
          setIsCounting(true);
        }
      });
    };

    const observer = new IntersectionObserver(handleIntersection, {
      threshold: 0.1,
    });

    if (ref.current) {
      observer.observe(ref.current);
    }

    return () => {
      if (ref.current) {
        observer.unobserve(ref.current);
      }
    };
  }, []);

  useEffect(() => {
    if (!isCounting) return;

    let start = 0;
    const increment = endValue / (duration / 100);
    const timer = setInterval(() => {
      start += increment;
      if (start >= endValue) {
        setValue(endValue);
        clearInterval(timer);
      } else {
        setValue(Math.round(start));
      }
    }, 100);

    return () => clearInterval(timer);
  }, [isCounting, endValue, duration]);

  return <span ref={ref}>{value} %</span>;
};

export default Counter;
