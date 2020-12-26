import { ModelInit, MutableModel, PersistentModelConstructor } from "@aws-amplify/datastore";





export declare class Vote {
  readonly id: string;
  readonly Gradient?: Gradient;
  readonly User?: User;
  readonly gradientID: string;
  readonly userID: string;
  constructor(init: ModelInit<Vote>);
  static copyOf(source: Vote, mutator: (draft: MutableModel<Vote>) => MutableModel<Vote> | void): Vote;
}

export declare class Gradient {
  readonly id: string;
  readonly content?: string;
  readonly User?: User;
  readonly userID: string;
  readonly Votes?: (Vote | null)[];
  constructor(init: ModelInit<Gradient>);
  static copyOf(source: Gradient, mutator: (draft: MutableModel<Gradient>) => MutableModel<Gradient> | void): Gradient;
}

export declare class User {
  readonly id: string;
  readonly name?: string;
  readonly Gradients?: (Gradient | null)[];
  readonly Votes?: (Vote | null)[];
  constructor(init: ModelInit<User>);
  static copyOf(source: User, mutator: (draft: MutableModel<User>) => MutableModel<User> | void): User;
}