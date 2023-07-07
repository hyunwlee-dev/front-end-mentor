import { PolymorphicProps, PolymorphicRef } from '@front-end-mentor/types';
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

const Label: LabelComponent = React.forwardRef(
  <T extends React.ElementType = 'label'>(
    { className = '', htmlFor, children, ...restProps }: LabelProps<T>,
    ref: PolymorphicRef<T>
  ) => {
    return (
      <label className={className} ref={ref} {...restProps}>
        {children}
      </label>
    );
  }
);

export { Label };
