import React, { useCallback, useState, useEffect } from "react";
import { useDropzone } from "react-dropzone";
import { AiOutlineCloudUpload } from "react-icons/ai";
import { ImageContainer } from "./Components";

const UploadContainer = (onUpload) => {
  const [images, setImages] = useState([]);
  const [imagesURLs, setImagesURLs] = useState([]);
  const [percentage, setPercentage] = useState(0);

  useEffect(() => {
    if (images.length < 1) return;
    const newImagesURLs = [];

    images.forEach((image) => newImagesURLs.push(URL.createObjectURL(image)));
    setImagesURLs(newImagesURLs);
  }, [images]);

  const onDrop = useCallback((acceptedFiles) => {
    const formData = new FormData();
    for (const file of acceptedFiles) formData.append("file", file);

    const xhr = new XMLHttpRequest();
    xhr.upload.onprogress = (event) => {
      const percentage = parseInt((event.loaded / event.total) * 100);
      setPercentage(percentage);
    };
    xhr.onreadystatechange = () => {
      if (xhr.readyState !== 4) return;
      if (xhr.status !== 200) {
        console.log("error"); // Handle error here
      }
      console.log("success"); // Handle success here
      setImages(acceptedFiles);
    };
    xhr.open("POST", "https://httpbin.org/post", true);
    xhr.send(formData);
  }, []);

  const { getRootProps, getInputProps, isDragActive } = useDropzone({
    onDrop,
    accept: "image/jpeg, image/png",
    noClick: imagesURLs.length > 0,
  });
  return (
    <div
      {...getRootProps()}
      className="px-3 bg-primary/5 w-full h-full rounded-md py-48 flex flex-col justify-center items-center gap-3 relative cursor-default"
    >
      <input {...getInputProps()} />

      {percentage !== 0 && percentage !== 100 && (
        <div class="w-full bg-light rounded-full">
          <div
            class="bg-blue-600 text-xs font-medium text-blue-100 text-center p-0.5 leading-none rounded-full transition-all ease-linear duration-75 "
            style={{ width: `${percentage}%` }}
          >
            {`${percentage}%`}
          </div>
        </div>
      )}
      {images.length === 0 ? (
        isDragActive ? (
          <>
            <AiOutlineCloudUpload className="text-primary w-11 h-11" />
            <div className="font-bold text-primary text-md">Drop file here</div>
          </>
        ) : (
          <>
            <div className="font-bold text-primary uppercase text-md">
              Drag and Drop To Upload
            </div>
            <button className="py-1 px-4 text-light font-bold text-md rounded-sm bg-primary">
              Or Browse
            </button>
            <div className="font-medium text-primary text-md">
              FILE: JPEG, PNG Images
            </div>
          </>
        )
      ) : (
        <div className="relative">
          <div
            className={
              imagesURLs.length < 4
                ? "container flex flex-col lg:flex-row justify-around gap-3 "
                : `container grid lg:grid-cols-4 grid-cols-1 gap-3`
            }
          >
            {imagesURLs.map((url, idx) => (
              <div>
                <ImageContainer key={`image-${idx}`} url={url} />
              </div>
            ))}
          </div>
        </div>
      )}
    </div>
  );
};

export default UploadContainer;
