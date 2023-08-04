import React, { HTMLAttributes } from 'react';
import { ArtExtensionButton, Artist, ArtImage, ArtCompact } from '@/components/gallery/art';

interface IProps extends HTMLAttributes<HTMLDivElement> {
  className?: string;
  artData: IArtData;
  toggle: () => void;
}

const Art: React.FC<IProps> = ({ className, artData, toggle }) => {
  return (
    <section className={`${className} relative`}>
      <div className="bg-transparent tablet:flex tablet:flex-row tablet:gap-10 tablet:items-end relative">
        <ArtImage artData={artData} />
        <Artist className="tablet:flex-shrink-0 translate-y-8 tablet:-translate-y-10" artData={artData} />
        <ArtExtensionButton toggle={toggle} />
      </div>
      <ArtCompact artData={artData} />
    </section>
  );
};

export { Art };
