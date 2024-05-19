// src/components/PDFExport.js
import ResumePreview from './ResumePreview';
import { useResume } from '../context/resumeContext';
import { Link } from 'react-router-dom';
import { Button, Typography } from '@material-tailwind/react';
import { AlertTost } from './Alert';
import { Breadcrumbs } from '@material-tailwind/react';

const PDFExport = () => {

  const { alertTostHandler, alertTost } = useResume();

  return (
    <div className='flex flex-col items-center justify-center py-8'>
      <div className='relative sm:w-1/2'>
        {alertTost ? <AlertTost children={'Your resume has been successfully saved to the file you specified on your computer'}/> : null }
        <ResumePreview/>
        <footer className="shadow-md flex w-full flex-row flex-wrap items-center justify-center   gap-y-6 gap-x-12 bg-white mt-4  p-6 text-center md:justify-between">
            <Breadcrumbs>
              <a href="/" className="opacity-60">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-4 w-4"
                  viewBox="0 0 20 20"
                  fill="currentColor"
                >
                  <path d="M10.707 2.293a1 1 0 00-1.414 0l-7 7a1 1 0 001.414 1.414L4 10.414V17a1 1 0 001 1h2a1 1 0 001-1v-2a1 1 0 011-1h2a1 1 0 011 1v2a1 1 0 001 1h2a1 1 0 001-1v-6.586l.293.293a1 1 0 001.414-1.414l-7-7z" />
                </svg>
              </a>
            <Typography color="blue-gray" className="font-normal">
            <a href="/" target='_blank'>AbouTME.com</a>
            </Typography>
            </Breadcrumbs>
            <div className='flex items-center gap-x-2'>
            <Button onClick={alertTostHandler} className='bg-gradient-to-r from-indigo-500 to-blue-500'>Download PDF</Button>
            <Link to="/create-resume">
            <Button variant="text" className="flex items-center gap-2 bg-gray-200 hover:text-white hover:bg-indigo-200">
                Create Page{" "}
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth={2}
                  stroke="currentColor"
                  className="h-5 w-5"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M17.25 8.25L21 12m0 0l-3.75 3.75M21 12H3"
                  />
                </svg>
            </Button>
            </Link>
            </div>
        </footer>
      </div>
    </div>
  );
}

export default PDFExport;
