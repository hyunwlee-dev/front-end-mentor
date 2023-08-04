import React, { HTMLAttributes } from 'react';
import { Button } from '@hyunwlee/ui';
import Image from 'next/image';

interface IProps extends HTMLAttributes<HTMLButtonElement> {}

const ArtExtensionButton: React.FC<IProps> = () => {
  return (
    <Button
      type="button"
      className="absolute top-5 left-5 hover:bg-dark-gray hover:opacity-90 tablet:top-auto tablet:bottom-5 tablet:z-10 bg-black flex px-5 py-3 gap-2 items-center"
    >
      <Image src="/shared/icon-view-image.svg" width={10} height={10} alt="view-image" />
      <span className="text-white font-sans text-xs font-bold tracking-widest uppercase">view image</span>
    </Button>
  );
};

export { ArtExtensionButton };
