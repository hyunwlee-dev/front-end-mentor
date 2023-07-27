import data from '../db/data.json';

interface IArtIds {
  params: {
    id: string;
  };
}

const getAllArtData = (): Promise<Art[]> => {
  const result = data.map(art => ({ id: art.name.replaceAll(' ', '-'), ...art }));
  return new Promise(function (resolve) {
    setTimeout(() => resolve(result), 1000);
  });
};

const getAllArtIds = (): Promise<IArtIds[]> => {
  const result = data.map(art => {
    return {
      params: {
        id: art.name.replaceAll(' ', '-'),
      },
    };
  });
  return new Promise(function (resolve) {
    setTimeout(() => resolve(result), 1000);
  });
};

const getArt = async (id: string) => {
  const art = data.filter(item => item.name.replaceAll(' ', '-') === id);
  return new Promise(function (resolve) {
    setTimeout(() => resolve(art[0]), 1000);
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
