export type Work = {
  title: string;
  description: string;
  image: string;
  body: string;
};

export type WorksList = {
  title: string;
  entries: Work[];
}
