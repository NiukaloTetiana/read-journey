// import { useForm, SubmitHandler } from "react-hook-form";
// import { useLocation } from "react-router-dom";

// interface IFormData {
//   title: string;
//   author: string;
//   totalPages: number;
// }

// export const BookForm = () => {
//   const { register, reset, handleSubmit } = useForm<IFormData>();
//   const location = useLocation();
//   const isLibraryPage = location.pathname === "/library";

//   const onSubmit: SubmitHandler<IFormData> = async (data) => {
//     console.log(data);
//     reset();
//   };
//   return (
//     <form onSubmit={handleSubmit(onSubmit)}>
//       <p className="mb-2 pl-[14px] text-[10px] leading-[1.2] tracking-[-0.02em] text-[#f9f9f9] md:text-[14px] md:leading-[1.29]">
//         {!isLibraryPage ? "Filters:" : "Create your library:"}
//       </p>
//       <div className="relative mb-2">
//         <input
//           type="text"
//           className="input p-[12px] pl-[77px] md:p-4 md:pl-[86px]"
//           {...register("title")}
//           id="title"
//         />

//         <label htmlFor="title" className="label">
//           Book title:
//         </label>
//       </div>
//       <div className={`relative ${isLibraryPage ? "mb-2" : "mb-5"}`}>
//         <input
//           type="text"
//           className="input p-[12px] pl-[85px] md:p-4 md:pl-[95px]"
//           {...register("author")}
//           id="author"
//         />
//         <label htmlFor="author" className="label">
//           The author:
//         </label>
//       </div>

//       {isLibraryPage && (
//         <div className="relative mb-5 md:mb-[38px] lg:mb-5">
//           <input
//             type="text"
//             className="input p-[12px] pl-[119px] md:p-4 md:pl-[135px]"
//             {...register("totalPages")}
//             id="totalPages"
//           />
//           <label htmlFor="totalPages" className="label">
//             Number of pages:
//           </label>
//         </div>
//       )}
//       <button
//         type="submit"
//         className={`button hover-logout h-[38px] border-[#f9f9f933] bg-transparent p-[10px] text-[#f9f9f9] md:h-[42px] md:p-[12px] ${isLibraryPage ? "w-[105px] md:w-[131px]" : "w-[98px] md:w-[122px]"}`}
//       >
//         {isLibraryPage ? "Add book" : "To apply"}
//       </button>
//     </form>
//   );
// };

import {
  useForm,
  SubmitHandler,
  UseFormRegister,
  FieldValues,
} from "react-hook-form";
import { useLocation } from "react-router-dom";
import { InputField } from "../../components";
import { yupResolver } from "@hookform/resolvers/yup";
import { addBookSchema, filtersSchema } from "../../schemas";

export const BookForm = () => {
  const location = useLocation();
  const isLibraryPage = location.pathname === "/library";
  const {
    register,
    reset,
    handleSubmit,
    formState: { errors, dirtyFields },
  } = useForm<FieldValues>({
    resolver: yupResolver(isLibraryPage ? addBookSchema : filtersSchema),
  });

  const onSubmit: SubmitHandler<FieldValues> = async (data) => {
    console.log(data);
    reset();
  };
  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <p className="mb-2 pl-[14px] text-[10px] leading-[1.2] tracking-[-0.02em] text-[#f9f9f9] md:text-[14px] md:leading-[1.29]">
        {!isLibraryPage ? "Filters:" : "Create your library:"}
      </p>
      <InputField
        name="title"
        label="Book title:"
        type="text"
        errors={isLibraryPage ? errors : {}}
        dirtyFields={isLibraryPage ? dirtyFields : {}}
        register={register as unknown as UseFormRegister<FieldValues>}
        className="p-[12px] pl-[77px] md:p-4 md:pl-[86px]"
        wrapperClass="mb-2 md:w-[295px] lg:w-[313px]"
      />
      <InputField
        name="author"
        label="The author:"
        type="text"
        errors={isLibraryPage ? errors : {}}
        dirtyFields={isLibraryPage ? dirtyFields : {}}
        register={register as unknown as UseFormRegister<FieldValues>}
        className="p-[12px] pl-[85px] md:p-4 md:pl-[95px]"
        wrapperClass={`md:w-[295px] lg:w-[313px] ${isLibraryPage ? "mb-2" : "mb-5"}`}
      />
      {isLibraryPage && (
        <InputField
          name="totalPages"
          label="Number of author:"
          type="text"
          errors={errors}
          dirtyFields={dirtyFields}
          register={register as unknown as UseFormRegister<FieldValues>}
          className="p-[12px] pl-[119px] md:p-4 md:pl-[135px]"
          wrapperClass="mb-5 md:mb-[38px] lg:mb-5 md:w-[295px] lg:w-[313px]"
        />
      )}
      <button
        type="submit"
        className={`button hover-logout h-[38px] border-[#f9f9f933] bg-transparent p-[10px] text-[#f9f9f9] md:h-[42px] md:p-[12px] ${isLibraryPage ? "w-[105px] md:w-[131px]" : "w-[98px] md:w-[122px]"}`}
      >
        {isLibraryPage ? "Add book" : "To apply"}
      </button>
    </form>
  );
};
