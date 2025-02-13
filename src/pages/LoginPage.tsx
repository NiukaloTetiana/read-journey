import { AuthForm, ImgBlock } from "../components";

const LoginPage = () => {
  return (
    <div className="container py-5 md:py-[32px]">
      <div className="flex flex-col gap-[10px] lg:flex-row lg:gap-4">
        <AuthForm />
        <ImgBlock />
      </div>
    </div>
  );
};

export default LoginPage;
