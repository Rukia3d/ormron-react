import {
  ACTIVE_DIALOGUE,
  ACTIVATE_LEVEL,
  SHOW_INFOLINE,
  ACTIVE_MAP,
  SHOW_QUESTS,
  UPDATE_QUEST,
  END_QUEST,
  MAP_UPDATE,
  UPDATE_NPC,
  SELECT_PARTY,
  UPDATE_PARTY,
  UPDATE_INFLUENCE,
  OPEN_LEVEL,
  OPEN_CONNECTION,
  ADD_GLOBAL_EVENT,
  SET_PARTY
} from "../data/Constants";
import { IGsoParty } from "../types/Types";

export const showDialogue = (index: number | null) => {
  return {
    payload: index,
    type: ACTIVE_DIALOGUE
  };
};

export const levelActive = (index: string) => ({
  payload: index,
  type: ACTIVATE_LEVEL
});

export const openConnection = (condition: [string, string]) => {
  const level = condition[0];
  const entry = condition[1];
  return {
    payload: { level, entry },
    type: OPEN_CONNECTION
  };
};

export const addGlobalEvent = (event: string) => {
  return {
    payload: event,
    type: ADD_GLOBAL_EVENT
  };
};

export const openLevel = (index: number) => {
  return {
    payload: index,
    type: OPEN_LEVEL
  };
};

export const npcUpdate = (condition: [string, string, number | null]) => {
  const level = condition[0];
  const character = condition[1];
  const setTo = condition[2];
  return {
    payload: { level, character, setTo },
    type: UPDATE_NPC
  };
};

export const showInfoline = (text: string | null) => ({
  payload: text,
  type: SHOW_INFOLINE
});

export const showQuests = (quest: string | null) => {
  return {
    payload: quest,
    type: SHOW_QUESTS
  };
};

export const questUpdate = (condition: [string, string]) => {
  const quest = condition[0];
  const step = condition[1];
  return {
    payload: { quest, step },
    type: UPDATE_QUEST
  };
};

export const endQuest = (condition: string[]) => {
  const quest = condition[0];
  return {
    payload: quest,
    type: END_QUEST
  };
};

export const showMap = (id: number | null) => ({
  payload: id,
  type: ACTIVE_MAP
});

export const updateMap = (condition: [string, string]) => {
  const map = condition[0];
  const state = condition[1];
  return {
    payload: { map, state },
    type: MAP_UPDATE
  };
};

export const showParty = (required: IGsoParty | null) => {
  return {
    payload: required,
    type: SELECT_PARTY
  };
};

export const setParty = (party: IGsoParty) => {
  return {
    payload: party,
    type: SET_PARTY
  };
};

export const updateParty = (condition: string[]) => {
  const character = condition[0];
  const update = condition[1];
  return {
    payload: { character, update },
    type: UPDATE_PARTY
  };
};

export const updateInfluence = (condition: [string, number]) => {
  const character = condition[0];
  const num = condition[1];
  return {
    payload: { character, num },
    type: UPDATE_INFLUENCE
  };
};

// export const clearLevelTriggers = (index: number) => ({
//   payload: index,
//   type: LEVEL_TIGGERS_CLEAR
// });

export default {
  showDialogue,
  levelActive,
  npcUpdate,
  showInfoline,
  showQuests,
  endQuest,
  showMap,
  updateMap,
  showParty,
  questUpdate,
  openLevel
};
