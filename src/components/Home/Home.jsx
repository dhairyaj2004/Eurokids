import { Link } from "react-router-dom";
import { Typewriter } from "react-simple-typewriter";
import { ImagesSlider } from "../ui/images-slider";
import PlayImage from "../../../Images/play.jpg";
import NurseryImage from "../../../Images/nursery.jpg";
import EuroJuniorImage from "../../../Images/eurojuniors.jpg";
import EuroSeniorImage from "../../../Images/euroseniors.jpg";
import Reviewsec from "../Reviewsec/Reviewsec";
export default function Home() {
  const typeWriter = [
    " Bright Minds",
    " Strong Futures",
    " Creative Sols",
    " Kind Hearts",
  ];
  const images = [
    "/images/hero1.jpg",
    "/images/hero1.jpg",
    "/images/hero1.jpg",
  ];
  const cards = [
    {
      title: "Creative Learning",
      description:
        "Interactive and fun activities to engage kids in early education.",
      icon: "🎨",
    },
    {
      title: "Experienced Staff",
      description:
        "Our educators are trained professionals with years of experience.",
      icon: "👩‍🏫",
    },
    {
      title: "Safe Environment",
      description: "We ensure a safe and secure space for your child to grow.",
      icon: "🛡️",
    },
    {
      title: "Play & Learn",
      description: "Balanced mix of playtime and learning activities.",
      icon: "🧸",
    },
  ];
  const programs = [
    {
      title: "PlayGroup",
      subtitle: "2-3 Years",
      description:
        "Discovery and exploration, language development, new-age skills, and shaping scientific mindset.",
      image: PlayImage,
    },
    {
      title: "Nursery",
      subtitle: "3-4 Years",
      description:
        "Enhancing interaction, cultivating creativity and improving imagination through art and music.",
      image: NurseryImage,
    },
    {
      title: "EuroJunior",
      subtitle: "4-5 Years",
      description: "Age-appropriate learning and educational tools suited for individual pace.",
      image: EuroJuniorImage,
    },
    {
      title: "EuroSenior",
      subtitle: "5-6 Years",
      description: "Developing vocabulary, attention span, reading and writing skills with innovative methods and preparing for primary school.",
      image: EuroSeniorImage,
    },
  ];
  return (
    <div className="mx-auto w-full max-w-7xl bg-gray-50">
      <ImagesSlider
        images={images}
        autoplay={true}
        overlay={true}
        overlayClassName="bg-black bg-opacity-50"
      >
        <aside className="relative h-[100vh] w-full overflow-hidden text-white">
          <div className="absolute inset-0 bg-black bg-opacity-50 z-10" />

          <div className="relative z-20 flex items-center justify-center h-full px-4 sm:px-6 lg:px-8">
            <div className="text-center sm:text-right sm:ml-auto max-w-2xl space-y-6">
              <p className="text-4xl sm:text-5xl font-semibold text-white">
                Building
                <span className="text-orange-400">
                  <Typewriter
                    words={typeWriter}
                    loop={true}
                    cursor
                    cursorStyle="_"
                    typeSpeed={70}
                    deleteSpeed={50}
                    delaySpeed={1000}
                  />{" "}
                </span>
              </p>

              <Link
                to="/"
                className="inline-flex items-center px-6 py-3 text-white font-semibold bg-orange-600 rounded-lg hover:bg-orange-700 transition-all"
              >
                <svg
                  viewBox="0 0 24 24"
                  className="mr-2"
                  fill="white"
                  width="24"
                  height="24"
                  xmlns="http://www.w3.org/2000/svg"
                  fillRule="evenodd"
                  clipRule="evenodd"
                >
                  <path d="M12 2a5 5 0 0 1 5 5 5 5 0 0 1-5 5 5 5 0 0 1-5-5 5 5 0 0 1 5-5zm0 12c4 0 8 2 8 6v2H4v-2c0-4 4-6 8-6z" />
                </svg>
                Enroll now
              </Link>
            </div>
          </div>
        </aside>
      </ImagesSlider>
<div className="grid  place-items-center sm:mt-20">
        <section className="px-6 py-12 bg-gray-50">
          <div className="max-w-6xl mx-auto text-center mb-12">
            <h2 className="text-3xl font-bold text-blue-700 sm:text-4xl">
              Our Pre-school Programs
            </h2>
            <p className="mt-4 text-gray-600">
              With age-appropriate stimulation, and the right balance of learning and fun, we encourage their curiosity and fuel their creative side.
            </p>
          </div>

          <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
            {programs.map((card, index) => (
              <div
                key={index}
                className="bg-white rounded-2xl shadow-md hover:shadow-xl transition-all duration-300 p-6 text-center"
              >
                <img src={card.image} alt={card.title} className="w-full h-48 object-cover" />
                <h3 className="text-xl font-semibold text-blue-700">
                  {card.title}
                </h3>
                <h3 className="text-xl font-semibold text-blue-700">
                  {card.subtitle}
                </h3>
                <p className="mt-2 text-gray-600">{card.description}</p>
              </div>
            ))}
          </div>
        </section>
      </div>
      <div className="grid  place-items-center sm:mt-20">
        <section className="px-6 py-12 bg-gray-50">
          <div className="max-w-6xl mx-auto text-center mb-12">
            <h2 className="text-3xl font-bold text-blue-700 sm:text-4xl">
              Why Choose EuroKids?
            </h2>
            <p className="mt-4 text-gray-600">
              Our unique approach to preschool education ensures every child
              gets the best start.
            </p>
          </div>

          <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
            {cards.map((card, index) => (
              <div
                key={index}
                className="bg-white rounded-2xl shadow-md hover:shadow-xl transition-all duration-300 p-6 text-center"
              >
                <div className="text-4xl mb-4">{card.icon}</div>
                <h3 className="text-xl font-semibold text-blue-700">
                  {card.title}
                </h3>
                <p className="mt-2 text-gray-600">{card.description}</p>
              </div>
            ))}
          </div>
        </section>
      </div>
          <Reviewsec />
    </div>
  );
}
