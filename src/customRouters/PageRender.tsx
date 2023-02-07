import React from "react";
import { useParams } from "react-router-dom";
import NotFound from "../components/Golobal/NotFound";

const generaPage = (pageName: string) => {
  const component = () => require(`../pages/${pageName}`).default;
  try {
    return React.createElement(component());
  } catch (error: any) {
    return <NotFound />;
  }
};

function PageRender() {
  const { page, id } = useParams();
  let pageName = "";
  if (id) {
    pageName = `${page}/[id]`;
  } else {
    pageName = `${page}`;
  }

  return generaPage(pageName);
}

export default PageRender;
