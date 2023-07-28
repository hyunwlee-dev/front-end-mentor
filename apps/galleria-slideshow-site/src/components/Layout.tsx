import React, { HTMLAttributes } from 'react';
import { Header } from './Header';
import { Logo } from './Logo';

interface IProps extends HTMLAttributes<HTMLDivElement> {}

const BaseLayout: React.FC<IProps> = ({ children }) => {
  return (
    <div className='desktop:w-3/4 desktop:my-0 desktop:mx-auto '>
      <Header className="border-b-2 border-solid border-b-med-gray">
        <Logo className="p-10 flex flex-row, flex-nowrap justify-between" />
      </Header>
      <main>{children}</main>
    </div>
  );
};

export { BaseLayout };
