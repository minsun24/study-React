import React, {useState} from 'react';

const Counter = () => {
    // num이라는 state변수를 setNumber이라는 이름이 state함수로 관리하겠다.
    // num이라는 state변수는 0으로 초기화 
    const [num, setNumber] = useState(0); 

    //num이라는 변수를 1씩 증가시키는 함수
    const increase = () => {
      setNumber(num + 1);
    }
    //num이라는 변수를 1씩 감소시키는 함수
    const decrease = () => {
      setNumber(num - 1);
    }

    return (
      <div>
        <button onClick={increase} > +1 </button> 
        <button onClick={decrease} > -1 </button>
        <p>{num} </p>  
      </div>
    );    

}

export default Counter;
