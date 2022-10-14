<<<<<<< HEAD
import { Link } from "react-router-dom";
import "./login.css";

export const Login = () => {
  return (
    <div className="container">
      <h1>로그인 페이지</h1>
      <br />
      <br />
      아이디 <input type="text" />
      <br />
      비밀번호 <input type="password" />
      <br />
      <br />
      <button>로그인</button>
      <button>
        <Link to="/signup">회원가입</Link>
      </button>
    </div>
  );
};
=======
import { Link } from "react-router-dom";
import "./login.css";

export const Login = () => {
  return (
    <div className="container">
      <h1>로그인 페이지</h1>
      <br />
      <br />
      아이디 <input type="text" />
      <br />
      비밀번호 <input type="password" />
      <br />
      <br />
      <button>로그인</button>
      <button>
        <Link to="/signup">회원가입</Link>
      </button>
    </div>
  );
};
>>>>>>> d32f136ce2fc4bc38ab1a18785683b297ab4012b
