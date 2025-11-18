import React from 'react';
import Layout from '@theme/Layout';
import BrowserOnly from '@docusaurus/BrowserOnly';

function MyPdfPage() {
  return (
    <Layout title="My PDF Document">
      <h1>View My PDF</h1>
      <BrowserOnly fallback={<div>Loading PDF viewer...</div>}>
        {() => {
          const PdfViewer = require('../components/PdfViewer').default;
          return <PdfViewer pdfUrl="/static/marketing.pdf" />;
        }}
      </BrowserOnly>
    </Layout>
  );
}

export default MyPdfPage;