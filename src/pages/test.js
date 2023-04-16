import fs from "fs";
import { useState } from "react";
import Button from "@/components/ui/button";
import Switch from "@/components/ui/switch";

const Test = ({ breadcrumbs }) => {
  // state
  const [variant, setVariant] = useState("default");

  const variants = ["default", "primary", "secondary"];

  return (
    <div>
      <div>
        <p>aam</p>
      </div>
    </div>
  );
};

export default Test;

//+-- This outputs the correct breadcrumb structure
//+-- required for the sidebar navigation to be saved
//+-- in the data folder unti data fetching in the
//+-- layout component is implemented

export const getServerSideProps = async () => {
  // folders
  const folders = ["getting-started", "components", "utilities"];

  // breadcrumbs
  const breadcrumbs = folders.map((folder) => {
    return {
      // replace all '-' with ' '
      name: folder.replace(/-/g, " "),
      // get all files in folder
      crumbs: fs
        .readdirSync(`./src/data/documentation/${folder}`)
        .map((file) => {
          return {
            // replace mdx
            name: file.replace(".mdx", "").replace(/-/g, " "),
            // remove file extension
            href: `/documentation/${folder}/${file.replace(/\.[^/.]+$/, "")}`,
          };
        }),
    };
  });

  console.log(breadcrumbs);

  return {
    props: { breadcrumbs },
  };
};
