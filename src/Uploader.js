// import logo from './logo.svg';
import React from 'react';
import Dropzone from 'react-dropzone-uploader'
import 'react-dropzone-uploader/dist/styles.css'
import "./dropbox.css"

  const Uploader = () => {
    
    const getUploadParams = ({ meta }) => {
      const url = 'https://httpbin.org/post'
      return { 
        url, meta: { fileUrl: `${url}/${encodeURIComponent(meta.name)}` }
      }
    }
    
    const handleChangeStatus = ({ meta, remove }, status) => {
      console.log(status, meta)
    }
    
    const handleSubmit = (files, allFiles) => {
      console.log(files.map(f => f.meta))
      allFiles.forEach(f => f.remove())
    }

    return (
      <React.Fragment>
        <Dropzone
          getUploadParams={getUploadParams}
          onChangeStatus={handleChangeStatus}
          maxFiles={1}
          multiple={false}
          canCancel={false}
          onSubmit={handleSubmit}
          accept="video/*"
          inputContent={(files, extra) => (extra.reject ? 'Only Video File!' : 'Drop or Browse A Video File')}
          styles={{
            dropzoneReject: { borderColor: 'red', backgroundColor: '#DAA' },
            inputLabel: (files, extra) => (extra.reject ? { color: 'red' } : {}),
          }}
        />
      </React.Fragment>
    )
  }

export default Uploader;

// 참고: https://react-dropzone-uploader.js.org/