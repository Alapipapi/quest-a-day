
export interface Resource {
  title: string;
  url: string;
}

export interface StepDetails {
  title: string;
  instructions: string[];
  resources?: Array<Resource>;
  verification?: string[];
  examples?: string[];
}
