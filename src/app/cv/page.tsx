import PdfViewer from "@/components/PdfViewer/PdfViewer";
import { getCvPdf } from "@/contentful";

export const metadata = {
  title: 'Резюме/Cv',

}

const Cv = async () => {
  const data = await getCvPdf();
  const pdfUrl = `https:${data.cvPdf.fields.file.url}`;

  return (
    <div>
      <PdfViewer url={pdfUrl}/>
    </div>
  );
};

export default Cv;
