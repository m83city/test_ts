import "./App.css";
import pdfMake from "pdfmake/build/pdfmake";
import pdfFonts from "pdfmake/build/vfs_fonts";

function App() {
  const listPages = {
    street: "Курчатова",
    building: 3,
    flat: 1,
    order: 900123123,
  };

  //(pdfMake as any).vfs = pdfFonts.pdfMake.vfs;
  const getPage = (element: typeof listPages) => {
    return [
      {
        text: `Шановний абоненте!`,
        fontSize: 12,
        bold: true,
      },
      { text: "   ", fontSize: 3 },
      {
        text: `Перелік телекомунікаційних послуг за Вашим договором ${element.order} за адресою
вул. ${element.street}, б.${element.building}, кв.${element.flat} скорочено через заборгованість та відключено
від телекомунікаційної мережі.`,
        fontSize: 12,
        bold: true,
        styles: { alignment: "justify" },
      },
      { text: "   ", fontSize: 3 },
      {
        text: `Перевірити стан рахунку Ви можете самостійно через портал абонента «Мій кабінет» за посиланням
my.volia.com`,
        fontSize: 10,
        styles: { alignment: "justify" },
      },
      { text: "   ", fontSize: 3 },

      { text: "Для поновлення надання послуг, просимо:", fontSize: 12 },
      { text: "   ", fontSize: 3 },

      {
        text: `1.      поповнити Ваш особовий рахунок зручним способом – через мережу систем платіжних
терміналів, банк чи відділення Укрпошти, інтернет-системи, на порталі абонента «Мій
кабінет» (my.volia.com),
2.      звернутись до колл-центру (050-502-22-50, 068-502-22-50, 093-502-22-50)* для реєстрації
заявки на повторне підключення до мережі.`,
        fontSize: 12,
        styles: { alignment: "justify" },
      },
      { text: "   ", fontSize: 3 },

      {
        text: `Нагадуємо, що скорочення надання послуг не звільняє Вас від виконання договірних зобов'язань та
не звільняє від сплати боргу.`,
        fontSize: 12,
      },
      { text: "   ", fontSize: 3 },

      { text: `З повагою, ТОВ «ВОЛЯ-КАБЕЛЬ»`, fontSize: 10 },
      { text: "   ", fontSize: 3 },

      {
        text: "*Вартість дзвінка згідно тарифу Вашого оператора",
        fontSize: 8,
      },
      { text: "   ", fontSize: 10 },
    ];
  };

  const generatePdf = (): void => {
    const docDefinition = {
      content: [[getPage(listPages), getPage(listPages)]],
      defaultStyle: {
        font: "Roboto", // Використання внутрішнього шрифту
      },
    };

    pdfMake.createPdf(docDefinition).download("example.pdf");
  };

  return (
    <>
      <button onClick={generatePdf}>Згенерувати PDF</button>
    </>
  );
}

export default App;
