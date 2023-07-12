import { PolymorphicProps, PolymorphicRef } from '@front-end-mentor/types';
import * as React from 'react';

type A11yHiddenProps<T extends React.ElementType = 'span'> = PolymorphicProps<
  T,
  {
    children?: React.ReactNode;
  }
>;

type A11yHiddenComponent = <C extends React.ElementType = 'span'>(
  Props: A11yHiddenProps<C>
) => React.ReactElement | null;

const A11yHidden: A11yHiddenComponent = React.forwardRef(
  <T extends React.ElementType = 'span'>({ as, children }: A11yHiddenProps<T>, ref: PolymorphicRef<T>) => {
    const Element = as || 'span';
    return (
      <Element
        style={{
          overflow: 'hidden',
          position: 'absolute',
          clip: 'rect(1px, 1px, 1px, 1px)',
          clipPath: 'circle(0)',
          width: '1px',
          height: '1px',
          margin: '-1px',
          border: '0',
          padding: '0',
          whiteSpace: 'nowrap',
        }}
        ref={ref}
      >
        {children}
      </Element>
    );
  }
);

export { A11yHidden };
