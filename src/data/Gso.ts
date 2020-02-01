import { IGso } from "./Types";

//AFTER Tutorial
//*

export const gso: IGso = {
  chapter: 0,
  activeDialogue: null,
  activeLevel: "ormron_street",
  activeQuest: null,
  activeMap: null,
  infoline: null,
  selectParty: null,
  globalEvents: [],
  levels: [
    {
      id: "ormron_street",
      npc_Olija: 0,
      npc_Dario: false,
      connections: {
        street_to_garden: "closed",
        street_to_arena: "closed",
        street_to_map: "closed"
      }
    },
    {
      id: "ormron_arena",
      npc_Dario1: 5,
      connections: {
        arena_to_street: "open"
      }
    },
    {
      id: "ormron_garden",
      npc_Tara: false,
      connections: {
        garden_to_street: "open",
        garden_to_gazebo: "open",
        garden_to_school: "closed"
      }
    }
  ],
  quests: [],
  questsCompleted: [],
  maps: [0],
  questsTaken: [],
  party: ["maya"],
  influence: [0, 0, 0, 0]
};
//*/
