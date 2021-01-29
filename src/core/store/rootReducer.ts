import { combineReducers } from "redux";

import favoritePlayerReducer, {
  InitialState as FavoritePlayersState,
} from "./favoritePlayer/favoritePlayerReducer";
import playerReducer, {
  InitialState as PlayersState,
} from "./player/playerReducer";

export interface RootReducer {
  players: PlayersState;
  favoritePlayers: FavoritePlayersState;
}

const rootReducer = combineReducers({
  players: playerReducer,
  favoritePlayers: favoritePlayerReducer,
});

export default rootReducer;
