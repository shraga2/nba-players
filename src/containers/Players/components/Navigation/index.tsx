import React, { FC } from "react";
import StyledNavigation from "./styled";
import Pagination from "../../../../core/models/Pagination";
import { fetchPlayers } from "../../../../core/store";
import { useDispatch, useSelector } from "react-redux";
import { RootReducer } from "../../../../core/store/rootReducer";

interface Props {
  pagination: Pagination | null;
}

const Navigation: FC<Props> = ({ pagination }) => {
  const dispatch = useDispatch();
  const { search } = useSelector((state: RootReducer) => state.players);

  const moveNextPage = () => {
    if (pagination?.next_page) {
      dispatch(fetchPlayers({ page: pagination.next_page, search }));
    }
  };

  const movePrevPage = () => {
    if (pagination?.current_page !== 1) {
      dispatch(
        fetchPlayers({ page: (pagination?.current_page as number) - 1, search })
      );
    }
  };

  if (!pagination) {
    return <h1>Loading</h1>;
  }

  return (
    <StyledNavigation>
      <button
        onClick={() => {
          movePrevPage();
        }}
        disabled={pagination.current_page === 1 ? true : false}
      >
        prev
      </button>
      <h1>{`${pagination.current_page}/${pagination.total_pages}`}</h1>
      <button
        onClick={() => {
          moveNextPage();
        }}
        disabled={!pagination.next_page ? true : false}
      >
        next
      </button>
    </StyledNavigation>
  );
};

export default Navigation;
