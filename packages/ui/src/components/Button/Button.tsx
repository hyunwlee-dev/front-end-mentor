<<<<<<< HEAD
import { PolymorphicProps, PolymorphicRef } from '@hyunwlee/type';
=======
import { PolymorphicProps, PolymorphicRef } from '@front-end-mentor/types';
>>>>>>> previous/develop/multi-step-form
import * as React from 'react';

type ButtonProps<T extends React.ElementType = 'button'> = PolymorphicProps<
  T,
  {
    className?: string;
    children?: React.ReactNode;
  }
>;

type ButtonComponent = <C extends React.ElementType = 'button'>(Props: ButtonProps<C>) => React.ReactElement | null;

<<<<<<< HEAD
// @ts-ignore
const Button: ButtonComponent = React.forwardRef(
  <T extends React.ElementType = 'button'>(
    { as, className = '', children, ...restProps }: ButtonProps<T>,
    ref: PolymorphicRef<T>['ref']
=======
const Button: ButtonComponent = React.forwardRef(
  <T extends React.ElementType = 'button'>(
    { className = '', as, children, ...restProps }: ButtonProps<T>,
    ref: PolymorphicRef<T>
>>>>>>> previous/develop/multi-step-form
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
