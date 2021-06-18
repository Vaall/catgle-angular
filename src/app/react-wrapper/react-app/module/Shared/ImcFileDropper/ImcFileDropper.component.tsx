import React from 'react';
import { FC, useEffect, useState } from 'react';
import './ImcFileDropper.styles.scss';

interface ImcFileDropperProps {
  onChange: (values: any[]) => void;
};

export const ImcFileDropper: FC<ImcFileDropperProps> = ({ onChange }) => {
  const [selectedFiles, setSelectedFiles] = useState<any[]>([]);
  const [validFiles, setValidFiles] = useState<any[]>([]);
  const [errorMessage, setErrorMessage] = useState('');

  useEffect(() => {
    let filteredArray = selectedFiles.reduce((file, current) => {
      const x = file.find((item: any) => item.name === current.name);
      if (!x) {
        return file.concat([current]);
      } else {
        return file;
      }
    }, []);
    setValidFiles([...filteredArray]);

  }, [selectedFiles]);

  const dragOver = (e: { preventDefault: () => void; }) => {
    e.preventDefault();
  }

  const dragEnter = (e: { preventDefault: () => void; }) => {
    e.preventDefault();
  }

  const dragLeave = (e: { preventDefault: () => void; }) => {
    e.preventDefault();
  }

  const fileDrop = (e: { preventDefault: () => void; dataTransfer: { files: any; }; }) => {
    e.preventDefault();
    const files = e.dataTransfer.files;
    if (files.length) {
      handleFiles(files);
    }
  }

  const uploadFile = (e: any) => {
    e.preventDefault();
    const files = e.target.files;
    if (files.length) {
      handleFiles(files);
    }
  };

  const validateFile = (file: any) => {
    const validTypes = ['image/jpeg', 'image/jpg', 'image/png', 'image/gif', 'image/x-icon', 'text/txt', 'image/pdf'];
    if (validTypes.indexOf(file.type) === -1) {
      return false;
    }
    return true;
  }

  const handleFiles = (files: any) => {
    for (let i = 0; i < files.length; i++) {
      if (validateFile(files[i])) {
        setSelectedFiles(prevArray => [...prevArray, files[i]]);
        onChange([...selectedFiles, files[i]]);
      } else {
        files[i]['invalid'] = true;
        setSelectedFiles(prevArray => [...prevArray, files[i]]);
        setErrorMessage('formato no permitido.');
      }
    }
  }

  const fileSize = (size: any) => {
    if (size === 0) return '0 Bytes';
    const k = 1024;
    const sizes = ['Bytes', 'KB', 'MB', 'GB', 'TB'];
    const i = Math.floor(Math.log(size) / Math.log(k));
    return parseFloat((size / Math.pow(k, i)).toFixed(2)) + ' ' + sizes[i];
  }

  const fileType = (fileName: any) => {
    return fileName.substring(fileName.lastIndexOf('.') + 1, fileName.length) || fileName;
  }

  const removeFile = (name: any) => {
    // find the index of the item
    // remove the item from array

    const validFileIndex = validFiles.findIndex(e => e.name === name);
    validFiles.splice(validFileIndex, 1);
    // update validFiles array
    setValidFiles([...validFiles]);
    const selectedFileIndex = selectedFiles.findIndex(e => e.name === name);
    selectedFiles.splice(selectedFileIndex, 1);
    // update selectedFiles array
    setSelectedFiles([...selectedFiles]);
  }

  return (
    <div className="container">
      <div className="drop-container"
        onDragOver={dragOver}
        onDragEnter={dragEnter}
        onDragLeave={dragLeave}
        onDrop={fileDrop}
      >
        <input onChange={(e) => uploadFile(e)} className="--hide" id="fileSelector" type="file"></input>
        <div className="drop-message">
          <span className="upload">⭳</span><br />
          Suelta archivos aquí ó <label className="file-selector" htmlFor="fileSelector">Seleccione Archivos</label>
        </div>
      </div>
      <div className="file-display-container">
        {validFiles.map((data, i) =>
          <div className="file-status-bar" key={i}>
            <div>
              <div className="file-type-logo">🗎</div>
              <div className="file-type">{fileType(data.name)}</div>
              <span className={`file-name ${data.invalid ? 'file-error' : ''}`}>{data.name}</span>
              <span className="file-size">({fileSize(data.size)})</span> {data.invalid && <span className='file-error-message'>({errorMessage})</span>}
            </div>
            <div className="file-remove" onClick={() => removeFile(data.name)}>✕</div>
          </div>
        )}
      </div>
    </div>
  );
}
