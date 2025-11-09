export default function Header() {
  return (
    <header className="flex items-center justify-between px-4 py-6 bg-white ml-3 mr-3">
      <div className="flex items-center mr-2">
        <img
          src="images/home/logo.png"
          alt="Logo"
          className="w-8 h-8 object-contain"
        />
        <h1 className="text-[#001B64] font-bold text-2xl ml-3">
          Ezponda Capital
        </h1>
      </div>
      <img
        src="images/home/hamburguer.png"
        alt="Menu"
        className="w-6 h-6 object-contain"
      />
    </header>
  );
}
