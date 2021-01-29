import Player from "../../models/Player";
import { DELETE_PLAYER, ADD_PLAYER } from "./favoritePlayerTypes";

export interface DeletePlayer {
  type: string;
  payload: number;
}

export interface AddPlayer {
  type: string;
  payload: Player;
}

export const deletePlayer = (playerId: number): DeletePlayer => {
  return {
    type: DELETE_PLAYER,
    payload: playerId,
  };
};

export const addPlayer = (player: Player): AddPlayer => {
  return {
    type: ADD_PLAYER,
    payload: player,
  };
};
