import { FC, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useForm, useFormState } from 'react-hook-form';

import { Button, Header, TextInput } from 'components/layouts';
import { UpdateProfileForm } from 'types/form.types';

import { RootState } from 'store/store';
import { updateProfileRequest } from 'store/user/user.actions';
import { selectCurrentUser } from 'store/user/user.selector';

import { UpdateProfileRequestPayload } from 'store/user/types/user-payload.types';

import { emailRules, lastNameRules, locationRules, userNameRules } from 'validation';

import Wrapper from './profile.styles';

const ProfilePage: FC = () => {
  const dispatch = useDispatch();

  const currentUser = useSelector(selectCurrentUser);
  const isUpdatingProfile = useSelector(
    (state: RootState) => state.user?.ui?.updateProfile?.isLoading,
  );

  const formData = {
    name: currentUser?.userName,
    email: currentUser?.email,
    lastName: currentUser?.fullName,
    location: currentUser?.location,
  };

  const {
    register,
    handleSubmit,
    formState: { errors },
    control,
    reset,
  } = useForm<UpdateProfileForm>({ defaultValues: formData });

  useEffect(() => {
    reset(formData);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const { isDirty } = useFormState({ control });

  const handleOnSubmit = handleSubmit((data) => {
    const updateProfileRequestPayload: UpdateProfileRequestPayload = {
      name: data?.name,
      email: data?.email,
      lastName: data?.lastName,
      location: data?.location,
    };

    dispatch(updateProfileRequest(updateProfileRequestPayload));
  });

  return (
    <Wrapper>
      <form className='form' onSubmit={handleOnSubmit}>
        <Header level={3} text='Profile' />

        <div className='form-center'>
          <TextInput<UpdateProfileForm>
            type='text'
            name='name'
            label='User Name'
            register={register}
            rules={userNameRules}
            error={errors.name}
          />

          <TextInput<UpdateProfileForm>
            type='email'
            name='email'
            label='Email'
            register={register}
            rules={emailRules}
            error={errors.email}
          />

          <TextInput<UpdateProfileForm>
            type='text'
            name='lastName'
            label='Last Name'
            register={register}
            rules={lastNameRules}
            error={errors.lastName}
          />

          <TextInput<UpdateProfileForm>
            type='text'
            name='location'
            label='Location'
            register={register}
            rules={locationRules}
            error={errors.location}
          />

          <Button
            text='UPDATE PROFILE'
            isLoading={isUpdatingProfile}
            loadingText='UPDATING PROFILE..'
            disabled={!isDirty || isUpdatingProfile}
          />
        </div>
      </form>
    </Wrapper>
  );
};

export default ProfilePage;
