import Button from "@/components/buttons";
export default function Home() {
  return (
    <main className="px-28">
      <section className="mt-36">
        <h1 className=" text-center text-3xl">
          Étudiant et développeur freelance
        </h1>
        <div className="flex justify-center items-center mt-8 gap-4">
          <Button href="" text="Présentation" />
          <Button href="" text="Réalisations" />
          <Button href="" text="Compétences" />
        </div>
      </section>
    </main>
  );
}
