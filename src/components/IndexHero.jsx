import React, { useState } from 'react'
import IndexCategory from './IndexCategory'
import { Link } from 'react-router-dom';
import IndexCarousel from './IndexCarousel'

const categories = [
  {
    icon: "/icons/iconMarketing.svg",
    iconHover: "/icons/iconMarketingHover.png",
    title: "Marketing & Communication",
    jobs: "12 Jobs Available"
  },
  {
    icon: "/icons/iconUI.png",
    iconHover: "/icons/iconUIHover.svg",
    title: "UI/UX Design",
    jobs: "12 Jobs Available"
  },
  {
    icon: "/icons/iconFinance.svg",
    iconHover: "/icons/iconFinanceHover.png",
    title: "Finance Management",
    jobs: "12 Jobs Available"
  },
  {
    icon: "/icons/iconWeb.svg",
    iconHover: "/icons/iconWebHover.png",
    title: "Web Development",
    jobs: "12 Jobs Available"
  },
  {
    icon: "/icons/iconProj.svg",
    iconHover: "/icons/iconProjHover.png",
    title: "Project Management",
    jobs: "12 Jobs Available"
  },
  {
    icon: "/icons/iconBusiness.svg",
    iconHover: "/icons/iconBusinessHover.png",
    title: "Business & Consulting",
    jobs: "12 Jobs Available"
  },
  {
    icon: "/icons/iconGraphic.svg",
    iconHover: "/icons/iconGraphicHover.png",
    title: "Graphic Designing",
    jobs: "12 Jobs Available"
  },
  {
    icon: "/icons/iconVideo.svg",
    iconHover: "/icons/iconVideoHover.png",
    title: "Video Editor",
    jobs: "12 Jobs Available"
  },
]

const IndexHero = () => {
  return (
    <div >
      <div className='bg-heroPattern bg-cover'>
        <div className='flex flex-col h-full justify-center py-32'>
          <div className='flex flex-col items-center'>
            <div className='font-poppins font-bold text-[5rem] text-center px-[20rem] leading-tight'>
              Find the internship of your <span className='text-headingBlue'>Dreams</span>
            </div>
            <div className='font-poppins font-thin text-center px-[30rem] mt-8'>
              Discover your ideal internship and work with professionals. Explore opportunities that fit your goals today!
            </div>
            <div className='mt-14'>
              <button className="font-poppins font-bold text-xl px-14 py-3 border bg-buttonBlue border-buttonBlue rounded-full text-white tracking-wide">
                <Link to="/Registration">Join Now</Link>
              </button>
            </div>
          </div>
        </div>
        <div>
          <div> {/* HEADING */}
            <div className='font-poppins font-medium text-[1.4rem] text-headingBlue text-center leading-tight mt-28'>
              Choose Categories
            </div>
            <div className='font-poppins font-bold text-[2.7rem] text-center leading-tight mt-2'>
              Internship Opportunities
            </div>
          </div>
          <div> {/* CATEGORIES MAP */}
            <div className='flex flex-wrap mt-16 font-poppins px-28 justify-center'>
              {
                categories.map((category, index) => {
                  return (
                    <IndexCategory category={category} key={index} />
                  )
                })
              }
            </div>
          </div>
        </div>
      </div>

      {/* CAROUSEL */}
      <div>
        <div className="2xl:container 2xl:mx-auto 2xl:px-0 py-3 md:px-[7rem] px-5">
          <IndexCarousel />
        </div>
      </div>
    </div>
  )
}

export default IndexHero