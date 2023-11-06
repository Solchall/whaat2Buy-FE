const SignupValidation = {
  email: {
    required: '이메일 주소를 입력해주세요',
    pattern: {
      value: /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/i,
      message: '이메일 형식이 아닙니다.',
    },
  },
  password: {
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
  },
  username: {
    required: '이름을 입력해주세요',
  },
  openAI: {
    required: 'openAPI key를 입력해주세요',
  },
  height: {
    required: '키를 입력해주세요',
  },
  weight: {
    required: '몸무게를 입력해주세요',
  },
};

export default SignupValidation;
