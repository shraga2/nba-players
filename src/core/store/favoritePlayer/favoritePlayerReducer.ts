import Player from "../../models/Player";
import { DELETE_PLAYER, ADD_PLAYER } from "./favoritePlayerTypes";
import _ from "lodash";

export interface InitialState {
  players: Array<Player>;
}

const initialState: InitialState = {
  players: [],
};

const deletePlayer = (
  players: Array<Player>,
  playerId: number
): Array<Player> => {
  return players.filter((player) => player.id !== playerId);
};

const playerReducer = (
  state: InitialState = initialState,
  action: { type: string; payload: any }
) => {
  switch (action.type) {
    case DELETE_PLAYER:
      return {
        ...state,
        players: deletePlayer(state.players, action.payload),
      };
    case ADD_PLAYER:
      const player = _.filter(
        state.players,
        (player) => player.id === action.payload.id
      );
      if (player.length === 0) {
        return {
          // players: [..._.cloneDeep(state.players), _.cloneDeep(action.payload)],
          players: [...state.players, action.payload],
        };
      }
      return state;
    default:
      return state;
  }
};

export default playerReducer;
