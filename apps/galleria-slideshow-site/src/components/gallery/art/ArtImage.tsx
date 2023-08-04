import React, { HTMLAttributes } from 'react';
import Image from 'next/image';
import { useMediaQuery } from '@hyunwlee/hook';
import { MediaQuery } from '@/types/mediaQuery';

interface IProps extends HTMLAttributes<HTMLDivElement> {
  className?: string;
  artData: IArtData;
}
const ArtImage: React.FC<IProps> = ({ className, artData }) => {
  const tabletReached = useMediaQuery(MediaQuery.TABLET);
  const largeDesktopReached = useMediaQuery(MediaQuery.TABLET);
  const { large: largeSrc, small: smallSrc } = artData.images.hero;
  const { large, small } = artData.sizes.hero;
  return (
    <div className={`${className}`}>
      <Image
        src={tabletReached ? largeSrc : smallSrc}
        width={largeDesktopReached ? 500 : tabletReached ? large.width : small.width}
        height={tabletReached ? large.height : small.height}
        alt={`${artData.name} image`}
      />
    </div>
  );
};

export { ArtImage };
