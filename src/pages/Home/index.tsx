import React, { FC } from "react";
import Players from "../../containers/Players";
import StyledHome from "./styled";
import FavoritePlayers from "../../containers/favoritePlayers";

const Home: FC = () => {
  return (
    <StyledHome>
      <Players />
      <FavoritePlayers />
    </StyledHome>
  );
};

export default Home;
