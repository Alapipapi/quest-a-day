
import { ProblemSolvingChallenge } from "../../types";

export const cryptographyChallenge: ProblemSolvingChallenge = {
  category: "problem-solving",
  title: "Basic Cryptography",
  instructions: [
    "Learn about basic substitution ciphers",
    "Decrypt a message encoded with Caesar cipher",
    "Create your own encoded message",
    "Implement a simple encryption/decryption tool",
    "Analyze the security strengths and weaknesses"
  ],
  resources: [
    {
      title: "Cryptography Basics",
      url: "https://www.khanacademy.org/computing/computer-science/cryptography"
    },
    {
      title: "Caesar Cipher Tutorial",
      url: "https://www.dcode.fr/caesar-cipher"
    }
  ],
  verification: [
    "Decrypted message is correct",
    "Created message can be decoded",
    "Tool functions properly",
    "Security analysis is accurate"
  ]
};
