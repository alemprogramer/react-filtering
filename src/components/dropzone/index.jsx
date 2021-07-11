import React, { useEffect, useState, useMemo } from 'react';
import { useDropzone } from 'react-dropzone';

// CSS Start

const thumbsContainer = {
    display: 'flex',
    flexDirection: 'row',
    flexWrap: 'wrap',
    marginTop: 16
};

const thumb = {
    display: 'inline-flex',
    borderRadius: 2,
    border: '1px solid #eaeaea',
    marginBottom: 8,
    marginRight: 8,
    width: 100,
    height: 100,
    padding: 4,
    boxSizing: 'border-box'
};

const thumbInner = {
    display: 'flex',
    minWidth: 0,
    overflow: 'hidden'
};

const img = {
    display: 'block',
    width: 'auto',
    height: '100%'
};

/* const baseStyle = {
    flex: 1,
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    padding: '20px',
    borderWidth: 2,
    borderRadius: 2,
    borderColor: '#eeeeee',
    borderStyle: 'dashed',
    backgroundColor: '#fafafa',
    color: '#bdbdbd',
    outline: 'none',
    transition: 'border .24s ease-in-out'
}; */

const activeStyle = {
    borderColor: '#2196f3'
};

const acceptStyle = {
    borderColor: '#00e676'
};

const rejectStyle = {
    borderColor: '#ff1744'
};

const dFlex={
    'display': 'flex',
    'justifyContent': 'center',
    'alignItems': 'center',
};

const mAuto={
    'margin': '0 auto',
}

const file_box = {
    'width': '100%',
    'height': '190px',
    'padding': '35px 0 0',
    'position': 'relative',
    'border': '1px dashed rgba(0, 0, 0, 0.1)',    
};

const h5 = {
    "fontFamily": "'Muli', sans-serif",
    "fontStyle": "normal",
    "fontWeight": "700",
    "fontSize": "16px",
    "lineHeight": "20px",
    "color": "#363840",
    "textAlign": "center",
    "padding": "4px 0",
    ...dFlex,    
};

const h6 = {
    ...dFlex,
    'fontFamily': "'Muli', sans - serif'",
    'fontStyle': 'normal',
    'fontWeight': '400',
    'fontSize': '14px',
    'lineHeight': '170%',
    'color': '#7b7d84',

}
const btns={
    ...dFlex,
    ...mAuto,
}


// CSS End

function Previews(props) {
    const [files, setFiles] = useState([]);
    const { getRootProps, getInputProps, isDragActive, isDragAccept, isDragReject } = useDropzone({
        accept: 'image/*',
        onDrop: acceptedFiles => {
            setFiles(acceptedFiles.map(file => Object.assign(file, {
                preview: URL.createObjectURL(file)
            })));
        }
    });

    const styles = useMemo(() => ({
        // ...baseStyle,
        ...file_box,
        ...(isDragActive ? activeStyle : {}),
        ...(isDragAccept ? acceptStyle : {}),
        ...(isDragReject ? rejectStyle : {})
    }), [
        isDragActive,
        isDragReject,
        isDragAccept
    ]);

    // Thumbnails
    const thumbs = files.map(file => (
        <div style={thumb} key={file.name}>
            <div style={thumbInner}>
                <img
                    src={file.preview}
                    style={img}
                    alt={file.name}
                />
            </div>
        </div>
    ));

    useEffect(() => () => {
        // Make sure to revoke the data uris to avoid memory leaks
        files.forEach(file => URL.revokeObjectURL(file.preview));
    }, [files]);

    return (
        <section className='d-none d-sm-none d-md-block d-lg-block d-xl-block'>
            <div {...getRootProps({style:styles,className:'dropezone'})}>
                <input {...getInputProps()} />
                <h5 style={h5}>Drag &amp; drop your files here</h5>
                <h6  style={h6}>or</h6>
                <button style={btns} className="btn">Add files</button>
            </div>
            <aside style={thumbsContainer}>
                {thumbs}
            </aside>
        </section>
    );
};

export default Previews