
import { useRouter } from 'next/router';
import { FC, useState } from 'react';






const ShowLogin: FC = () => {

  const router = useRouter();

  return (
    // 로그인이 안되어 있으므로 로그인 안내
    <div>
      <button onClick={() => router.push("/Signup")}> SignUp </button>
      <button onClick={() => router.push("/Signin")}> SignIn </button>
    </div>
  )
}

export default ShowLogin;