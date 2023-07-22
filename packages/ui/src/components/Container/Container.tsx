<<<<<<< HEAD
import { PolymorphicProps, PolymorphicRef } from '@hyunwlee/type';
=======
import { PolymorphicProps, PolymorphicRef } from '@front-end-mentor/types';
>>>>>>> previous/develop/multi-step-form
import { forwardRef } from 'react';

type ContainerProps<T extends React.ElementType> = PolymorphicProps<
  T,
  {
    className?: string;
    children?: React.ReactNode;
  }
>;

<<<<<<< HEAD
type ContainerComponent = <T extends React.ElementType = 'div'>(props: ContainerProps<T>) => React.ReactElement | null;

// @ts-ignore
const Container: ContainerComponent = forwardRef(
  <T extends React.ElementType>(
    { as, className = '', children, ...restProps }: ContainerProps<T>,
=======
type ContainerComponent = <T extends React.ElementType = 'span'>(props: ContainerProps<T>) => React.ReactElement | null;

const Container: ContainerComponent = forwardRef(
  <T extends React.ElementType>(
    { className = '', as, children, ...restProps }: ContainerProps<T>,
>>>>>>> previous/develop/multi-step-form
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
