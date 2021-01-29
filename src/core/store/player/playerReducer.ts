import Player from "../../models/Player";

import {
  DELETE_PLAYER,
  ADD_PLAYER,
  FETCH_PLAYERS_FAILURE,
  FETCH_PLAYERS_SUCCESS,
  FETCH_PLAYERS_REQUEST,
  SET_SEARCH_PLAYERS,
} from "./playerTypes";
import _ from "lodash";
import Pagination from "../../models/Pagination";

export interface InitialState {
  players: Array<Player>;
  isLoading: boolean;
  error: string;
  pagination: Pagination | null;
  search: string;
}

const initialState: InitialState = {
  players: [],
  isLoading: false,
  error: "",
  pagination: null,
  search: "",
};

const deletePlayer = (
  players: Array<Player>,
  playerId: number
): Array<Player> => {
  return players.filter((player) => player.id !== playerId);
};

const addPlayer = (players: Array<Player>, player: Player): Array<Player> => {
  return [...players, _.cloneDeep(player)];
};

const playerReducer = (
  state: InitialState = initialState,
  action: { type: string; payload: any }
) => {
  switch (action.type) {
    case FETCH_PLAYERS_REQUEST:
      return {
        ...state,
        isLoading: true,
        pagination: null,
      };
    case SET_SEARCH_PLAYERS:
      return {
        ...state,
        search: action.payload,
      };
    case FETCH_PLAYERS_SUCCESS:
      return {
        ...state,
        isLoading: false,
        players: action.payload.data,
        pagination: action.payload.meta,
      };
    case FETCH_PLAYERS_FAILURE:
      return { ...state, isLoading: false, error: action.payload };
    case DELETE_PLAYER:
      return {
        ...state,
        players: deletePlayer(state.players, action.payload as number),
      };
    case ADD_PLAYER:
      const player = _.filter(
        state.players,
        (player) => player.id === action.payload.id
      );
      if (player.length === 0) {
        return {
          ...state,
          players: addPlayer(state.players, action.payload as Player),
        };
      }
      return state;
    default:
      return state;
  }
};

export default playerReducer;
