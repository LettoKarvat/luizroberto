import React from 'react';
import Resume from './components/Resume';
import html2pdf from 'html2pdf.js';

function App() {
  const generatePDF = () => {
    const element = document.getElementById('resume-content');
    if (!element) return;

    const options = {
      margin: [0.5, 0.5, 0.5, 0.5],
      filename: 'Curriculo_Luiz_Roberto_Santos_de_Lima.pdf',
      image: { type: 'jpeg', quality: 0.98 },
      html2canvas: { 
        scale: 2,
        useCORS: true,
        letterRendering: true,
        allowTaint: false
      },
      jsPDF: { 
        unit: 'in', 
        format: 'a4', 
        orientation: 'portrait' 
      }
    };

    // Adiciona classe para impressão
    element.classList.add('print-mode');
    
    html2pdf()
      .set(options)
      .from(element)
      .save()
      .then(() => {
        // Remove classe após gerar PDF
        element.classList.remove('print-mode');
      })
      .catch((error) => {
        console.error('Erro ao gerar PDF:', error);
        element.classList.remove('print-mode');
      });
  };

  return (
    <div className="min-h-screen bg-gray-50">
      <Resume onGeneratePDF={generatePDF} />
    </div>
  );
}

export default App;