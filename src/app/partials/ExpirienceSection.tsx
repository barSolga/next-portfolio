import Collapser from "@/components/Collapser";
import Label from "@/components/Label";
import SectionHeading from "@/components/SectionHeading";
import { iconSize } from "@/Constants";
import { BiTargetLock } from "react-icons/bi";

interface Props {
  companies: {
    id: number;
    name: string;
    location: string;
    startDate: string;
    endDate: string;
    description: string;
    skills: string[];
  }[];
}

const ExpirienceSection = ({ companies }: Props) => {
  return (
    <section id="expirience">
      <div className="container mx-auto p-4 space-y-5 overflow-hidden">
        <SectionHeading text="Expirience" />
        <div className="flex flex-col justify-center items-center gap-4 w-full">
          {
            companies ? companies.map(company => (
              <Collapser
                key={company.id}
                head={
                  <div className="flex flex-col gap-2 md:items-center md:flex-row p-2">
                    <h2 className="text-2xl font-black">{company.name}</h2>
                    <small className="flex items-center gap-2">
                      {company.startDate} - {company.endDate ? company.endDate : "Present"}
                    </small>
                  </div>
                }
                body={
                  <>
                    <div className="flex flex-col gap-2">
                      <div className="flex gap-2">
                        <BiTargetLock size={iconSize} />
                        <b>{company.location}</b>
                      </div>
                    </div>
                    <p>{company.description}</p>
                    <div className="flex flex-wrap items-center gap-2">
                      <p><b>Skills:</b></p>
                      {
                        company.skills.map((skill, index) => (
                          <Label key={index} name={skill} size={{ x: 6, y: 1 }} />
                        ))
                      }
                    </div>
                  </>
                } />
            )) : "No Data"
          }
        </div>
      </div>
    </section>
  );
};

export default ExpirienceSection;