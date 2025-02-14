import { Link } from "react-router-dom";
import { useForm, SubmitHandler } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { toast } from "react-toastify";

import { InputField, IFormData, Logo } from "../../components";

import { registerSchema, loginSchema } from "../../schemas";

interface IAuthFormProps {
  registration?: boolean;
  toggleModal?: () => void;
}

export const AuthForm = ({ registration, toggleModal }: IAuthFormProps) => {
  const {
    register,
    reset,
    handleSubmit,
    formState: { errors, dirtyFields },
  } = useForm<IFormData>({
    mode: "onChange",
    resolver: yupResolver(registration ? registerSchema : loginSchema),
  });

  const onSubmit: SubmitHandler<IFormData> = async ({
    name,
    // email,
    // password,
  }) => {
    try {
      if (registration && name) {
        // await dispatch(registerUser({ name, email, password })).unwrap();

        toast.success(`Yohoo! ${name}, you are successfully registered!`);
      } else {
        // await dispatch(loginUser({ email, password })).unwrap();

        toast.success(`Welcome back!`);
      }
      toggleModal && toggleModal();
      reset();
    } catch (error) {
      toast.error(error as string);
    }
  };

  return (
    <form
      onSubmit={handleSubmit(onSubmit)}
      className="flex h-[411px] w-full flex-col rounded-[30px] bg-[#1f1f1f] p-5 pb-10 md:h-[960px] md:w-[704px] md:px-[64px] md:pb-[214px] md:pt-10 lg:h-[736px] lg:w-[600px] lg:pb-10"
    >
      <Logo />
      <h2 className="sm-max:text-[26px] sm-max:mt-5 mb-5 mt-10 text-[32px] font-bold leading-[1] tracking-[0.02em] text-[#f9f9f9] md:mb-10 md:mt-[157px] md:w-[444px] md:text-[64px] md:leading-[0.94] lg:mt-[107px]">
        Expand your mind, reading{" "}
        <span className="text-[#e3e3e37f]">a book</span>
      </h2>

      {registration && (
        <InputField
          name="name"
          type="text"
          label="Name:"
          errors={errors}
          dirtyFields={dirtyFields}
          register={register}
          className="pl-[59px] md:pl-[65px]"
        />
      )}

      <InputField
        name="email"
        type="email"
        label="Mail:"
        errors={errors}
        dirtyFields={dirtyFields}
        register={register}
        className="pl-[49px] md:pl-[53px]"
      />

      <InputField
        name="password"
        type="password"
        label="Password:"
        errors={errors}
        dirtyFields={dirtyFields}
        register={register}
        className="pl-[78px] md:pl-[86px]"
      />

      <div className="mt-auto flex items-center gap-[14px] md:gap-5">
        <button
          type="submit"
          className={`hover-button h-[42px] rounded-[30px] border border-transparent bg-[#f9f9f9] p-[12px] text-center text-[14px] font-bold leading-[1.29] tracking-[0.02em] text-[#1f1f1f] transition duration-500 md:h-[52px] md:p-[16px] md:text-[16px] md:leading-[1] ${registration ? "w-[140px] md:w-[225px]" : "w-[131px] md:w-[166px]"}`}
        >
          {registration ? "Registration" : "Log in"}
        </button>

        <Link
          to={registration ? "/login" : "/register"}
          className="hover text-[12px] leading-[1.17] tracking-[-0.02em] text-[#686868] underline transition duration-500 md:text-[14px] md:leading-[1.29]"
        >
          {registration ? "Already have an account?" : "Don't have an account?"}
        </Link>
      </div>
    </form>
  );
};
