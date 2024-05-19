import React from 'react'
import { NavbarSimple } from '../components/Navbar'
import { SimpleFooter } from './../components/Footer';
import { Card, CardFooter, Typography, Button, CardBody, CardHeader } from '@material-tailwind/react';
import { CarouselCustom } from '../components/CarouselCard';
import { Link } from 'react-router-dom';

const HomePage = () => {
  return (
    <div className='grid grid-cols-12 h-screen overflow-auto'>
      <NavbarSimple/>
      <div className='col-span-12 sm:h-auto flex flex-col md:flex-row items-center md:items-start justify-center md:justify-around gap-y-10 py-8'>
        <Card className='w-[75%] md:w-[60%] lg:w-[40%] py-20 rounded-none shadow-none'>
          <CardHeader  className='shadow-none rounded-none'>
            <Typography className='text-3xl font-semibold sm:text-[40px] my-4 leading-10'>Create a resume quickly and efficiently and for free</Typography>
          </CardHeader>
          <CardBody>
            <Typography variant='paragraph' className='text-sm'>
              In 2024, to get a job in any company, it is required to submit a resume and the form and design of the resume is required to be as minimalistic as possible, this website provides you with a resume template that meets these requirements and you can easily create your resume and download it in pdf format.
            </Typography>
          </CardBody>
          <CardFooter>
            <Link to="/create-resume">
              <Button variant="text" className="flex items-center text-white gap-2 bg-gradient-to-r from-teal-500 hover:scale-105">
                    Get Started{" "}
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
          </CardFooter>
        </Card>
        <CarouselCustom/>
      </div>
      <div className='col-span-12 md:col-span-10 md:col-start-2 sm:col-start-2 mt-5'>
        <SimpleFooter/> 
      </div>
    </div>
  )
}

export default HomePage