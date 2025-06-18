import React from 'react'
import Image from "next/image";
import profile_pic from "../assets/profile_pic.jpg"

const ProfilePic = () => {
  return (
     <>
    <Image
     src={profile_pic}
    width={400}
    height={400}
    priority
    className="rounded-full w-72 h-72 sm:w-80 sm:h-80 md:w-[400px] md:h-[400px] object-cover border-2"
    alt="Picture of the author"
  />
  </>
  
  )
}

export default ProfilePic