# rick-and-morty-vue-character-card

## 🚀 Installation

1. Clone this repo in the parent folder of your app (NOT mandatory but do the process easier)
2. Access to the folder `rick-and-morty-vue-character-card`
3. Install dependencies
4. Build the package

```bash
git clone git@github.com:ecortezr/rick-and-morty-vue-character-card.git
cd rick-and-morty-vue-character-card
npm install
npm run build
```
### OPTIONAL:

Run tests:

```sh
npm run test
```

Later, access to the project folder (for example, `my-vue-app`) and install this package as a local dependency


```bash
cd my-vue-app
npm install ../rick-and-morty-vue-character-card
```

## ⚙️ Usage

Import the component locally or define it globally and include the css file:

```vue
<template>
  <CharacterCard
      v-if="characterData"
      :character-data="characterData"
      max-with="326px"
      bg-color="#FFFFFF"
      :is-favorite="true"
      />
</template>

<script setup lang="ts">
import { CharacterCard } from "rick-and-morty-vue-character-card";
import "rick-and-morty-vue-character-card/dist/style.css";
import { ref } from "vue";

type Character = {
  id: number;
  name: string;
  status: string;
  species: string;
  type: string;
  gender: string;
  origin: string;
  image: string;
  locationName: string;
  firstEpisodeName: string;
  url: string;
  created: Date;
}

const characterData = ref<Character>();

characterData.value = {
  id: 232,
  name: 'Morty Smith',
  status: 'Alive',
  species: 'Human',
  type: '',
  gender: 'Male',
  origin: `Earth (Evil Rick's Target Dimension)`,
  locationName: `Earth (Evil Rick's Target Dimension)`,
  image: 'https://rickandmortyapi.com/api/character/avatar/232.jpeg',
  firstEpisodeName: 'Close Rick-counters of the Rick Kind',
  url: 'https://rickandmortyapi.com/api/character/232',
  created: new Date('2017-12-30T16:29:27.863Z')
}

</script>
```

## 📃 Props

| Name       | Type               | Default | Description                        |
| ---------- | ------------------ | ------- | ---------------------------------- |
| `character-data`    | `Character` |         | (Required) Character data to render in the card                     |
| `max-width`    | `string`           | '' | (Optional) Maximum width of the card   |
| `bg-color`    | `string`           | 'inherit' | (Optional) Content card background color    |
| `is-favorite` | `boolean`          | false   | (Optional) Turn on the favorite icon |
