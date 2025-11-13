import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Progress } from "@/components/ui/progress";
import { ArrowLeft, Play, Clock, Flame } from "lucide-react";
import { toast } from "sonner";

const routines = [
  {
    id: 1,
    name: "Cardio Matutino",
    duration: "20 min",
    calories: 180,
    level: "Principiante",
    exercises: [
      { name: "Saltos", reps: "30 seg", sets: "3" },
      { name: "Burpees", reps: "10", sets: "3" },
      { name: "Rodillas arriba", reps: "20", sets: "3" },
      { name: "Descanso", reps: "30 seg", sets: "3" }
    ],
    image: "https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?w=400&h=250&fit=crop",
  },
  {
    id: 2,
    name: "Fuerza Total",
    duration: "30 min",
    calories: 240,
    level: "Intermedio",
    exercises: [
      { name: "Flexiones", reps: "15", sets: "4" },
      { name: "Sentadillas", reps: "20", sets: "4" },
      { name: "Plancha", reps: "30 seg", sets: "3" },
      { name: "Descanso", reps: "45 seg", sets: "3" }
    ],
    image: "https://images.unsplash.com/photo-1534438327276-14e5300c3a48?w=400&h=250&fit=crop",
  },
  {
    id: 3,
    name: "Yoga Relajante",
    duration: "25 min",
    calories: 120,
    level: "Todos",
    exercises: [
      { name: "Saludo al sol", reps: "5 min", sets: "1" },
      { name: "Guerrero", reps: "1 min c/u", sets: "3" },
      { name: "Árbol", reps: "30 seg c/u", sets: "2" },
      { name: "Relajación", reps: "5 min", sets: "1" }
    ],
    image: "https://images.unsplash.com/photo-1544367567-0f2fcb009e0b?w=400&h=250&fit=crop",
  },
  {
    id: 4,
    name: "HIIT Intenso",
    duration: "15 min",
    calories: 200,
    level: "Avanzado",
    exercises: [
      { name: "Burpees", reps: "15", sets: "4" },
      { name: "Mountain climbers", reps: "30 seg", sets: "4" },
      { name: "Jump squats", reps: "20", sets: "4" },
      { name: "Descanso", reps: "15 seg", sets: "3" }
    ],
    image: "https://images.unsplash.com/photo-1517836357463-d25dfeac3438?w=400&h=250&fit=crop",
  },
];

const Routines = () => {
  const navigate = useNavigate();
  const [activeRoutine, setActiveRoutine] = useState<number | null>(null);
  const [progress, setProgress] = useState(0);

  const startRoutine = (routineId: number) => {
    setActiveRoutine(routineId);
    setProgress(0);
    
    toast.success("¡Rutina iniciada! 💪", {
      description: "Dale con todo, tú puedes",
    });

    // Simulate progress
    const interval = setInterval(() => {
      setProgress((prev) => {
        if (prev >= 100) {
          clearInterval(interval);
          setActiveRoutine(null);
          toast.success("¡Rutina completada! 🎉", {
            description: "Excelente trabajo, sigue así",
          });
          return 0;
        }
        return prev + 10;
      });
    }, 1000);
  };

  return (
    <div className="min-h-screen bg-background pb-6">
      {/* Header */}
      <header className="gradient-primary text-white p-6 shadow-medium">
        <div className="max-w-4xl mx-auto">
          <Button
            variant="ghost"
            size="icon"
            onClick={() => navigate("/dashboard")}
            className="text-white hover:bg-white/20 mb-4"
          >
            <ArrowLeft size={24} />
          </Button>
          <h1 className="text-3xl font-bold">Rutinas de Ejercicio</h1>
          <p className="text-white/90 mt-1">Elige tu entrenamiento del día</p>
        </div>
      </header>

      {/* Routines List */}
      <main className="max-w-4xl mx-auto px-6 mt-6 space-y-4">
        {routines.map((routine) => (
          <Card
            key={routine.id}
            className="overflow-hidden shadow-soft hover:shadow-medium transition-smooth border-0"
          >
            <img
              src={routine.image}
              alt={routine.name}
              className="w-full h-48 object-cover"
            />
            <div className="p-5 space-y-4">
              <div className="flex justify-between items-start">
                <div className="flex-1">
                  <h3 className="text-xl font-semibold text-foreground mb-2">
                    {routine.name}
                  </h3>
                  <div className="flex flex-wrap gap-3 text-sm">
                    <div className="flex items-center gap-1 text-muted-foreground">
                      <Clock size={16} />
                      <span>{routine.duration}</span>
                    </div>
                    <div className="flex items-center gap-1 text-muted-foreground">
                      <Flame size={16} />
                      <span>{routine.calories} cal</span>
                    </div>
                    <span className="px-3 py-1 bg-primary/10 text-primary rounded-full text-xs font-medium">
                      {routine.level}
                    </span>
                  </div>
                </div>
              </div>

              {/* Exercises */}
              <div className="space-y-2">
                <h4 className="text-sm font-semibold text-foreground">Ejercicios:</h4>
                <div className="grid grid-cols-1 gap-2">
                  {routine.exercises.map((exercise, idx) => (
                    <div
                      key={idx}
                      className="flex justify-between items-center px-3 py-2 bg-muted rounded-lg text-sm"
                    >
                      <span className="font-medium text-foreground">{exercise.name}</span>
                      <div className="flex gap-2 text-muted-foreground">
                        <span>{exercise.reps}</span>
                        <span className="text-primary">×</span>
                        <span>{exercise.sets}</span>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Progress or Start Button */}
              {activeRoutine === routine.id ? (
                <div className="space-y-2">
                  <div className="flex justify-between text-sm">
                    <span className="text-muted-foreground">En progreso...</span>
                    <span className="font-semibold text-primary">{progress}%</span>
                  </div>
                  <Progress value={progress} className="h-2" />
                </div>
              ) : (
                <Button
                  onClick={() => startRoutine(routine.id)}
                  disabled={activeRoutine !== null}
                  className="w-full bg-primary hover:bg-accent text-white font-semibold rounded-xl transition-smooth"
                >
                  <Play size={18} className="mr-2" />
                  Iniciar Rutina
                </Button>
              )}
            </div>
          </Card>
        ))}
      </main>
    </div>
  );
};

export default Routines;
