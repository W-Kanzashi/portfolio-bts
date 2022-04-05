export default function HeaderCsp() {
  return (
    <>
      <main className="prose-body ml-[18%] h-screen px-5 py-5">
        <h1>Les en-têtes HTTP de sécurité</h1>
        <p>
          Pour sécurisé un site internet il est nécessaire d&apos;utilisé des
          en-têtes HTTP de sécurité
        </p>

        <h2>Il existe 10 en-tête différentes</h2>
        <p>
          Pour l&apos;instant la page n&apos;a pas été créé mais vous pouvez
          aller voir ici :{" "}
          <a href="https://owasp.org/www-project-secure-headers/">OWASP</a>
        </p>
      </main>
    </>
  );
}
