export default function Home() {
  return (
    <main className="px-28">
      <section className="my-36">
        <h1 className=" text-center text-3xl">Docker</h1>
        <section className="justify-center items-start  relative">
          <div className="w-0.5 h-full absolute -left-8 top-0 bg-gray-100" />
          <section className=" flex flex-col gap-8 mt-8">
            <div className="flex flex-col gap-2">
              <h2 className="text-xl">Présentation</h2>
              <p>
                {
                  "Docker est une plateforme open-source qui permet de développer, expédier et exécuter des applications à l’aide de conteneurs. Ces derniers encapsulent une application et toutes ses dépendances, garantissant ainsi qu’elle fonctionne de manière identique, quel que soit l’environnement d’exécution. Docker est devenu un outil incontournable pour les développeurs et les équipes DevOps, car il simplifie la gestion des environnements, améliore la portabilité des applications et accélère les cycles de déploiement."
                }
              </p>
            </div>

            <div className="flex flex-col gap-2">
              <h2 className="text-xl">Utilisation</h2>
              <p>
                {
                  "J’ai largement utilisé Docker dans plusieurs projets professionnels pour optimiser le développement et le déploiement d’applications. Par exemple, dans le cadre du projet Vidibio, j’ai dockerisé différentes APIs Python et Python FastAPI pour faciliter leur déploiement. L’utilisation de Docker a permis d’uniformiser les environnements, réduisant ainsi les erreurs dues aux configurations locales."
                }
              </p>
              <p>
                {
                  "Dans le projet Theseus-AI, Docker a également été au centre de l’architecture. J’ai utilisé des conteneurs pour exécuter les différentes APIs et Docker Compose pour les connecter sur un même réseau. Cela a permis de créer un environnement de développement identique à celui du serveur de production, facilitant le travail sur les bots Puppeteer et garantissant une transition fluide vers la mise en production."
                }
              </p>
            </div>

            <div className="flex flex-col gap-2">
              <h2 className="text-xl">Maîtrise</h2>
              <p>
                {`Je situe mon niveau de compétence en Docker à "confirmé". Au cours de mes expériences précédentes, j’ai mis un effort particulier à comprendre en profondeur le fonctionnement de Docker, ce qui m’a permis de maîtriser cette technologie. Grâce à cela, je suis aujourd’hui entièrement autonome dans son utilisation, que ce soit pour créer des images Docker, gérer des conteneurs ou orchestrer plusieurs services avec Docker Compose. Ces compétences m’ont permis de gagner en efficacité et en fiabilité dans la gestion des environnements de développement et de production.`}
              </p>
            </div>

            <div className="flex flex-col gap-2">
              <h2 className="text-xl">Formation en cours</h2>
              <p>
                {
                  "Je me forme et m’informe continuellement sur Docker, car il y a toujours de nouvelles configurations à découvrir et des cas d’usage à explorer. Que ce soit pour optimiser la création d’images, mieux gérer les volumes et les réseaux, ou intégrer Docker avec Kubernetes pour l’orchestration, j’aime approfondir mes compétences et rester à jour. Cela complète mes connaissances actuelles et me prépare à gérer des environnements toujours plus diversifiés et complexes."
                }
              </p>
            </div>

            <div className="flex flex-col gap-2">
              <h2 className="text-xl">Conseils</h2>
              <p>
                {
                  "Pour bien démarrer avec Docker, je pense qu’il est important de l’utiliser d’abord sur des applications simples, qui ne nécessitent pas trop de configuration. Cela permet de comprendre comment Docker fonctionne sans être submergé par la complexité. Ensuite, une fois que les bases sont solides, on peut travailler sur des applications plus complexes utilisant des technologies comme Docker Compose, et même explorer des outils avancés comme Kubernetes. Ce cheminement progressif aide à bien maîtriser Docker et à voir tout son potentiel dans des environnements modernes et distribués."
                }
              </p>
            </div>

            <div className="flex flex-col gap-2">
              <h2 className="text-xl">Projet personnel-professionnel</h2>
              <p>
                {
                  "Docker est une technologie que j’apprécie particulièrement, car elle m’a permis de résoudre des problèmes récurrents liés aux différences de fonctionnement entre les environnements locaux et les serveurs. Grâce à Docker, j’ai pu éviter ces écarts et simplifier grandement le déploiement des applications. Pour moi, c’est une technologie essentielle que j’insisterai toujours à utiliser dans mes futurs projets, qu’ils soient personnels ou professionnels."
                }
              </p>
              <p>
                {
                  "Aujourd’hui, je ne peux plus m’en passer pour le développement, car elle rend les processus beaucoup plus fluides et fiables. Mon objectif est de continuer à utiliser Docker pour concevoir des systèmes modulaires et fiables, tout en approfondissant mes connaissances sur son intégration avec d’autres outils comme Kubernetes. Cela me permettra de proposer des solutions toujours plus robustes et adaptées aux besoins modernes."
                }
              </p>
            </div>

            <div className="flex flex-col gap-2">
              <h2 className="text-xl">Importance de cette compétence</h2>
              <p>
                {
                  "Pour moi, Docker est une compétence essentielle dans le développement logiciel. Il offre une flexibilité incomparable pour créer des environnements reproductibles, simplifiant le développement, les tests et les déploiements. Que ce soit pour dockeriser des APIs Python comme dans Vidibio ou pour connecter plusieurs services avec Docker Compose comme dans Theseus-AI, Docker m’a permis de gagner du temps et d’améliorer la qualité des livrables. C’est un outil incontournable pour les systèmes modernes et distribués."
                }
              </p>
            </div>
          </section>
        </section>
      </section>
    </main>
  );
}
