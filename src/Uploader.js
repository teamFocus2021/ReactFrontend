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
  
    // called every time a file's `status` changes
    const handleChangeStatus = ({ meta, file }, status) => { console.log(status, meta, file) }
  
    // receives array of files that are done uploading when submit button is clicked
    const handleSubmit = (files, allFiles) => {
      console.log(files.map(f => f.meta))
      allFiles.forEach(f => f.remove())
    }

    return (
      <Dropzone
        getUploadParams={getUploadParams}
        onChangeStatus={handleChangeStatus}
        onSubmit={handleSubmit}
        accept="video/*"
        inputContent={(files, extra) => (extra.reject ? 'video files only' : 'Drag Files')}
        styles={{
          dropzoneReject: { borderColor: 'red', backgroundColor: '#DAA' },
          inputLabel: (files, extra) => (extra.reject ? { color: 'red' } : {}),
        }}
      />
    )
  }

export default Uploader;
