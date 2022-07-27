import { JobFilterState } from 'store/job/job-store.types';

export const createFetchJobListURL = (filters: JobFilterState, currentPage: number): string => {
  let jobListURL = `?status=${filters?.jobStatus}&jobType=${filters?.jobType}&sort=${filters?.sort}&page=${currentPage}`;

  if (filters.search) {
    jobListURL = `${jobListURL}&search=${filters.search}`;
  }

  return jobListURL;
};
