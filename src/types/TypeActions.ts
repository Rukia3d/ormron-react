import {
  ACTIVE_DIALOGUE,
  ACTIVATE_LEVEL,
  SHOW_INFOLINE,
  END_QUEST,
  SHOW_QUESTS,
  UPDATE_QUEST,
  ACTIVE_MAP,
  MAP_UPDATE,
  UPDATE_NPC,
  SELECT_PARTY,
  UPDATE_PARTY,
  UPDATE_INFLUENCE,
  OPEN_CONNECTION,
  ADD_GLOBAL_EVENT,
  SET_PARTY,
  SHOW_CHARACTERS,
  OPEN_LEVEL
} from "../data/Constants";
import { IGsoQuest, IGso } from "./Types";
import { INPCLevel, IConnectionLevel } from "./TypeLevels";
import { MainCharacters, IGsoParty } from "./TypeCharacters";

export interface IReturnAction {
  type: IAction;
  payload: IPayload;
}

export type IAction =
  | ACTIVE_DIALOGUE
  | ACTIVATE_LEVEL
  | SHOW_INFOLINE
  | END_QUEST
  | SHOW_QUESTS
  | UPDATE_QUEST
  | ACTIVE_MAP
  | MAP_UPDATE
  | UPDATE_NPC
  | SELECT_PARTY
  | UPDATE_PARTY
  | UPDATE_INFLUENCE
  | OPEN_CONNECTION
  | SET_PARTY
  | SHOW_CHARACTERS
  | OPEN_LEVEL
  | ADD_GLOBAL_EVENT;

export type IPayload =
  | IPayloadNpcUpdate
  | IPayloadQuestUpdate
  | IPayloadOpenConnection
  | IPayloadDisplayQuests
  | IPayloadPartyUpdate
  | IPayloadUpdateInfluence
  | IPayloadUpdateMap
  | IPayloadShowParty
  | IPayloadSetParty
  | IPayloadLevelNpcsUpdate
  | IGsoParty
  | string
  | number
  | boolean
  | null;

export interface IPayloadNpcUpdate {
  level: string;
  character: INPCLevel;
  setTo: number | null | false;
}

export interface IPayloadDisplayQuests {
  quests: IGsoQuest[] | null;
}

export interface IPayloadPartyUpdate {
  character: MainCharacters;
  update: string;
}

export interface IPayloadLevelNpcsUpdate {
  level: string;
  npc: string;
  state: "add" | "remove";
}

export interface IPayloadQuestUpdate {
  quest: string;
  step: string;
}

export interface IPayloadOpenConnection {
  level: string;
  entry: IConnectionLevel;
}

export interface IPayloadUpdateInfluence {
  character: MainCharacters;
  num: number;
}

export interface IPayloadUpdateMap {
  map: string;
  state: string;
}

export interface IPayloadShowParty {
  party: IGsoParty | null;
}

export interface IPayloadSetParty {
  party: IGsoParty;
}
