export type Job = {
  title: string;
  company: string;
  description: string;
  time: {
    start: Date;
    end?: Date;
  };
};
