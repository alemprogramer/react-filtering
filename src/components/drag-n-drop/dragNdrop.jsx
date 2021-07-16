import React, { useRef, useState } from 'react'
import { FileUploadContainer, FormField, DragDropText, UploadFileBtn, FilePreviewContainer, ImagePreview, PreviewContainer, PreviewList, FileMetaData, RemoveFileIcon, InputLabel } from "./css.styles";

const fileSize=500000
const dragNdrop = ({ label, updateFilesCb, maxFileSize = fileSize, ...otherProps})=> {
    const fileInput=useRef(null)
    const [photos, setPhotos] = useState({})
    return (
        <>
        <section>
            <label>{label}</label>
            <p>Drag and drop your files anywhere or</p>
            <button type="button">
                <i className="fas fa-file-upload" />
                <span> Upload {otherProps.multiple ? "files" : "a file"}</span>
            </button>
            <input
                type="file"
                ref={fileInput}
                title=""
                value=""
                {...otherProps}
            />
        </section>
        <article>
        <span>To Upload</span>
        <section>
            {Object.keys(photos).map((fileName, index) => {
            let file = photos[fileName];
            let isImageFile = file.type.split("/")[0] === "image";
            return (
              <section key={fileName}>
                <div>
                  {isImageFile && (
                    <img
                      src={URL.createObjectURL(file)}
                      alt={`file preview ${index}`}
                    />
                  )}
                  <div isImageFile={isImageFile}>
                    <span>{file.name}</span>
                    <aside>
                      <span>{convertBytesToKB(file.size)} kb</span>
                      <i className="fas fa-trash-alt" />
                    </aside>
                  </div>
                </div>
              </section>
            );
          })}
        </section>
      </article>
      </>
    )
}

export default dragNdrop
