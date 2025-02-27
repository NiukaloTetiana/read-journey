import {
  useForm,
  SubmitHandler,
  UseFormRegister,
  FieldValues,
} from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";

import { AddReadingSchema } from "../../schemas";

import { InputField } from "../../components";

interface FormData {
  page: number;
}

export const AddReading = () => {
  const {
    register,
    handleSubmit,
    formState: { errors, dirtyFields },
  } = useForm<FormData>({
    mode: "onChange",
    resolver: yupResolver(AddReadingSchema),
  });

  const onSubmit: SubmitHandler<FormData> = async (data) => {
    console.log(data);
  };
  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <p className="mb-2 pl-[14px] text-[10px] leading-[1.2] tracking-[-0.02em] text-[#f9f9f9] md:text-[14px] md:leading-[1.29]">
        Start page:
      </p>
      <InputField
        name="page"
        label="Page number:"
        type="number"
        errors={errors}
        dirtyFields={dirtyFields}
        register={register as unknown as UseFormRegister<FieldValues>}
        className="p-[14px] pl-[99px] md:p-4 md:pl-[111px]"
        wrapperClass="mb-5 md:w-[295px] lg:w-[313px]"
      />
      <button
        type="submit"
        className="button hover-logout h-[38px] w-[91px] border-[#f9f9f933] bg-transparent p-[10px] text-[#f9f9f9] md:h-[42px] md:w-[114px] md:p-[12px]"
      >
        To start
      </button>
    </form>
  );
};
