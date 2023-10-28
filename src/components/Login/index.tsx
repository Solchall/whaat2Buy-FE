import { useForm } from 'react-hook-form';
import { DevTool } from '@hookform/devtools';
import { ILoginForm, LoginFormState } from 'types';
import { useNavigate } from 'react-router-dom';
import { login, info } from 'apis';
import { useUserActions } from 'store';

import * as S from './style';
import LoginValidation from './validation';

const LoginForm = () => {
  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },

    control,
  } = useForm<ILoginForm>({ mode: 'onChange' });
  const { setUserId, setAccessToken, setUserInfo } = useUserActions();

  const handleFormSubmit = async (data: LoginFormState) => {
    try {
      const { id, accessToken } = await login(data);
      setUserId(id);
      setAccessToken(accessToken);
      const userInfo = await info();
      console.log(userInfo);
      setUserInfo(userInfo);
      navigate('/');
    } catch (error) {
      console.log(error);
    }
  };
  const navigate = useNavigate();

  const handleSignUpBtn = () => {
    navigate('/signup');
  };

  return (
    <form className={S.FormContainer} autoComplete="off" onSubmit={handleSubmit(handleFormSubmit)}>
      {/* 이메일 입력*/}

      <input
        className={S.InputWrapper}
        type="email"
        placeholder="이메일 입력"
        {...register('email', LoginValidation.email)}
      />

      {errors?.email && <div className={S.ErrorWrapper}> {errors.email.message} </div>}

      {/* 비밀번호 입력*/}

      <input
        className={S.InputWrapper}
        type="password"
        placeholder="비밀번호 입력"
        {...register('password', LoginValidation.password)}
      />

      {errors?.password && <div className={S.ErrorWrapper}> {errors.password.message} </div>}

      <button disabled={isSubmitting} type="submit" className={S.Button}>
        로그인
      </button>
      <button onClick={handleSignUpBtn} type="button" className={S.Button}>
        회원 가입
      </button>
      <DevTool control={control} />
    </form>
  );
};

export default LoginForm;
