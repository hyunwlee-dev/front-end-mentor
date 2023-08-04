import { getAllArtIds, getArt } from '@/utils';
import { BaseLayout } from '@/components';
import * as React from 'react';
import { GalleryContainer } from '@/containers/GalleryContainer';
import { Footer } from '@/components/gallery';
import data from '@/db/data.json';

const Gallery = ({ artData }: { artData: IArtData }) => {
  const galleriaListSize = data.length;
  return (
    <BaseLayout
      footerSide={<Footer className="px-10 min-[1370px]:px-0" artData={artData} galleriaListSize={galleriaListSize} />}
    >
      {<GalleryContainer artData={artData} />}
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
