import { Container } from '@hyunwlee/ui';
import React, { HTMLAttributes, ReactNode } from 'react';
import { Header, Logo } from '@/components';

interface IProps extends HTMLAttributes<HTMLDivElement> {
  footerSide?: ReactNode;
}

const BaseLayout: React.FC<IProps> = ({ children, footerSide }) => {
  return (
    <Container className="min-[1370px]:px-32 flex flex-col flex-nowrap large-desktop:h-screen">
      <Header className="px-10 py-5 border-b-med-gray border-solid border-b-2">
        <Logo className="flex justify-between" />
      </Header>
      <main className="flex-auto p-10">{children}</main>
      <footer>{footerSide}</footer>
    </Container>
  );
};

export { BaseLayout };
