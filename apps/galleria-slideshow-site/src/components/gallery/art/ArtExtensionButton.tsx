import React, { HTMLAttributes } from 'react';
import { Button } from '@hyunwlee/ui';
import Image from 'next/image';

interface IProps extends HTMLAttributes<HTMLButtonElement> {}

const ArtExtensionButton: React.FC<IProps> = () => {
  return (
    <Button
      type="button"
      className="px-7 py-4 flex flex-nowrap justify-between items-center gap-5 bg-black absolute top-20 tablet:top-auto tablet:bottom-20 left-20 hover:opacity-70 hover:bg-dark-gray"
    >
      <Image src="/shared/icon-view-image.svg" width={16} height={16} alt="view-image" />
      <span className="text-white font-sans text-xs font-bold tracking-widest uppercase">view image</span>
    </Button>
  );
};

export { ArtExtensionButton };
