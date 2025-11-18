import React, { useState } from 'react';
import { Document, Page, pdfjs } from 'react-pdf';
//import 'react-pdf/dist/esm/Page/AnnotationLayer.css';
//import 'react-pdf/dist/esm/Page/TextLayer.css';
import 'react-pdf/dist/Page/TextLayer.css';
//import 'react-pdf/dist/umd/Page/TextLayer.css';

// If using a custom worker path (adjust if needed)
pdfjs.GlobalWorkerOptions.workerSrc = `//cdnjs.cloudflare.com/ajax/libs/pdf.js/${pdfjs.version}/pdf.worker.js`;

export default function PdfViewer({ file }) {
  const [numPages, setNumPages] = useState(null);
  const [pageNumber, setPageNumber] = useState(1);

  function onDocumentLoadSuccess({ numPages: np }) {
    setNumPages(np);
    setPageNumber(1);
  }

  return (
    <div className="pdf-viewer">
      <Document file={file} onLoadSuccess={onDocumentLoadSuccess}>
        <Page pageNumber={pageNumber} />
      </Document>

      {numPages && (
        <div style={{ marginTop: 8 }}>
          <button onClick={() => setPageNumber(p => Math.max(1, p - 1))}>Previous</button>
          <span style={{ margin: '0 12px' }}>
            Page {pageNumber} of {numPages}
          </span>
          <button onClick={() => setPageNumber(p => Math.min(numPages, p + 1))}>Next</button>
        </div>
      )}
    </div>
  );
}