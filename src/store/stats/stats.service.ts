import { request } from 'library/http.library';

import { API_VERSIONS, HTTP_METHODS } from 'enums';
import { FetchStatsResponse } from 'types/response.types';

import { STAT_ENDPOINTS } from './stats.endpoints';

export class StatsService {
  static fetchStats = (): Promise<FetchStatsResponse> =>
    request({
      action: STAT_ENDPOINTS.FETCH_STATS,
      method: HTTP_METHODS.GET,
      apiVersion: API_VERSIONS.V1,
    });
}
