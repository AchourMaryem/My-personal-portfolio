const workSlides = {
  slides: [
    {
      images: [
        {
          title: 'BystroSync APP',
          path: '/LoginAdmin.png',
          repo: "/",
          description: (<p className='font-normal text-white'>Developed a cross-platform mobile app for online restaurant reservation and food pre-ordering. <br/>Technologies:Laravel</p>)

        },
        { title: 'This Portfolio',
        path: '/portfolio.png',
        repo: "https://github.com/AchourMaryem/My-personal-portfolio",
        description: (<p className='font-normal text-white'>Design and development of a Portfolio site, showing my expertise in web development.<br/>Technologies: Next JS & Tailwind CSS </p>)
                   
        },
        {
          title: 'ESS APP',
          path: '/ESSAPP.png',
          repo: "/",
          description: (<p className='font-normal text-white'>Development of the mobile app for ESS football team <br/>Technologies:Laravel</p>)

        },
        {
          title: 'Yellow Pages',
          path: '/paj.png',
          repo: "https://github.com/AchourMaryem/Yellow-Pages-With-MERN-STACK",
          description: (<p className='font-normal text-white'>Web-based platform that allows users to search and find local  services quickly and efficiently.<br/> Technologies: ReactJs, NodeJs, ExpressJS & MongoDB </p>)

        },
      
       
      ],
    },
   {
       images: [
        {
          title: 'Tunisian Modern Newspaper',
          path: '/tunisian.png',
          repo: "https://www.figma.com/file/zpiX1L6gyLvaqRgXW4t9RA/Untitled?type=design&node-id=0-1&mode=design",
          description: (<p className='font-normal text-white'>Participation to development of the front-end website to display news, blogs and podcasts <br/> Technologies: ReactJs </p>)

        },
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
      ],
     },
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
						<div className="grid xs:grid-cols-1 xs:grid-rows-4 sm:grid-cols-2 sm:grid-rows-2 gap-4 cursor-pointer pb-96 h-screen md:h-auto scroll-auto overflow-y-auto">
						{slide.images.map((image, index) => {
              return (
                <Link
                passHref
                legacyBehavior

                href={image.repo}
                key={index}
                className="relative rounded-lg overflow-hidden flex items-center justify-center group">
                <a
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="Image">
                  <div className="flex items-center justify-center relative overflow-hidden group">
                    <Image
                    
                      alt=""
                      src={image.path}
                      height={300}
                      width={500}
                    />
                   <div className="text-white absolute top-2 left-2 bg-black bg-opacity-70 p-2 rounded-md">{image.title}</div>

                    <div className="absolute inset-0 bg-gradient-to-l from-transparent via-[#bd229e] to-[#4a22bd] opacity-0 group-hover:opacity-80 transition-all duration-700"></div>
                    <div className="absolute hidden md:block group-hover:block bottom-12 md:bottom-0 translate-y-full group-hover:-translate-y-10 group-hover:xl:-translate-y-20 transition-all duration-300">
                      <div className="flex items-center gap-x-2 text-[13px] tracking-[0.2em]">
                        <div className="delay-100">Consulter</div>
                        <div className="translate-y-[500%] group-hover:translate-y-0 transition-all duration-300 delay-150">
                          Code
                        </div>
                        <div className="text-xl translate-y-[500%] group-hover:translate-y-0 transition-all duration-300 delay-200">
                          <BsArrowRight />
                        </div>
                      </div>
                      
                      <div className="text-white absolute w-[380px]  top-4 -left-28 ">{image.description}</div>

                    </div>
                  </div>
                </a>
              </Link>
            );
          })}
        </div>
					</SwiperSlide>
				);
			})}
		</Swiper>
	);
};
export default WorkSlider;