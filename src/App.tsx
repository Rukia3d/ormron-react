import React from "react";
import { useDispatch, useSelector } from "react-redux";

import { displayQuest, activeMap } from "./store/actions";
import { dialogues } from "./data/Dialogues";
import { maps } from "./data/Maps";
import { NPC } from "./Npc";
import { Quest } from "./Quest";
import { Dialogue } from "./Dialogue";
import { Party } from "./Party";
import { Map } from "./Map";
import { Connection } from "./Connection";

import { findConnection, findLevel, findQuest } from "./data/helpers";
import { findNpc } from "./data/helpers";

import "./App.css";
import { ILevel } from "./data/Types";

interface IInfolineProps {
  line: string | null;
}

const InfoLine = (props: IInfolineProps) => {
  const infoStyle = {
    color: "white",
    margin: "0 auto",
    top: "200px",
    height: "50px",
    width: "100%",
    position: "absolute" as "absolute",
    textAlign: "center" as "center"
  };
  return (
    <div style={infoStyle}>
      <h1>{props.line}</h1>
    </div>
  );
};

interface IMenuProps {
  quest: any;
}

const Menu = (props: IMenuProps) => {
  const dispatch = useDispatch();
  const menuStyle = {
    top: "0",
    right: "15px",
    width: "200px",
    height: "200px",
    position: "absolute" as "absolute",
    backgroundImage: `url(temp-backg3.png)`
  };

  const iconMapStyle = {
    width: "70px",
    height: "70px",
    position: "relative" as "relative",
    top: "100px"
  };

  const iconQuestStyle = {
    width: "70px",
    height: "70px",
    position: "relative" as "relative",
    top: "130px"
  };

  const iconInventoryStyle = {
    width: "70px",
    height: "70px",
    position: "relative" as "relative",
    top: "30px",
    left: "130px"
  };

  return (
    <div style={menuStyle}>
      <img
        style={iconMapStyle}
        src="temp-icon3.png"
        onClick={() => dispatch(activeMap(0))}
      />
      <img
        style={iconQuestStyle}
        src="temp-icon4.png"
        onClick={() => dispatch(displayQuest(props.quest[0]))}
      />
      <img style={iconInventoryStyle} src="temp-icon5.png" />
    </div>
  );
};

const App: React.FC = () => {
  const dialogueInd = useSelector((state: any) => state.activeDialogue);
  const levelId = useSelector((state: any) => state.activeLevel);
  const levelState = useSelector((state: any) => state.levels);
  const infoline = useSelector((state: any) => state.infoline);
  const questActive = useSelector((state: any) => state.activeQuest);
  const questsTaken = useSelector((state: any) => state.questsTaken);
  const questsState = useSelector((state: any) => state.quests);
  const mapsState = useSelector((state: any) => state.maps);
  const mapId = useSelector((state: any) => state.activeMap);
  const chapter = useSelector((state: any) => state.chapter);
  const party = useSelector((state: any) => state.selectParty);
  const partyMembers = useSelector((state: any) => state.party);
  const globalevents = useSelector((state: any) => state.globalEvents);

  const currentLevelState = (id: string) => {
    const current = levelState.find((l: ILevel) => l.id === id);
    if (!current) {
      //Create this level in GSO
      throw Error("Adiition of new levels to GSO is not implemented");
    }
    return current;
  };

  return (
    <div className="App">
      <img src={findLevel(levelId).backgrounds[0].image} />
      {findLevel(levelId).connections.map((c: number) => {
        const connection = findConnection(c);
        return (
          <Connection
            globalevents={globalevents}
            c={connection}
            key={connection.id}
            state={levelState}
            levelState={currentLevelState(levelId)}
            quests={questsState}
            party={partyMembers}
          />
        );
      })}
      {findLevel(levelId).npcs.map((n: number) => {
        const npc = findNpc(n);
        return (
          <NPC npc={npc} key={npc.id} state={currentLevelState(levelId)} />
        );
      })}
      {dialogueInd !== null ? (
        <Dialogue dialogue={dialogues[dialogueInd]} quests={questsState} />
      ) : null}
      {infoline !== null ? <InfoLine line={infoline} /> : null}
      <Menu quest={questsTaken} />
      {questActive !== null ? (
        <Quest
          active={questActive}
          allTakenQuests={questsState}
          quests={questsTaken.map((q: string) => findQuest(q))}
        />
      ) : null}
      {mapId !== null ? (
        <Map chapter={chapter} map={maps[mapId]} state={mapsState} />
      ) : null}
      {party !== null ? <Party party={partyMembers} /> : null}
    </div>
  );
};

export default App;
