export type Gradient = {
  uuid: string;
  data: string;
  user_uuid: string;
  has_voted: boolean;
  votes_aggregate: {
    aggregate: {
      count: number;
    };
  };
};
