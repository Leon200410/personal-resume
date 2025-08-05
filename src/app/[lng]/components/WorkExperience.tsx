import Image from "next/image";

interface WorkExperienceItemProps {
  period: string;
  company: string;
  position: string;
  logo: string;
}

export function WorkExperienceItem({
  period,
  company,
  position,
  logo,
}: WorkExperienceItemProps) {
  return (
    <div className="grid grid-cols-2 gap-1 md:flex-row md:gap-10">
      <p className="mt-1 text-sm font-medium text-muted dark:text-light/70">
        {period}
      </p>
      <div className=" flex items-center gap-3">
        <div className="grid h-8 w-8 shrink-0 place-content-center rounded-lg bg-light dark:bg-dark-2">
          <Image
            src={logo}
            alt={company}
            width={20}
            height={20}
            className="h-5 w-5"
          />
        </div>
        <div>
          <h6 className="text-base font-semibold text-dark dark:text-light/70">
            {company}
          </h6>
          <p className="text-sm text-muted">{position}</p>
        </div>
      </div>
    </div>
  );
}

export const workExperienceData = [
  {
    period: "home.work_experience.positions.google.period",
    company: "home.work_experience.positions.google.company",
    position: "home.work_experience.positions.google.position",
    logo: "/svg/fo.svg",
  },
  {
    period: "home.work_experience.positions.meta.period",
    company: "home.work_experience.positions.meta.company",
    position: "home.work_experience.positions.meta.position",
    logo: "/svg/FT.svg",
  },
  {
    period: "home.work_experience.positions.adobe.period",
    company: "home.work_experience.positions.adobe.company",
    position: "home.work_experience.positions.adobe.position",
    logo: "/images/MF.png",
  },
];
