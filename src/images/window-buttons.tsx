import React from "react";

const BUTTON_SIZE = 24;
const VIEWBOX = `0 0 ${BUTTON_SIZE} ${BUTTON_SIZE}`;

export function MaximizeButton({
  className,
}: {
  className?: string;
}): React.ReactNode {
  return (
    <svg
      className={className}
      xmlns="http://www.w3.org/2000/svg"
      viewBox={VIEWBOX}
      width={BUTTON_SIZE}
      height={BUTTON_SIZE}
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <rect x="4" y="4" width="16" height="16" rx="2" ry="2"></rect>
    </svg>
  );
}
export function UnmaximizeButton({
  className,
}: {
  className?: string;
}): React.ReactNode {
  return (
    <svg
      className={className}
      xmlns="http://www.w3.org/2000/svg"
      viewBox={VIEWBOX}
      width={BUTTON_SIZE}
      height={BUTTON_SIZE}
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <rect x="4" y="4" width="16" height="16" rx="2" ry="2"></rect>
    </svg>
  );
}
export function MinimizeButton({
  className,
}: {
  className?: string;
}): React.ReactNode {
  return (
    <svg
      className={className}
      xmlns="http://www.w3.org/2000/svg"
      viewBox={VIEWBOX}
      width={BUTTON_SIZE}
      height={BUTTON_SIZE}
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <line x1="6" y1="12" x2="18" y2="12"></line>
    </svg>
  );
}

export function CloseButton({
  className,
}: {
  className?: string;
}): React.ReactNode {
  return (
    <svg
      className={className}
      xmlns="http://www.w3.org/2000/svg"
      viewBox={VIEWBOX}
      width={BUTTON_SIZE}
      height={BUTTON_SIZE}
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <line x1="6" y1="6" x2="18" y2="18"></line>
      <line x1="18" y1="6" x2="6" y2="18"></line>
    </svg>
  );
}
