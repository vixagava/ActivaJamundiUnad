import { useNavigate } from "react-router-dom";
import { Card } from "@/components/ui/card";
import { Activity, Droplets, Apple, Trophy, BookOpen, User } from "lucide-react";
import { Button } from "@/components/ui/button";

const Dashboard = () => {
  const navigate = useNavigate();

  const sections = [
    {
      title: "Rutinas de Ejercicio",
      description: "Entrenamientos personalizados",
      icon: Activity,
      color: "bg-gradient-to-br from-primary to-accent",
      path: "/routines",
    },
    {
      title: "Hidratación",
      description: "Sigue tu consumo de agua",
      icon: Droplets,
      color: "bg-gradient-to-br from-secondary to-info",
      path: "/hydration",
    },
    {
      title: "Nutrición",
      description: "Consejos saludables",
      icon: Apple,
      color: "bg-gradient-to-br from-success to-primary",
      path: "/nutrition",
    },
    {
      title: "Desafíos",
      description: "Medallas y recompensas",
      icon: Trophy,
      color: "bg-gradient-to-br from-warning to-primary",
      path: "/challenges",
    },
    {
      title: "Blog Educativo",
      description: "Aprende más sobre salud",
      icon: BookOpen,
      color: "bg-gradient-to-br from-info to-secondary",
      path: "/blog",
    },
  ];

  return (
    <div className="min-h-screen bg-background">
      {/* Header */}
      <header className="gradient-hero text-white p-6 shadow-medium">
        <div className="max-w-4xl mx-auto">
          <div className="flex justify-between items-center">
            <div>
              <h1 className="text-3xl font-bold mb-1">¡Hola, María! 👋</h1>
              <p className="text-white/90">Listo para activarte hoy</p>
              <br/>
            </div>
            <Button
              variant="ghost"
              size="icon"
              onClick={() => navigate("/profile")}
              className="bg-white/20 hover:bg-white/30 text-white rounded-full"
            >
              <User size={24} />
            </Button>
          </div>
        </div>
      </header>

      {/* Stats Summary */}
      <div className="max-w-4xl mx-auto px-6 -mt-8">
        <Card className="bg-white shadow-medium p-4">
          <div className="grid grid-cols-3 gap-4 text-center">
            <div>
              <p className="text-2xl font-bold text-primary">5</p>
              <p className="text-xs text-muted-foreground">Días activos</p>
            </div>
            <div>
              <p className="text-2xl font-bold text-secondary">12</p>
              <p className="text-xs text-muted-foreground">Entrenamientos</p>
            </div>
            <div>
              <p className="text-2xl font-bold text-accent">8</p>
              <p className="text-xs text-muted-foreground">Medallas</p>
            </div>
          </div>
        </Card>
      </div>

      {/* Main Sections */}
      <main className="max-w-4xl mx-auto p-6 space-y-4">
        <h2 className="text-xl font-semibold text-foreground mb-4">
          Explora tus actividades
        </h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          {sections.map((section, index) => {
            const Icon = section.icon;
            return (
              <Card
                key={index}
                onClick={() => navigate(section.path)}
                className="cursor-pointer overflow-hidden border-0 shadow-soft hover:shadow-medium transition-smooth hover:scale-[1.02] active:scale-[0.98]"
              >
                <div className={`${section.color} p-6 text-white`}>
                  <div className="flex items-start justify-between mb-3">
                    <Icon size={32} strokeWidth={2.5} />
                  </div>
                  <h3 className="text-xl font-semibold mb-1">{section.title}</h3>
                  <p className="text-white/90 text-sm">{section.description}</p>
                </div>
              </Card>
            );
          })}
        </div>

        {/* Motivational Quote */}
        <Card className="bg-gradient-to-r from-primary/10 to-secondary/10 border-0 shadow-soft p-6 mt-8">
          <p className="text-center text-foreground font-medium italic">
            "El único ejercicio malo es el que no haces"
          </p>
          <p className="text-center text-muted-foreground text-sm mt-2">
            — Mantén el ritmo 💪
          </p>
        </Card>
      </main>
    </div>
  );
};

export default Dashboard;
