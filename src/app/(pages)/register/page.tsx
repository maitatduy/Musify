"use client";

import FormButton from "@/app/components/form/FormButton";
import FormInput from "@/app/components/form/FormInput";
import Title from "@/app/components/title/Title";
import { useRouter } from "next/navigation";
import { authFirebase, database } from "@/app/firebaseConfig";
import { createUserWithEmailAndPassword } from "firebase/auth";
import { ref, set } from "firebase/database";

export default function RegisterPage() {
  const router = useRouter();
  const handleRegister = (event: any) => {
    event.preventDefault();
    const fullName = event.target.fullName.value.trim();
    const email = event.target.email.value.trim();
    const password = event.target.password.value.trim();

    const nameRegex = /^[\p{L}\s]{3,36}$/u;
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    const passwordRegex = /^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{6,}$/;

    if (!nameRegex.test(fullName)) {
      alert("Họ và tên phải từ 3–36 ký tự, chỉ chứa chữ cái và khoảng trắng");
      return;
    }

    if (!emailRegex.test(email)) {
      alert("Email không hợp lệ");
      return;
    }

    if (!passwordRegex.test(password)) {
      alert("Mật khẩu phải tối thiểu 6 ký tự, bao gồm ít nhất 1 chữ và 1 số");
      return;
    }

    createUserWithEmailAndPassword(authFirebase, email, password)
      .then((userCredential) => {
        const user = userCredential.user;
        set(ref(database, "users/" + user.uid), {
          fullName: fullName,
          email: email,
        });
      })
      .then(() => {
        router.push("/");
      })
      .catch((error) => {
        alert(error.message);
      });
  };

  return (
    <>
      <div className="mt-[60px] w-[500px] mx-auto">
        <Title text="Đăng Ký Tài Khoản" className="text-center" />
        <form className="" onSubmit={handleRegister} method="post">
          <FormInput
            label="Họ Tên"
            type="text"
            name="fullName"
            id="fullName"
            placeholder="Ví dụ: Le Van A"
            required={true}
          />
          <FormInput
            label="Email"
            type="email"
            name="email"
            id="email"
            placeholder="Ví dụ: levana@gmail.com"
            required={true}
          />
          <FormInput
            label="Mật Khẩu"
            type="password"
            name="password"
            id="password"
            required={true}
          />
          <FormButton text="Đăng Ký" />
        </form>
      </div>
    </>
  );
}
