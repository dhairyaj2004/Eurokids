"use client";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";

const testimonials = [
  {
    rating: "5",
    feedback:
      "An institution deeply valuing early childhood development. Each day is a joyful learning adventure, nurturing the whole child through play-based exploration that builds confidence and curiosity. The supportive environment for children, parents, and teachers fosters a strong team. Witnessing the children's growth and joy is incredibly rewarding, making EuroKids Waghodia Road a truly loving and enriching preschool.",
    name: "Chini Patel",
  },
  {
    rating: "4.8",
    feedback:
      "Delighted with EuroKids Waghodia Road! Caring, attentive staff ensure a safe and fun learning environment. The well-structured, play-based curriculum sparks creativity and curiosity. Spacious classrooms, engaging activities, and a focus on values are impressive. Excellent communication and safety measures provide peace of mind, making it a highly recommended nurturing preschool.",
    name: "Raj Desai",
  },
  {
    rating: "4.5",
    feedback:
      "A heartfelt thank you to the entire EuroKids Waghodia Road team for their nurturing environment, excellent education, and dedicated teachers. My daughter Advika absolutely loves school! We're only leaving due to relocation, otherwise, we'd eagerly continue. The creative teachers' extra efforts make every activity enjoyable, and the well-planned monthly schedules keep parents informed.",
    name: "Komal Patil",
  },
  {
    rating: "4.9",
    feedback:
      "We have enrolled my son in Eurokids since Nursery class and so far our experience is very good with overall progress, he is changed a lot in last 2 years and we would like to thank you entire Staff especially teachers who is trying to make my son better everyday. Thank you once again for all the efforts.",
    name: "Sagar Valand",
  },
  {
    rating: "5",
    feedback:
      "This is the best best preschool for kids. If you want your child to have total development be it food habit, communication,sharing and everything, you must enroll to them and you won’t regret a bit and especially the staff and the teachers are sooo loving that your child don’t want to have a holiday.",
    name: "Parikh Moksha",
  },
];

const Reviewsec = ({ autoplay = true, pauseOnHover = true, images = [] }) => {
  return (
    <section className="py-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mb-16 text-center">
          <span className="text-3xl font-bold text-blue-700 sm:text-4xl">
            Parent Speak
          </span>
          <h2 className="mt-4 text-gray-600">
            Happy parents count on <b>EuroKids - Waghodia Road</b>{" "}
          </h2>
        </div>

        <Swiper
          pagination={{ clickable: true }}
          modules={[Pagination, Autoplay]}
          autoplay={
            autoplay
              ? {
                  delay: 2000,
                  disableOnInteraction: false,
                  pauseOnMouseEnter: pauseOnHover,
                }
              : false
          }
          loop={true}
          spaceBetween={24}
          breakpoints={{
            640: { slidesPerView: 1 },
            768: { slidesPerView: 2 },
            1024: { slidesPerView: 3 },
          }}
          className="mySwiper pb-16"
        >
          {testimonials.map((t, index) => (
            <SwiperSlide key={index}>
              <div className="group bg-white border border-gray-300 rounded-xl p-6 transition-all duration-500 hover:border-indigo-600 hover:shadow-sm">
                <div>
                  <div className="flex items-center mb-7 gap-2 text-amber-500 transition-all duration-500">
                    <svg
                      className="w-5 h-5"
                      viewBox="0 0 18 17"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M8.10326 1.31699C8.47008 0.57374 9.52992 0.57374 9.89674 1.31699L11.7063 4.98347C11.8519 5.27862 12.1335 5.48319 12.4592 5.53051L16.5054 6.11846C17.3256 6.23765 17.6531 7.24562 17.0596 7.82416L14.1318 10.6781C13.8961 10.9079 13.7885 11.2389 13.8442 11.5632L14.5353 15.5931C14.6754 16.41 13.818 17.033 13.0844 16.6473L9.46534 14.7446C9.17402 14.5915 8.82598 14.5915 8.53466 14.7446L4.91562 16.6473C4.18199 17.033 3.32456 16.41 3.46467 15.5931L4.15585 11.5632C4.21148 11.2389 4.10393 10.9079 3.86825 10.6781L0.940384 7.82416C0.346867 7.24562 0.674378 6.23765 1.4946 6.11846L5.54081 5.53051C5.86652 5.48319 6.14808 5.27862 6.29374 4.98347L8.10326 1.31699Z"
                        fill="currentColor"
                      />
                    </svg>
                    <span className="text-base font-semibold text-indigo-600">
                      {t.rating}
                    </span>
                  </div>
                  <p className="text-base text-gray-600 leading-6 transition-all duration-500 pb-8 group-hover:text-gray-800">
                    {t.feedback}
                  </p>
                </div>
                <div className="flex items-center gap-5 pt-5 border-t border-gray-200">
                  {t.img ? (
                    <img
                      className="rounded-full h-10 w-10 object-cover"
                      src={t.img}
                      alt={t.name}
                    />
                  ) : (
                    <div className="rounded-full h-10 w-10 bg-indigo-100 flex items-center justify-center text-indigo-600 font-semibold">
                      {t.name.charAt(0)}
                    </div>
                  )}

                  <div>
                    <h5 className="text-gray-900 font-medium transition-all duration-500 mb-1">
                      {t.name}
                    </h5>
                    <span className="text-sm text-gray-500">{t.role}</span>
                  </div>
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
      <div className="mt-10 text-center">
  <a
    href="https://www.google.com/search?sxsrf=AHTn8zqq7LW2p1oUv839mf3a8HeeYxTx_g:1747464688433&si=APYL9bs7Hg2KMLB-4tSoTdxuOx8BdRvHbByC_AuVpNyh0x2Kzcan-57m6x2CTb8QbaxAzofImKbDFpfQn21RO6rqra9bh_MYqvKxl1eZIPnNmzdJiA4fAWDSoNaNV7d_3p0SvyWbST0z9j-Q6U0YDi8CV3bZuE7dbGq-rBqL5FKi9tvqHb_BXXg%3D&q=EuroKids+Pre-School+Waghodia+Road+,+Vadodara+Reviews://maps.app.goo.gl/your-place-id" 
    target="_blank"
    rel="noopener noreferrer"
    className="inline-flex items-center gap-2 rounded-lg bg-orange-600 px-6 py-3 text-sm font-semibold text-white
               hover:bg-orange-700 focus:outline-none focus:ring-4 focus:ring-orange-300 transition"
  >
    View all Google reviews
    <svg
      className="h-4 w-4"
      fill="currentColor"
      viewBox="0 0 20 20"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path d="M12.293 2.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-8 8a1 1 0 01-.638.293l-4 .5a1 1 0 01-1.112-1.112l.5-4a1 1 0 01.293-.638l8-8zM14 4l-8 8-.293 2.293 2.293-.293 8-8L14 4z" />
    </svg>
  </a>
</div>
    </section>
  );
};

export default Reviewsec;
