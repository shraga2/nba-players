import axios, { AxiosResponse } from "axios";
import {
  DELETE_PLAYER,
  ADD_PLAYER,
  FETCH_PLAYERS_FAILURE,
  FETCH_PLAYERS_REQUEST,
  FETCH_PLAYERS_SUCCESS,
  SET_SEARCH_PLAYERS,
} from "./playerTypes";
import Player from "../../models/Player";
import { Dispatch } from "redux";
import PlayersResponse from "../../models/PlayerResponse";
import PlayersRequestParams from "../../models/PlayersRequestParams";

// interfaces

export interface DeletePlayer {
  type: string;
  payload: number;
}

export interface AddPlayer {
  type: string;
  payload: Player;
}

export interface FetchPlayerRequest {
  type: string;
}

export interface FetchPlayerSuccess {
  type: string;
  payload: PlayersResponse;
}

export interface FetchPlayersFailure {
  type: string;
  payload: string;
}

export interface SetSearch {
  type: string;
  payload: string;
}

// actions

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

export const setSearch = (search: string): SetSearch => {
  return {
    type: SET_SEARCH_PLAYERS,
    payload: search,
  };
};

// ---------------------- begining of fetch players ----------------------------

export const fetchPlayersRequest = (): FetchPlayerRequest => {
  return {
    type: FETCH_PLAYERS_REQUEST,
  };
};

export const fetchPlayersSuccess = (
  playersResponse: PlayersResponse
): FetchPlayerSuccess => {
  return {
    type: FETCH_PLAYERS_SUCCESS,
    payload: playersResponse,
  };
};

export const fetchPlayersFailure = (failure: string): FetchPlayersFailure => {
  return {
    type: FETCH_PLAYERS_FAILURE,
    payload: FETCH_PLAYERS_FAILURE,
  };
};

export const fetchPlayers = (params: PlayersRequestParams): Function => {
  return async (dispatch: Dispatch): Promise<void> => {
    dispatch(fetchPlayersRequest());
    let requestParams: string = "?";
    if (!("per_page" in params)) {
      params.per_page = 10;
    }
    for (const [key, value] of Object.entries(params)) {
      requestParams += `${key}=${value}&`;
    }
    requestParams = requestParams.slice(0, -1);
    const url: string = `https://www.balldontlie.io/api/v1/players${requestParams}`;
    try {
      const response: AxiosResponse<any> = await axios.get(url);
      const playersResponse: PlayersResponse = response.data;
      dispatch(fetchPlayersSuccess(playersResponse));
    } catch (error) {
      const errMsg = error.message;
      dispatch(fetchPlayersFailure(errMsg));
    }
  };
};

// ---------------------- end of fetch players ----------------------------
