import React, { HTMLAttributes } from 'react';
import { ArtExtensionButton, Artist, ArtImage, ArtCompact } from '@/components/gallery/art';

interface IProps extends HTMLAttributes<HTMLDivElement> {
  artData: IArtData;
}
const Art: React.FC<IProps> = ({ artData }) => {
  return (
    <section className="p-10 relative">
      <ArtImage artData={artData} />
      <ArtExtensionButton />
      <ArtCompact artData={artData} />
      <Artist artData={artData} />
    </section>
  );
};

export { Art };
