export interface Template {
  link: string;
  title: string;
  img: string;
  description: string;
};
const one: Template = {
  link: "https://bugaboo-kohl.vercel.app",
  img: "/bugaboo-page.png",
  title: "Bugabooo",
  description: "Bugaboo is a dynamic and innovative web application designed to revolutionize the way developers collaborate, share code, and receive valuable feedback."
};
const two: Template  = {
  link: "https://ensolver-challenge.vercel.app",
  img: "/ensolver.png",
  title: "Knock Note",
  description: 'KnockNote is a simple note taking app'
};

const three: Template  = {
  link: "A simple and beatiful Movie directory",
  img: "/movielog.png",
  title: "Movie Log",
  description: 'A simple and beatiful Movie directory'
};

export const bytitle = {
  one,
  two,
  three,
};
export const work = Object.values(bytitle);
