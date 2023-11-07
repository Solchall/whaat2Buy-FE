import { toast } from 'react-toastify';
import { PageBtn } from 'components';
import { ChangeEvent, useState } from 'react';
import { useSignupFormActions, useSignupInterest } from 'store';

const Step3 = () => {
  const [input, setInput] = useState('');
  const interest = useSignupInterest();
  const { setForm } = useSignupFormActions();

  const handleKeyUp = (e: any) => {
    const data = e.target.value.trim();
    if (e.keyCode === 32 && data !== '') {
      // 같은 태그가 있다면 에러 띄움
      if (interest?.includes(data)) {
        toast.error('이미 동일한 태그가 존재합니다', {
          theme: 'dark',
          autoClose: 1000,
        });
      } else {
        const interestArray = interest.length > 0 ? [...interest, data] : [data];
        if (interest) {
          // 태그 생성
          setForm('interest', interestArray);
          // 인풋 초기화
          setInput('');
        }
      }
    }
  };

  const handleChangeInterest = (e: ChangeEvent<HTMLInputElement>) => {
    setInput(e.target.value.trim());
  };

  const removeInterest = (item: string) => {
    const interestArray = interest.filter((value) => value != item);
    setForm('interest', interestArray);
  };
  return (
    <>
      <div className={S.interestContianer}>
        <span className={S.interestOutputs}>
          {interest?.map((item, idx) => (
            <span className={S.interestItem} key={idx} onClick={() => removeInterest(item)}>
              #{item}
            </span>
          ))}
        </span>
        <input
          className={S.interestInput}
          name="interest"
          id="interest"
          placeholder="스페이스바 입력"
          onChange={handleChangeInterest}
          onKeyUp={handleKeyUp}
          value={input}
        />
      </div>

      <PageBtn errors={Boolean(interest)} />
    </>
  );
};

export default Step3;

const interestContianer = 'p-2 border-b-2 border-pink-500';
const interestOutputs = 'flex flex-wrap items-center gap-4';
const interestItem =
  'font-medium border-2 rounded-3xl border-pink-500 py-2 px-4 hover:bg-pink-500 hover:text-white active:bg-pink-500 active:text-white';
const interestInput = 'p-2 mt-2';

const S = {
  interestContianer,
  interestOutputs,
  interestItem,
  interestInput,
};
