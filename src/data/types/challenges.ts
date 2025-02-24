
export interface StepDetails {
  title: string;
  instructions: string[];
  resources?: Array<{
    title: string;
    url: string;
  }>;
  verification?: string[];
}

export interface Resource {
  title: string;
  url: string;
}
