'use client';
import Image from 'next/image';
import { Button } from './ui/Button';
import banner from '../../public/images/banner.png'

export default function HeroSection() {
  return (
    <main className="flex flex-col-reverse lg:flex-row items-start justify-between px-6 sm:px-8 lg:px-24 mt-8">
      <div className="w-full lg:w-1/2 lg:text-left">
        <h2 className="text-3xl lg:text-4xl text-center sm:text-left font-bold mb-4">
          Want to Turn Social Media Into a Profitable Career?
        </h2>
        <p className="text-3xl text-center sm:text-left text-cyan-300 text-shadow-lg text-shadow-pink-700 font-semibold mb-6">
          Discover your way to success with Fametonic:
        </p>
        <ul className="space-y-3 text-sm sm:text-base list-none">
		  <li className="relative before:content-['✨'] before:absolute before:left-0 before:top-0.5 before:text-base before:leading-none pl-6">
			Start growing your influence right away—no waiting required!
		  </li>
		  <li className="relative before:content-['✨'] before:absolute before:left-0 before:top-0.5 before:text-base before:leading-none pl-6">
			Create viral TikToks and Reels step by step with easy-to-follow lessons
		  </li>
		  <li className="relative before:content-['✨'] before:absolute before:left-0 before:top-0.5 before:text-base before:leading-none pl-6">
			Use a Personal AI Worker to boost your content
		  </li>
		  <li className="relative before:content-['✨'] before:absolute before:left-0 before:top-0.5 before:text-base before:leading-none pl-6">
			Learn from expert-led courses designed for aspiring influencers
		  </li>
		</ul>

        <div className="block lg:hidden text-center px-4">
		  <p className="text-[12px] text-gray-500 mt-4">
		    {`By clicking "Get Started", you agree with Terms and Conditions, Privacy Policy, Subscription Terms`}
		  </p>
		  <p className="text-xs text-gray-500 mt-4">
			Fametonic 2025 © All Rights Reserved.
		  </p>
		</div>

		<div className="flex justify-center lg:justify-start">
		  <Button className="w-full sm:w-76 mt-8 bg-pink-600 hover:bg-pink-700 text-xl text-white px-6 py-3 rounded-full shadow-md shadow-cyan-400">
		    GET STARTED
		    <svg
			  className="w-6 h-6 text-white ml-2"
			  fill="none"
			  stroke="currentColor"
			  strokeWidth="2"
			  viewBox="0 0 24 24"
		    >
		      <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
		    </svg>
		  </Button>
		</div>

		<p className="block lg:hidden text-center text-xs mt-2 mb-10 sm:mb-0">
		  1-minute quiz for personalized insights
		</p>

		<div className="hidden lg:block mt-4">
		  <p className="text-xs sm:ml-10">1-minute quiz for personalized insights</p>
		  <p className="text-[12px] text-gray-500 mt-4">
		    {`By clicking "Get Started", you agree with Terms and Conditions, Privacy Policy, Subscription Terms`}
		  </p>
		  <p className="text-xs text-gray-500 mt-4">
		    Fametonic 2025 © All Rights Reserved.
		  </p>
		</div>
      </div>

      <div className="w-full lg:w-1/2 flex justify-center">
        <Image
          src={banner}
          alt="Phone App UI"
          width={580}
          height={640}
          className="rounded-xl shadow-xl"
        />
      </div>
    </main>
  );
}
