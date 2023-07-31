import React, { HTMLAttributes } from 'react';
import Image from 'next/image';
import { Button, ProgressBar } from '@hyunwlee/ui';

interface IProps extends HTMLAttributes<HTMLElement> {
  artData: IArtData;
  galleriaListSize: number;
}
const Footer: React.FC<IProps> = ({ artData, galleriaListSize }) => {
  return (
    <footer className="px-10 pb-32 relative">
      <ProgressBar
        className="h-[2px] w-auto bg-med-gray [&>div]:h-[2px] [&>div]:bg-black"
        completed={((artData.index + 1) / galleriaListSize) * 100}
      />
      <span className="text-2xl absolute top-8">{artData.name}</span>
      <span className="text-sm absolute top-20">{artData.artist.name}</span>
      <Button className="absolute top-14 right-24">
        <Image src="/shared/icon-back-button.svg" width={24} height={24} alt="slide back button" />
      </Button>
      <Button className="absolute top-14 right-10">
        <Image src="/shared/icon-next-button.svg" width={24} height={24} alt="slide next button" />
      </Button>
    </footer>
  );
};

export { Footer };
