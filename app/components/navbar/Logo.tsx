"use client";

import Image from "next/image";
import { useRouter } from "next/navigation";

const Logo = () => {
  const router = useRouter();

  return (
    <div
      onClick={() => router.push("/")}
      className='flex items-center cursor-pointer'
    >
      <Image
        className='rounded-full '
        height='40'
        width='40'
        alt='Logo'
        src={"/images/logo.png"}
      />

      <span className='text-gray-600 font-light text-2xl ml-1'>Venue</span>
    </div>
  );
};

export default Logo;
