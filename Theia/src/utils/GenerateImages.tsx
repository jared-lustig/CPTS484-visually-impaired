import * as faker from "faker";

const generateImage = () => ({
  id: faker.datatype.uuid(),
  title: faker.lorem.words(3),
  image: "https://picsum.photos/200/300?random",
});

const generateImages = (numberOfImages: number) =>
  Array.from({ length: numberOfImages }, () => generateImage());
export const DATA = generateImages(20);