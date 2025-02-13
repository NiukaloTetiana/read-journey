import { useState } from "react";
import { FieldErrors, FormState, UseFormRegister } from "react-hook-form";

import { Icon } from "../../components";

export interface IFormData {
  name?: string;
  email: string;
  password: string;
}

interface InputFieldProps {
  name: keyof IFormData;
  type: string;
  label: string;
  className?: string;
  errors: FieldErrors<IFormData>;
  dirtyFields: FormState<IFormData>["dirtyFields"];
  register: UseFormRegister<IFormData>;
  setShowPass?: (value: boolean) => void;
}

export const InputField = ({
  name,
  type,
  label,
  className,
  errors,
  dirtyFields,
  register,
}: InputFieldProps) => {
  const [showPass, setShowPass] = useState(false);

  const baseClass = `bg-[#262626] w-full h-[44px] md:h-[50px] pr-10 md:pr-[68px] border rounded-[12px] py-[14px] md:py-[16px] text text-[#f9f9f9] transition duration-300 ${className}`;

  const borderColors = {
    default:
      "border-none hover:border hover:border-[#f9f9f919] focus-visible:border focus-visible:border-[#f9f9f919]",
    error:
      "border-[#E90516] hover:border-[#E90516] focus-visible:border-[#E90516]",
    success:
      "border-[#30B94D] hover:border-[#30B94D] focus-visible:border-[#30B94D]",
  };

  const getBorderClass = () => {
    if (errors[name]) return borderColors.error;
    if (dirtyFields[name] && !errors[name]) return borderColors.success;
    return borderColors.default;
  };

  const inputClass = `${baseClass} ${getBorderClass()}`;

  return (
    <div className="relative mb-2 md:mb-[14px] md:w-[472px]">
      <input
        type={type === "password" && showPass ? "text" : type}
        className={inputClass}
        {...register(name)}
      />

      <label className="text absolute left-[14px] top-[14px] text-[#686868] md:top-[16px]">
        {label}
      </label>
      <div className="absolute right-[12px] top-[14px] flex items-center space-x-2 md:right-[15px] md:top-4">
        {!errors[name]?.message && dirtyFields[name] && (
          <Icon
            id="chack-good"
            size={18}
            className="fill-[#30B94D] stroke-none md:size-5"
          />
        )}
        {errors[name]?.message && dirtyFields[name] && (
          <Icon
            id="chack-error"
            size={18}
            className="fill-[#E90516] stroke-none md:size-5"
          />
        )}
        {type === "password" && setShowPass && (
          <button
            type="button"
            onClick={() => setShowPass(!showPass)}
            className="ml-2 md:ml-3"
          >
            <Icon
              id={showPass ? "eye" : "eye-off"}
              size={18}
              className="fill-none stroke-white md:size-5"
            />
          </button>
        )}
      </div>
      {errors[name] && (
        <p className="text-message text-[#E90516]">{errors[name]?.message}</p>
      )}
      {!errors[name] && dirtyFields[name] && (
        <p className="text-message text-[#30B94D]">
          {`${name.charAt(0).toUpperCase()}${name.slice(1)} is secure`}
        </p>
      )}
    </div>
  );
};
