import { IGso } from "../types/Types";
import { ConnectionStatus } from "../types/TypeLevels";
import { MainCharacters, ISpells } from "../types/TypeCharacters";
//AFTER Tutorial
//*

export const gso: IGso = {
  showDialogue: null,
  showCharacters: true,
  showQuests: null,
  showMap: null,
  showParty: null,
  chapter: 0,
  infoline: null,
  activeLevel: "ormron_street",
  globalEvents: [],
  levels: [
    {
      id: "ormron_street",
      npcs: {
        npc_Olija: 0,
        npc_Dario: null,
        char_Maya: null
      },
      connections: {
        street_to_garden: ConnectionStatus.closed,
        street_to_arena: ConnectionStatus.closed,
        street_to_map: ConnectionStatus.closed
      }
    },
    {
      id: "ormron_arena",
      npcs: {
        npc_Dario1: 5
      },
      connections: {
        arena_to_street: ConnectionStatus.open
      }
    },
    {
      id: "ormron_garden",
      npcs: {
        char_Tara: null,
        char_Nell: null
      },
      connections: {
        garden_to_street: ConnectionStatus.open,
        garden_to_gazebo: ConnectionStatus.closed,
        garden_to_school: ConnectionStatus.closed
      }
    }
  ],
  quests: [],
  questsCompleted: [],
  maps: ["ormron_streets"],
  questsTaken: [],
  party: [MainCharacters.maya],
  setParty: {
    [MainCharacters.maya]: true,
    [MainCharacters.tara]: false,
    [MainCharacters.grey]: false,
    [MainCharacters.dart]: false,
    [MainCharacters.nell]: false
  },
  influence: {
    [MainCharacters.nell]: 0,
    [MainCharacters.dart]: 0,
    [MainCharacters.tara]: 0,
    [MainCharacters.grey]: 0,
    [MainCharacters.maya]: 0
  },
  charactersData: {
    [MainCharacters.maya]: {
      id: MainCharacters.maya,
      life: 12,
      mana: 15,
      attack_physical: 2,
      attack_magic: 4,
      spells: [ISpells.maya_dispel1, ISpells.maya_heal1, ISpells.maya_healSelf]
    },
    [MainCharacters.nell]: {
      id: MainCharacters.nell,
      life: 12,
      mana: 15,
      attack_physical: 2,
      attack_magic: 4,
      spells: []
    },
    [MainCharacters.dart]: {
      id: MainCharacters.dart,
      life: 12,
      mana: 15,
      attack_physical: 2,
      attack_magic: 4,
      spells: []
    },
    [MainCharacters.tara]: {
      id: MainCharacters.tara,
      life: 12,
      mana: 15,
      attack_physical: 2,
      attack_magic: 4,
      spells: []
    },
    [MainCharacters.grey]: {
      id: MainCharacters.grey,
      life: 12,
      mana: 15,
      attack_physical: 2,
      attack_magic: 4,
      spells: []
    }
  }
};
//*/
