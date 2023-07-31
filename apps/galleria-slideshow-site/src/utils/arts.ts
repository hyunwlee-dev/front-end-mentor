import data from '../db/data.json';

interface IArtIds {
  params: {
    id: string;
  };
}

const getAllArtData = (): Promise<Art[]> => {
  const result = data.map(art => ({ id: art.name.toLowerCase().replaceAll(' ', '-'), ...art }));
  return new Promise(function (resolve) {
    setTimeout(() => resolve(result), 500);
  });
};

const getAllArtIds = (): Promise<IArtIds[]> => {
  const result = data.map(art => {
    return {
      params: {
        id: art.name.toLowerCase().replaceAll(' ', '-'),
      },
    };
  });
  return new Promise(function (resolve) {
    setTimeout(() => resolve(result), 500);
  });
};

const getArt = async (id: string) => {
  const art = data
    .map((item, index) => ({ ...item, index }))
    .filter(item => item.name.toLowerCase().replaceAll(' ', '-') === id);
  return new Promise(function (resolve) {
    setTimeout(() => resolve(art[0]), 500);
  });
};

const sortMansonryArray = (array: Art[], col: number) => {
  const masonryArry = [];
  let i = -1;
  while (++i < col) {
    for (let j = i; j < array.length; j += col) {
      masonryArry.push(array[j]);
    }
  }
  return masonryArry;
};

export { getAllArtData, getAllArtIds, getArt, sortMansonryArray };
