import { AxiosService } from './AxiosService';
import { ApiEndpoint } from './types/api/enums/ApiEndpoint';
import { IPlayer, IPlayerPayload } from './types/liderBoard/IPlayer';

class LeaderBoardService extends AxiosService {
  private readonly TEAM_NAME = 'bombers';
  private readonly RATING_FIELD_NAME = 'score';

  constructor() {
    super();
  }

  public addPlayer(player: IPlayer) {
    const requestData = {
      data: player,
      ratingFieldName: this.RATING_FIELD_NAME,
      teamName: this.TEAM_NAME,
    };

    return this.post(ApiEndpoint.LEADERBOARD, requestData);
  }

  public getPlayers(): Promise<IPlayerPayload> {
    const requestData = {
      ratingFieldName: this.RATING_FIELD_NAME,
      cursor: 0,
      limit: 10,
    };

    return this.post(`${ApiEndpoint.LEADERBOARD}/${this.TEAM_NAME}`, requestData);
  }
}

export const leaderBoardService = new LeaderBoardService();