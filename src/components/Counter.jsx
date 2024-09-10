import React, { useState } from 'react'

const Counter = () => {
    // logic
    /**
     * 1. counter라는 변수를 만든다. 
     * 2. counter의 초기값을 0으로 지정한다. 
     * 3. counter의 값을 UI에 보여준다. 
     * 4. increase 함수를 만든다.
     * 5. 사용자가 +1 버튼을 클릭하면 increase 함수가 실행된다.
     * 6. [increase 함수 정의] counter라는 변수의 값이 1 증가한다. 
     * 7. [increase 함수 정의] counter라는 변수의 값이 10 미만인 경우에만 counter라는 변수의 값을 1 증가한다. 
     * 8. 숫자가 +1이 되어 변경되는 것을 확인한다. 
     * 
     * 버튼 상단 숫자가 클릭한 횟수만큼 올라간다.
     * -1 버튼을 클릭할 경우 클릭한 횟수만큼 차감된다.
     * 단, 0 이하로 숫자가 떨어지지 않는다. 
     */
    const [counter, setCounter] = useState(0) ;
    const increase = () => {
        if (counter < 10) {
        setCounter(counter + 1)
        }
    };
    const decrease = () => {
        if (counter > 0) {
        setCounter(counter - 1)
        }
    };

    //view

  return (
    <div style={{ textAlign: "center"}}>
         <h2>{counter}</h2>
         <button type='button' onClick={increase}>+1</button>
         <button type='button' onClick={decrease}>-1</button>
    </div>
  )
}

export default Counter