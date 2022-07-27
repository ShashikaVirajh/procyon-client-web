import { ROUTES } from 'constants/routes.constants';
import { FC, useEffect, useState } from 'react';
import { useForm } from 'react-hook-form';

import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';

import { selectIsAuthenticated } from 'store/user/user.selector';
import { SignInRequestPayload, SignUpRequestPayload } from 'types/payload.types';

import { signInRequest, signUpRequest } from 'store/user/user.actions';
import { RootState } from 'store/store';

import { RegistrationForm } from 'types/form.types';
import { AppLogo, Button, ButtonLink, Header, Text, TextInput } from 'components/layouts';
import { emailRules, passwordRules, userNameRules } from 'validation';

import Wrapper from './register.styles';

const initialState = {
  isMember: true,
};

const RegisterPage: FC = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const [values, setValues] = useState(initialState);

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<RegistrationForm>();

  const isAuthenticated = useSelector(selectIsAuthenticated);
  const isSigningIn = useSelector((state: RootState) => state.user?.ui?.signIn?.isLoading);
  const isSigningUp = useSelector((state: RootState) => state.user?.ui?.signUp?.isLoading);

  useEffect(() => {
    if (isAuthenticated) {
      navigate(ROUTES.DASHBOARD);
    }
  }, [isAuthenticated, navigate]);

  const handleOnSubmit = handleSubmit((data) => {
    const { isMember } = values;

    if (isMember) {
      const signInRequestPayload: SignInRequestPayload = {
        email: data?.email,
        password: data?.password,
      };
      return dispatch(signInRequest(signInRequestPayload));
    }

    const signUpRequestPayload: SignUpRequestPayload = {
      name: data?.name,
      email: data?.email,
      password: data?.password,
    };

    dispatch(signUpRequest(signUpRequestPayload));
  });

  const toggleAuth = (): void => {
    setValues({ ...values, isMember: !values.isMember });
  };

  const screenText = values.isMember ? 'Login' : 'Register';
  const isLoading = values.isMember ? isSigningIn : isSigningUp;
  const loadingText = values.isMember ? 'SIGNING IN..' : 'SIGNING UP..';

  return (
    <Wrapper className='full-page'>
      <form className='form' onSubmit={handleOnSubmit}>
        <AppLogo />

        <Header level={3} text={screenText} className='header' />

        {!values.isMember && (
          <TextInput<RegistrationForm>
            type='text'
            name='name'
            label='User Name'
            register={register}
            rules={userNameRules}
            error={errors.name}
          />
        )}

        <TextInput<RegistrationForm>
          type='email'
          name='email'
          label='Email'
          register={register}
          rules={emailRules}
          error={errors.email}
        />

        <TextInput<RegistrationForm>
          type='password'
          name='password'
          label='Password'
          register={register}
          rules={passwordRules}
          error={errors.password}
        />

        <Button type='submit' text='SUBMIT' isLoading={isLoading} loadingText={loadingText} />

        <div className='login-register-text-container'>
          <Text label={values.isMember ? 'Not a member yet?' : 'Already a member?'} />

          <ButtonLink text={values.isMember ? 'Register' : 'Login'} onClick={toggleAuth} />
        </div>
      </form>
    </Wrapper>
  );
};

export default RegisterPage;
