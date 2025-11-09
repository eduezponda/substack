import { useParams, useNavigate } from "react-router-dom";

export default function BlogArticle() {
  const { slug } = useParams<{ slug: string }>();
  const navigate = useNavigate();

  const articles = {
    orvana: {
      title: "Orvana Minerals Corporation",
      content:
        "Orvana is a multi-mine gold-copper producer. " +
        "Orvana’s operations consist of the El Vallegold-copper-silver mines in northern Spain " +
        "and the copper-gold-silver Don Mario Mine in Bolivia.",
      image: "/images/home/carousel/orvana.jpg",
    },
    b2gold: {
      title: "B2gold Corporation",
      content:
        "B2Gold is a responsible international senior gold producer headquartered in Vancouver, Canada. " +
        "Founded in 2007, today, B2Gold has operating gold mines in Canada, Mali, Namibia and the Philippines, " +
        "and numerous development and exploration projects in various countries.",
      image: "/images/home/carousel/b2gold.webp",
    },
    alantra: {
      title: "Alantra Partners SA",
      content:
        "Alantra Partners, S.A. is a global, independent investment banking and asset management firm. " +
        "Its investment banking division advises on mergers and acquisitions (M&A), debt, capital markets " +
        "and corporate strategy.",
      image: "/images/home/carousel/alantra.png",
    },
  };

  const article = articles[slug as keyof typeof articles];

  if (!article) {
    return (
      <div className="p-6 text-center">
        <p>Artículo no encontrado</p>
        <button
          onClick={() => navigate("/")}
          className="text-[#004AAD] underline mt-4"
        >
          Go back
        </button>
      </div>
    );
  }

  return (
    <article className="max-w-md mx-auto p-4">
      <img
        src={article.image}
        alt={article.title}
        className="w-full h-full object-contain"
      />
      <h1 className="text-2xl font-bold mb-2 text-[#004AAD]">
        {article.title}
      </h1>
      <p className="text-gray-700 leading-relaxed">{article.content}</p>
      <button
        onClick={() => navigate("/")}
        className="text-[#004AAD] underline mt-6 block"
      >
        ← Go back to home
      </button>
    </article>
  );
}
