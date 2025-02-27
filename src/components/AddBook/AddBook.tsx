import {
  FieldValues,
  SubmitHandler,
  useForm,
  UseFormRegister,
} from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";

import { addBookSchema } from "../../schemas";

import { InputField } from "../../components";

interface FormData {
  title: string;
  author: string;
  totalPages: number;
}

export const AddBook = () => {
  const {
    register,
    reset,
    handleSubmit,
    formState: { errors, dirtyFields },
  } = useForm<FormData>({
    resolver: yupResolver(addBookSchema),
  });

  const onSubmit: SubmitHandler<FormData> = async (data) => {
    console.log(data);
    reset();
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <p className="mb-2 pl-[14px] text-[10px] leading-[1.2] tracking-[-0.02em] text-[#f9f9f9] md:text-[14px] md:leading-[1.29]">
        Create your library:
      </p>
      <InputField
        name="title"
        label="Book title:"
        type="text"
        errors={errors}
        dirtyFields={dirtyFields}
        register={register as unknown as UseFormRegister<FieldValues>}
        className="p-[14px] pl-[77px] md:p-4 md:pl-[86px]"
        wrapperClass="mb-2 md:w-[295px] lg:w-[313px]"
      />
      <InputField
        name="author"
        label="The author:"
        type="text"
        errors={errors}
        dirtyFields={dirtyFields}
        register={register as unknown as UseFormRegister<FieldValues>}
        className="p-[14px] pl-[85px] md:p-4 md:pl-[95px]"
        wrapperClass="md:w-[295px] lg:w-[313px] mb-2"
      />

      <InputField
        name="totalPages"
        label="Number of pages:"
        type="number"
        errors={errors}
        dirtyFields={dirtyFields}
        register={register as unknown as UseFormRegister<FieldValues>}
        className="p-[14px] pl-[119px] md:p-4 md:pl-[135px]"
        wrapperClass="mb-5 md:mb-[38px] lg:mb-5 md:w-[295px] lg:w-[313px]"
      />

      <button
        type="submit"
        className="button hover-logout h-[38px] w-[105px] border-[#f9f9f933] bg-transparent p-[10px] text-[#f9f9f9] md:h-[42px] md:w-[131px] md:p-[12px]"
      >
        Add book
      </button>
    </form>
  );
};
