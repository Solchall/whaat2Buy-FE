import { useForm } from 'react-hook-form';
import { useSignupEmail, useSignupOpenAI, useSignupPassword } from 'store';
import { ISignupForm } from 'types';
import SignupValidation from './validation';
import { DevTool } from '@hookform/devtools';
import * as S from '../../Login/style';
import PageBtn from '../pageBtn';

const Step1 = () => {
  const email = useSignupEmail();
  const password = useSignupPassword();
  const openAI = useSignupOpenAI();

  const CurrentData = () => {
    const data = {
      email: getValues('email'),
      password: getValues('password'),
      openAI: getValues('openAI'),
    };
    console.log(data);
    return data;
  };

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
      openAI: openAI,
    },
  });

  return (
    <>
      {/* OPEN AI  입력 */}

      <input
        type="string"
        placeholder="OPENAI API 입력"
        {...register('openAI', SignupValidation.openAI)}
      />

      {errors?.openAI && <div className={S.ErrorWrapper}> {errors.openAI.message} </div>}
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
      <PageBtn errors={isValid} createData={CurrentData} />
    </>
  );
};

export default Step1;
