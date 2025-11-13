import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Progress } from "@/components/ui/progress";
import { ArrowLeft, Droplet, Plus, Minus } from "lucide-react";
import { toast } from "sonner";

const DAILY_GOAL = 8; // 8 glasses

const Hydration = () => {
  const navigate = useNavigate();
  const [glasses, setGlasses] = useState(3);
  
  const percentage = (glasses / DAILY_GOAL) * 100;

  const addGlass = () => {
    if (glasses < DAILY_GOAL + 4) {
      setGlasses(glasses + 1);
      if (glasses + 1 === DAILY_GOAL) {
        toast.success("🎉 ¡Meta diaria alcanzada!", {
          description: "Excelente hidratación hoy",
        });
      } else {
        toast.success("💧 ¡Un vaso más!", {
          description: `${glasses + 1}/${DAILY_GOAL} vasos`,
        });
      }
    }
  };

  const removeGlass = () => {
    if (glasses > 0) {
      setGlasses(glasses - 1);
      toast.info("Vaso eliminado", {
        description: `${glasses - 1}/${DAILY_GOAL} vasos`,
      });
    }
  };

  return (
    <div className="min-h-screen bg-background pb-6">
      {/* Header */}
      <header className="gradient-secondary text-white p-6 shadow-medium">
        <div className="max-w-4xl mx-auto">
          <Button
            variant="ghost"
            size="icon"
            onClick={() => navigate("/dashboard")}
            className="text-white hover:bg-white/20 mb-4"
          >
            <ArrowLeft size={24} />
          </Button>
          <h1 className="text-3xl font-bold">Hidratación</h1>
          <p className="text-white/90 mt-1">Mantén tu cuerpo hidratado</p>
        </div>
      </header>

      {/* Main Content */}
      <main className="max-w-4xl mx-auto px-6 mt-6 space-y-6">
        {/* Progress Card */}
        <Card className="p-8 shadow-medium border-0 bg-gradient-to-br from-secondary/5 to-info/5">
          <div className="text-center space-y-6">
            <div className="flex justify-center">
              <div className="relative">
                <div className="w-32 h-32 rounded-full bg-gradient-to-br from-secondary to-info flex items-center justify-center shadow-large">
                  <Droplet size={48} className="text-white" fill="currentColor" />
                </div>
                {percentage >= 100 && (
                  <div className="absolute -top-2 -right-2 bg-success text-white rounded-full w-10 h-10 flex items-center justify-center text-xl animate-bounce">
                    ✓
                  </div>
                )}
              </div>
            </div>

            <div>
              <p className="text-5xl font-bold text-foreground mb-2">
                {glasses}/{DAILY_GOAL}
              </p>
              <p className="text-muted-foreground">vasos de agua hoy</p>
            </div>

            <Progress value={percentage} className="h-3" />

            <p className="text-sm text-muted-foreground">
              {percentage >= 100
                ? "¡Meta alcanzada! 🎉"
                : `Te faltan ${DAILY_GOAL - glasses} vasos para tu meta`}
            </p>
          </div>
        </Card>

        {/* Controls */}
        <Card className="p-6 shadow-soft border-0">
          <div className="flex items-center justify-center gap-6">
            <Button
              onClick={removeGlass}
              disabled={glasses === 0}
              size="lg"
              variant="outline"
              className="rounded-full w-16 h-16 p-0"
            >
              <Minus size={24} />
            </Button>

            <Button
              onClick={addGlass}
              size="lg"
              className="rounded-full w-20 h-20 p-0 bg-gradient-to-br from-secondary to-info hover:opacity-90 shadow-medium"
            >
              <Plus size={32} />
            </Button>
          </div>

          <p className="text-center text-sm text-muted-foreground mt-4">
            Toca + para agregar un vaso
          </p>
        </Card>

        {/* Tips */}
        <Card className="p-6 shadow-soft border-0 bg-info/5">
          <h3 className="font-semibold text-foreground mb-3 flex items-center gap-2">
            <Droplet size={20} className="text-info" />
            Consejos de hidratación
          </h3>
          <ul className="space-y-2 text-sm text-muted-foreground">
            <li className="flex items-start gap-2">
              <span className="text-info">•</span>
              <span>Bebe agua al despertar para activar tu metabolismo</span>
            </li>
            <li className="flex items-start gap-2">
              <span className="text-info">•</span>
              <span>Lleva una botella contigo durante el día</span>
            </li>
            <li className="flex items-start gap-2">
              <span className="text-info">•</span>
              <span>El agua con limón ayuda a la digestión</span>
            </li>
            <li className="flex items-start gap-2">
              <span className="text-info">•</span>
              <span>Aumenta tu consumo si haces ejercicio</span>
            </li>
          </ul>
        </Card>

        {/* Visual Water Glasses */}
        <Card className="p-6 shadow-soft border-0">
          <h3 className="font-semibold text-foreground mb-4 text-center">
            Tu progreso visual
          </h3>
          <div className="grid grid-cols-4 gap-3">
            {Array.from({ length: DAILY_GOAL }).map((_, index) => (
              <div
                key={index}
                className={`aspect-square rounded-2xl flex items-center justify-center transition-smooth ${
                  index < glasses
                    ? "bg-gradient-to-br from-secondary to-info shadow-medium"
                    : "bg-muted"
                }`}
              >
                <Droplet
                  size={28}
                  className={index < glasses ? "text-white" : "text-muted-foreground"}
                  fill={index < glasses ? "currentColor" : "none"}
                />
              </div>
            ))}
          </div>
        </Card>
      </main>
    </div>
  );
};

export default Hydration;
