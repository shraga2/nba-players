import React, { FC, useState } from "react";
import StyledFavoritePlayers from "./styled";
import { useSelector } from "react-redux";
import { RootReducer } from "../../core/store/rootReducer";
import FavoritePlayer from "./components/FavoritePlayer";
import { v4 as uuid4 } from "uuid";
import { ChromePicker } from "react-color";

const FavoritePlayers: FC = () => {
  const [showColorPicker, setShowColorPicker] = useState(false);
  const [color, setColor] = useState("#fff");
  const { players } = useSelector(
    (state: RootReducer) => state.favoritePlayers
  );
  return (
    <StyledFavoritePlayers style={{ backgroundColor: color }}>
      <h1>Favorite NBA Players</h1>
      <button onClick={() => setShowColorPicker(!showColorPicker)}>
        {showColorPicker ? "close color picker" : "change background color"}
      </button>
      {showColorPicker ? (
        <ChromePicker
          color={color}
          onChange={(updatedColor) => {
            setColor(updatedColor.hex);
          }}
        />
      ) : null}
      <h1>*********************</h1>
      {players.map((player) => {
        return <FavoritePlayer key={uuid4()} player={player} />;
      })}
    </StyledFavoritePlayers>
  );
};

export default FavoritePlayers;
