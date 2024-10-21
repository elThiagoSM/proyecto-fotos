import { React, useCallback } from 'react';
import { useDropzone } from 'react-dropzone';

function ImageDrop() {
  const onDrop = useCallback((images) => {
    alert(images); // TODO: Manejar la subida de imágenes al servidor.
  }, []);
  const { getRootProps, getInputProps, isDragActive } = useDropzone({ onDrop });

  return (
    <div
      {...getRootProps()}
      className="p-10 flex items-center mx-auto w-5/6 rounded-md border-gray-800 border-dashed border-2 font-semibold text-center">
      <input {...getInputProps()} />
      {isDragActive ? (
        <p className="w-full">Soltar las imágenes aquí...</p>
      ) : (
        <p className="w-full cursor-pointer">
          Arrasta imágenes aquí, o haz click para buscar imágenes.
        </p>
      )}
    </div>
  );
}

function DropFiles() {
  return (
    <div className="m-4 w-full flex">
      <ImageDrop />
    </div>
  );
}

export default DropFiles;
