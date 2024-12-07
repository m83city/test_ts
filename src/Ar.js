import pdfMake from "pdfmake/build/pdfmake";
import pdfFonts from "pdfmake/build/vfs_fonts";

// Підключення вбудованих шрифтів
pdfMake.vfs = pdfFonts.pdfMake.vfs;

const generatePdf = () => {
  const docDefinition = {
    content: [
      { text: "Це текст кирилицею у PDF-файлі.", fontSize: 16 },
      { text: "Roboto підтримує кириличні символи.", fontSize: 12 },
    ],
    defaultStyle: {
      font: "Roboto", // Використовується вбудований шрифт
    },
  };

  pdfMake.createPdf(docDefinition).download("example.pdf");
};

const Ar = () => {
  return <button onClick={generatePdf}>Згенерувати PDF</button>;
};

export default Ar;