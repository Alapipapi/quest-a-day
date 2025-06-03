
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
  // Optional properties from specialized challenge types
  materials?: string[];
  equipment?: string[];
  warmUp?: string;
  coolDown?: string;
  inspiration?: string[];
  tools?: string[];
}
