import Image from "next/image";
import TestimonialImage from "@/public/images/testimonial.jpg";
import LogoImage from "@/public/images/logo.png";
export default function Testimonials() {
  return (
    <section className="relative">
      {/* Illustration behind content */}
      <div
        className="absolute left-1/2 transform -translate-x-1/2 bottom-0 pointer-events-none -mb-32"
        aria-hidden="true"
      >
        <svg
          width="1760"
          height="518"
          viewBox="0 0 1760 518"
          xmlns="http://www.w3.org/2000/svg"
        >
          <defs>
            <linearGradient
              x1="50%"
              y1="0%"
              x2="50%"
              y2="100%"
              id="illustration-02"
            >
              <stop stopColor="#FFF" offset="0%" />
              <stop stopColor="#EAEAEA" offset="77.402%" />
              <stop stopColor="#DFDFDF" offset="100%" />
            </linearGradient>
          </defs>
          <g
            transform="translate(0 -3)"
            fill="url(#illustration-02)"
            fillRule="evenodd"
          >
            <circle cx="1630" cy="128" r="128" />
            <circle cx="178" cy="481" r="40" />
          </g>
        </svg>
      </div>

      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <div className="py-12 md:py-20">
          {/* Section header */}
          <div className="text-center pb-12 md:pb-16">
            <h1
              className="text-3xl md:text-4xl font-extrabold leading-tighter tracking-tighter mb-4"
              data-aos="zoom-y-out"
            >
              Notre Solution <br></br>{" "}
            </h1>
          </div>
          {/* Testimonials */}
          <div className="max-w-3xl mx-auto mt-20" data-aos="zoom-y-out">
            <div className="relative flex items-start border-2 border-gray-200 rounded bg-white">
              {/* Testimonial */}

              <div className="text-center px-12 py-8 pt-20 mx-4 md:mx-0">
                <div className="absolute top-0 -mt-8 left-1/2 transform -translate-x-1/2">
                  <Image
                    className="relative rounded-full"
                    src={LogoImage}
                    width={150}
                    height={150}
                    alt="Testimonial 01"
                  />
                </div>
                <blockquote className="text-xl font-medium mb-4">
                  Plongez dans l'univers captivant de l'histoire de l'art grâce
                  à notre chatbot IA sophistiqué. Que vous soyez un étudiant en
                  art passionné, un amateur curieux ou un professionnel du
                  domaine, notre chatbot est conçu pour répondre à toutes vos
                  questions et approfondir votre compréhension des œuvres
                  artistiques.
                </blockquote>
                <cite className="block font-bold text-lg not-italic mb-1">
                  Art IA
                </cite>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
