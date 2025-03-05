import Realisations from "@/components/realisations";
import { Code, FolderOpen } from "lucide-react";
import Link from "next/link";

export default function Realisation() {
  return (
    <main className="scroll-smooth overflow-auto ">
      <section className="pt-36 pb-24 md:px-28 px-8 bg-gray-50">
        <h1 className=" text-center text-4xl bg-gradient-to-r from-pink-light to-purple-light bg-clip-text text-transparent font-bold">
          Étudiant et développeur freelance
        </h1>
        <div className="flex flex-col md:flex-row justify-center items-center mt-8 gap-4">
          <Link
            className="px-6 py-2 flex gap-2 bg-gradient-to-r from-pink-light to-purple-light  text-white  font-bold rounded-md hover:scale-105 transition-all duration-100"
            href="#competences"
          >
            <Code className="w-4" /> Compétences
          </Link>

          <Link
            className="px-6 py-2 flex gap-2 bg-gradient-to-r from-pink-light to-purple-light  text-white  font-bold rounded-md hover:scale-105 transition-all duration-100"
            href="#competences"
          >
            <FolderOpen className="w-4" />
            Réalisations
          </Link>
        </div>
      </section>
      <section className="pt-36 pb-24 md:px-28 px-8 bg-gray-50">
        <Realisations
          img="/images/veigar.jpg"
          title="AAA"
          missions={[
            "L’anglais est une compétence essentielle dans le domaine du développement, que ce soit pour la communication avec des collègues, la lecture de documentation technique ou l’apprentissage de nouvelles technologies. Aujourd’hui, la majorité des ressources, des tutoriels et des documentations sont disponibles en anglais, ce qui en fait une langue incontournable pour tout développeur.",
          ]}
          role={[
            "J’ai eu l’occasion d’utiliser l’anglais dans un cadre professionnel à travers mes expériences sur des projets comme Vidibio et Theseus-AI, où j’ai collaboré avec des collègues anglophones. Cela m’a poussé à m’adapter et à m’exprimer couramment en anglais, aussi bien à l’oral qu’à l’écrit, notamment pour les réunions, les comptes rendus et les échanges techniques.",
            "En dehors du cadre professionnel, j’ai développé mes compétences en anglais à travers mon parcours scolaire et universitaire, notamment en obtenant un diplôme du TOEIC. Par ailleurs, je consomme régulièrement du contenu en anglais, que ce soit des films, des séries, des articles ou de la documentation technique, ce qui me permet d’améliorer constamment ma compréhension et mon vocabulaire technique.",
          ]}
          technologies={[
            "Aujourd’hui, je considère mon niveau en anglais comme courant. Je suis à l’aise aussi bien à l’écrit qu’à l’oral, et je peux communiquer efficacement dans un environnement professionnel international. J’ai acquis une bonne fluidité grâce à mes expériences de travail avec des équipes anglophones et à mon immersion régulière dans du contenu en anglais.",
          ]}
          client={[
            "Bien que mon niveau me permette d’être à l’aise dans un contexte professionnel, je continue à perfectionner mon anglais en lisant de la documentation technique, en regardant des conférences et en échangeant avec des collègues anglophones. Mon objectif est d’atteindre un niveau encore plus fluide et naturel, notamment sur les aspects techniques et professionnels.",
          ]}
          objectif={[
            "Pour progresser en anglais, je recommande de s’immerger autant que possible dans la langue en regardant des films et des séries en version originale, en lisant des articles techniques en anglais et en pratiquant avec des collègues ou des amis. L’apprentissage ne doit pas être uniquement académique : plus on pratique dans un contexte réel, plus l’amélioration est rapide.",
          ]}
          galerie={[
            "L’anglais étant une compétence clé dans mon domaine, je souhaite continuer à le perfectionner afin d’être capable de travailler sur des projets internationaux sans aucune barrière linguistique. À l’avenir, j’aimerais collaborer davantage avec des équipes anglophones et, pourquoi pas, évoluer dans un environnement de travail où l’anglais est la langue principale.",
          ]}
          processus={[
            "L’anglais est indispensable dans mon métier, car il ouvre de nombreuses opportunités professionnelles et facilite l’accès à des ressources essentielles. Que ce soit pour collaborer avec des équipes internationales, lire de la documentation ou suivre des formations avancées, l’anglais est un atout incontournable. Grâce à cette compétence, je peux apprendre plus rapidement, travailler avec des personnes du monde entier et évoluer dans un environnement technologique en constante évolution.",
          ]}
          conclusions={[
            "L’anglais est indispensable dans mon métier, car il ouvre de nombreuses opportunités professionnelles et facilite l’accès à des ressources essentielles. Que ce soit pour collaborer avec des équipes internationales, lire de la documentation ou suivre des formations avancées, l’anglais est un atout incontournable. Grâce à cette compétence, je peux apprendre plus rapidement, travailler avec des personnes du monde entier et évoluer dans un environnement technologique en constante évolution.",
          ]}
        />
      </section>
    </main>
  );
}
