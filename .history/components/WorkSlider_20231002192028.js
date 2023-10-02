+const workSlides = {
  slides: [
    {
      images: [
        { title: 'This Portfolio',
        path: '/portfolio.png',
        repo: "https://github.com/AchourMaryem/My-personal-portfolio",
        description: (
          <div>
            <p>
              Design and development of a Portfolio site, showing my expertise in web development
            </p>
            <p>
              <strong>Technologies:</strong> Laravel
            </p>
          </div>
        ),         
        },
        {
          title: 'ESS APP',
          path: '/ESSAPP.png',
          repo: "/",
          description: "Development of the mobile app for ESS football team ",
        },
        {
          title: 'Yellow Pages',
          path: '/paj.png',
          repo: "https://github.com/AchourMaryem/Yellow-Pages-With-MERN-STACK",
          description: "Web-based platform that allows users to search and find local businesses and services quickly and efficiently.",
        },
        {
          title: 'Tunisian Modern Newspaper',
          path: '/tunisian.png',
          repo: "https://www.figma.com/file/zpiX1L6gyLvaqRgXW4t9RA/Untitled?type=design&node-id=0-1&mode=design",
        },
      ],
    },
 //   {
    //   images: [
    //     {
    //       title: 'title',
    //       path: '/thumb4.jpg',
    //       repo: "",
    //     },
    //     {
    //       title: 'title',
    //       path: '/thumb1.jpg',
    //       repo: "",
    //     },
    //     {
    //       title: 'title',
    //       path: '/thumb2.jpg',
    //       repo: "",
    //     },
    //     {
    //       title: 'title',
    //       path: '/thumb3.jpg',
    //       repo: "",
    //     },
    //   ],
    // },
  ],
};
import Image from 'next/image';
import Link from 'next/link';
import { Swiper , SwiperSlide} from 'swiper/react';
import 'swiper/css';
import 'swiper/css/free-mode';
import 'swiper/css/pagination';
import { Pagination } from "swiper";
import { BsArrowRight } from 'react-icons/bs';

const WorkSlider = () => {
  return (
    <Swiper 
    spaceBetween={10}
    pagination={{
      clickable: true,
    }}
    modules={[Pagination]}
    className='h-[280px] sm:h-[480px]'
    >
   {workSlides.slides.map((slide, index) => {
				return (
					<SwiperSlide key={index}>
						<div className="grid grid-cols-2 grid-rows-2 gap-4 cursor-pointer">
						{slide.images.map((image, index) => {
              return (
                <Link
                passHref