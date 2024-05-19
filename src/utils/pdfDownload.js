import jsPDF from 'jspdf';
import html2canvas from 'html2canvas';

export const handleDownload = () => {
  const input = document.getElementById('pdf-content');
  html2canvas(input, { scale: 1 })
    .then((canvas) => {
      const imgData = canvas.toDataURL('image/png');
      const pdf = new jsPDF('p', 'mm', 'a4');
      const imgWidth = 210; // A4 width in mm
      const pageHeight = 295; // A4 height in mm
      const imgHeight = (canvas.height * imgWidth) / canvas.width;
      
      pdf.addImage(imgData, 'PNG', 0, 0, imgWidth, imgHeight);
      pdf.save('resume.pdf');
    })
    .catch((err) => {
      console.error('Failed to generate PDF', err);
    });
};

