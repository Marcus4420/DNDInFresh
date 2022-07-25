/** @jsx h */
import { h } from "preact";
import { tw } from "@twind";
import { useState } from "preact/hooks";

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

export default function Stats(props: Stats) {
  const [Stats, setStats] = useState(10);
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
    <tr>
        <td>
            <button onClick={() => setStats(PC.Strength+=1)}> +1
            </button>
        </td>
        <td>
            <button onClick={() => setStats(PC.Dexterity+=1)}> +1
            </button>
        </td>
        <td>
            <button onClick={() => setStats(PC.Constituiton+=1)}> +1
            </button>
        </td>
        <td>
            <button onClick={() => setStats(PC.Intelligence+=1)}> +1
            </button>
        </td>
        <td>
            <button onClick={() => setStats(PC.Wisdom+=1)}> +1
            </button>
        </td>
        <td>
            <button onClick={() => setStats(PC.Charisma+=1)}> +1
            </button>
        </td>
    </tr>
    <tr>
        <td>
            <button onClick={() => setStats(PC.Strength-=1)}> -1
            </button>
        </td>
        <td>
            <button onClick={() => setStats(PC.Dexterity-=1)}> -1
            </button>
        </td>
        <td>
            <button onClick={() => setStats(PC.Constituiton-=1)}> -1
            </button>
        </td>
        <td>
            <button onClick={() => setStats(PC.Intelligence-=1)}> -1
            </button>
        </td>
        <td>
            <button onClick={() => setStats(PC.Wisdom-=1)}> -1
            </button>
        </td>
        <td>
            <button onClick={() => setStats(PC.Charisma-=1)}> -1
            </button>
        </td>
    </tr>
  </tbody>
</table>
    </div>
  );
}