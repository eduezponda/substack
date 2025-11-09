export default function Hero() {
  return (
    <div className="relative w-full">
      <img
        src="/images/home/hero.jpeg"
        alt="Main section"
        className="w-full h-[calc(100vh-48px)] object-cover"
      />
      <div className="absolute inset-0 flex flex-col justify-center items-start px-10 text-white bg-black/40">
        <h1 className="text-4xl font-bold max-w-xl mb-4">
          You don’t need to be smarter than the rest.<br />
          Just more disciplined.
        </h1>
        <p className="text-lg max-w-lg mb-6">
          We’re building something different. A place for people who care about learning,
          thinking, and investing intelligently.
        </p>
        <button className="bg-orange-500 hover:bg-orange-600 text-white font-semibold py-3 px-6 rounded-full">
          Read our investment theses
        </button>
      </div>
    </div>
  );
}
