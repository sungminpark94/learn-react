import React from 'react';
import Card from './components/Card';
import Login from './components/Login';
import "./styles.css";


const App = () => {
   //   // logic
  //   console.log("App.js")

  //   const name = "박성민";
  //   const age = 31;

  //   const greetingMessage = `안녕하세요. ${name}님 나이가 ${age}세 이시네요.`

  //   console.log("🚀 ~ App ~ greetingMessage:", greetingMessage)

  //   const user = {
  //     isLoggedIn: true,
  //     role: "admin", 
  //   }
  // //사용자가 로그인 한 상태이면서, 역할이 'admin'인 경우엔 "관리자 페이지 접근 가능", 아니면 "관리자 페이지 접근 불가능"

  //   if(user.isLoggedIn && user.role === 'admin'){
  //     console.log('관리자 페이지 접근 가능')
  //   } else {
  //     console.log('관리자 페이지 접근 불가능!!')
  // }

  //함수정의 
  // const greeting = (input = "고객") => {
  //   return `${input}님, 반갑습니다!`;
  // }

  // // 함수 호출
  // greeting();

  // //배열 구조 분해 할당
  // const colorList = ['red', 'blue']
  // const [firstClor, secondColor] = colorList;
  // console.log("🚀 ~ App ~ firstClor:", firstClor)
  // console.log("🚀 ~ App ~ secondColor:", secondColor)

  // //객체 구조 분해 할당
  // const person = {
  //   name: "박성민",
  //   age: 31,
  //   email: "carstoryman@gmail.com"
  // }

  // const { name, age, email } = person;
  // console.log("🚀 ~ App ~ email:", email);
  // console.log("🚀 ~ App ~ age:", age);
  // console.log("🚀 ~ App ~ name:", name);

  // const carList = ["마티즈", "티코"];

  // const addCarList = () => {
  //   const addCarList = [...carList, "스파크"];
  //   console.log("🚀 ~ addCarList ~ addCarList:", addCarList);
  // }
  // addCarList()

  // const copyPerson = {
  //   ...person,
  //   ...carList,
  //   name: "박성민이", // 값수정
  //   newCar: "Z4", // 값추가

  // }
  // console.log("🚀 ~ App ~ copyPerson:", copyPerson)

  return (
    <>
    <div>
      <Card title="박성민" subText='박성민짱'/>
      <Card />
      <Login/>
    </div>

    {/* <div className=''>
      titleName
    </div>
   */}
    </>)

}

export default App