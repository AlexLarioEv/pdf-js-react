import {useEffect, useState} from 'react';
import { Worker, Viewer } from '@react-pdf-viewer/core';
import '@react-pdf-viewer/core/lib/styles/index.css';

export const PDFViewer = ({ file }) => {
  const [pdfFile, setPdfFile] = useState(null);

  console.log(pdfFile)
  useEffect(() => {
    const reader = new FileReader();
    reader.onload = () => {
      setPdfFile(reader.result);
    };
    reader.readAsDataURL(file);
  }, [file]);

  return (
    <div>
        {/*/pdfjs/pdf.worker.min.js было https://unpkg.com/pdfjs-dist@2.10.377/build/pdf.worker.min.js  */}
      <Worker workerUrl={`/pdfjs/pdf.worker.min.js`}>  
        {pdfFile && <Viewer fileUrl={pdfFile} />}
      </Worker>
    </div>
  );
};
