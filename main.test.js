import { AudioContext } from "standardized-audio-context";

window.AudioContext = AudioContext;

import { Gain, Player } from "tone";

describe("basics", () => {
  test("it works", () => {
    const player = new Player();
    const gain = new Gain();
    player.toMaster();
    gain.toMaster();
  });
});
