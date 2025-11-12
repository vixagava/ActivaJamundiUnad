import { useNavigate } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Activity, Droplets, Apple, Trophy, Heart } from "lucide-react";

const Index = () => {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen gradient-hero flex flex-col items-center justify-center p-6 text-white overflow-hidden relative">
      {/* Animated background elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-20 left-10 opacity-20 animate-pulse">
          <Activity size={80} />
        </div>
        <div className="absolute bottom-20 right-10 opacity-20 animate-pulse delay-700">
          <Droplets size={60} />
        </div>
        <div className="absolute top-1/2 left-1/4 opacity-10 animate-pulse delay-1000">
          <Apple size={100} />
        </div>
        <div className="absolute top-1/3 right-1/4 opacity-15 animate-pulse delay-500">
          <Trophy size={70} />
        </div>
      </div>

      {/* Main content */}
      <div className="relative z-10 text-center space-y-8 max-w-lg animate-in fade-in duration-700">
        {/* Logo */}
        <div className="flex justify-center mb-6">
          <div className="bg-white/10 backdrop-blur-md p-6 rounded-3xl shadow-large">
            <Heart size={64} className="text-white" strokeWidth={2.5} />
          </div>
        </div>

        {/* Title */}
        <div className="space-y-3">
          <h1 className="text-5xl md:text-6xl font-bold tracking-tight animate-in slide-in-from-bottom-4 duration-700 delay-100">
            Activa Jamundí
          </h1>
          <p className="text-xl md:text-2xl font-light opacity-95 animate-in slide-in-from-bottom-4 duration-700 delay-200">
            Actívate y cuida tu bienestar cada día
          </p>
        </div>

        {/* Features */}
        <div className="flex flex-wrap justify-center gap-3 pt-4 animate-in slide-in-from-bottom-4 duration-700 delay-300">
          <div className="flex items-center gap-2 bg-white/20 backdrop-blur-sm px-4 py-2 rounded-full">
            <Activity size={18} />
            <span className="text-sm font-medium">Ejercicio</span>
          </div>
          <div className="flex items-center gap-2 bg-white/20 backdrop-blur-sm px-4 py-2 rounded-full">
            <Droplets size={18} />
            <span className="text-sm font-medium">Hidratación</span>
          </div>
          <div className="flex items-center gap-2 bg-white/20 backdrop-blur-sm px-4 py-2 rounded-full">
            <Apple size={18} />
            <span className="text-sm font-medium">Nutrición</span>
          </div>
          <div className="flex items-center gap-2 bg-white/20 backdrop-blur-sm px-4 py-2 rounded-full">
            <Trophy size={18} />
            <span className="text-sm font-medium">Desafíos</span>
          </div>
        </div>

        {/* CTA Buttons */}
        <div className="flex flex-col sm:flex-row gap-4 pt-8 animate-in slide-in-from-bottom-4 duration-700 delay-400">
          <Button
            size="lg"
            onClick={() => navigate("/dashboard")}
            className="bg-white text-primary hover:bg-white/90 shadow-large font-semibold text-lg px-8 py-6 rounded-2xl transition-bounce hover:scale-105"
          >
            Comenzar Ahora
          </Button>
          <Button
            size="lg"
            variant="outline"
            onClick={() => navigate("/login")}
            className="bg-white/10 backdrop-blur-sm border-2 border-white text-white hover:bg-white/20 font-semibold text-lg px-8 py-6 rounded-2xl transition-bounce hover:scale-105"
          >
            Entrar
          </Button>
        </div>

        {/* Footer text */}
        <p className="text-sm opacity-80 pt-4 animate-in fade-in duration-700 delay-500">
          Únete a la comunidad de bienestar de Jamundí 🇨🇴
        </p>
      </div>
    </div>
  );
};

export default Index;
