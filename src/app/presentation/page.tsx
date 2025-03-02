export default function Home() {
  return (
    <main className="mb-24 px-28">
      <section className="mt-24">
        <h1 className=" text-center text-3xl">Présentation</h1>
      </section>
      <section className="justify-center items-start  relative">
        <div className="w-0.5 h-full absolute -left-8 top-0 bg-gray-100" />
        <section className=" flex flex-col gap-8 mt-8">
          <div className="flex flex-col gap-2">
            <h2 className="text-xl">Étudiant et développeur freelance</h2>
            <p>
              {
                "Actuellement en cinquième année à l’ESIEA, je mets à profit les compétences développées au cours de mon parcours académique pour m'adapter rapidement aux nouvelles technologies et répondre efficacement aux exigences de mes clients. Mon objectif principal est d'accroître la valeur des marques en créant des applications, sites et/ou logiciel afin de leurs permettre d’accroitre et améliorer leurs productivités."
              }
            </p>
          </div>

          <div className="flex flex-col gap-2">
            <h2 className="text-xl">Futur Expert en Ingénierie Logicielle</h2>
            <p>
              {
                "Je suis profondément conscient de mes responsabilités envers la société et l'environnement. Je m'investis activement dans le développement de projets qui sont à la fois humains, éthiques et durables, en intégrant ces principes à chaque étape de mon parcours professionnel. Cela me permet de générer un impact positif sur la société tout en respectant les ressources naturelles et les normes environnementales."
              }
            </p>
          </div>

          <div className="flex flex-col gap-2">
            <h2 className="text-xl">Projets Professionnels et Personnels</h2>
            <p>
              {
                "Mon ambition professionnelle est étroitement liée à mes aspirations personnelles, qui visent à développer des solutions technologiques accessibles et inclusives pour améliorer la qualité de vie des individus. Mes qualités humaines telles que mon adaptabilité et ma pensée critique sont essentielles pour collaborer efficacement avec mes collaborateurs et répondre aux besoins des utilisateurs."
              }
            </p>
          </div>

          <div className="flex flex-col gap-2">
            <h2 className="text-xl">
              {"Passion pour le Développement d'Applications et de Logiciels"}
            </h2>
            <p>
              {
                "Je suis passionné par les innovations dans le domaine du développement d'applications et de logiciels, ce qui constitue l'un de mes principaux centres d'intérêts. Cette passion me permet de concevoir des solutions logicielles avancées et intuitives, visant à simplifier et optimiser les processus professionnels et l'analyse de données. Mon objectif est de rendre ces outils accessibles et efficaces, afin d'aider les professionnels à améliorer leur efficacité et à prendre des décisions éclairées basées sur des données précises et pertinentes."
              }
            </p>
          </div>

          <div className="flex flex-col gap-2">
            <h2 className="text-xl">
              {"Toujours à l'Avant-Garde Technologique"}
            </h2>
            <p>
              {
                "Je m'engage à rester constamment à l'avant-garde des avancées technologiques en suivant régulièrement des formations, en découvrant de nouveaux outils et en me tenant informé des derniers langages de programmation. Cette approche proactive me permet de proposer des solutions innovantes et parfaitement adaptées aux besoins uniques de chaque client."
              }
            </p>
          </div>
        </section>
      </section>
    </main>
  );
}
