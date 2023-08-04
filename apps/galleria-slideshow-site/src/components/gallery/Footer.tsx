import { Button, ProgressBar } from '@hyunwlee/ui';
import Image from 'next/image';
import React, { HTMLAttributes } from 'react';

interface IProps extends HTMLAttributes<HTMLElement> {
  className?: string;
  artData: IArtData;
  galleriaListSize: number;
}
const Footer: React.FC<IProps> = ({ className, artData, galleriaListSize }) => {
  return (
    <footer className={`${className} h-32 relative`}>
      <ProgressBar
        className="h-[2px] w-auto bg-med-gray [&>div]:h-[2px] [&>div]:bg-black"
        completed={((artData.index + 1) / galleriaListSize) * 100}
      />
      <span className="text-2xl absolute top-1/3 -translate-y-1/2">{artData.name}</span>
      <span className="text-sm absolute top-2/3 -translate-y-1/2">{artData.artist.name}</span>
      <Button className="absolute top-1/2 right-24 -translate-y-1/2">
        <Image src="/shared/icon-back-button.svg" width={24} height={24} alt="slide back button" />
      </Button>
      <Button className="absolute top-1/2 right-10 -translate-y-1/2">
        <Image src="/shared/icon-next-button.svg" width={24} height={24} alt="slide next button" />
      </Button>
    </footer>
  );
};

export { Footer };
