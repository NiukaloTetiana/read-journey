import { Link } from "react-router-dom";
import {
  useForm,
  SubmitHandler,
  UseFormRegister,
  FieldValues,
} from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { toast } from "react-toastify";

import { InputField, Logo } from "../../components";

import { registerSchema, loginSchema } from "../../schemas";

interface IFormData {
  name?: string;
  email: string;
  password: string;
}

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
      <h2 className="mb-5 mt-10 text-[32px] font-bold leading-[1] tracking-[0.02em] text-[#f9f9f9] sm-max:mt-5 sm-max:text-[26px] md:mb-10 md:mt-[157px] md:w-[444px] md:text-[64px] md:leading-[0.94] lg:mt-[107px]">
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
          register={register as unknown as UseFormRegister<FieldValues>}
          className="pl-[59px] pr-9 md:pl-[65px] md:pr-10"
          wrapperClass="mb-2 md:mb-[14px] md:w-[472px]"
        />
      )}

      <InputField
        name="email"
        type="email"
        label="Mail:"
        errors={errors}
        dirtyFields={dirtyFields}
        register={register as unknown as UseFormRegister<FieldValues>}
        className="pl-[49px] pr-9 md:pl-[53px] md:pr-10"
        wrapperClass="mb-2 md:mb-[14px] md:w-[472px]"
      />

      <InputField
        name="password"
        type="password"
        label="Password:"
        errors={errors}
        dirtyFields={dirtyFields}
        register={register as unknown as UseFormRegister<FieldValues>}
        className="pl-[78px] pr-[58px] md:pl-[86px] md:pr-[68px]"
        wrapperClass="mb-1 md:w-[472px]"
      />

      <div className="mt-auto flex items-center gap-[14px] md:gap-5">
        <button
          type="submit"
          className={`hover-button button h-[42px] border-transparent bg-[#f9f9f9] p-[12px] text-[#1f1f1f] md:h-[52px] md:p-[16px] ${registration ? "w-[140px] md:w-[225px]" : "w-[131px] md:w-[166px]"}`}
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
