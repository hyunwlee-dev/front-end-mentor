import { PolymorphicProps, PolymorphicRef } from '@front-end-mentor/types';
import { forwardRef } from 'react';

type ContainerProps<T extends React.ElementType> = PolymorphicProps<
  T,
  {
    className?: string;
    children?: React.ReactNode;
  }
>;

type ContainerComponent = <T extends React.ElementType = 'span'>(props: ContainerProps<T>) => React.ReactElement | null;

const Container: ContainerComponent = forwardRef(
  <T extends React.ElementType>(
    { className = '', as, children, ...restProps }: ContainerProps<T>,
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
