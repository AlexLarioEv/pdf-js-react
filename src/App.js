import {PDFViewer} from './PDFViewer'
import './App.css';
import { useState } from 'react';

function App() {
  const [file, setFile] = useState(null)
  const handleFileChange = (event) => {
    setFile(event.target.files[0]);
  }

  return (
    <div className="App">
      <input type='file' accept="application/pdf" onChange={handleFileChange}/>
      {file&&<PDFViewer file={file}/>}
    </div>
  );
}

export default App;
