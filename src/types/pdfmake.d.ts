declare module "pdfmake/build/vfs_fonts" {
    const pdfFonts: {
      pdfMake: {
        vfs: { [file: string]: string };
      };
    };
    export default pdfFonts;
  }