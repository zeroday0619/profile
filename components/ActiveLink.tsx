"use client";

import Link, { type LinkProps } from "next/link";
import { useRouter } from "next/router";
import { type PropsWithChildren, useMemo } from "react";

type ActiveLinkProps = LinkProps & {
  activeClassName: string;
  className?: string;
};

const ActiveLink = ({
  children,
  activeClassName,
  className = "",
  ...props
}: PropsWithChildren<ActiveLinkProps>) => {
  const { asPath, isReady } = useRouter();

  const computedClassName = useMemo(() => {
    if (!isReady) return className;

    const linkPathname = new URL(
      (props.as || props.href) as string,
      typeof window !== "undefined" ? window.location.href : "http://localhost"
    ).pathname;

    const activePathname = new URL(
      asPath,
      typeof window !== "undefined" ? window.location.href : "http://localhost"
    ).pathname;

    return linkPathname === activePathname
      ? `${className} ${activeClassName}`.trim()
      : className;
  }, [asPath, isReady, props.as, props.href, activeClassName, className]);

  return (
    <Link className={computedClassName} {...props}>
      {children}
    </Link>
  );
};

export default ActiveLink;