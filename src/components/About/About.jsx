import Yoga from "../../../Images/yoga.avif";
const About = () => {
  return (
    <><section className="max-w-6xl mx-auto px-4 py-12">
          <div className="grid gap-6 md:grid-cols-3 auto-rows-[200px] md:auto-rows-[250px]">

              <div className="md:col-span-2 rounded-xl overflow-hidden">
                  <img
                      src={Yoga}
                      alt="Forest aerial"
                      className="h-full w-full object-cover" />
              </div>

              <div className="rounded-xl overflow-hidden">
                  <img
                      src="/images/img2.jpg"
                      alt="Foggy trees"
                      className="h-full w-full object-cover" />
              </div>

              <div className="rounded-xl overflow-hidden md:row-start-2">
                  <img
                      src="/images/img3.jpg"
                      alt="Cottage garden"
                      className="h-full w-full object-cover" />
              </div>


              <div className="md:col-span-2 rounded-xl overflow-hidden">
                  <img
                      src="/images/img4.jpg"
                      alt="Moody mountains"
                      className="h-full w-full object-cover" />
              </div>

          </div>

      </section><section className="max-w-6xl mx-auto px-4 py-12">
              <div className="grid gap-6 md:grid-cols-3 auto-rows-[200px] md:auto-rows-[250px]">

                  <div className="md:col-span-2 rounded-xl overflow-hidden">
                      <img
                          src="/images/img1.jpg"
                          alt="Forest aerial"
                          className="h-full w-full object-cover" />
                  </div>

                  <div className="rounded-xl overflow-hidden">
                      <img
                          src="/images/img2.jpg"
                          alt="Foggy trees"
                          className="h-full w-full object-cover" />
                  </div>

                  <div className="rounded-xl overflow-hidden md:row-start-2">
                      <img
                          src="/images/img3.jpg"
                          alt="Cottage garden"
                          className="h-full w-full object-cover" />
                  </div>


                  <div className="md:col-span-2 rounded-xl overflow-hidden">
                      <img
                          src="/images/img4.jpg"
                          alt="Moody mountains"
                          className="h-full w-full object-cover" />
                  </div>

              </div>

          </section>
              <section className="max-w-6xl mx-auto px-4 py-12">
      <div className="grid gap-6 md:grid-cols-3 auto-rows-[200px] md:auto-rows-[250px]">

        <div className="md:col-span-2 rounded-xl overflow-hidden">
          <img
            src="/images/img1.jpg"
            alt="Forest aerial"
            className="h-full w-full object-cover"
          />
        </div>

        <div className="rounded-xl overflow-hidden">
          <img
            src="/images/img2.jpg"
            alt="Foggy trees"
            className="h-full w-full object-cover"
          />
        </div>

        <div className="rounded-xl overflow-hidden md:row-start-2">
          <img
            src="/images/img3.jpg"
            alt="Cottage garden"
            className="h-full w-full object-cover"
          />
        </div>


        <div className="md:col-span-2 rounded-xl overflow-hidden">
          <img
            src="/images/img4.jpg"
            alt="Moody mountains"
            className="h-full w-full object-cover"
          />
        </div>

      </div>
      
    </section>
          </>
  );
};

export default About;
