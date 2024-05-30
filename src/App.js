import React, { useState } from 'react';
import {PDFViewer} from './PDFViewer';

const App = () => {
  const [url, setUrl] = useState('');
  const [file, setFile] = useState('/pdf/pdf_1.pdf');


  const handleFileChange = (event) => {
    setFile(event.target.files[0]);
  }

  const handleLoadUrl = () => {
    setFile(url);
  };

  const handleUrlChange = (event) => {
    setUrl(event.target.value);
  };


  return (
    <div>
      <h1>Просмотр PDF файла</h1>
      <div>
      < input type='file' accept="application/pdf" onChange={handleFileChange}/>
        <input type="text" placeholder="Enter PDF URL" value={url} onChange={handleUrlChange} />
        <button onClick={handleLoadUrl}>Load PDF from URL</button>
      </div>
      {file && <PDFViewer file={file} />}
    </div>
  );
};

export default App;
