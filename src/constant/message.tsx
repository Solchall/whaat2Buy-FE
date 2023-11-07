function CreateClientMessage(name: string, type: string) {
  let requestMessage;
  if (type === 'initial') {
    requestMessage = `${name}!! 상품에 관심있어!`;
  } else if (type === 'basic') {
    requestMessage = `${name}이 어떤 상품인지 설명해줘`;
  } else if (type === 'size') {
    requestMessage = `${name}의 사이즈에 대해 설명해줘`;
  } else if (type === 'review') {
    requestMessage = `${name}에 대한 다른 사람의 의견은 어때?`;
  } else {
    requestMessage = '기타 설명';
  }
  console.log(requestMessage);
  return requestMessage;
}

export { CreateClientMessage };
