"use client";

import NationalHomeToggleArea from "@/components/National/NationalHomeToggle";
import ResourceRequestManagement from "@/components/National/NationalResourceManagement";
import ProfileComponent from "@/components/Profile";

export default function Profile() {
  return (
    <>
      <ProfileComponent />
      <NationalHomeToggleArea />
      <ResourceRequestManagement /> 
    </>
  );
}
