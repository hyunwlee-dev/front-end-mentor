import { PolymorphicProps, PolymorphicRef } from '@hyunwlee/type';
import { forwardRef } from 'react';

type ContainerProps<T extends React.ElementType> = PolymorphicProps<
  T,
  {
    className?: string;
    children?: React.ReactNode;
  }
>;

type ContainerComponent = <T extends React.ElementType = 'div'>(props: ContainerProps<T>) => React.ReactElement | null;

const Container: ContainerComponent = forwardRef(
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
