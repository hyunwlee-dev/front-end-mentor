import React, { HTMLAttributes, ReactNode } from 'react';

interface IProps extends HTMLAttributes<HTMLHeadElement> {
  className?: string;
  children?: ReactNode;
}

const Header: React.FC<IProps> = ({ className, children }) => {
  return <header className={className}>{children}</header>;
};

export { Header };
