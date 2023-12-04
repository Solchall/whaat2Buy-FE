import { useForm } from 'react-hook-form';
import { DevTool } from '@hookform/devtools';
import { PageBtn } from 'components';
import { useSignupHeight, useSignupUsername, useSignupWeight } from 'store';
import { ISignupForm } from 'types';
import S from './styles';
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
      <div className={S.StepFormContainer}>
        <div className={S.InputContainer}>
          {/* 유저 이름 입력 */}
          <label className={S.InputTitle}> 이름 </label>
          <input
            className={S.InputWrapper}
            type="string"
            placeholder="이름 입력"
            {...register('username', SignupValidation.username)}
          />

          {errors?.username && <div className={S.ErrorWrapper}> {errors.username.message} </div>}
        </div>
        <div className={S.InputContainer}>
          {/*몸무게 입력*/}
          <label className={S.InputTitle}> 체중 </label>
          <input
            className={S.InputWrapper}
            type="number"
            placeholder="체중 입력"
            {...register('weight', SignupValidation.weight)}
          />

          {errors?.weight && <div className={S.ErrorWrapper}> {errors.weight.message} </div>}
        </div>
        <div className={S.InputContainer}>
          {/* 키 입력*/}
          <label className={S.InputTitle}> 신장 </label>
          <input
            className={S.InputWrapper}
            type="number"
            placeholder="신장 입력"
            {...register('height', SignupValidation.height)}
          />

          {errors?.height && <div className={S.ErrorWrapper}> {errors.height.message} </div>}
        </div>
      </div>
      <DevTool control={control} />
      <PageBtn errors={isValid} createData={CurrentData} />
    </>
  );
};

export default Step2;
