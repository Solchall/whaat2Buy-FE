import { useForm } from 'react-hook-form';
import { DevTool } from '@hookform/devtools';
import { useSignupEmail, useSignupOpenAI, useSignupPassword } from 'store';
import { PageBtn } from 'components';
import { ISignupForm } from 'types';
import SignupValidation from './validation';
import S from './styles';

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
      <div className={S.StepFormContainer}>
        <div className={S.InputContainer}>
          {/* OPEN AI  입력 */}
          <label className={S.InputTitle}> Open API Key</label>
          <input
            type="string"
            className={S.InputWrapper}
            placeholder="OPENAI API 입력"
            {...register('openAI', SignupValidation.openAI)}
          />

          {errors?.openAI && <div className={S.ErrorWrapper}> {errors.openAI.message} </div>}
        </div>
        <div className={S.InputContainer}>
          {/* 이메일 입력*/}
          <label className={S.InputTitle}> 이메일 주소 </label>
          <input
            className={S.InputWrapper}
            type="email"
            placeholder="이메일 입력"
            {...register('email', SignupValidation.email)}
          />

          {errors?.email && <div className={S.ErrorWrapper}> {errors.email.message} </div>}
        </div>
        <div className={S.InputContainer}>
          {/* 비밀번호 입력*/}
          <label className={S.InputTitle}> 비밀번호 </label>
          <input
            type="password"
            className={S.InputWrapper}
            placeholder="비밀번호 입력"
            {...register('password', SignupValidation.password)}
          />

          {errors?.password && <div className={S.ErrorWrapper}> {errors.password.message} </div>}
        </div>
      </div>

      <DevTool control={control} />
      <PageBtn errors={isValid} createData={CurrentData} />
    </>
  );
};

export default Step1;
