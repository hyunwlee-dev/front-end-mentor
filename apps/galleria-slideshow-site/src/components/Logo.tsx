import React, { HTMLAttributes } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { Button } from '@hyunwlee/ui';

interface IProps extends HTMLAttributes<HTMLAnchorElement> {
  className?: string;
}
const Logo: React.FC<IProps> = ({ className }) => {
  return (
    <div className={className}>
      <Link href="/" className="flex-shrink-0">
        <Image src="/shared/logo.svg" width={170} height={50} alt="galleria logo" />
      </Link>
      <Button className="text-sm font-bold tracking-widest text-dark-gray uppercase">start slideshow</Button>
    </div>
  );
};

export { Logo };
