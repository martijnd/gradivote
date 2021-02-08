export type Gradient = {
  uuid: string;
  data: string;
  user_uuid: string;
  votes_aggregate: {
    aggregate: {
      count: number;
    };
  };
};
