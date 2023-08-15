import { motion } from 'framer-motion';
import { useRouter } from 'next/router';
import * as React from 'react';
import { BaseLayout } from '@/components';
import { Footer } from '@/components/gallery';
import { GalleryContainer } from '@/containers/GalleryContainer';
import { useDirectionState } from '@/contexts/DirectionContext';
import { getAllArtIds, getArt } from '@/utils';

const Gallery = ({ artData }: { artData: IArtData }) => {
  const router = useRouter();
  const { direction, setDirection, exitDirection, setExitDirection } = useDirectionState();
  return (
    <BaseLayout
      footerSide={
        <Footer
          className="px-10 min-[1370px]:px-0"
          artData={artData}
          setDirection={setDirection}
          setExitDirection={setExitDirection}
        />
      }
    >
      <motion.div
        key={router.asPath}
        initial={{ x: direction, opacity: 0 }}
        animate={{ x: 0, opacity: 1 }}
        exit={{ x: exitDirection, opacity: 0 }}
      >
        <GalleryContainer artData={artData} />
      </motion.div>
    </BaseLayout>
  );
};

export const getStaticPaths = async () => {
  const paths = await getAllArtIds();
  return {
    paths,
    fallback: false,
  };
};

export const getStaticProps = async ({ params }: { params: Art }) => {
  const { id } = params;
  const artData = await getArt(id);
  return {
    props: {
      artData,
    },
  };
};

export default Gallery;
