import { useModal } from '@hyunwlee/hook';
import { Button } from '@hyunwlee/ui';
import Image from 'next/image';
import React, { HTMLAttributes } from 'react';
import { Modal } from '@/components';
import { Art, Description } from '@/components/gallery';

interface IProps extends HTMLAttributes<HTMLDivElement> {
  artData: IArtData;
}
const GalleryContainer: React.FC<IProps> = ({ artData }) => {
  const { isShown, toggle } = useModal();
  const modalContent = (
    <div className="relative">
      <Button
        className="text-sm text-white tracking-widest uppercase absolute -top-9 right-0 hover:text-dark-gray"
        onClick={toggle}
      >
        close
      </Button>
      <Image
        src={artData.images.gallery}
        width={artData.sizes.gallery.width}
        height={artData.sizes.gallery.height}
        alt={artData.name}
      />
    </div>
  );
  return (
    <>
      <div className="large-desktop:flex large-desktop:flex-row large-desktop:flex-nowrap large-desktop:h-full large-desktop:gap-10">
        <Art className="large-desktop:flex-auto large-desktop:min-w-[400px]" artData={artData} toggle={toggle} />
        <Description
          className="large-desktop:flex large-desktop:flex-col large-desktop:h-full large-desktop:items-space; large-desktop:pr-10 large-desktop:min-w-[400px] large-desktop:w-[40%]"
          artData={artData}
        />
      </div>
      <Modal isShown={isShown} hide={toggle} modalContent={modalContent} headerText={artData.name} />
    </>
  );
};

export { GalleryContainer };
