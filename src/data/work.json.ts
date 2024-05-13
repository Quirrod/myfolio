export interface Template {
  link: string;
  title: string;
  img: string;
  description: string;
};
const one: Template = {
  link: "https://bugaboo-kohl.vercel.app",
  img: "https://quirrod.github.io/myfolio/bugaboo-page.png",
  title: "Bugabooo",
  description: "Bugaboo is a dynamic and innovative web application designed to revolutionize the way developers collaborate, share code, and receive valuable feedback."
};
const two: Template  = {
  link: "https://ensolver-challenge.vercel.app",
  img: "https://quirrod.github.io/myfolio/ensolver.png",
  title: "Knock Note",
  description: 'KnockNote is a simple note taking app'
};

const three: Template  = {
  link: "A simple and beatiful Movie directory",
  img: "https://quirrod.github.io/myfolio/movielog.png",
  title: "Movie Log",
  description: 'A simple and beatiful Movie directory'
};

const four: Template  = {
  link: "https://pr27f-vqaaa-aaaan-qmhqa-cai.icp0.io/",
  img: "https://quirrod.github.io/myfolio/extension_ticket.png",
  title: "Extension Ticket",
  description: 'Tickets selling (FRONTEND) '
};


export const bytitle = {
  one,
  two,
  four,
  three,
};
export const work = Object.values(bytitle);
