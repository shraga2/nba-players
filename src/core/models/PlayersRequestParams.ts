import PlayerResponse from "./PlayerResponse";

interface PlayersRequestParams {
  search?: string;
  page?: number;
  per_page?: number;
}

export default PlayersRequestParams;
