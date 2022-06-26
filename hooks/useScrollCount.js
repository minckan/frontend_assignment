import { useRef, useEffect, useCallback } from 'react';

const useScrollCount = (end, start = 0, duration = 2000, delay = 0) => {
    const element = useRef();
    const observer = useRef(null);
    const stepTime = duration / (end - start)

  const onScroll = useCallback(
    ([entry]) => {
      const { current } = element;
      if (entry.isIntersecting) {
        let currentNumber = start;
        let counter = setInterval(() => {     
            if (end - currentNumber < 5) {
              clearInterval(counter);
              counter = setInterval(() => {
                currentNumber += 1;
                current.innerHTML = currentNumber;
                if (currentNumber === end) {
                  clearInterval(counter);
                  observer.current.disconnect(element.current);
                }
              }, 200)
            } else {
              currentNumber += 1;
              current.innerHTML = currentNumber;
            }
            
            if (currentNumber === end) {
                clearInterval(counter);
                observer.current.disconnect(element.current);
            }
        }, stepTime);
      }
    },
    [end, start, stepTime, element],
  );

  useEffect(() => {
    if (element.current) {
      observer.current = new IntersectionObserver(onScroll, { threshold: 0.7 });
      observer.current.observe(element.current);
    }

    return () => observer && observer.current.disconnect();
  }, [onScroll]);

  return {
    ref: element,
  };
};

export default useScrollCount;