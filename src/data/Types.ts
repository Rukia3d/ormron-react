export interface IGso {
  chapter: number;
  activeLevel: string;
  infoline: string | null;
  selectParty: string[] | null;
  activeDialogue: number | null;
  activeMap: number | null;
  questsTaken: number[];
  activeQuest: number | null;
  questsCompleted: number[];
  globalEvents: string[];
  quests: any;
  levels: any;
  maps: any;
  party: string[];
  influence: number[];
}

export interface IMap {
  id: number;
  name: string;
  levels: IMapLevel[];
}

export interface IMapLevel {
  id: number;
  name: string;
  image: string;
  open: boolean;
  position: IPoint;
}

export interface IPartyMember {
  id: string;
  name: string;
  image: string;
  placeholder: string;
  selected: string;
  opened: boolean;
}

export interface ILevel {
  id: string;
  connections: number[];
  backgrounds: IBackground[];
  npcs: number[];
  triggers?: number[];
}

export interface IConnection {
  id: number;
  name: string;
  position: IPoint;
  open: string;
  closed: string;
  selectParty: boolean;
  triggers?: number[];
  infoline?: string;
}

export interface IPoint {
  x: number;
  y: number;
}

export interface IBackground {
  image: string;
}

export interface INpc {
  id: string;
  name: string;
  image: string;
  position: IPoint;
}

export interface ITrigger {
  id: number | null;
  triggerType: string;
  data?: any;
  condition?: any;
}

export interface IDialContinuation {
  id: string;
}

export interface IDialogue {
  id: number;
  name: string;
  characterId: string;
  image: string;
  lines: string[];
  nextNode?: number | IDialContinuation;
  infoline?: string;
  choice?: IDialogueChoice[];
  triggers?: number[];
}

export interface IDialogueChoice {
  id: number;
  text: string;
  nextDial: number;
  triggers: number[];
}

export interface IQuest {
  id: string;
  name: string;
  main: boolean;
  steps: IQuestStep[];
}

export interface IQuestStep {
  name: string;
  event: string;
}
