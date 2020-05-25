import React, { ReactElement } from 'react';

export interface WithChildrenProps {
  children: React.ReactNode;
}

export function pack(
  children: React.ReactNode = null,
  ...components
) {
  if (!components.length) {
    return children;
  }

  const [Component, ...rest] = components;

  return <Component>{pack(children, ...rest)}</Component>;
}

export function createPack(...components) {
  return function PackComponent({ children }: WithChildrenProps) {
    return pack(children, ...components);
  };
}
