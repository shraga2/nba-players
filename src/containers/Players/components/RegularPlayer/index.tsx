import React, { FC } from "react";
import PlayerModel from "../../../../core/models/Player";
import { useDispatch } from "react-redux";
import Player from "../../../../components/Player";
import StyledRegularPlayer from "./styled";

import { addFavoritePlayer, deletePlayer } from "../../../../core/store";

interface Props {
  player: PlayerModel;
}

const RegularPlayer: FC<Props> = ({ player }) => {
  const dispatch = useDispatch();

  const onClick = () => {
    dispatch(addFavoritePlayer({ ...player, team: { ...player.team } }));
    dispatch(deletePlayer(player.id));
  };

  return (
    <StyledRegularPlayer>
      <Player player={player} />
      <button onClick={onClick}>+</button>
    </StyledRegularPlayer>
  );
};

export default RegularPlayer;
