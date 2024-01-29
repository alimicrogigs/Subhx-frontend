"use client";
import React, { useEffect } from "react";
import { useRouter } from "next/navigation";
import BottomBar from "@/app/components/BottomBar/BottomBar";


const Page = () => {
  const router = useRouter();

  useEffect(() => {
    // Redirect to dashboard/exchange
    router.push("/dashboard/exchange");
  }, []); // Empty dependency array ensures this effect runs once on component mount

  // Placeholder content while the redirection happens
  return <div>Redirecting...</div>;
};

export default Page;
