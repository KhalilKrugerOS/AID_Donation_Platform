"use client";
import React, { useEffect } from "react";
import html2canvas from "html2canvas";
import jsPDF from "jspdf";

const GeneratePDF = () => {
  const input = document.getElementById("certificate")!;
  html2canvas(input)
    .then((canvas) => {
      const imgData = canvas.toDataURL("image/png");
      const pdf = new jsPDF({
        orientation: "landscape",
        unit: "mm",
        format: "a4",
      });

      const pdfWidth = pdf.internal.pageSize.getWidth();
      const pdfHeight = pdf.internal.pageSize.getHeight();

      const margin = 10; // margin for the border
      const imgWidth = pdfWidth - 2 * margin;
      const imgHeight = pdfHeight - 2 * margin; // Adjust height based on top and bottom margin

      // Add image
      pdf.addImage(imgData, "PNG", margin, margin, imgWidth, imgHeight);
      pdf.save("certificate.pdf");
    })
    .catch((error) => {
      console.error("Error generating PDF: ", error);
    });
  return null; // No UI, only the effect to generate and download the PDF
};

export default GeneratePDF;
