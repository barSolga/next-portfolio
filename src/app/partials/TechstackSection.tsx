import Label from "@/components/Label";
import { skills } from "../../app/data";
import SectionHeading from "@/components/SectionHeading";

const TechstackSection = () => {
  return (
    <section id="techstack" className="overflow-x-clip">
      <div className="relative container mx-auto p-4 space-y-5 ">
        <div className="gradientOne"></div>
        <SectionHeading text="Techstack" />

        <div className="flex flex-col md:flex-row w-full gap-10">

          <div className="md:w-1/2 text-textColor-lightDimmed dark:text-textColor-darkDimmed">

            <p>
              During my professional career, I have had the opportunity to work with various technologies. On a daily basis, I currently use tools and frameworks such as <b>JavaScript/TypeScript, Node.js, React.js/Angular.js, Next.js, MongoDB, PostgreSQL, HTML5, CSS3, SASS, and TailwindCSS.</b>
              <br /><br />
              I continuously enhance my skills through courses, training, and self-learning. I have experience in designing user interfaces, planning, and organizing projects.
              <br /><br />
              I am open to exploring new technologies as I view code as a tool for problem-solving. In the future, I plan to expand my expertise by learning additional programming languages.
              <br /><br />
              I am also broadening my knowledge in areas such as software architecture, testing, system deployment, as well as topics related to computer networks and operating systems.
              <br /><br />
              In this section, I provided a detailed list of the technologies and tools I have experience with.
            </p>

          </div>

          <div className="md:w-1/2 flex items-center flex-wrap gap-6">
            {
              skills.map((skill, index) => <Label key={index} name={skill} />)
            }
          </div>

        </div>


      </div>
    </section>
  );
};

export default TechstackSection;