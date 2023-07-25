import React, { HTMLAttributes } from 'react';
import Link from 'next/link';
import { A11yHidden, Button } from '@hyunwlee/ui';
import Image from 'next/image';

interface IProps extends HTMLAttributes<HTMLAnchorElement> {
  className?: string;
}
const Logo: React.FC<IProps> = ({ className }) => {
  return (
    <div className={className}>
      <Link href="/">
        <Image src="/shared/logo.svg" width={140} height={50} alt="galleria logo" />
        <A11yHidden as="h1">galleria</A11yHidden>
      </Link>
      <Button className="text-xs font-normal tracking-widest text-dark-gray uppercase">start slideshow</Button>
    </div>
  );
};

export { Logo };
