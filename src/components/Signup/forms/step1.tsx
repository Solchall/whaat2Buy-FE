import { useForm } from 'react-hook-form';
import { useSignupEmail, useSignupPassword } from 'store';
import { ISignupForm } from 'types';
import SignupValidation from './validation';
import { DevTool } from '@hookform/devtools';
import * as S from '../../Login/style';
import PageBtn from '../pageBtn';

const Step1 = () => {
  const email = useSignupEmail();
  const password = useSignupPassword();

  const {
    register,

    getValues,

    formState: { errors, isValid },

    control,
  } = useForm<ISignupForm>({
    mode: 'onChange',
    defaultValues: {
      email: email,
      password: password,
    },
  });

  return (
    <>
      {/* 이메일 입력*/}

      <input
        className={S.InputWrapper}
        type="email"
        placeholder="이메일 입력"
        {...register('email', SignupValidation.email)}
      />

      {errors?.email && <div className={S.ErrorWrapper}> {errors.email.message} </div>}

      {/* 비밀번호 입력*/}

      <input
        type="password"
        placeholder="비밀번호 입력"
        {...register('password', SignupValidation.password)}
      />

      {errors?.password && <div className={S.ErrorWrapper}> {errors.password.message} </div>}

      <DevTool control={control} />
      <PageBtn
        errors={isValid}
        data={{ email: getValues('email'), password: getValues('password') }}
      />
    </>
  );
};

export default Step1;
