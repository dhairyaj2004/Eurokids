import Yoga from "../../../Images/yoga.avif";
import Gym from "../../../Images/gym.png";
import aug from "../../../Images/15aug.png";
import chef from "../../../Images/chef.png";
import water from "../../../Images/water.png";
import ring from "../../../Images/ring.png";
import banner from "../../../Images/banner.png";
import namskar from "../../../Images/namskar.png";
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
                      src={Gym}
                      alt="Foggy trees"
                      className="h-full w-full object-cover" />
              </div>

              <div className="rounded-xl overflow-hidden md:row-start-2">
                  <img
                      src={aug}
                      alt="Cottage garden"
                      className="h-full w-full object-cover" />
              </div>


              <div className="md:col-span-2 rounded-xl overflow-hidden">
                  <img
                      src={chef}
                      alt="Moody mountains"
                      className="h-full w-full object-cover" />
              </div>

          </div>

      </section>
     <section className="max-w-6xl mx-auto px-4 py-12">
      <div className="grid gap-6 md:grid-cols-3 auto-rows-[200px] md:auto-rows-[250px]">

        <div className="md:col-span-2 rounded-xl overflow-hidden">
          <img
            src={water}
            alt="Forest aerial"
            className="h-full w-full object-cover"
          />
        </div>

        <div className="rounded-xl overflow-hidden">
          <img
            src={ring}
            alt="Foggy trees"
            className="h-full w-full object-cover"
          />
        </div>

        <div className="rounded-xl overflow-hidden md:row-start-2">
          <img
            src={banner}
            alt="Cottage garden"
            className="h-full w-full object-cover"
          />
        </div>


        <div className="md:col-span-2 rounded-xl overflow-hidden">
          <img
            src={namskar}
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
