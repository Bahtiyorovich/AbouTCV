// src/components/DOCXExport.js
import React from 'react';
import { Document, Packer, Paragraph, TextRun } from 'docx';
import { saveAs } from 'file-saver';
import { useResume } from '../context/resumeContext';

const DOCXExport = () => {

  const { resumeData } = useResume();
  const data = resumeData;

  const generateDOCX = () => {
    const doc = new Document({
      sections: [
        {
          children: [
            new Paragraph({
              children: [
                new TextRun({ text: data.name, bold: true, size: 32 }),
              ],
            }),
            new Paragraph({ text: data.email }),
            new Paragraph({ text: data.phone }),
            new Paragraph({ text: data.address }),
            new Paragraph({ text: "Experience", heading: "Heading1" }),
            new Paragraph({ text: data.experience }),
            new Paragraph({ text: "Education", heading: "Heading1" }),
            new Paragraph({ text: data.education }),
          ],
        },
      ],
    });

    Packer.toBlob(doc).then(blob => {
      saveAs(blob, "resume.docx");
    });
  };

  return <button onClick={generateDOCX}>Download DOCX</button>;
}

export default DOCXExport;
