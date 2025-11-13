import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { ArrowLeft, Apple, Heart, Leaf, Sparkles } from "lucide-react";
import { toast } from "sonner";

const nutritionTips = [
  {
    id: 1,
    title: "Desayuno Energético",
    description: "Comienza el día con proteínas y frutas frescas para mantener tu energía",
    icon: Apple,
    color: "from-success to-primary",
    isFavorite: false,
  },
  {
    id: 2,
    title: "Snacks Saludables",
    description: "Almendras, nueces y frutas son perfectos entre comidas",
    icon: Heart,
    color: "from-warning to-primary",
    isFavorite: true,
  },
  {
    id: 3,
    title: "Vegetales Coloridos",
    description: "Incluye verduras de diferentes colores en cada comida principal",
    icon: Leaf,
    color: "from-primary to-accent",
    isFavorite: false,
  },
  {
    id: 4,
    title: "Hidratación Constante",
    description: "El agua es esencial para una buena digestión y metabolismo",
    icon: Sparkles,
    color: "from-secondary to-info",
    isFavorite: false,
  },
  {
    id: 5,
    title: "Porciones Balanceadas",
    description: "Controla las cantidades: 50% vegetales, 25% proteína, 25% carbohidratos",
    icon: Apple,
    color: "from-info to-secondary",
    isFavorite: true,
  },
  {
    id: 6,
    title: "Evita Procesados",
    description: "Prefiere alimentos naturales sobre los ultraprocesados",
    icon: Heart,
    color: "from-primary to-success",
    isFavorite: false,
  },
];

const Nutrition = () => {
  const navigate = useNavigate();
  const [tips, setTips] = useState(nutritionTips);

  const toggleFavorite = (id: number) => {
    setTips(
      tips.map((tip) =>
        tip.id === id ? { ...tip, isFavorite: !tip.isFavorite } : tip
      )
    );
    
    const tip = tips.find((t) => t.id === id);
    if (tip) {
      toast.success(
        tip.isFavorite ? "Eliminado de favoritos" : "Agregado a favoritos",
        {
          description: tip.title,
        }
      );
    }
  };

  return (
    <div className="min-h-screen bg-background pb-6">
      {/* Header */}
      <header className="bg-gradient-to-br from-success to-primary text-white p-6 shadow-medium">
        <div className="max-w-4xl mx-auto">
          <Button
            variant="ghost"
            size="icon"
            onClick={() => navigate("/dashboard")}
            className="text-white hover:bg-white/20 mb-4"
          >
            <ArrowLeft size={24} />
          </Button>
          <h1 className="text-3xl font-bold">Nutrición</h1>
          <p className="text-white/90 mt-1">Consejos para alimentarte mejor</p>
        </div>
      </header>

      {/* Main Content */}
      <main className="max-w-4xl mx-auto px-6 mt-6 space-y-4">
        <div className="flex items-center justify-between mb-4">
          <h2 className="text-lg font-semibold text-foreground">
            Consejos del día
          </h2>
          <span className="text-sm text-muted-foreground">
            {tips.filter((t) => t.isFavorite).length} favoritos
          </span>
        </div>

        {tips.map((tip) => {
          const Icon = tip.icon;
          return (
            <Card
              key={tip.id}
              className="overflow-hidden shadow-soft hover:shadow-medium transition-smooth border-0"
            >
              <div className="flex">
                <div
                  className={`w-24 flex items-center justify-center bg-gradient-to-br ${tip.color}`}
                >
                  <Icon size={32} className="text-white" />
                </div>
                <div className="flex-1 p-4">
                  <div className="flex items-start justify-between mb-2">
                    <h3 className="font-semibold text-foreground">
                      {tip.title}
                    </h3>
                    <Button
                      variant="ghost"
                      size="sm"
                      onClick={() => toggleFavorite(tip.id)}
                      className="text-2xl leading-none p-1 h-auto hover:bg-transparent"
                    >
                      {tip.isFavorite ? "❤️" : "🤍"}
                    </Button>
                  </div>
                  <p className="text-sm text-muted-foreground leading-relaxed">
                    {tip.description}
                  </p>
                </div>
              </div>
            </Card>
          );
        })}

        {/* Recipe of the day */}
        <Card className="p-6 shadow-medium border-0 bg-gradient-to-br from-primary/5 to-success/5 mt-8">
          <h3 className="font-bold text-lg text-foreground mb-4 flex items-center gap-2">
            <Sparkles size={20} className="text-primary" />
            Receta del Día
          </h3>
          <div className="space-y-3">
            <h4 className="font-semibold text-foreground">
              Ensalada Tropical Jamundí
            </h4>
            <p className="text-sm text-muted-foreground">
              Ingredientes: Mango, aguacate, tomate, cebolla morada, cilantro,
              limón, sal y pimienta.
            </p>
            <p className="text-sm text-muted-foreground">
              Mezcla todos los ingredientes frescos y disfruta de los sabores
              del Valle del Cauca 🥭🥑
            </p>
            <Button
              variant="outline"
              className="w-full mt-2 border-primary text-primary hover:bg-primary hover:text-white"
              onClick={() => {
                toast.success("Receta Completa 📖", {
                  description: "Preparación: Corta el mango y aguacate en cubos. Pica finamente el tomate, cebolla y cilantro. Mezcla todo en un bowl, agrega jugo de limón, sal y pimienta al gusto. ¡Listo para servir!",
                  duration: 8000,
                });
              }}
            >
              Ver receta completa
            </Button>
          </div>
        </Card>
      </main>
    </div>
  );
};

export default Nutrition;
