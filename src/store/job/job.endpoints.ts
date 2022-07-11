export const JOB_ENDPOINTS = {
  CREATE_JOB: 'jobs',
  FETCH_JOB_LIST: (jobListURL?: string): string => (jobListURL ? `jobs${jobListURL}` : 'jobs'),
  DELETE_JOB: (jobId: string): string => `jobs/${jobId}`,
};
