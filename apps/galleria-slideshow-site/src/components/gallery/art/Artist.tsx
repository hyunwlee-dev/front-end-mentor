import { useMediaQuery } from '@hyunwlee/hook';
import Image from 'next/image';
import React, { HTMLAttributes } from 'react';
import { MediaQuery } from '@/types/mediaQuery';

interface IProps extends HTMLAttributes<HTMLDivElement> {
  className?: string;
  artData: IArtData;
}
const Artist: React.FC<IProps> = ({ className, artData }) => {
  const tabletReached = useMediaQuery(MediaQuery.TABLET);
  return (
    <div className={className}>
      <Image
        src={artData.artist.image}
        width={!tabletReached ? 64 : artData.sizes.artist.width}
        height={!tabletReached ? 64 : artData.sizes.artist.height}
        alt={`${artData.name} image`}
      />
    </div>
  );
};

export { Artist };
