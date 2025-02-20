import { useState } from "react";
import {
  FieldErrors,
  FieldValues,
  FormState,
  UseFormRegister,
} from "react-hook-form";
import { useLocation } from "react-router-dom";

import { Icon } from "../../components";

interface InputFieldProps {
  name: string;
  type: string;
  label: string;
  className?: string;
  wrapperClass?: string;
  errors: FieldErrors<FieldValues>;
  dirtyFields: FormState<FieldValues>["dirtyFields"];
  register: UseFormRegister<FieldValues>;
  setShowPass?: (value: boolean) => void;
}

export const InputField = ({
  name,
  type,
  label,
  wrapperClass = "",
  className,
  errors,
  dirtyFields,
  register,
}: InputFieldProps) => {
  const [showPass, setShowPass] = useState(false);

  const location = useLocation();
  const isAuthPage =
    location.pathname === "/login" || location.pathname === "/register";

  const baseClass = `bg-[#262626] w-full h-[44px] md:h-[50px] border rounded-[12px] py-[14px] md:py-[16px] text text-[#f9f9f9] transition duration-500 ${className}`;

  const borderColors = {
    default:
      "border hover:shadow-md focus-visible:shadow-md border-transparent hover:border-[#f9f9f919] focus-visible:border-[#f9f9f919]",
    error:
      "border-[#E90516] hover:shadow-md focus-visible:shadow-md hover:border-[#E90516] focus-visible:border-[#E90516]",
    success:
      "border-[#30B94D] hover:shadow-md focus-visible:shadow-md hover:border-[#30B94D] focus-visible:border-[#30B94D]",
  };

  const getBorderClass = () => {
    if (errors[name]) return borderColors.error;
    if (dirtyFields[name] && !errors[name]) return borderColors.success;
    return borderColors.default;
  };

  const inputClass = `${baseClass} ${getBorderClass()}`;
  const errorMessage = errors[name]?.message as string | undefined;

  return (
    <div className={`relative ${wrapperClass}`}>
      <input
        type={type === "password" && showPass ? "text" : type}
        className={inputClass}
        {...register(name)}
        id={name}
      />

      <label
        htmlFor={name}
        className="text absolute left-[14px] top-[14px] text-[#686868] md:top-[16px]"
      >
        {label}
      </label>

      {isAuthPage && (
        <>
          <div className="absolute right-[12px] top-[14px] flex items-center space-x-2 md:right-[15px] md:top-4">
            {!errorMessage && dirtyFields[name] && (
              <Icon
                id="chack-good"
                size={18}
                className="fill-[#30B94D] stroke-none md:size-5"
              />
            )}
            {errorMessage && dirtyFields[name] && (
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
        </>
      )}
      {errors[name] && (
        <p className="text-message text-[#E90516]">{errorMessage}</p>
      )}
      {isAuthPage && !errors[name] && dirtyFields[name] && (
        <p className="text-message text-[#30B94D]">
          {`${name.charAt(0).toUpperCase()}${name.slice(1)} is secure`}
        </p>
      )}
    </div>
  );
};
