import type { ReactNode, SVGProps } from "react";

export type IconName = "heart" | "user" | "chat" | "check" | "arrow" | "shield" | "close";

const paths: Record<IconName, ReactNode> = {
  heart: <path d="M12 21s-7-4.4-9.2-9A5.3 5.3 0 0 1 12 6.2 5.3 5.3 0 0 1 21.2 12C19 16.6 12 21 12 21z" />,
  user: (
    <>
      <circle cx="12" cy="8" r="4" />
      <path d="M4 21c1-4.5 4.2-7 8-7s7 2.5 8 7" />
    </>
  ),
  chat: <path d="M21 12a8 8 0 0 1-11.6 7.1L4 20l1-4.6A8 8 0 1 1 21 12z" />,
  check: <path d="M5 12l5 5 9-10" />,
  arrow: <path d="M5 12h14M13 6l6 6-6 6" />,
  shield: (
    <>
      <path d="M12 3l8 3v6c0 4.5-3.4 8-8 9-4.6-1-8-4.5-8-9V6z" />
      <path d="M9 12l2 2 4-4" />
    </>
  ),
  close: <path d="M6 6l12 12M18 6L6 18" />,
};

type IconProps = Omit<SVGProps<SVGSVGElement>, "name"> & {
  name: IconName;
  size?: number;
  strokeWidth?: number;
  filled?: boolean;
};

/** Inline stroke icon. Decorative by default (aria-hidden). */
export function Icon({ name, size = 24, strokeWidth = 2.2, filled = false, ...rest }: IconProps) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill={filled ? "currentColor" : "none"}
      stroke="currentColor"
      strokeWidth={strokeWidth}
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
      {...rest}
    >
      {paths[name]}
    </svg>
  );
}
