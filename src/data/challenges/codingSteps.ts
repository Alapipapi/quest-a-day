
import { CodingChallenge } from "../types/coding";
import { weatherAppChallenge } from "./coding/weatherApp";
import { todoAppChallenge } from "./coding/todoApp";
import { chatInterfaceChallenge } from "./coding/chatInterface";
import { apiClientChallenge } from "./coding/apiClient";

export const codingSteps: CodingChallenge[] = [
  weatherAppChallenge,
  todoAppChallenge,
  chatInterfaceChallenge,
  apiClientChallenge
];
