import React, { FC, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { fetchPlayers, setSearch } from "../../core/store";
import { RootReducer } from "../../core/store/rootReducer";
import { CircularProgress } from "@material-ui/core";
import StyledPlayers, { StyledCircularProgressIndicator } from "./styled";
import { v4 as uuid4 } from "uuid";
import RegularPlayer from "./components/RegularPlayer";
import { TextField } from "@material-ui/core";
import Navigation from "./components/Navigation";

const Players: FC = () => {
  const dispatch = useDispatch();
  const { isLoading, players, error, pagination, search } = useSelector(
    (state: RootReducer) => state.players
  );

  useEffect(() => {
    dispatch(fetchPlayers({}));
  }, []); // eslint-disable-line react-hooks/exhaustive-deps

  if (isLoading) {
    return (
      <StyledCircularProgressIndicator>
        <CircularProgress />
      </StyledCircularProgressIndicator>
    );
  }
  if (error) {
    return <h1> {error} </h1>;
  }

  return (
    <StyledPlayers>
      <h1>NBA Players</h1>
      <h1>*************</h1>
      <TextField
        value={search}
        onKeyPress={(e) => {
          if (e.key === "Enter") {
            dispatch(fetchPlayers({ search }));
            e.preventDefault();
          }
        }}
        onChange={(e) => {
          dispatch(setSearch(e.target.value));
        }}
      />
      <br />
      {players.map((player) => {
        return <RegularPlayer key={uuid4()} player={player} />;
      })}
      <br />
      <Navigation pagination={pagination} />
    </StyledPlayers>
  );
};

export default Players;
