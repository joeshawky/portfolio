export default function MaintenancePage() {
  return (
    <div className="flex min-h-screen flex-col items-center justify-center overflow-hidden bg-[#08090E] text-center text-white">
      <section className="relative z-1 flex flex-col gap-2 px-4 pt-32">
        <div className="absolute top-8 left-1/2 -z-1 h-[min(80vw,425px)] w-[min(85vw,480px)] -translate-x-1/2 rounded-[50%] bg-[linear-gradient(to_bottom,#181521,#07070D)] shadow-[0_-20px_30px_rgba(255,255,255,0.4)] blur-[0.5px]"></div>
        <div className="absolute top-[calc(2rem-1px)] left-1/2 -z-2 h-[min(80vw,425px)] w-[min(85vw,480px)] -translate-x-1/2 rounded-[50%] bg-white blur-[1px]"></div>

        <h1 className="font-hero-title [font-size:var(--fs-5)] [font-weight:300]">
          Youssef Essam
        </h1>

        <p className="font-hero-subtitle text-subtitle my-2 [font-size:var(--fs-3)]">
          Portfolio under construction
        </p>

        <p className="font-sansation-light text-subtitle mx-auto my-8 max-w-lg [font-size:var(--fs-2)]">
          I&apos;m rebuilding this site — check back soon.
        </p>
      </section>
    </div>
  );
}
