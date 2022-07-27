import { request } from 'library/http.library';

import { API_VERSIONS, HTTP_METHODS } from 'enums';
import { CreateJobRequestPayload, DeleteJobRequestPayload } from 'types/payload.types';
import { CreateJobResponse, DeleteJobResponse, FetchJobListResponse } from 'types/response.types';
import { JOB_ENDPOINTS } from './job.endpoints';

export class JobService {
  static createJob = (data: CreateJobRequestPayload): Promise<CreateJobResponse> =>
    request({
      action: JOB_ENDPOINTS.CREATE_JOB,
      data,
      apiVersion: API_VERSIONS.V1,
    });

  static fetchJobList = (data?: string): Promise<FetchJobListResponse> =>
    request({
      action: JOB_ENDPOINTS.FETCH_JOB_LIST(data),
      method: HTTP_METHODS.GET,
      apiVersion: API_VERSIONS.V1,
    });

  static deleteJob = (data: DeleteJobRequestPayload): Promise<DeleteJobResponse> =>
    request({
      action: JOB_ENDPOINTS.DELETE_JOB(data?.jobId),
      method: HTTP_METHODS.DELETE,
      apiVersion: API_VERSIONS.V1,
    });
}
