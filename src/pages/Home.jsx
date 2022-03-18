import MainNavigation from "./nav/MainNavigation";

export default function Home() {
  return (
    <div>
      <MainNavigation />
      <div className="max-w-2xl mx-auto pb-5 px-4 sm:px-6 lg:max-w-7xl lg:px-8">
        <p className="text-lg mb-8">
          Hello! We are LOOKS RARE.
        </p>
        <ol className="list-decimal list-inside">
          <li>Find infos about the artists</li>
          <li>see all auctions live</li>
        </ol>
        <p className="text-lg mt-8">
          we'll soon update with some statistics and tools, stay tuned!
        </p>
      </div>
    </div>
  );
}
