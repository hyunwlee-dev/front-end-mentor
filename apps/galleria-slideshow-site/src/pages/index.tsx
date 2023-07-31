import { BaseLayout } from '@/components';
import { GalleryList } from '@/components/GalleryList';
import { getAllArtData, sortMansonryArray } from '@/utils';
import { Suspense } from 'react';

export default function Home({ artList }: { artList: Art[] }) {
  return (
    <>
      <Suspense fallback={<div>로딩이다</div>}>
      <BaseLayout>
        <GalleryList artList={artList}/>
      </BaseLayout>
      </Suspense>
    </>
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
