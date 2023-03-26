import { PDFLoader } from 'langchain/document_loaders';
import fs from 'fs'

/* Name of directory to retrieve files from. You can change this as required */
const filePath = 'D:\\Documents\\AWS Exams\\Overview of AWS Services.pdf';

async function write(file_name, contents) {
  await fs.writeFileSync(file_name, contents)
}

export const run = async () => {
  try {
    /*load raw docs from the pdf file in the directory */
    const loader = new PDFLoader(filePath);
    // const loader = new PDFLoader(filePath);
    const rawDocs = await loader.load();

    await write('Overview of AWS Services.txt', rawDocs[0].pageContent);

  } catch (error) {
    console.log('error', error);
    throw new Error('Failed to convert your data');
  }
};

(async () => {
  await run();
  console.log('conversion complete');
})();
