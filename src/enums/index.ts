export enum HTTP_METHODS {
  POST = 'post',
  PUT = 'put',
  PATCH = 'patch',
  GET = 'get',
  DELETE = 'delete',
}

export enum STATUS_CODES {
  BAD_REQUREST = 400,
  UNAUTHORIZED = 401,
  FORBIDDEN = 403,
  NOT_FOUND = 404,
  UNPROCESSABLE_ENTITY = 422,
  INTERNAL_SERVER_ERROR = 500,
  BAD_GATEWAY = 502,
}

export enum API_VERSIONS {
  V1 = 'v1',
}

export enum JOB_TYPES {
  FULL_TIME = 'full-time',
  PART_TIME = 'part-time',
  REMOTE = 'remote',
  INTERNSHIP = 'internship',
}

export enum JOB_STATUSES {
  INTERVIEW = 'interview',
  PENDING = 'pending',
  DECLINED = 'declined',
}

export enum JOB_SORT_OPTIONS {
  LATEST = 'latest',
  OLDEST = 'oldest',
  NAME_A = 'a-z',
  NAME_Z = 'z-a',
}
