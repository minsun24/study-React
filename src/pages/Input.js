import React, {useState} from "react";

const Input = () => {
  //txtValue라는 state변수를 setTextValue라는 set함수로 관리하겠다.
  //state변수인 txtValue는 빈문자열로 초기화 
  const[txtValue, setTextValue] = useState("");

  // 함수를 실행시킨 이벤트 객체를 매개변수로 받는다. 
  const onChange = (e) => {
    setTextValue(e.target.value)  
    //여기서 e.target은 input된 text를 의미, Change 이벤트가 일어날 때마다 계속 setTextValue 함수에 넣어주기 
  };

  //input 태그를 통해 사용자의 입력을 받는다.
  //사용자의 입력값이 변경되면 onChange 함수가 실행된다. 
  return(
    <div>
      <input type="text" value={txtValue} onChange={onChange} />
      <br/>
			<p>{txtValue} </p> 
    </div>
  );

};
export default Input;  
