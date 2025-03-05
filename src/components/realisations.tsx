import {
  BookOpen,
  BriefcaseBusiness,
  GraduationCap,
  Megaphone,
  Presentation,
  Rocket,
  SquareDashedMousePointer,
} from "lucide-react";
import Image from "next/image";

type Props = {
  title: string;
  missions: string[];
  role: string[];
  technologies: string[];
  client: string[];
  objectif: string[];
  galerie: string[];
  processus: string[];
  conclusions: string[];

  img: string;
};

export default function Realisations({
  title,
  missions,
  role,
  technologies,
  client,
  objectif,
  galerie,
  processus,
  conclusions,
  img,
}: Props) {
  return (
    <section className="my-36">
      <div className="w-full flex flex-col items-center">
        <h1 className=" text-center text-4xl bg-gradient-to-r from-pink-light to-purple-light bg-clip-text text-transparent font-bold">
          {title}
        </h1>

        <Image
          src={img}
          alt="img"
          width={100}
          height={100}
          className="max-w-20 w-full mt-2"
        />
      </div>

      <section className="justify-center items-start  relative">
        <section className=" flex flex-col gap-24 mt-24">
          <div className="flex flex-col md:flex-row gap-8">
            <div className="bg-gray-100 rounded-md w-full max-w-full min-h-32" />
            <div className="flex flex-col gap-2">
              <div className="flex gap-2 items-center">
                <Presentation className="w-4" />
                <h2 className="text-xl w-fit whitespace-nowrap bg-gradient-to-r from-pink-light to-purple-light bg-clip-text font-bold  text-transparent">
                  Présentation
                </h2>
              </div>

              {missions.map((text, index) => (
                <p key={index}>{text}</p>
              ))}
            </div>
          </div>

          <div className="flex flex-col md:flex-row gap-8">
            <div className="flex flex-col gap-2">
              <div className="flex gap-2 items-center">
                <SquareDashedMousePointer className="w-4" />
                <h2 className="text-xl w-fit whitespace-nowrap bg-gradient-to-r from-pink-light to-purple-light bg-clip-text text-transparent font-bold ">
                  Utilisation
                </h2>
              </div>
              {role.map((text, index) => (
                <p key={index}>{text}</p>
              ))}
            </div>
            <div className="bg-gray-100 rounded-md w-full max-w-full min-h-32" />
          </div>

          <div className="flex flex-col md:flex-row gap-8">
            <div className="bg-gray-100 rounded-md w-full max-w-full min-h-32" />
            <div className="flex flex-col gap-2">
              <div className="flex gap-2 items-center">
                <GraduationCap className="w-4" />
                <h2 className="text-xl w-fit whitespace-nowrap bg-gradient-to-r from-pink-light to-purple-light bg-clip-text text-transparent font-bold ">
                  Maîtrise
                </h2>
              </div>
              {technologies.map((text, index) => (
                <p key={index}>{text}</p>
              ))}
            </div>
          </div>

          <div className="flex flex-col md:flex-row gap-8">
            <div className="flex flex-col gap-2">
              <div className="flex gap-2 items-center">
                <BookOpen className="w-4" />
                <h2 className="text-xl w-fit whitespace-nowrap bg-gradient-to-r from-pink-light to-purple-light bg-clip-text font-bold text-transparent">
                  client en cours
                </h2>
              </div>
              {client.map((text, index) => (
                <p key={index}>{text}</p>
              ))}
            </div>
            <div className="bg-gray-100 rounded-md w-full max-w-full min-h-32" />
          </div>

          <div className="flex flex-col md:flex-row gap-8">
            <div className="bg-gray-100 rounded-md w-full max-w-full min-h-32" />
            <div className="flex flex-col gap-2">
              <div className="flex gap-2 items-center">
                <Megaphone className="w-4" />
                <h2 className="text-xl w-fit whitespace-nowrap bg-gradient-to-r from-pink-light to-purple-light bg-clip-text text-transparent font-bold ">
                  objectif
                </h2>
              </div>
              {objectif.map((text, index) => (
                <p key={index}>{text}</p>
              ))}
            </div>
          </div>

          <div className="flex flex-col md:flex-row gap-8">
            <div className="flex flex-col gap-2">
              <div className="flex gap-2 items-center">
                <BriefcaseBusiness className="w-5" />
                <h2 className="text-xl w-fit whitespace-nowrap bg-gradient-to-r from-pink-light to-purple-light bg-clip-text font-bold  text-transparent">
                  galerie personnel-professionnel
                </h2>
              </div>
              {galerie.map((text, index) => (
                <p key={index}>{text}</p>
              ))}
            </div>
            <div className="bg-gray-100 rounded-md w-full max-w-full min-h-32" />
          </div>

          <div className="flex flex-col md:flex-row gap-8">
            <div className="bg-gray-100 rounded-md w-full max-w-full min-h-32" />
            <div className="flex flex-col gap-2">
              <div className="flex gap-2 items-center">
                <Rocket className="w-5" />
                <h2 className="text-xl w-fit whitespace-nowrap bg-gradient-to-r from-pink-light to-purple-light bg-clip-text font-bold  text-transparent">
                  processus de cette compétence
                </h2>
              </div>
              {processus.map((text, index) => (
                <p key={index}>{text}</p>
              ))}
            </div>
          </div>

          <div className="flex flex-col md:flex-row gap-8">
            <div className="flex gap-2 items-center">
              <Rocket className="w-5" />
              <h2 className="text-xl w-fit whitespace-nowrap bg-gradient-to-r from-pink-light to-purple-light bg-clip-text font-bold  text-transparent">
                Conclusion
              </h2>
            </div>
            {conclusions.map((text, index) => (
              <p key={index}>{text}</p>
            ))}
          </div>
        </section>
      </section>
    </section>
  );
}
