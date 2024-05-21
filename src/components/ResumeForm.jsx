// src/components/ResumeForm.js
import React from 'react';
import { useResume } from '../context/resumeContext';
import {
  Card,
  CardHeader,
  CardBody,
  Input,
  Typography,
  Textarea,
  Button,
  Breadcrumbs,
  CardFooter
} from "@material-tailwind/react";
import { removeAll } from '../utils/localStorage';
import { AlertTost } from './Alert';
import { useNavigate } from 'react-router-dom';

const ResumeForm = () => {

  const { resumeData, setResumeData, errors, nextPage } = useResume();
  const data = resumeData;
  const navigate = useNavigate();
  const handleChange = (e) => {
    const { name, value } = e.target;
    setResumeData({ ...data, [name]: value });
  };

  
  return (
    <Card id="style-4" className="w-[90%] lg:w-[60%]  h-screen p-8 rounded-none overflow-y-auto">
      <CardHeader
        color="gray"
        floated={false}
        shadow={false}
        className="m-0 flex px-4 py-8 items-center justify-start gap-x-20 bg-gradient-to-r from-indigo-600 to-cyan-400"
      >
        <Typography variant="h6" color="white" className='text-center w-full'>
          Create resume very easy
        </Typography>
      </CardHeader>
      <CardBody>
        <form className="mt-12 grid grid-cols-1 lg:grid-cols-2 gap-4">
          <div className='col-span-2 grid sm:grid-cols-2 gap-x-8 gap-y-4'>
            <div>
              <Typography
                variant="h6"
                color="blue-gray"
                className="mb-2 font-medium"
              >
                FullName
              </Typography>
              <Input
                className=" !border-t-blue-gray-200 focus:!border-t-gray-600"
                type="text"
                name="fullname"
                placeholder="Enter yout full name"
                value={data.fullname || ''}
                onChange={handleChange}
              />
              {errors.fullname && <p className="text-red-600">*{errors.fullname}</p>}
            </div>
            <div>
              <Typography
                variant="h6"
                color="blue-gray"
                className="mb-2 font-medium"
              >
                Work type
              </Typography>
              <Input
                className=" !border-t-blue-gray-200 focus:!border-t-gray-600"
                type="text"
                name="job"
                placeholder="Enter yout work type"
                value={data.job || ''}
                onChange={handleChange}
              />
              {errors.job && <p className="text-red-600">*{errors.job}</p>}
            </div>
            <div>
              <Typography
                variant="h6"
                color="blue-gray"
                className="mb-2 font-medium"
              >
              Phone Number
              </Typography>
              <Input
                className=" !border-t-blue-gray-200 focus:!border-t-gray-900"
                type="text"
                name="phoneNumber"
                placeholder="Enter your phone number"
                value={data.phoneNumber || ''}
                onChange={handleChange}
              />
              {errors.phone && <p className="text-red-600">*{errors.phone}</p>}
            </div>
            <div>
              <Typography
                variant="h6"
                color="blue-gray"
                className="mb-2 font-medium"
              >
                Email
              </Typography>
              <Input
                className=" !border-t-blue-gray-200 focus:!border-t-gray-900"
                type="email"
                name="email"
                
                placeholder="Enter your email address"
                value={data.email || ''}
                onChange={handleChange}
              />
              {errors.email && <p className="text-red-600">*{errors.email}</p>}
            </div>
            <div>
              <Typography
                variant="h6"
                color="blue-gray"
                className="mb-2 font-medium"
              >
                Full address
              </Typography>
              <Input
                className=" !border-t-blue-gray-200 focus:!border-t-gray-900"
                type="text"
                name="address"
                
                placeholder="Enter your full address"
                value={data.address || ''}
                onChange={handleChange}
              />
              {errors.address && <p className="text-red-600">*{errors.address}</p>}
            </div>
            <div>
              <Typography
                variant="h6"
                color="blue-gray"
                className="mb-2 font-medium"
              >
                ZIP code
              </Typography>
              <Input
                className=" !border-t-blue-gray-200 focus:!border-t-gray-900"
                type="number"
                name="zipcode"
                placeholder="Enter your region zip code"
                value={data.zipcode || ''}
                onChange={handleChange}
              />
            </div>
            <div>
              <Typography
                variant="h6"
                color="blue-gray"
                className="mb-2 font-medium"
              >
                Your Porfolio website Link
              </Typography>
              <Input
                className=" !border-t-blue-gray-200 focus:!border-t-gray-900"
                type="text"
                name="portfolio"
                placeholder="Enter your portfolio website link"
                value={data.portfolio || ''}
                onChange={handleChange}
              />
            </div>
          </div>
          <div className="w-full col-span-2 flex flex-col gap-y-4 mt-5 py-5 border-t-[1px] border-b-[1px] border-gray-300">
            <div>
              <Typography
                variant="h6"
                color="blue-gray"
                className="mb-2 font-medium"
              >
                What you offer to the company
              </Typography>
              <Textarea
                name="offer"
                placeholder="communicate your professional skills that will attract the attention of employers!"
                value={data.offer || ''}
                onChange={handleChange}
              />
            </div>
            <div>
              <Typography
                variant="h6"
                color="blue-gray"
                className="mb-2 font-medium"
              >
                What skills do you have
              </Typography>
              <Textarea
                name="skills"
                placeholder="If the company were to hire you, what skills would you offer the company?"
                value={data.skills || ''}
                onChange={handleChange}
              />
            </div>
            <div>
              <Typography
                variant="h6"
                color="blue-gray"
                className="mb-2 font-medium"
              >
                Professional experience
              </Typography>
              <Textarea
                name="experience"
                placeholder="In order to increase your experience, please provide information about the work you have done, the position and when you worked"
                value={data.experience || ''}
                onChange={handleChange}
              />
              {errors.experience && <p className="text-red-600">*{errors.experience}</p>}

              <Typography>Company Name & experience date</Typography>
              
              <div className='flex flex-col sm:flex-row w-full gap-4'>
                <Input
                  className=" !border-t-blue-gray-200 focus:!border-t-gray-900"
                  type="text"
                  name="company"
                  value={data.company || ''}
                  onChange={handleChange}
                />
                <Input
                  className=" !border-t-blue-gray-200 focus:!border-t-gray-900 "
                  type="date"
                  name="date"
                  value={data.date || ''}
                  onChange={handleChange}
              />
              </div>
            </div>
            <div>
              <Typography
                variant="h6"
                color="blue-gray"
                className="mb-2 font-medium"
              >
                What additional skills do you have
              </Typography>
              
            <div className='mt-2'>
              <Textarea 
                name="activities"
                placeholder="What additional skills do you have, for example: what languages can you speak?"
                value={data.activities || ''}
                onChange={handleChange}
              />
            </div>
            </div>
            <div>
              <Typography
                variant="h6"
                color="blue-gray"
                className="mb-2 font-medium"
              >
              Add one more professional experience
              </Typography>
              <Textarea
                name="experienceNow"
                placeholder="If you are still working, please provide information about your job duties and when you started"
                value={data.experienceNow || ''}
                onChange={handleChange}
              />
                <Typography>Company Name & experience date</Typography>
              <div className='flex flex-col sm:flex-row gap-4'>
              <Input
                  className=" !border-t-blue-gray-200 focus:!border-t-gray-900"
                  type="text"
                  name="companyNow"
                  value={data.companyNow || ''}
                  onChange={handleChange}
                />
                <Input
                  className=" !border-t-blue-gray-200 focus:!border-t-gray-900"
                  type="date"
                  name="dateNow"
                  value={data.dateNow || ''}
                  onChange={handleChange}
                />
                
              </div>
              
            </div>
            <div>
              <Typography
                variant="h6"
                color="blue-gray"
                className="mb-2 font-medium"
              >
                Education & certificate
              </Typography>
              <Textarea 
                name="education"
                placeholder="Where did you study and what certificate or diploma level do you have?"
                value={data.education || ''}
                onChange={handleChange}
              />
              
            <div className='mt-2 w-1/2'>
              <Typography variant="h6"
                color="blue-gray"
                className="mb-2 font-medium">
                What is your degree?
              </Typography>
              <Input
                  className=" !border-t-blue-gray-200 focus:!border-t-gray-900"
                  type="text"
                  name="educationLevel"
                  placeholder="Enter your level"
                  value={data.educationLevel || ''}
                  onChange={handleChange}
                />
            </div>
            </div>
          </div>
        </form>
      </CardBody>
      <CardFooter>
        <AlertTost children={ 'Your resume is ready, check it once, if there are no errors in the data entry, click on the save and view button on the left side of the page and download,'}/>
          <footer className="flex w-full flex-row flex-wrap items-center justify-center     gap-y-6 gap-x-12 bg-white mt-4  p-6 text-center md:justify-between">
          <div className='flex items-center'>
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
              &copy;<a href="/" target='_blank'>AbouTME.com</a>
            </Typography>
            </Breadcrumbs>
          </div>
          <div className='flex items-center gap-x-4'>
            <Button onClick={nextPage} variant="text" className="flex items-center gap-2 bg-gradient-to-r from-teal-600 to-blue-100 text-white">
              Save & view{" "}
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
            <Button type="button" className=" bg-red-200 hover:bg-red-500" onClick={() => { navigate('/create-resume'),removeAll()}}>remove all</Button>
          </div>
          </footer>
      </CardFooter>
    </Card>
  );
 
}

export default ResumeForm;

