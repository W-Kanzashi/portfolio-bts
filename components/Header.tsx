export default function Header(props: any): JSX.Element {
  return (
    <section
      className="flex h-screen w-full snap-center flex-col items-center justify-center"
      id="Intro"
    >
      <div className="prose prose-xl mx-auto flex flex-col">
        <h2 className="text-woody-brown-600">Introduction</h2>
        <p className="text-woody-brown-500">
          Je m&apos;appelle Keanui CLARK et je suis étudiant en BTS Services
          Informatique aux Organisations (SIO) spécialité Solution Logicielles
          et Applications Métiers (SLAM) à l&apos;ORT Strasbourg en deuxième
          année.
        </p>
        <p className="text-woody-brown-500">
          Ci-dessous vous trouverez la présentation des différents projets
          réalisés en entreprise et en cours.
        </p>
      </div>
    </section>
  );
}
