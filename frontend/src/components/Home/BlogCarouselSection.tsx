import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import { Card, CardContent } from "@/components/ui/card";
import { useNavigate } from "react-router-dom";
import { useState } from "react";

export default function BlogCarouselSection() {
  const navigate = useNavigate();

  const articles = [
    {
      id: 1,
      title: "Orvana Minerals Corp.",
      image: "/images/home/carousel/orvana.jpg",
      slug: "orvana",
    },
    {
      id: 2,
      title: "B2gold Corp.",
      image: "/images/home/carousel/b2gold.webp",
      slug: "b2gold",
    },
    {
      id: 3,
      title: "Alantra Partners",
      image: "/images/home/carousel/alantra.png",
      slug: "alantra",
    },
  ];

  const [currentIndex, setCurrentIndex] = useState(0);

  return (
    <section className="bg-white w-full px-2 py-6">
      <Carousel
        opts={{
          align: "center",
          loop: true,
        }}
        setApi={(api) => {
          if (api) {
            setCurrentIndex(api.selectedScrollSnap());
            api.on("select", () => setCurrentIndex(api.selectedScrollSnap()));
          }
        }}
        className="w-full max-w-sm mx-auto"
      >
        <CarouselContent className="-ml-4">
          {articles.map((article) => {
            return (
              <CarouselItem
                key={article.id}
                className="pl-3 flex justify-center"
              >
                <Card
                  className="w-72 overflow-hidden rounded-2xl shadow-sm active:scale-[0.98] transition-transform"
                  onClick={() => navigate(`/blog/${article.slug}`)}
                >
                  <CardContent className="p-0 h-64 flex flex-col">
                    <div className="flex-1 overflow-hidden">
                      <img
                        src={article.image}
                        alt={article.title}
                        className="w-full h-full object-cover"
                      />
                    </div>
                    <div className="p-3 text-[#004AAD] font-bold text-lg text-center uppercase tracking-wide">
                      {article.title}
                    </div>
                  </CardContent>
                </Card>
              </CarouselItem>
            );
          })}
        </CarouselContent>

        <CarouselPrevious className="absolute left-2 top-1/2 -translate-y-1/2 bg-white/90 rounded-full shadow p-3 scale-110" />
        <CarouselNext className="absolute right-2 top-1/2 -translate-y-1/2 bg-white/90 rounded-full shadow p-3 scale-110" />
      </Carousel>
    </section>
  );
}
