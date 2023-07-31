import { getAllArtIds, getArt } from '@/utils';
import { BaseLayout } from '@/components';
import * as React from 'react';
import { GalleryContainer } from '@/containers/GalleryContainer';

const Gallery = ({ artData }: { artData: IArtData }) => {
  return (
    <BaseLayout>
      <GalleryContainer artData={artData} />
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
