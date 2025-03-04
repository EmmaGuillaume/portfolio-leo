export default function Home() {
  return (
    <main className="px-28">
      <section className="my-36">
        <h1 className=" text-center text-3xl">Git</h1>
        <section className="justify-center items-start  relative">
          <div className="w-0.5 h-full absolute -left-8 top-0 bg-gray-100" />
          <section className=" flex flex-col gap-8 mt-8">
            <div className="flex flex-col gap-2">
              <h2 className="text-xl">Présentation</h2>
              <p>
                {
                  "TypeScript est un sur-ensemble de JavaScript qui ajoute un typage statique et des fonctionnalités de programmation orientée objet (POO). Créé par Microsoft en 2012, TypeScript permet aux développeurs de créer des applications robustes, maintenables et évolutives. Il se compile en JavaScript pur, ce qui le rend compatible avec tous les navigateurs et environnements qui supportent JavaScript."
                }
              </p>
              <p>
                {
                  "Grâce à son typage statique, TypeScript aide à détecter les erreurs à la compilation plutôt qu’à l’exécution, réduisant ainsi le nombre de bugs en production. Il propose aussi des concepts avancés comme les interfaces, les génériques et les décorateurs, qui enrichissent le langage et facilitent l’écriture d’un code structuré et clair."
                }
              </p>
            </div>

            <div className="flex flex-col gap-2">
              <h2 className="text-xl">Utilisation</h2>
              <p>
                {
                  "J'ai commencé à utiliser TypeScript dans le cadre de mes projets professionnels, attiré par les avantages du typage statique et de la POO. Lors du projet Gava, j’ai développé un site web pour l'organisation de tournois d’e-sport en utilisant Angular et TypeScript, ce qui m’a permis de réduire les erreurs liées à la manipulation des données complexes et d’améliorer la lisibilité du code. Dans le cadre de Vidibio, une application mobile innovante réalisée avec React Native, TypeScript a facilité l’intégration de fonctionnalités liées à la réalité augmentée, tout en structurant le code de manière modulaire et performante. Enfin, pour Theseus-AI, j’ai participé au développement d’un site en Next.js et d’une API NestJS intégrant Puppeteer pour enregistrer et analyser des réunions via Google Meet, Zoom et Teams. Dans chaque projet, TypeScript a significativement amélioré la robustesse et la maintenabilité du code."
                }
              </p>
            </div>

            <div className="flex flex-col gap-2">
              <h2 className="text-xl">Maîtrise</h2>
              <p>
                {
                  "Je situe aujourd’hui mon niveau de compétence en TypeScript à « confirmé ». Je suis à l’aise avec les concepts avancés du langage tels que les interfaces, les génériques et les décorateurs. J’ai également une bonne expérience de l’utilisation de bibliothèques et frameworks connexes comme Prisma ORM et NestJS. Ces outils ont été essentiels pour accélérer et améliorer la qualité de mes livrables."
                }
              </p>
            </div>

            <div className="flex flex-col gap-2">
              <h2 className="text-xl">Formation en cours</h2>
              <p>
                {
                  "Je continue à approfondir mes connaissances en TypeScript, en particulier dans l’intégration avec des technologies telles que Prisma ORM et les décorateurs avancés de NestJS. Par ailleurs, je me forme à l’optimisation des performances dans des environnements lourds comme les applications full-stack complexes utilisant TypeScript."
                }
              </p>
            </div>

            <div className="flex flex-col gap-2">
              <h2 className="text-xl">Conseils</h2>
              <p>
                {
                  "Pour bien débuter avec TypeScript, il est essentiel de maîtriser les bases de JavaScript afin de bien saisir les avantages qu’apporte TypeScript. En explorant progressivement des concepts avancés comme les génériques, les unions ou les types conditionnels, vous pourrez tirer parti de toute la puissance de ce langage. L’utilisation d’outils tels que ESLint et Prettier contribue également à maintenir un code propre et cohérent. Enfin, travailler sur des projets concrets est une excellente façon de comprendre comment intégrer TypeScript dans des contextes réels et de bénéficier pleinement de ses fonctionnalités."
                }
              </p>
            </div>

            <div className="flex flex-col gap-2">
              <h2 className="text-xl">Projet personnel-professionnel</h2>
              <p>
                {
                  "Mon objectif est de continuer à utiliser TypeScript pour développer des solutions full-stack innovantes et performantes. À moyen terme, j’aimerais vraiment m’orienter vers cette technologie, car c’est celle que je préfère. Grâce à son environnement simple d’utilisation et ses fonctionnalités avancées, TypeScript me permet de travailler avec efficacité tout en rendant le code plus lisible et maintenable. Cela m’inspire à approfondir mes compétences et à en faire une expertise centrale de mon parcours."
                }
              </p>
            </div>

            <div className="flex flex-col gap-2">
              <h2 className="text-xl">Importance de cette compétence</h2>
              <p>
                {
                  "TypeScript est une compétence indispensable dans le développement moderne, car il combine la flexibilité de JavaScript avec une meilleure sécurité et lisibilité. Dans mes projets, TypeScript a permis d’améliorer significativement les performances et la maintenabilité du code, réduisant ainsi le temps passé sur le débogage et l’intégration. Cela en fait un choix incontournable pour le développement d’applications web et mobiles modernes."
                }
              </p>
            </div>
          </section>
        </section>
      </section>
    </main>
  );
}
