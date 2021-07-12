import React, { useEffect, useState, useMemo } from 'react';
import { useDropzone } from 'react-dropzone';

// CSS Start

/* const thumb = {
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
}; */

const img = {
    display: 'block',
    width: 'auto',
    height: '100%'
};

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
            })))
        }
    });

    const styles = useMemo(() => ({
        // ...baseStyle,
        ...file_box,
        ...(isDragActive ? activeStyle : {}),
        ...(isDragAccept ? acceptStyle : {}),
        ...(isDragReject ? rejectStyle : {}),
    }), [
        isDragActive,
        isDragReject,
        isDragAccept
    ]);

    // Thumbnails
    const thumbs = files.map((f) => (
        <div className="col-md-6 col-sm-12 col-12"  key={f.name}>
            <div className="files position-relative">
                <div className="img_part">
                    <img src={f.preview} className="img-fluid" alt={f.name} />
                </div>
                <div className="info_part">
                    <h5>{f.name}</h5>
                    <p><span> {Math.round(f.size/1000000)} MB </span></p>
                </div>
                {/* <button type='button' onClick={() =>setFiles(files.splice(m,1))} className="cancel_btn position-absolute">
                    <i className="fas fa-times" />
                </button> */}
            </div>
        </div>
    ));

    useEffect(() => () => {
        // Make sure to revoke the data uris to avoid memory leaks
        files.forEach(file => URL.revokeObjectURL(file.preview));
    }, [files]);

    props.count(files.length)

    return (
        <section className='d-none d-sm-none d-md-block d-lg-block d-xl-block'>
            {files.length===0? 
            <div {...getRootProps({style:styles,className:'dropezone'})}>
                <input {...getInputProps()} />
                <h5 style={h5}>Drag &amp; drop your files here</h5>
                <h6  style={h6}>or</h6>
                <button style={btns} className="btn">Add files</button>
            </div>
            :
                <div className="file_upload">
                    <div className="documents">
                        <div className="row">
                            <div className="col-md-12 col-sm-12 col-12">
                                <div className="row">
                                {thumbs}
                                    <div className="col-md-6 col-sm-12 col-12">
                                        <div {...getRootProps({className:"add files"})}>
                                            <input {...getInputProps()} />
                                            <div className="add_img">
                                            <img src={`${process.env.PUBLIC_URL}/vendor/images/add_more.png`} className="img-fluid" alt="add_more.png" />
                                            </div>
                                            <div className="add_text">
                                                <h6>Change Uploaded File</h6>
                                            </div>
                                        </div>
                                    </div>

                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            }
        </section>
    );
};

export default Previews