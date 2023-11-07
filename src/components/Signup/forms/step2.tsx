import { useForm } from 'react-hook-form';
import { DevTool } from '@hookform/devtools';
import { useSignupHeight, useSignupUsername, useSignupWeight } from 'store';
import { ISignupForm } from 'types';
import * as S from '../../Login/style';
import PageBtn from '../pageBtn';
import SignupValidation from './validation';

const Step2 = () => {
  const weight = useSignupWeight();
  const height = useSignupHeight();
  const username = useSignupUsername();
  const CurrentData = () => {
    const data = {
      username: getValues('username'),
      weight: getValues('weight'),
      height: getValues('height'),
    };
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
      username: username,
      weight: weight,
      height: height,
    },
  });

  return (
    <>
      {/* 유저 이름 입력 */}
      <input
        className={S.InputWrapper}
        type="string"
        placeholder="이름 입력"
        {...register('username', SignupValidation.username)}
      />

      {errors?.username && <div className={S.ErrorWrapper}> {errors.username.message} </div>}

      {/*몸무게 입력*/}
      <input
        className={S.InputWrapper}
        type="number"
        placeholder="몸무게 입력"
        {...register('weight', SignupValidation.weight)}
      />

      {errors?.weight && <div className={S.ErrorWrapper}> {errors.weight.message} </div>}

      {/* 비밀번호 입력*/}

      <input
        type="password"
        placeholder="비밀번호 입력"
        {...register('height', SignupValidation.height)}
      />

      {errors?.height && <div className={S.ErrorWrapper}> {errors.height.message} </div>}

      <DevTool control={control} />
      <PageBtn errors={isValid} createData={CurrentData} />
    </>
  );
};

export default Step2;
