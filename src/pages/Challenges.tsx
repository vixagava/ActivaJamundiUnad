import { useNavigate } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Progress } from "@/components/ui/progress";
import { ArrowLeft, Trophy, Award, Target, Zap } from "lucide-react";

const badges = [
  { id: 1, name: "Primer Paso", earned: true, icon: "🏃" },
  { id: 2, name: "Hidratado", earned: true, icon: "💧" },
  { id: 3, name: "Semana Activa", earned: true, icon: "⚡" },
  { id: 4, name: "Nutrición Pro", earned: true, icon: "🥗" },
  { id: 5, name: "Madrugador", earned: false, icon: "🌅" },
  { id: 6, name: "Constancia", earned: false, icon: "📅" },
  { id: 7, name: "Súper Fit", earned: false, icon: "💪" },
  { id: 8, name: "Maestro", earned: false, icon: "🏆" },
];

const challenges = [
  {
    id: 1,
    title: "7 Días Activos",
    description: "Completa al menos una rutina por 7 días seguidos",
    progress: 5,
    total: 7,
    reward: "Medalla Constancia",
    color: "from-primary to-accent",
  },
  {
    id: 2,
    title: "Hidratación Total",
    description: "Alcanza tu meta de agua 5 días esta semana",
    progress: 3,
    total: 5,
    reward: "Medalla Hidratado Pro",
    color: "from-secondary to-info",
  },
  {
    id: 3,
    title: "100 Flexiones",
    description: "Haz 100 flexiones esta semana (acumuladas)",
    progress: 45,
    total: 100,
    reward: "Medalla Fuerza",
    color: "from-warning to-primary",
  },
];

const Challenges = () => {
  const navigate = useNavigate();
  const earnedBadges = badges.filter((b) => b.earned).length;

  return (
    <div className="min-h-screen bg-background pb-6">
      {/* Header */}
      <header className="bg-gradient-to-br from-warning to-primary text-white p-6 shadow-medium">
        <div className="max-w-4xl mx-auto">
          <Button
            variant="ghost"
            size="icon"
            onClick={() => navigate("/dashboard")}
            className="text-white hover:bg-white/20 mb-4"
          >
            <ArrowLeft size={24} />
          </Button>
          <h1 className="text-3xl font-bold">Desafíos y Recompensas</h1>
          <p className="text-white/90 mt-1">Gana medallas y sube de nivel</p>
        </div>
      </header>

      {/* Main Content */}
      <main className="max-w-4xl mx-auto px-4 md:px-6 mt-4 md:mt-6 space-y-4 md:space-y-6">
        {/* Level Card */}
        <Card className="p-4 md:p-6 shadow-medium border-0 bg-gradient-to-br from-warning/10 to-primary/10">
          <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between mb-4 gap-4">
            <div>
              <p className="text-xs md:text-sm text-muted-foreground mb-1">Tu nivel actual</p>
              <div className="flex items-center gap-2 md:gap-3">
                <Trophy size={24} className="md:w-8 md:h-8 text-primary" />
                <div>
                  <p className="text-2xl md:text-3xl font-bold text-foreground">Nivel 5</p>
                  <p className="text-xs md:text-sm text-muted-foreground">Atleta Activo</p>
                </div>
              </div>
            </div>
            <div className="text-center">
              <p className="text-xl md:text-2xl font-bold text-primary">
                {earnedBadges}/{badges.length}
              </p>
              <p className="text-xs text-muted-foreground">medallas</p>
            </div>
          </div>
          <div className="space-y-2">
            <div className="flex justify-between text-xs md:text-sm">
              <span className="text-muted-foreground">Progreso al nivel 6</span>
              <span className="font-semibold text-primary">75%</span>
            </div>
            <Progress value={75} className="h-1.5 md:h-2" />
          </div>
        </Card>

        {/* Active Challenges */}
        <div>
          <h2 className="text-xl font-semibold text-foreground mb-4 flex items-center gap-2">
            <Target size={24} className="text-primary" />
            Desafíos Activos
          </h2>
          <div className="space-y-4">
            {challenges.map((challenge) => {
              const percentage = (challenge.progress / challenge.total) * 100;
              return (
                <Card
                  key={challenge.id}
                  className="p-4 md:p-5 shadow-soft border-0 hover:shadow-medium transition-smooth"
                >
                  <div className="flex items-start gap-3 md:gap-4">
                    <div
                      className={`w-10 h-10 md:w-12 md:h-12 rounded-xl bg-gradient-to-br ${challenge.color} flex items-center justify-center flex-shrink-0`}
                    >
                      <Zap size={20} className="md:w-6 md:h-6 text-white" />
                    </div>
                    <div className="flex-1 space-y-2 md:space-y-3">
                      <div>
                        <h3 className="font-semibold text-foreground text-sm md:text-base">
                          {challenge.title}
                        </h3>
                        <p className="text-xs md:text-sm text-muted-foreground mt-1">
                          {challenge.description}
                        </p>
                      </div>
                      <div className="space-y-2">
                        <div className="flex justify-between text-xs md:text-sm">
                          <span className="text-muted-foreground">
                            {challenge.progress}/{challenge.total}
                          </span>
                          <span className="font-semibold text-primary">
                            {Math.round(percentage)}%
                          </span>
                        </div>
                        <Progress value={percentage} className="h-1.5 md:h-2" />
                      </div>
                      <div className="flex items-center gap-2 text-xs md:text-sm">
                        <Award size={14} className="md:w-4 md:h-4 text-warning" />
                        <span className="text-muted-foreground">
                          Recompensa: {challenge.reward}
                        </span>
                      </div>
                    </div>
                  </div>
                </Card>
              );
            })}
          </div>
        </div>

        {/* Badges Collection */}
        <div>
          <h2 className="text-xl font-semibold text-foreground mb-4 flex items-center gap-2">
            <Award size={24} className="text-primary" />
            Colección de Medallas
          </h2>
          <Card className="p-4 md:p-6 shadow-soft border-0">
            <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-3 md:gap-4">
              {badges.map((badge) => (
                <div
                  key={badge.id}
                  className={`aspect-square rounded-2xl flex flex-col items-center justify-center transition-smooth ${
                    badge.earned
                      ? "bg-gradient-to-br from-warning to-primary shadow-medium scale-100"
                      : "bg-muted opacity-50 scale-95"
                  }`}
                >
                  <span className="text-2xl md:text-3xl mb-1">{badge.icon}</span>
                  <p
                    className={`text-xs md:text-sm text-center font-medium px-1 leading-tight ${
                      badge.earned ? "text-white" : "text-muted-foreground"
                    }`}
                  >
                    {badge.name}
                  </p>
                </div>
              ))}
            </div>
          </Card>
        </div>

        {/* Motivational Message */}
        <Card className="p-4 md:p-6 shadow-soft border-0 bg-gradient-to-r from-primary/5 to-warning/5">
          <p className="text-center text-foreground font-medium mb-2 text-sm md:text-base">
            ¡Has completado 3 días seguidos! 🔥
          </p>
          <p className="text-center text-xs md:text-sm text-muted-foreground">
            Solo 4 días más para desbloquear la medalla "Constancia"
          </p>
        </Card>
      </main>
    </div>
  );
};

export default Challenges;
