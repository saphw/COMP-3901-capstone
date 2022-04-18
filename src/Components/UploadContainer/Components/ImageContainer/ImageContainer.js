import React, { useState, Fragment } from "react";
import { AiOutlineExpandAlt } from "react-icons/ai";
import { Dialog, Transition } from "@headlessui/react";
const ImageContainer = (props) => {
  const { url } = props;
  let [isOpen, setIsOpen] = useState(false);
  return (
    <div className={`relative`}>
      <img className="object-cover h-96 w-96" src={url} alt="Uploaded file" />

      <button
        onClick={() => setIsOpen(true)}
        className="text-black bg-white cursor-pointer drop-shadow-md flex flex-row justify-center hover:bg-light border-white rounded-md absolute bottom-[90%] left-[85%]"
      >
        <AiOutlineExpandAlt className="w-8 h-8" />
      </button>
      <Transition appear show={isOpen} as={Fragment}>
        <Dialog
          as="div"
          className="fixed inset-0 z-10 overflow-y-auto"
          onClose={() => setIsOpen(false)}
        >
          <div className="min-h-screen px-4 text-center">
            <Transition.Child
              as={Fragment}
              enter="ease-out duration-300"
              enterFrom="opacity-0"
              enterTo="opacity-100"
              leave="ease-in duration-200"
              leaveFrom="opacity-100"
              leaveTo="opacity-0"
            >
              <Dialog.Overlay className="fixed inset-0" />
            </Transition.Child>

            {/* This element is to trick the browser into centering the modal contents. */}
            <span
              className="inline-block h-screen align-middle"
              aria-hidden="true"
            >
              &#8203;
            </span>
            <Transition.Child
              as={Fragment}
              enter="ease-out duration-300"
              enterFrom="opacity-0 scale-95"
              enterTo="opacity-100 scale-100"
              leave="ease-in duration-200"
              leaveFrom="opacity-100 scale-100"
              leaveTo="opacity-0 scale-95"
            >
              <div className="inline-block w-full max-w-2xl p-6 my-8 overflow-hidden text-left align-middle transition-all transform bg-white shadow-xl rounded-2xl">
                <Dialog.Title
                  as="div"
                  className="flex flex-row space-between items-center w-full"
                >
                  <div className="text-lg font-medium leading-6 text-gray-900">
                    Scanned Results
                  </div>
                  <button
                    onClick={() => setIsOpen(false)}
                    className="text-black bg-transparent cursor-pointer drop-shadow-md flex flex-row justify-center hover:bg-light border-white rounded-md absolute bottom-[90%] left-[85%]"
                  >
                    <AiOutlineExpandAlt className="w-8 h-8" />
                  </button>
                </Dialog.Title>
                <div className="w-full h-full mt-2 flex flex-row justify-center items-start bg-light">
                  <img
                    className=" rounded-l-3xl object-cover h-96 w-96"
                    src={url}
                    alt="Uploaded file"
                  />
                  <div className="bg-light flex flex-col gap-3 h-full w-full">
                    <div className="flex flex-col gap-3 p-3 border-secondary">
                      <div className="font-semibold text-lg text-secondary">
                        Pneumothorax Identified
                      </div>
                      <div className="font-medium text-md text-primary">
                        Classification: Large
                      </div>
                      <div className="font-medium text-md text-primary">
                        Size: 6mm
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </Transition.Child>
          </div>
        </Dialog>
      </Transition>
    </div>
  );
};

export default ImageContainer;
