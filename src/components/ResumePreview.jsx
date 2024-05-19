// src/components/ResumePreview.js
import React from 'react';
import { useResume } from '../context/resumeContext';
import { Card } from '@material-tailwind/react';

const ResumePreview = () => {

  const { resumeData, componentRef } = useResume();

  return (
    <Card className="w-full sm:min-h-[70vh] pb-6 px-16 shadow-xl" ref={componentRef}>
      <div className='border-b-[1px] border-gray-500 w-full min-h-[12vh] py-2 mt-4'>
        <h3  className="uppercase text-black text-bold  sm:text-6">{resumeData? resumeData.fullname : ""}</h3>
        <h3 className='uppercase xl:text-[14px] '>{resumeData ? resumeData.job : "#"}</h3>
        <ul className='flex flex-wrap gap-x-4 w-[80%]'>
          <li className=' text-[12px] text-gray-900'>{resumeData.phoneNumber}</li>
          <a href={`${resumeData.email}`}>
            <li className=' text-[12px] text-cyan-800'>{resumeData.email}</li>
          </a>
          <li className=' text-[12px] text-gray-900'>{resumeData.address}</li>
          <li className=' text-[12px] text-gray-900'>ZIP Code: {resumeData.zipcode}</li>
          <a href={`${resumeData.portfolio}`}>
            <li className=' text-[12px] text-cyan-900'>My portfolio: {resumeData.portfolio}</li>
          </a>
        </ul>
      </div>
      <div className='border-b-[1px] border-gray-500 w-full min-h-[10vh] py-2 mt-4'>
        <h6  className="text-black text-bold  xl:text-6 ">WHAT YOU OFFER TO THE COMPANY</h6>
        <p className=' text-[12px] text-gray-900'>{resumeData.offer}</p>
      </div>
      <div className='border-b-[1px] border-gray-500 w-full min-h-[10vh] py-2 mt-4'>
        <h6  className="text-black text-bold  xl:text-6 ">WHAT SKILLS YOU HAVE</h6>
        <p className=' text-[12px] text-gray-900 '>{resumeData.skills}</p>
      </div>
      <div className='border-b-[1px] border-gray-500 w-full min-h-[10vh] py-2 mt-4'>
        <h6  className="text-black text-bold  xl:text-6 ">PROFESSIONAL EXPERIENCE</h6>
        <div className='mb-4'>
          <p className='flex items-center justify-between font-semibold  text-[12px] text-black'>
            <span>{resumeData.company}</span>
            <span>{resumeData.date}</span>
          </p>
          <p className=' text-[12px] text-gray-900'>{resumeData.experience}</p>
        </div>
        <div className='mb-2'>
          <p className='flex items-center justify-between font-semibold  text-[12px] text-gray-900'>
            <span>{resumeData.companyNow}</span>
            <span>{resumeData.dateNow}</span>
          </p>
          <p className=' text-[12px] text-gray-900'>{resumeData.experienceNow}</p>
        </div>
      </div>
      <div className='flex items-center gap-4 mt-2'>
        <div className="flex-1 border-r-[1px] border-gray-500 pr-2">
          <h6  className="text-black text-bold  xl:text-6 ">EDUCATION & CERTIFICATIONS</h6>
          <p className=' text-[12px] font-semibold text-gray-900'>{resumeData.educationLevel}</p>
          <p className=' text-[12px]  text-gray-900'>{resumeData.education}</p>
        </div>
        <div className="flex-1">
          <h6  className="text-black text-bold  xl:text-6 ">EXTRACURRICULAR ACTIVITES</h6>
          <p className=' text-[12px]  text-gray-900'>{resumeData.activities}</p>
        </div>
      </div>
    </Card>
  );
};

export default ResumePreview;
