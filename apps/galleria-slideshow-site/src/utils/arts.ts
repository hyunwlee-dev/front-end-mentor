import data from '../db/data.json';

interface IArtIds {
  params: {
    id: string;
  };
}

const _convert2Id = (name: string) => name.toLowerCase().replaceAll(' ', '-');

const getAllArtData = (): Promise<Art[]> => {
  const result = data.map(art => ({ id: _convert2Id(art.name), ...art }));
  return new Promise(function (resolve) {
    setTimeout(() => resolve(result), 500);
  });
};

const getAllArtIds = (): Promise<IArtIds[]> => {
  const result = data.map(art => {
    return {
      params: {
        id: _convert2Id(art.name),
      },
    };
  });
  return new Promise(function (resolve) {
    setTimeout(() => resolve(result), 500);
  });
};

const getArt = async (id: string) => {
  const art = data.map((item, index) => ({ ...item, index })).filter(item => _convert2Id(item.name) === id);
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

const artTable = data.map(art => _convert2Id(art.name));

export { getAllArtData, getAllArtIds, getArt, sortMansonryArray, artTable };
