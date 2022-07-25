// routes/[races].tsx

/** @jsx h */
import { h } from "preact";
import { Handlers, PageProps } from "$fresh/server.ts";

const RACES = ["Dragonborn", "Dwarf", "Elf", "Gnome", "Half-Elf", "Half-Orc", "Halfling", "Human", "Tiefling"];

interface Race {
  index: number;
  race: string
}

export default function Races(Race: string) {
  if (!Race) {
    return <h1>Races could not be loaded!</h1>;
  }

  return (
    <div>
      <ul>
        {RACES.map((race) => <li key={race}>{race}</li>)}
      </ul>
    </div>
  );
}