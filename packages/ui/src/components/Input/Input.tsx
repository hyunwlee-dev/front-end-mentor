import { PolymorphicProps, PolymorphicRef } from '@hyunwlee/type';
import * as React from 'react';

type InputProps<T extends React.ElementType = 'input'> = PolymorphicProps<
  T,
  {
    className?: string;
    id?: string;
    type?: string;
  }
>;

type InputComponent = <C extends React.ElementType = 'input'>(Props: InputProps<C>) => React.ReactElement | null;
const Input: InputComponent = React.forwardRef(
  <T extends React.ElementType = 'input'>(
    { as, className = '', id, type = 'text', ...restProps }: InputProps<T>,
    ref: PolymorphicRef<T>['ref']
  ) => {
    const Element = as || 'input';
    return <Element className={className} id={id} type={type} ref={ref} {...restProps} />;
  }
);

export { Input };
