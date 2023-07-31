import { HTMLAttributes } from 'react';
import * as React from 'react';

interface IProps extends HTMLAttributes<HTMLElement> {}
const Footer: React.FC<IProps> = ({ children, ...restProps }) => {
  return <footer {...restProps}>{children}</footer>;
};

export { Footer };
