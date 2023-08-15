import { Button, ProgressBar } from '@hyunwlee/ui';
import Image from 'next/image';
import { useRouter } from 'next/router';
import React, { Dispatch, HTMLAttributes, SetStateAction } from 'react';
import data from '@/db/data.json';
import { artTable } from '@/utils';

interface IProps extends HTMLAttributes<HTMLElement> {
  className?: string;
  artData: IArtData;
  setDirection: Dispatch<SetStateAction<number>>;
  setExitDirection: Dispatch<SetStateAction<number>>;
}
const Footer: React.FC<IProps> = ({ className, artData, setDirection, setExitDirection }) => {
  const router = useRouter();
  const next = artTable[artData.index === data.length - 1 ? 0 : artData.index + 1];
  const prev = artTable[artData.index === 0 ? data.length - 1 : artData.index - 1];
  const percent = ((artData.index + 1) / data.length) * 100;
  const click2Prev = () => {
    router.push(`/gallery/${prev}`);
    setDirection(-1000);
    setExitDirection(1000);
  };
  const click2Next = () => {
    router.push(`/gallery/${next}`);
    setDirection(1000);
    setExitDirection(-1000);
  };
  return (
    <footer className={`${className} h-32 relative`}>
      <ProgressBar className="h-[2px] w-auto bg-med-gray [&>div]:h-[2px] [&>div]:bg-black" completed={percent} />
      <span className="text-2xl absolute top-1/3 -translate-y-1/2">{artData.name}</span>
      <span className="text-sm absolute top-2/3 -translate-y-1/2">{artData.artist.name}</span>
      <Button className="absolute top-1/2 right-24 -translate-y-1/2" onClick={click2Prev}>
        <Image src="/shared/icon-back-button.svg" width={24} height={24} alt="slide back button" />
      </Button>
      <Button className="absolute top-1/2 right-10 -translate-y-1/2" onClick={click2Next}>
        <Image src="/shared/icon-next-button.svg" width={24} height={24} alt="slide next button" />
      </Button>
    </footer>
  );
};

export { Footer };
