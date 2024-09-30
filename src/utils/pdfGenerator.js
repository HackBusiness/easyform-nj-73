import { jsPDF } from 'jspdf';
import 'jspdf-autotable';

export const generatePDF = (formData) => {
  const doc = new jsPDF();

  // Add title
  doc.setFontSize(18);
  doc.text('CPCN Form Submission', 14, 22);

  // Add form data
  doc.setFontSize(12);
  let yPos = 30;

  Object.entries(formData).forEach(([key, value]) => {
    doc.text(`${key}: ${value}`, 14, yPos);
    yPos += 10;
  });

  // Save the PDF
  doc.save('CPCN_Form_Submission.pdf');
};