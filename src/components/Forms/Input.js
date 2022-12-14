import React from "react";

const Input = ({
  type = "text",
  required = true,
  disabled = false,
  name,
  placeholder,
  title,
  cnd = "",
  cns = "",
  cni = "",
}) => {
  return (
    <div className={"flex flex-col w-full " + cnd}>
      <span className={" w-max text-sm font-bold text-palette-ext" + cns}>
        {title}
      </span>
      <input
        name={name}
        type={type}
        required={required}
        disabled={disabled}
        placeholder={placeholder}
        className={
          "bg-slate-50 rounded-md p-2 border-2 outline-palette-primary" + cni
        }
      />
    </div>
  );
};

export default Input;
