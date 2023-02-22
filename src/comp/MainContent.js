import React from "react";

const MainContent = ({ pageName, designer }) => {
  return (
    <div>
      <main>
        {pageName} <br /> Desigened by {designer}
      </main>
    </div>
  );
};

export default MainContent;
