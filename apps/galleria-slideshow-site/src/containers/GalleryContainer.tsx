import React, { HTMLAttributes } from 'react';
import { Art, Description } from '@/components/gallery';
interface IProps extends HTMLAttributes<HTMLDivElement> {
  artData: IArtData;
}
const GalleryContainer: React.FC<IProps> = ({ artData }) => {
  return (
    <div className="large-desktop:flex large-desktop:flex-row large-desktop:flex-nowrap large-desktop:h-full large-desktop:gap-10">
      <Art className="large-desktop:flex-auto large-desktop:min-w-[400px]" artData={artData} />
      <Description
        className="large-desktop:flex large-desktop:flex-col large-desktop:h-full large-desktop:items-space; large-desktop:pr-10 large-desktop:min-w-[400px] large-desktop:w-[40%]"
        artData={artData}
      />
    </div>
  );
};

export { GalleryContainer };
