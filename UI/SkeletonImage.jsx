"use client";
import React, { useState } from "react";
import Image from "next/image";
 
const SkeletonImage = ( ) => {
 

  return (
    <div className="w-72 h-72 sm:w-80 sm:h-80 md:w-[400px] md:h-[400px] rounded-full bg-gray-700 animate-pulse" />
  );
};

export default SkeletonImage;