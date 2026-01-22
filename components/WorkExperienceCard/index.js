import React, { useEffect, useState } from "react";
import { useTheme } from "next-themes";

const WorkExperienceCard = ({ title, company, description }) => {
  const { theme } = useTheme();
  const [mounted, setMounted] = useState();

  useEffect(() => {
    setMounted(true);
  }, []);
  return (
    <div
      className={`w-full p-2 mob:p-4 rounded-lg transition-all ease-out duration-300 ${
        mounted && theme === "dark" ? "hover:bg-slate-800" : "hover:bg-slate-50"
      } hover:scale-105 link`}
    >
      <h1 className="text-3xl">{title ? title : "Heading"}</h1>
      <h2 className="text-xl mt-2 opacity-60">{company ? company : "Company"}</h2>
      <p className="mt-5 opacity-40 text-xl">
        {description
          ? description
          : "[Brief description placeholder]"}
      </p>
    </div>
  );
};

export default WorkExperienceCard;
