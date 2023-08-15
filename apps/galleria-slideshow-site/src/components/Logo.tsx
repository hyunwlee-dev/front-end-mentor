import { Button } from '@hyunwlee/ui';
import Image from 'next/image';
import Link from 'next/link';
import { useRouter } from 'next/router';
import React, { HTMLAttributes } from 'react';
import { artTable } from '@/utils';

interface IProps extends HTMLAttributes<HTMLAnchorElement> {
  className?: string;
}
const Logo: React.FC<IProps> = ({ className }) => {
  const router = useRouter();
  return (
    <div className={className}>
      <Link href="/" className="flex-shrink-0">
        <Image src="/shared/logo.svg" width={170} height={50} alt="galleria logo" />
      </Link>{' '}
      {router.asPath === '/' && (
        <Button
          className="text-sm font-bold tracking-widest text-dark-gray uppercase"
          onClick={() => {
            router.push(`/gallery/${artTable[0]}`);
          }}
        >
          start slideshow
        </Button>
      )}{' '}
      {router.asPath !== '/' && (
        <Button
          className="text-sm font-bold tracking-widest text-dark-gray uppercase"
          onClick={() => {
            router.push(`/`);
          }}
        >
          stop slideshow
        </Button>
      )}
    </div>
  );
};

export { Logo };
