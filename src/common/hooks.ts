import { useCallback, useEffect, useRef, useState } from 'react';

const REDUCED_MOTION_QUERY = '(prefers-reduced-motion: no-preference)';
const isRenderingOnServer = typeof window === 'undefined';

export const useRandomInterval = (
  callback: () => void,
  minDelay: number,
  maxDelay: number,
) => {
  const random = (min: number, max: number) =>
    Math.floor(Math.random() * (max - min)) + min;
  const timeoutId = useRef(null);
  const savedCallback = useRef(callback);
  useEffect(() => {
    savedCallback.current = callback;
  }, [callback]);
  useEffect(() => {
    const isEnabled =
      typeof minDelay === 'number' && typeof maxDelay === 'number';
    if (isEnabled) {
      const handleTick = () => {
        const nextTickAt = random(minDelay, maxDelay);
        timeoutId.current = window.setTimeout(() => {
          savedCallback.current();
          handleTick();
        }, nextTickAt);
      };
      handleTick();
    }
    return () => window.clearTimeout(timeoutId.current);
  }, [minDelay, maxDelay]);
  const cancel = useCallback(function () {
    window.clearTimeout(timeoutId.current);
  }, []);
  return cancel;
};

const getInitialState = () => {
  // For our initial server render, we won't know if the user
  // prefers reduced motion, but it doesn't matter. This value
  // will be overwritten on the client, before any animations
  // occur.
  return isRenderingOnServer
    ? true
    : !window.matchMedia(REDUCED_MOTION_QUERY).matches;
};

export const usePrefersReducedMotion = () => {
  const [prefersReducedMotion, setPrefersReducedMotion] =
    useState(getInitialState);
  useEffect(() => {
    const mediaQueryList = window.matchMedia(REDUCED_MOTION_QUERY);
    const listener = (event: any) => {
      setPrefersReducedMotion(!event.matches);
    };
    if (mediaQueryList.addEventListener) {
      mediaQueryList.addEventListener('change', listener);
    } else {
      mediaQueryList.addListener(listener);
    }
    return () => {
      if (mediaQueryList.removeEventListener) {
        mediaQueryList.removeEventListener('change', listener);
      } else {
        mediaQueryList.removeListener(listener);
      }
    };
  }, []);
  return prefersReducedMotion;
};
