import React from "react";

const HomeDupla = () => {
  return (
    <div className="home-info-container">
      <h2 className="title-h2">Dupla Docente</h2>
      <div className="flex flex-col items-start w-full">
        <p className="mt-2">
          <strong>Tutora:</strong> Catalina Nocera - {" "}
          <a href="mailto:maria.nocera@bue.edu.ar " className="text-blue-500 underline">
            [maria.nocera@bue.edu.ar ]
          </a>
        </p>
        <p>
          <strong>Instructor: </strong>Juan Pablo Rigotti - {" "}
          <a
            href="mailto:[juan.rigotti@bue.edu.ar]"
            className="text-blue-500 underline"
          >
            [juan.rigotti@bue.edu.ar]
          </a>
        </p>
      </div>
    </div>
  );
};

export default HomeDupla;
