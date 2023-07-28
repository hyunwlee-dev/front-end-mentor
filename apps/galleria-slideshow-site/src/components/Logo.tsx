import React, { HTMLAttributes } from 'react';
import Link from 'next/link';
import Image from 'next/image';

interface IProps extends HTMLAttributes<HTMLAnchorElement> {
  className?: string;
}
const Logo: React.FC<IProps> = ({ className }) => {
  return (
    <div className={className}>
      <Link href="/">
        <Image src="/shared/logo.svg" width={170} height={50} alt="galleria logo" />
      </Link>
      <button className="text-sm font-bold tracking-widest text-dark-gray uppercase">start slideshow</button>
    </div>
  );
};

export { Logo };
