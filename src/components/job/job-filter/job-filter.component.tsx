import { JOB_SORT_OPTION_LIST, JOB_STATUS_LIST, JOB_TYPE_LIST } from 'constants/common.constants';
import { FC, useCallback, useEffect } from 'react';
import { Button, Select, TextInput } from 'components/elements';
import { useDispatch, useSelector } from 'react-redux';

import { JobFilterForm } from 'types/form.types';

import { useForm, useFormState } from 'react-hook-form';
import { FilterJobsPayload } from 'store/job/types/job-payload.types';
import { filterJobs, resetJobFilters } from 'store/job/job.actions';
import { selectJobFilters } from 'store/job/job.selector';

import Wrapper from './job-filter.styles';

const JobFilter: FC = () => {
  const dispatch = useDispatch();

  const { search, jobStatus, jobType, sort } = useSelector(selectJobFilters);

  const formData = {
    search,
    jobType,
    jobStatus,
    sort,
  };

  const { register, handleSubmit, control } = useForm<JobFilterForm>({
    defaultValues: formData,
  });

  const { isDirty } = useFormState({ control });

  const handleResetFilters = useCallback((): void => {
    dispatch(resetJobFilters());
  }, [dispatch]);

  useEffect(() => {
    return () => {
      handleResetFilters();
    };
  }, [handleResetFilters]);

  const handleOnSubmit = handleSubmit((data) => {
    const filterJobsPayload: FilterJobsPayload = {
      search: data?.search,
      jobType: data?.jobType,
      jobStatus: data?.jobStatus,
      sort: data?.sort,
    };

    dispatch(filterJobs(filterJobsPayload));
  });

  return (
    <Wrapper>
      <form className='form' onSubmit={handleOnSubmit}>
        <div className='form-center'>
          <TextInput<JobFilterForm>
            type='text'
            name='search'
            label='Search Jobs'
            register={register}
          />

          <Select<JobFilterForm>
            name='jobStatus'
            label='Job Status'
            register={register}
            options={['all', ...JOB_STATUS_LIST]}
          />

          <Select<JobFilterForm>
            name='jobType'
            label='Job Type'
            register={register}
            options={['all', ...JOB_TYPE_LIST]}
          />

          <Select<JobFilterForm>
            name='sort'
            label='Sort By'
            register={register}
            options={JOB_SORT_OPTION_LIST}
          />

          <div className='btn-container'>
            <Button text='APPLY FILTERS' disabled={!isDirty} />

            <Button
              type='button'
              text='CLEAR FILTERS'
              disabled={!isDirty}
              onClick={handleResetFilters}
            />
          </div>
        </div>
      </form>
    </Wrapper>
  );
};

export default JobFilter;
