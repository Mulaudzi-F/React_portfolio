import React from "react";

export default function Aboutme() {
  return (
    <section className="About__me">
      <div>
        <h1 className="text-center text-3xl">About Me</h1>
      </div>
      <div className="flex justify-center items-center ">
        <div className="px-3    w-68 grow-0 shrink-0 basis-2/5 ">
          <img
            src="./images/mulaudzifhatuwani2.png "
            className=" h-full w-full object-contain rounded-lg  "
          />
        </div>
        <p className="about__content  grow-0 shrink-0 basis-3/5  px-2">
          Welcome to my digital world of innovation and creativity! I am
          thrilled to introduce you to my journey as an aspiring software
          developer. Within these digital realms, you'll discover the
          culmination of my passion for coding, problem-solving, and turning
          ideas into elegant solutions. As an entry-level software developer,
          I'm on an exciting quest to explore the endless possibilities of
          technology. This portfolio is a testament to my dedication and
          commitment to honing my skills and pushing the boundaries of what's
          possible in the world of software development.
          <span className="hidden">
            You'll find a collection of projects that showcase my determination
            to create efficient, user-friendly, and impactful software. Each
            line of code represents countless hours of learning,
            problem-solving, and relentless pursuit of excellence. Join me as I
            continue to embark on this exhilarating journey of growth and
            innovation. Together, let's shape the future through the power of
            code. Thank you for visiting, and I invite you to explore the
            possibilities that await within these virtual walls.
          </span>{" "}
          <button>Read More</button>
        </p>
      </div>
      <div>
        <h3>
          <span>Let's code the future together!</span>
        </h3>
      </div>
    </section>
  );
}
