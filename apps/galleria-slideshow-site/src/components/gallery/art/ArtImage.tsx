import React, { ImgHTMLAttributes } from 'react';
import Image from 'next/image';

interface IProps extends ImgHTMLAttributes<HTMLImageElement> {
  artData: IArtData;
}
const ArtImage: React.FC<IProps> = ({ artData }) => {
  return (
    <Image
      src={artData.images.hero.small}
      width={artData.sizes.hero.small.width}
      height={artData.sizes.hero.small.height}
      alt={`${artData.name} image`}
    />
  );
};

export { ArtImage };
