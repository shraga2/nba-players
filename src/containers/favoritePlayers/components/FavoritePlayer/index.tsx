import React, { FC } from "react";
import StyledFavoritePlayer from "./styled";
import PlayerModel from "../../../../core/models/Player";
import { useDispatch } from "react-redux";
import Player from "../../../../components/Player";
import { addPlayer, deleteFavoritePlayer } from "../../../../core/store";

interface Props {
  player: PlayerModel;
}

const FavoritePlayer: FC<Props> = ({ player }) => {
  const dispatch = useDispatch();

  const onClick = () => {
    dispatch(addPlayer({ ...player, team: { ...player.team } }));
    dispatch(deleteFavoritePlayer(player.id));
  };

  return (
    <StyledFavoritePlayer>
      <Player player={player} />
      <button onClick={onClick}>-</button>
    </StyledFavoritePlayer>
  );
};

export default FavoritePlayer;
