import { useEffect, useState, useRef } from "react";

// This hook ensures a minimum delay before showing content after a successful fetch.
// It prevents flicker if the fetch is too fast, but doesn't delay unnecessarily if the fetch is slow.
export function useDelayedSuccess(
  status: string,
  delay: number = 1000,
): boolean {
  const [showContent, setShowContent] = useState(false);

  // Store the timestamp of when the loading started.
  // Use `useRef` to persist this value between renders without triggering rerenders.
  const loadStart = useRef<number | null>(null);

  useEffect(() => {
    let timeout: NodeJS.Timeout;

    // If the status is "loading", record the start time and reset the content visibility.
    if (status === "loading") {
      setShowContent(false);
      loadStart.current = Date.now(); // mark when loading began
    }

    // When fetch status becomes "success", calculate how long the fetch took
    if (status === "success") {
      const loadTime = Date.now() - (loadStart.current ?? Date.now());

      // Calculate how much more time (if any) we need to wait to meet the minimum delay
      const remainingDelay = Math.max(delay - loadTime, 0);

      // Only wait the remaining delay (if any), then show content
      timeout = setTimeout(() => {
        setShowContent(true);
      }, remainingDelay);
    }

    // Clear timeout if the component unmounts or status changes
    return () => {
      clearTimeout(timeout);
    };
  }, [status, delay]);

  // Returns true when the content is ready to be shown
  return showContent;
}
