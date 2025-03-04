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
        <div className="w-0.5 h-full absolute -left-8 top-0 bg-gray-100" />
        <section className=" flex flex-col gap-8 mt-8">
          <div className="flex flex-col gap-2">
            <h2 className="text-xl">Présentation</h2>
            {presentation.map((text, index) => (
              <p key={index}>{text}</p>
            ))}
          </div>

          <div className="flex flex-col gap-2">
            <h2 className="text-xl">Utilisation</h2>
            {utilisations.map((text, index) => (
              <p key={index}>{text}</p>
            ))}
          </div>
          <div className="flex flex-col gap-2">
            <h2 className="text-xl">Maîtrise</h2>
            {maitrise.map((text, index) => (
              <p key={index}>{text}</p>
            ))}
          </div>
          <div className="flex flex-col gap-2">
            <h2 className="text-xl">Formation en cours</h2>
            {formation.map((text, index) => (
              <p key={index}>{text}</p>
            ))}
          </div>
          <div className="flex flex-col gap-2">
            <h2 className="text-xl">Conseils</h2>
            {conseils.map((text, index) => (
              <p key={index}>{text}</p>
            ))}
          </div>
          <div className="flex flex-col gap-2">
            <h2 className="text-xl">Projet personnel-professionnel</h2>
            {projet.map((text, index) => (
              <p key={index}>{text}</p>
            ))}
          </div>
          <div className="flex flex-col gap-2">
            <h2 className="text-xl">Importance de cette compétence</h2>
            {importance.map((text, index) => (
              <p key={index}>{text}</p>
            ))}
          </div>
        </section>
      </section>
    </section>
  );
}
