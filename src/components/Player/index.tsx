import React, { FC } from "react";
import PlayerModel from "../../core/models/Player";
import StyledPlayer from "./styled";

interface Props {
  player: PlayerModel;
}

const Player: FC<Props> = ({ player }) => {
  return (
    <StyledPlayer>
      <h1>{`${player.first_name} ${player.last_name}`}</h1>
    </StyledPlayer>
  );
};

export default Player;
