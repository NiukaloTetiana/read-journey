import {
  useForm,
  SubmitHandler,
  UseFormRegister,
  FieldValues,
} from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";

import { filtersSchema } from "../../schemas";

import { InputField } from "../../components";

export const Filters = () => {
  const { register, handleSubmit } = useForm<FieldValues>({
    resolver: yupResolver(filtersSchema),
  });

  const onSubmit: SubmitHandler<FieldValues> = async (data) => {
    console.log(data);
  };
  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <p className="mb-2 pl-[14px] text-[10px] leading-[1.2] tracking-[-0.02em] text-[#f9f9f9] md:text-[14px] md:leading-[1.29]">
        Filters:
      </p>
      <InputField
        name="title"
        label="Book title:"
        type="text"
        errors={{}}
        dirtyFields={{}}
        register={register as unknown as UseFormRegister<FieldValues>}
        className="p-[12px] pl-[77px] md:p-4 md:pl-[86px]"
        wrapperClass="mb-2 md:w-[295px] lg:w-[313px]"
      />
      <InputField
        name="author"
        label="The author:"
        type="text"
        errors={{}}
        dirtyFields={{}}
        register={register as unknown as UseFormRegister<FieldValues>}
        className="p-[12px] pl-[85px] md:p-4 md:pl-[95px]"
        wrapperClass="md:w-[295px] lg:w-[313px] mb-5"
      />
      <button
        type="submit"
        className="button hover-logout h-[38px] w-[98px] border-[#f9f9f933] bg-transparent p-[10px] text-[#f9f9f9] md:h-[42px] md:w-[122px] md:p-[12px]"
      >
        To apply
      </button>
    </form>
  );
};
