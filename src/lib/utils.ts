import { useCallback } from "react";

export function cls(...classnames: string[]) {
  return classnames.join(" ");
}

export function useScrollLock() {
  const lockScroll = (detail: HTMLElement | null, body: HTMLElement) => {
    body.style.overflow = "hidden";
    if (detail) {
      detail.style.overflow = "";
    }
  };

  const unlockScroll = (detail: HTMLElement | null, body: HTMLElement) => {
    body.style.overflow = "";
    if (detail) {
      detail.style.overflow = "hidden";
    }
  };

  return {
    lockScroll,
    unlockScroll,
  };
}
