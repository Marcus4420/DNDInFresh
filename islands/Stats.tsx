/** @jsx h */
import { h } from "preact";
import { tw } from "@twind";

interface Stats {
    Strength: number;
    Dexterity: number;
    Constituiton: number;
    Intelligence: number;
    Wisdom: number;
    Charisma: number;
}

var PC = {
    Strength: 10,
    Dexterity: 10,
    Constituiton: 10,
    Intelligence: 10,
    Wisdom: 10,
    Charisma: 10
}

export default function Stats(Stats: object) {
  if (!Stats) {
    return <h1>Stats could not be loaded!</h1>;
  }

  return (
    <div class={tw`p-4 mx-auto max-w-screen-xs bg-stone-500`}>
<table class="table-auto">
  <thead>
    <tr>
      <th>Strength</th>
      <th>Dexterity</th>
        <th>Constituiton</th>
        <th>Intelligence</th>
        <th>Wisdom</th>
        <th>Charisma</th>
    </tr>
  </thead>
  <tbody>
    <tr>
        <td>{PC.Strength}</td>
        <td>{PC.Dexterity}</td>
        <td>{PC.Constituiton}</td>
        <td>{PC.Intelligence}</td>
        <td>{PC.Wisdom}</td>
        <td>{PC.Charisma}</td>
    </tr>
  </tbody>
</table>
    </div>
  );
}