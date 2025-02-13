import { AuthForm, ImgBlock } from "../components";

const RegisterPage = () => {
  return (
    <div className="container py-5 md:py-[32px]">
      <div className="flex flex-col gap-[10px] lg:flex-row lg:gap-4">
        <AuthForm registration />
        <ImgBlock />
      </div>
    </div>
  );
};

export default RegisterPage;
