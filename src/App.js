

function App() {
  // logic
  console.log("App.js")

  const name = "박성민";
  const age = 31;
  
  const greetingMessage = `안녕하세요. ${name}님 나이가 ${age}세 이시네요.`
  
  console.log("🚀 ~ App ~ greetingMessage:", greetingMessage)

  const user = {
    isLoggedIn: true,
    role: "admin", 
  }
//사용자가 로그인 한 상태이면서, 역할이 'admin'인 경우엔 "관리자 페이지 접근 가능", 아니면 "관리자 페이지 접근 불가능"
  
  if(user.isLoggedIn && user.role === 'admin'){
    console.log('관리자 페이지 접근 가능')
  } else {
    console.log('관리자 페이지 접근 불가능!!')
  }





  //view

  return (
    <div>
    </div>
  );
}

export default App;
