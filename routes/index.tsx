/** @jsx h */
import { h } from "preact";
import { tw } from "@twind";
// import Counter from "../islands/Counter.tsx";
import Races from "../islands/Races.tsx";
export default function Home() {
  return (
    <div class={tw`p-4 mx-auto max-w-screen-md`}>
      <h2 class={tw`my-6`}>
        Welcome to the Dungeons and Dragons 5th Edition Character Generator.
      </h2>
      <div>
        <Races></Races>
      </div>
    </div>
  );
}
