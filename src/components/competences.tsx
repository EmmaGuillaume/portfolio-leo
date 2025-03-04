import {
  BookOpen,
  BriefcaseBusiness,
  GraduationCap,
  Megaphone,
  Presentation,
  Rocket,
  SquareDashedMousePointer,
} from "lucide-react";

type Props = {
  title: string;
  presentation: string[];
  utilisations: string[];
  maitrise: string[];
  formation: string[];
  conseils: string[];
  projet: string[];
  importance: string[];
};

export default function Competences({
  title,
  presentation,
  utilisations,
  maitrise,
  formation,
  conseils,
  projet,
  importance,
}: Props) {
  return (
    <section className="my-36">
      <h1 className=" text-center text-3xl">{title}</h1>
      <section className="justify-center items-start  relative">
        <section className=" flex flex-col gap-8 mt-8">
          <div className="flex flex-col gap-2">
            <div className="flex gap-2 items-center">
              <Presentation className="w-4" />
              <h2 className="text-xl w-fit whitespace-nowrap">Présentation</h2>
              <div className="h-[1px] w-full bg-black invisible md:visible" />
            </div>

            {presentation.map((text, index) => (
              <p key={index}>{text}</p>
            ))}
          </div>

          <div className="flex flex-col gap-2">
            <div className="flex gap-2 items-center">
              <SquareDashedMousePointer className="w-4" />
              <h2 className="text-xl w-fit whitespace-nowrap">Utilisation</h2>
              <div className="h-[1px] w-full bg-black invisible md:visible" />
            </div>
            {utilisations.map((text, index) => (
              <p key={index}>{text}</p>
            ))}
          </div>
          <div className="flex flex-col gap-2">
            <div className="flex gap-2 items-center">
              <GraduationCap className="w-4" />
              <h2 className="text-xl w-fit whitespace-nowrap">Maîtrise</h2>
              <div className="h-[1px] w-full bg-black invisible md:visible" />
            </div>
            {maitrise.map((text, index) => (
              <p key={index}>{text}</p>
            ))}
          </div>
          <div className="flex flex-col gap-2">
            <div className="flex gap-2 items-center">
              <BookOpen className="w-4" />
              <h2 className="text-xl w-fit whitespace-nowrap">
                Formation en cours
              </h2>
              <div className="h-[1px] w-full bg-black invisible md:visible" />
            </div>
            {formation.map((text, index) => (
              <p key={index}>{text}</p>
            ))}
          </div>
          <div className="flex flex-col gap-2">
            <div className="flex gap-2 items-center">
              <Megaphone className="w-4" />
              <h2 className="text-xl w-fit whitespace-nowrap">Conseils</h2>
              <div className="h-[1px] w-full bg-black invisible md:visible" />
            </div>
            {conseils.map((text, index) => (
              <p key={index}>{text}</p>
            ))}
          </div>
          <div className="flex flex-col gap-2">
            <div className="flex gap-2 items-center">
              <BriefcaseBusiness className="w-5" />
              <h2 className="text-xl w-fit whitespace-nowrap">
                Projet personnel-professionnel
              </h2>
              <div className="h-[1px] w-full bg-black invisible md:visible" />
            </div>
            {projet.map((text, index) => (
              <p key={index}>{text}</p>
            ))}
          </div>
          <div className="flex flex-col gap-2">
            <div className="flex gap-2 items-center">
              <Rocket className="w-5" />
              <h2 className="text-xl w-fit whitespace-nowrap">
                Importance de cette compétence
              </h2>
              <div className="h-[1px] w-full bg-black invisible md:visible" />
            </div>
            {importance.map((text, index) => (
              <p key={index}>{text}</p>
            ))}
          </div>
        </section>
      </section>
    </section>
  );
}
