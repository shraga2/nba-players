import Pagination from "./Pagination";
import Player from "./Player";

interface PlayerResponse {
  data: Array<Player>;
  meta: Pagination;
}

export default PlayerResponse;
