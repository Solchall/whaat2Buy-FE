import { useForm } from 'react-hook-form';
import { DevTool } from '@hookform/devtools';
import { ILoginForm, LoginFormState } from 'types';
import { useNavigate } from 'react-router-dom';

const Login = () => {
  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },

    control,
  } = useForm<ILoginForm>({ mode: 'onChange' });

  const handleFormSubmit = async (data: LoginFormState) => {
    try {
      console.log(data);
    } catch (error) {
      console.log(error);
    }
  };
  const navigate = useNavigate();

  const handleSignUpBtn = () => {
    navigate('/signup');
  };

  return (
    <div className={S.FormLayout}>
      <form
        className={S.FormContainer}
        autoComplete="off"
        onSubmit={handleSubmit(handleFormSubmit)}
      >
        {/* 이메일 입력*/}

        <input
          className={S.InputWrapper}
          type="email"
          placeholder="이메일 입력"
          {...register('email', {
            required: '이메일 주소를 입력해주세요',
          })}
        />

        {errors?.email && <p className={S.ErrorWrapper}> {errors.email.message} </p>}

        {/* 비밀번호 입력*/}

        <input
          className={S.InputWrapper}
          type="password"
          placeholder="비밀번호 입력"
          {...register('password', {
            required: '비밀번호를 입력해주세요',
            minLength: {
              value: 8,
              message: '비밀번호는 최소 8자여야 합니다',
            },
            maxLength: {
              value: 20,
              message: '비밀번호는 최대 20자여야 합니다',
            },
            pattern: {
              value: /^(?=.*[a-zA-Z])(?=.*[0-9])(?=.*[!@#$%^&*?_]).{8,20}$/,
              message: '영문 / 특수기호 / 숫자를 포함하여야 합니다.',
            },
          })}
        />

        {errors?.password && <p className={S.ErrorWrapper}> {errors.password.message} </p>}

        <button disabled={isSubmitting} type="submit" className={S.Button}>
          로그인하기
        </button>
        <button onClick={handleSignUpBtn} type="button" className={S.Button}>
          회원가입하기
        </button>
        <DevTool control={control} />
      </form>
    </div>
  );
};

export default Login;

const FormLayout = 'h-screen width-[45%] flex flex-col items-center justify-center';
const FormContainer = 'flex flex-col gap-y-4';
const InputWrapper = 'px-4 py-2 rounded border-grey-500';
const ErrorWrapper = 'text-red-500';
const Button =
  'bg-gradient-to-br from-purple-400 to-pink-600 hover:bg-slate-800 disabled:bg-gray-500 py-2 rounded';

const S = {
  FormLayout,
  FormContainer,
  InputWrapper,
  ErrorWrapper,
  Button,
};
