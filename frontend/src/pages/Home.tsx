import Header from "@/components/layout/Header";

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen">
      <Header />
      <main className="flex p-4 bg-red-500 justify-center">
        <p className="text-center text-white-700">
          Contenido de la Home (placeholder)
        </p>
      </main>
    </div>
  );
}
