import { JOB_STATUS_LIST, JOB_TYPE_LIST } from 'constants/common.constants';
import { FC, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useForm, useFormState } from 'react-hook-form';

import { Button, Header, Select, TextInput } from 'components/elements';

import { RootState } from 'store/store';

import { JobForm } from 'types/form.types';
import { createJobRequest } from 'store/job/job.actions';
import { CreateJobRequestPayload } from 'store/job/types/job-payload.types';
import { selectDetailedJob } from 'store/job/job.selector';
import { companyRules, locationRules, positionRules } from 'validation/';
import { JOB_STATUSES, JOB_TYPES } from 'enums';

import Wrapper from './create-jobstyles';

const CreateJobPage: FC = (): JSX.Element => {
  const dispatch = useDispatch();

  const detailedJob = useSelector(selectDetailedJob);
  const isCreatingJob = useSelector((state: RootState) => state.job.ui?.createJob?.isLoading);

  const formData = {
    position: '',
    company: '',
    jobLocation: '',
    jobType: JOB_TYPES.FULL_TIME,
    jobStatus: JOB_STATUSES.INTERVIEW,
  };

  const {
    register,
    handleSubmit,
    formState: { errors },
    control,
    reset,
  } = useForm<JobForm>({ defaultValues: formData });

  useEffect(() => {
    reset(formData);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [detailedJob, reset]);

  const { isDirty } = useFormState({ control });

  const handleOnSubmit = handleSubmit((data) => {
    const createJobRequestPayload: CreateJobRequestPayload = {
      company: data?.company,
      position: data?.position,
      jobLocation: data?.jobLocation,
      jobType: data?.jobType,
      jobStatus: data?.jobStatus,
    };

    dispatch(createJobRequest(createJobRequestPayload));
  });

  const handleResetForm = (): void => {
    reset(formData);
  };

  return (
    <Wrapper>
      <form className='form' onSubmit={handleOnSubmit}>
        <Header level={3} text='CREATE JOB' />

        <div className='form-center'>
          <TextInput<JobForm>
            type='text'
            name='position'
            label='Position'
            register={register}
            rules={positionRules}
            error={errors.position}
          />

          <TextInput<JobForm>
            type='text'
            name='company'
            label='Company'
            register={register}
            rules={companyRules}
            error={errors.company}
          />

          <TextInput<JobForm>
            type='text'
            name='jobLocation'
            label='Job Location'
            register={register}
            rules={locationRules}
            error={errors.jobLocation}
          />

          <Select<JobForm>
            name='jobStatus'
            label='Job Status'
            register={register}
            options={JOB_STATUS_LIST}
          />

          <Select<JobForm>
            name='jobType'
            label='Job Type'
            register={register}
            options={JOB_TYPE_LIST}
          />

          <div className='btn-container'>
            <Button
              type='submit'
              text='SAVE'
              isLoading={isCreatingJob}
              loadingText='CREATING JOB..'
              disabled={!isDirty || isCreatingJob}
            />

            <Button type='button' text='CLEAR' onClick={handleResetForm} />
          </div>
        </div>
      </form>
    </Wrapper>
  );
};

export default CreateJobPage;
