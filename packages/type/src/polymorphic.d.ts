import * as React from 'react';

type PolymorphicRef<T extends React.ElementType> = React.ComponentPropsWithRef<T>['ref'];

type PolymorphicProps<T extends React.ElementType, Props = Record<string, unknown>> = {
  as?: T;
} & React.ComponentPropsWithoutRef<T> &
  Props & {
    ref?: PolymorphicRef<T>;
  };

export { PolymorphicProps, PolymorphicRef };
