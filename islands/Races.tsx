/** @jsx h */
import { h } from "preact";
import { Handlers, PageProps } from "$fresh/server.ts";
import { tw } from "@twind";

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
    <div class={tw`p-4 mx-auto max-w-screen-xs bg-stone-500`}>
      <label for="races" class="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-400">Start by selecting your race: </label>
      <select id="races" class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500">
        {RACES.map((race) => <option class={tw`list-none hover:list-disc`} key={race} value={race}>{race}</option>)}
      </select>
    </div>
  );
}