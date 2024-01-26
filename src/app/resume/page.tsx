import { CvContent } from "@/components/CvContent/CvContent";
import PdfViewer from "@/components/PdfViewer/PdfViewer";
import { getCvPdf } from "@/contentful";

export const metadata = {
  title: "Резюме/Cv",
};

export const revalidate = 3;

const Cv = async () => {
  const data = await getCvPdf();
  const pdfUrl = `https:${data.cvPdf.fields.file.url}`;
  const pageTitles = {
    title_en: data.pageTitle_en,
    title_ru: data.pageTitl_ru,
  };

  return (
    <div>
      <CvContent pageTitles={pageTitles} data={data} />
      {/* <PdfViewer url={pdfUrl} /> */}
    </div>
  );
};

export default Cv;
