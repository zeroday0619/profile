"use client";

import Link, { type LinkProps } from "next/link";
import { useRouter } from "next/router";
import { type PropsWithChildren } from "react";

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
  const { pathname } = useRouter();
  const target = props.as || props.href;
  const targetPathname = typeof target === "string" ? target.split(/[?#]/)[0] : target.pathname;
  const isActive = targetPathname === pathname;
  const computedClassName = isActive ? `${className} ${activeClassName}`.trim() : className;

  return (
    <Link className={computedClassName} aria-current={isActive ? "page" : undefined} {...props}>
      {children}
    </Link>
  );
};

export default ActiveLink;
