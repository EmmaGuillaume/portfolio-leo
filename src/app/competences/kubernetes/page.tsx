export default function Home() {
  return (
    <main className="px-28">
      <section className="my-36">
        <h1 className=" text-center text-3xl">Kubernetes</h1>
        <section className="justify-center items-start  relative">
          <div className="w-0.5 h-full absolute -left-8 top-0 bg-gray-100" />
          <section className=" flex flex-col gap-8 mt-8">
            <div className="flex flex-col gap-2">
              <h2 className="text-xl">Présentation</h2>
              <p>
                {
                  "Kubernetes est une plateforme open-source conçue pour automatiser le déploiement, la mise à l’échelle et la gestion des applications conteneurisées. Créée par Google, Kubernetes est devenue une référence incontournable pour orchestrer des conteneurs à grande échelle. Elle permet de répartir les charges, de surveiller les applications et de garantir leur disponibilité, tout en simplifiant la gestion des infrastructures complexes."
                }
              </p>
            </div>

            <div className="flex flex-col gap-2">
              <h2 className="text-xl">Utilisation</h2>
              <p>
                {
                  "J’ai utilisé Kubernetes dans plusieurs projets significatifs pour optimiser la gestion et l’orchestration des conteneurs. Dans le cadre du projet Vidibio, j’ai géré un cluster Kubernetes comprenant plusieurs nœuds. J’ai orchestré différents pods, notamment pour la base de données, des serveurs de sauvegarde, l’API principale et un service de traitement d’images. Ce projet m’a permis de configurer et gérer des ressources essentielles comme les load balancers et les volumes, garantissant ainsi une répartition efficace des charges et une disponibilité optimale des services."
                }
              </p>
              <p>
                {
                  "Dans le projet Theseus-AI, j’ai utilisé Kubernetes de manière plus ciblée pour configurer un load balancer capable de gérer efficacement les requêtes envoyées au serveur de bots. Cette configuration permettait d’ouvrir ou de fermer dynamiquement des serveurs en fonction de l’utilisation, offrant une solution flexible et adaptée aux besoins fluctuants de l’application."
                }
              </p>
            </div>

            <div className="flex flex-col gap-2">
              <h2 className="text-xl">Maîtrise</h2>
              <p>
                {`Je situe mon niveau de compétence en Kubernetes à "autonome". Au cours de mes expériences précédentes, j’ai mis un effort particulier à comprendre en profondeur le fonctionnement de Kubernetes, ce qui m’a permis de maîtriser les concepts fondamentaux comme la gestion des pods, des services, des volumes et des load balancers. Bien que je maîtrise le sujet et sois capable de gérer des clusters et des infrastructures de manière indépendante, je continue de me former pour explorer davantage les aspects avancés et perfectionner mes compétences.`}
              </p>
            </div>

            <div className="flex flex-col gap-2">
              <h2 className="text-xl">Formation en cours</h2>
              <p>
                {
                  "Je continue d’approfondir mes connaissances en Kubernetes, car j’apprécie particulièrement cette technologie et la trouve extrêmement pratique. J’aime découvrir de nouvelles configurations et cas d’usage, ce qui me permet de mieux comprendre son fonctionnement et de perfectionner mes compétences. Mon objectif est d’améliorer ma maîtrise pour gérer des environnements encore plus complexes et proposer des solutions toujours plus efficaces."
                }
              </p>
            </div>

            <div className="flex flex-col gap-2">
              <h2 className="text-xl">Conseils</h2>
              <p>
                {
                  "Pour débuter avec Kubernetes, je recommande de se familiariser avec ses concepts de base comme les pods, les services et les déploiements. Une fois ces fondamentaux maîtrisés, il est utile de travailler sur des projets réels pour comprendre comment orchestrer des conteneurs et gérer les ressources. L’utilisation d’outils complémentaires comme Helm pour gérer les configurations et Minikube pour tester localement peut également accélérer l’apprentissage."
                }
              </p>
            </div>

            <div className="flex flex-col gap-2">
              <h2 className="text-xl">Projet personnel-professionnel</h2>
              <p>
                {
                  "Kubernetes est une technologie que je trouve fascinante, car elle offre des solutions puissantes pour gérer des infrastructures complexes. Mon objectif est de continuer à l’utiliser dans mes futurs projets, qu’ils soient personnels ou professionnels, pour garantir la scalabilité, la disponibilité et la robustesse des applications. En approfondissant mes connaissances, je souhaite devenir une référence dans l’orchestration de conteneurs et aider à concevoir des systèmes modernes et résilients"
                }
              </p>
            </div>

            <div className="flex flex-col gap-2">
              <h2 className="text-xl">Importance de cette compétence</h2>
              <p>
                {
                  "Pour moi, Kubernetes est une compétence essentielle dans le développement et la gestion d’infrastructures modernes. Il simplifie l’orchestration des conteneurs et offre des outils puissants pour garantir la fiabilité et la scalabilité des applications. Que ce soit pour gérer un cluster complet dans Vidibio ou pour configurer un load balancer dans Theseus-AI, Kubernetes m’a permis d’optimiser l’utilisation des ressources et de garantir des performances élevées. C’est un outil indispensable pour tout développeur ou architecte travaillant avec des environnements distribués."
                }
              </p>
            </div>
          </section>
        </section>
      </section>
    </main>
  );
}
