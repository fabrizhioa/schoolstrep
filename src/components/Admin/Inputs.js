import { useEffect, useRef, useState } from "react";
import { Link } from "react-router-dom";
import Upload from "../../assets/admin/upload.svg";
import Modal from "../Modal";

export const CheckBox = (props) => {
  const [check, setCheck] = useState(props.checked);
  const input = useRef();
  return (
    <div className="flex items-center gap-2">
      <span className="font-medium">{props.title}:</span>
      <input
        type="checkbox"
        hidden={true}
        name={props.name}
        value={props.value}
        ref={input}
        defaultChecked={props.checked}
        onChange={(e) => setCheck(e.target.checked)}
      />
      <div
        className={`w-10 h-5  cursor-pointer flex items-center p-1 rounded-full transition-all duration-300 ${
          check
            ? "justify-end bg-palette-primary "
            : "justify-start bg-gray-400"
        }`}
        onClick={() => input.current.click()}
      >
        <div className="w-3 h-3 bg-white rounded-full"></div>
      </div>
    </div>
  );
};

export const HiddenBox = (props) => {
  const [check, setCheck] = useState(props.checked);
  const input = useRef();
  return (
    <div className="flex flex-col gap-2">
      <div className="flex items-center gap-2">
        <span className="font-medium">{props.title}:</span>
        <input
          type="checkbox"
          hidden={true}
          name={props.name}
          value={props.value}
          defaultChecked={props.checked}
          onChange={(e) => setCheck(e.target.checked)}
          ref={input}
        />
        <div
          className={`w-10 h-5  cursor-pointer flex items-center p-1 rounded-full transition-all duration-300 ${
            check
              ? "justify-end bg-palette-primary "
              : "justify-start bg-gray-400"
          }`}
          onClick={() => input.current.click()}
        >
          <div className="w-3 h-3 bg-white rounded-full"></div>
        </div>
      </div>
      {check && props.children}
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
  min,
  max,
}) => {
  return (
    <div className={"flex flex-col gap-2 " + classDiv}>
      <span className={"font-medium " + classSpan}>{title}:</span>
      <input
        type={type}
        name={name}
        required={required}
        placeholder={placeholder}
        min={min}
        max={max}
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
  createOptionModal = false,
  createOptionLink = false,
  childrenModal,
}) => {
  const [viewModal, setViewModal] = useState(false);
  return (
    <div className={"flex flex-col gap-2 " + classDiv}>
      <div className="flex justify-between items-center">
        <span className={"font-medium " + classSpan}>{title}:</span>
        {createOptionModal ? (
          <button
            onClick={() => setViewModal(true)}
            type="button"
            className="text-sm text-palette-primary font-semibold"
          >
            {createOptionModal}
          </button>
        ) : (
          createOptionLink && (
            <Link
              to={createOptionLink.url}
              className="text-sm text-palette-primary font-semibold"
            >
              {createOptionLink.title}
            </Link>
          )
        )}
      </div>

      {createOptionModal && viewModal && childrenModal && (
        <Modal
          closeAction={() => setViewModal(false)}
          title={createOptionModal}
        >
          {childrenModal}
        </Modal>
      )}

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

export const InputFile = (props) => {
  const [fileValue, setFileValue] = useState(null);
  const inputReference = useRef();
  const buttonRef = useRef();

  const DragStart = () =>
    (buttonRef.current.textContent = "Soltar para guardar");
  const DragLeave = () => (buttonRef.current.textContent = "Subir elemento");
  const DropFile = () => (buttonRef.current.textContent = "Subir elemento");

  return (
    <div className="flex flex-col gap-2  group">
      <span className="block font-medium">{props.title}:</span>
      <div className="relative aspect-square">
        <input
          type="file"
          hidden={fileValue !== null}
          className="w-4/5 aspect-square absolute top-0 left-0 opacity-0 cursor-pointer"
          id="imageSubmit"
          name={props.name}
          ref={inputReference}
          onChange={(e) => {
            setFileValue(e.target.files[0]);
          }}
          required={props.required}
        />
        {fileValue !== null ? (
          <>
            <button
              onClick={() => {
                setFileValue(null);
              }}
              type="button"
              className="text-white hover:bg-red-500 drop-shadow-lg  absolute top-1 aspect-square right-1 z-10 text-lg py-1 px-2 bg-red-300 rounded-sm"
            >
              X
            </button>
            {fileValue.type.includes("image") ? (
              <img
                src={URL.createObjectURL(fileValue)}
                alt="preview"
                className="w-full aspect-square"
              />
            ) : (
              <iframe
                title="PREVIEW"
                src={URL.createObjectURL(fileValue)}
                className="w-full aspect-square"
              />
            )}
          </>
        ) : (
          <div
            className="w-full aspect-square border-2 border-bc border-dashed group-hover:border-tg rounded-md flex flex-col items-center justify-center"
            draggable
            onDragStart={DragStart}
            onDrop={DropFile}
            onDragLeave={DragLeave}
          >
            <img src={Upload} className="w-2/4" alt="upload icon" />
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

export const InputIdBox = ({ data, fields, title, name }) => {
  const [viewData, setViewData] = useState(data);
  const [isSelect, setIsSelected] = useState(false);
  const input = useRef();

  function search(text) {
    if (text.length !== 0 && !isSelect) {
      let newData = data;
      if (text.length > 0) {
        newData = newData.filter((element) => {
          let res = false;

          fields.forEach((field) => {
            if (element[field]?.toLowerCase().includes(text.toLowerCase())) {
              res = true;
            }
          });
          return res;
        });
      }

      setViewData(newData);
    }
  }

  return (
    <div className="relative w-full flex flex-col">
      <span className={"font-medium"}>{title}:</span>
      <div className="relative flex items-center justify-end">
        <input
          type="text"
          onChange={(e) => search(e.target.value)}
          className="w-full outline-none rounded-md p-2 border-2 "
          ref={input}
          name={name}
          readOnly={isSelect}
        />
        {isSelect && (
          <button
            onClick={() => setIsSelected(false)}
            className="absolute p-2 text-xl self-end place-content-end "
          >
            X
          </button>
        )}
      </div>

      {input.current?.value.length > 1 && !isSelect && (
        <div className="absolute z-20 w-full bg-white mt-1 p-2 rounded-md shadow top-full border-2">
          {viewData.map((element, key) => (
            <button
              className="flex items-center gap-2 p-1 hover:bg-palette-ext w-full rounded-md"
              type="button"
              onClick={() => {
                input.current.value = element.id;
                setIsSelected(true);
              }}
              key={element.id}
            >
              <span className="text-gray-600 font-bold text-sm">
                {element.id}
              </span>
              <img
                src={element.img}
                alt={element.nombre}
                className="w-5 h-5 "
              />

              <span>{element.nombre}</span>
            </button>
          ))}
        </div>
      )}
    </div>
  );
};
