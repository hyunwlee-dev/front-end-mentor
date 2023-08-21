import { BaseLayout } from '@/components';
import { GalleryList } from '@/components/GalleryList';
import { getAllArtData, sortMansonryArray } from '@/utils';

export default function Home({ artList }: { artList: Art[] }) {
  return (
    <BaseLayout>
      <GalleryList artList={artList} />
    </BaseLayout>
  );
}

export const getStaticProps = async () => {
  try {
    const data = await getAllArtData();
    const artList = sortMansonryArray(data, 4);
    return {
      props: {
        artList,
      },
    };
  } catch {
    return {
      notFound: true,
    };
  }
};
