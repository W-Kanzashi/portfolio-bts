export function Loading() {
  return (
    <>
      <section className="flex h-screen items-center justify-center bg-slate-800">
        <div className="grid rotate-45 transform grid-cols-3 grid-rows-3">
          <span className="loading-cube"></span>
          <span className="loading-cube"></span>
          <span className="loading-cube"></span>
          <span className="loading-cube"></span>
          <span className="loading-cube"></span>
          <span className="loading-cube"></span>
          <span className="loading-cube"></span>
          <span className="loading-cube"></span>
          <span className="loading-cube"></span>
        </div>
      </section>
    </>
  );
}

export function Error(error: number) {
  return <></>;
}
