import { ChangeEvent, useState } from 'react';
import { toast } from 'react-toastify';
import { PageBtn } from 'components';
import { useSignupFormActions, useSignupInterest } from 'store';
import S from './styles';

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
        <label className={S.InputTitle}> 관심 키워드 </label>
        <div className={S.interestOutputs}>
          {interest?.map((item, idx) => (
            <span className={S.interestItem} key={idx} onClick={() => removeInterest(item)}>
              #{item}
            </span>
          ))}
        </div>
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
