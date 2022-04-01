import { useRef, useState, useEffect } from "react";

export default function useScrollPercentage() {
  const scrollRef = useRef<HTMLElement>(null);
  const [scrollPercentage, setScrollPercentage] = useState(NaN);

  const reportScroll = (e: any) => {
    setScrollPercentage(getScrollPercentage(e.target));
  };

  useEffect(() => {
    const node = scrollRef.current;
    if (node !== null) {
      node.addEventListener("scroll", reportScroll, { passive: true });
      if (Number.isNaN(scrollPercentage)) {
        setScrollPercentage(getScrollPercentage(node));
      }
    }
    return () => {
      if (node !== null) {
        node.removeEventListener("scroll", reportScroll);
      }
    };
  }, [scrollPercentage]);

  return [scrollRef, Number.isNaN(scrollPercentage) ? 0 : scrollPercentage];
}

function getScrollPercentage(element: any) {
  if (element === null) {
    return NaN;
  }
  const height = element.scrollHeight - element.clientHeight;
  return Math.round((element.scrollTop / height) * 100);
}
