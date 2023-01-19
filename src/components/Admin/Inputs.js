import { useRef, useState } from "react";
import UploadImage from "../../assets/admin/upload.svg";

export const CheckBox = (props) => {
  const [value, setValue] = useState(
    props.checked === undefined ? false : props.checked
  );
  return (
    <div className="flex items-center gap-2">
      <span className="font-medium">{props.title}:</span>
      <input
        type="checkbox"
        hidden={true}
        name={props.name}
        checked={value}
        value={props.value}
      />
      <div
        className={`w-10 h-5  cursor-pointer flex items-center p-1 rounded-full transition-all duration-300 ${
          value
            ? "justify-end bg-palette-primary "
            : "justify-start bg-gray-400"
        }`}
        onClick={() => setValue(!value)}
      >
        <div className="w-3 h-3 bg-white rounded-full"></div>
      </div>
    </div>
  );
};

export const HiddenBox = (props) => {
  const [value, setValue] = useState(false);
  return (
    <div className="flex flex-col gap-2">
      <div className="flex items-center gap-2">
        <span className="font-medium">{props.title}:</span>
        <input
          type="checkbox"
          hidden={true}
          name={props.name}
          checked={value}
          value={props.value}
        />
        <div
          className={`w-10 h-5  cursor-pointer flex items-center p-1 rounded-full transition-all duration-300 ${
            value
              ? "justify-end bg-palette-primary "
              : "justify-start bg-gray-400"
          }`}
          onClick={() => setValue(!value)}
        >
          <div className="w-3 h-3 bg-white rounded-full"></div>
        </div>
      </div>
      {value && props.children}
    </div>
  );
};

export const Input = ({
  title,
  type,
  name,
  required,
  placeholder,
  classInput,
  classDiv,
  classSpan,
}) => {
  return (
    <div className={"flex flex-col gap-2 " + classDiv}>
      <span className={"font-medium " + classSpan}>{title}:</span>
      <input
        type={type}
        name={name}
        required={required}
        placeholder={placeholder}
        className={
          "p-2 rounded-md border-2 outline-none focus:border-palette-primary" +
          classInput
        }
      />
    </div>
  );
};

export const InputSelect = ({
  children,
  title,
  type,
  name,
  required,
  placeholder,
  classInput,
  classDiv,
  classSpan,
}) => {
  return (
    <div className={"flex flex-col gap-2 " + classDiv}>
      <span className={"font-medium " + classSpan}>{title}:</span>
      <select
        type={type}
        name={name}
        required={required}
        placeholder={placeholder}
        className={
          "p-2 rounded-md border-2 outline-none focus:border-palette-primary" +
          classInput
        }
      >
        {children}
      </select>
    </div>
  );
};

export const InputImage = (props) => {
  const [imageValue, setImageValue] = useState(null);
  const inputReference = useRef();
  const buttonRef = useRef();

  const DragStart = () =>
    (buttonRef.current.textContent = "Soltar para guardar");
  const DragLeave = () => (buttonRef.current.textContent = "Subir Imagen");
  const DropFile = () => (buttonRef.current.textContent = "Subir Imagen");

  return (
    <div className="w-full flex flex-col gap-2  group">
      <span className="block font-medium">{props.title}:</span>
      <div className="relative aspect-square">
        <input
          type="file"
          hidden={imageValue !== null}
          className="w-4/5 aspect-square absolute top-0 left-0 opacity-0 cursor-pointer"
          id="imageSubmit"
          name={props.name}
          ref={inputReference}
          onChange={(e) => {
            setImageValue(e.target.files[0]);
          }}
        />
        {imageValue !== null ? (
          <>
            <button
              onClick={() => {
                setImageValue(null);
              }}
              type="button"
              className="text-white hover:bg-red-500 drop-shadow-lg  absolute top-1 aspect-square right-1 z-10 text-lg py-1 px-2 bg-red-300 rounded-sm"
            >
              X
            </button>
            <img
              src={URL.createObjectURL(imageValue)}
              alt="preview"
              className="w-full aspect-square"
            />
          </>
        ) : (
          <div
            className="w-full aspect-square border-2 border-bc border-dashed group-hover:border-tg rounded-md flex flex-col items-center justify-center"
            draggable
            onDragStart={DragStart}
            onDrop={DropFile}
            onDragLeave={DragLeave}
          >
            <img src={UploadImage} className="w-2/4" alt="upload icon" />
            <p
              className="p-2  text-tc rounded-sm px-4"
              type="button"
              ref={buttonRef}
              onClick={() => {
                inputReference.current.click();
              }}
            >
              Clickea o Arrasta
            </p>
          </div>
        )}
      </div>
    </div>
  );
};
