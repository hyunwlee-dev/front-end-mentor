import React, { HTMLAttributes } from 'react';
import data from '@/db/data.json';
import { Art, Description, Footer } from '@/components/gallery';
interface IProps extends HTMLAttributes<HTMLDivElement> {
  artData: IArtData;
}
const GalleryContainer: React.FC<IProps> = ({ artData }) => {
  const galleriaListSize = data.length;
  return (
    <>
      <Art artData={artData} />
      <Description artData={artData} />
      <Footer artData={artData} galleriaListSize={galleriaListSize} />
    </>
  );
};

export { GalleryContainer };
