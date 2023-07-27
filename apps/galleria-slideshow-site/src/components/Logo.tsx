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
        <a>
          <Image src="/shared/logo.svg" width={170} height={50} alt="galleria logo" />
        </a>
      </Link>
      <button className="text-xs font-normal tracking-widest text-dark-gray uppercase">start slideshow</button>
    </div>
  );
};

export { Logo };
