import { PolymorphicProps, PolymorphicRef } from '@hyunwlee/type';
import * as React from 'react';

type ContainerProps<T extends React.ElementType = 'div'> = PolymorphicProps<
  T,
  {
    className?: string;
    children?: React.ReactNode;
  }
>;

type ContainerComponent = <C extends React.ElementType = 'div'>(props: ContainerProps<C>) => React.ReactElement | null;

// @ts-ignore
const Container: ContainerComponent = React.forwardRef(
  <T extends React.ElementType>(
    { as, className = '', children, ...restProps }: ContainerProps<T>,
    ref: PolymorphicRef<T>['ref']
  ) => {
    const Element = as || 'div';
    return (
      <Element className={className} ref={ref} {...restProps}>
        {children}
      </Element>
    );
  }
);

export { Container };
