import { PolymorphicProps, PolymorphicRef } from '@hyunwlee/type';
import * as React from 'react';

type ButtonProps<T extends React.ElementType = 'button'> = PolymorphicProps<
  T,
  {
    className?: string;
    children?: React.ReactNode;
  }
>;

type ButtonComponent = <C extends React.ElementType = 'button'>(Props: ButtonProps<C>) => React.ReactElement | null;

// @ts-ignore
const Button: ButtonComponent = React.forwardRef(
  <T extends React.ElementType = 'button'>(
    { as, className = '', children, ...restProps }: ButtonProps<T>,
    ref: PolymorphicRef<T>['ref']
  ) => {
    const Element = as || 'button';
    return (
      <Element className={className} ref={ref} {...restProps}>
        {children}
      </Element>
    );
  }
);

export { Button };
