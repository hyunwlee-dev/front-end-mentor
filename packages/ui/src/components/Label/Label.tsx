<<<<<<< HEAD
import { PolymorphicProps, PolymorphicRef } from '@hyunwlee/type';
=======
import { PolymorphicProps, PolymorphicRef } from '@front-end-mentor/types';
>>>>>>> previous/develop/multi-step-form
import * as React from 'react';

type LabelProps<T extends React.ElementType = 'label'> = PolymorphicProps<
  T,
  {
    className?: string;
    htmlFor: string;
    children?: React.ReactNode;
  }
>;

type LabelComponent = <C extends React.ElementType = 'label'>(Props: LabelProps<C>) => React.ReactElement | null;

<<<<<<< HEAD
// @ts-ignore
const Label: LabelComponent = React.forwardRef(
  <T extends React.ElementType = 'label'>(
    { as, className = '', htmlFor, children, ...restProps }: LabelProps<T>,
    ref: PolymorphicRef<T>['']
=======
const Label: LabelComponent = React.forwardRef(
  <T extends React.ElementType = 'label'>(
    { className = '', htmlFor, children, ...restProps }: LabelProps<T>,
    ref: PolymorphicRef<T>
>>>>>>> previous/develop/multi-step-form
  ) => {
    return (
      <label htmlFor={htmlFor} className={className} ref={ref} {...restProps}>
        {children}
      </label>
    );
  }
);

export { Label };
