import { useNavigate } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Switch } from "@/components/ui/switch";
import { Label } from "@/components/ui/label";
import { ArrowLeft, User, Bell, Target, LogOut } from "lucide-react";
import { toast } from "sonner";

const Profile = () => {
  const navigate = useNavigate();

  const handleLogout = () => {
    toast.success("Sesión cerrada", {
      description: "¡Vuelve pronto!",
    });
    setTimeout(() => navigate("/"), 1000);
  };

  return (
    <div className="min-h-screen bg-background pb-6">
      {/* Header */}
      <header className="gradient-hero text-white p-6 shadow-medium">
        <div className="max-w-4xl mx-auto">
          <Button
            variant="ghost"
            size="icon"
            onClick={() => navigate("/dashboard")}
            className="text-white hover:bg-white/20 mb-4"
          >
            <ArrowLeft size={24} />
          </Button>
          <h1 className="text-3xl font-bold">Mi Perfil</h1>
          <p className="text-white/90 mt-1">Configuración y preferencias</p>
        </div>
      </header>

      {/* Profile Info */}
      <main className="max-w-4xl mx-auto px-6 mt-6 space-y-4">
        <Card className="p-6 shadow-medium border-0">
          <div className="flex items-center gap-4">
            <div className="w-20 h-20 rounded-full bg-gradient-to-br from-primary to-accent flex items-center justify-center text-white text-3xl font-bold shadow-large">
              M
            </div>
            <div className="flex-1">
              <h2 className="text-2xl font-bold text-foreground">María Rodríguez</h2>
              <p className="text-muted-foreground">maria@ejemplo.com</p>
              <p className="text-sm text-muted-foreground mt-1">
                Jamundí, Valle del Cauca 🇨🇴
              </p>
            </div>
          </div>
        </Card>

        {/* Stats */}
        <Card className="p-6 shadow-soft border-0">
          <h3 className="font-semibold text-foreground mb-4 flex items-center gap-2">
            <Target size={20} className="text-primary" />
            Estadísticas
          </h3>
          <div className="grid grid-cols-2 gap-4">
            <div className="text-center p-4 bg-primary/5 rounded-xl">
              <p className="text-3xl font-bold text-primary mb-1">5</p>
              <p className="text-sm text-muted-foreground">Nivel actual</p>
            </div>
            <div className="text-center p-4 bg-secondary/5 rounded-xl">
              <p className="text-3xl font-bold text-secondary mb-1">12</p>
              <p className="text-sm text-muted-foreground">Entrenamientos</p>
            </div>
            <div className="text-center p-4 bg-accent/5 rounded-xl">
              <p className="text-3xl font-bold text-accent mb-1">8</p>
              <p className="text-sm text-muted-foreground">Medallas</p>
            </div>
            <div className="text-center p-4 bg-warning/5 rounded-xl">
              <p className="text-3xl font-bold text-warning mb-1">15</p>
              <p className="text-sm text-muted-foreground">Días activos</p>
            </div>
          </div>
        </Card>

        {/* User Details */}
        <Card className="p-6 shadow-soft border-0">
          <h3 className="font-semibold text-foreground mb-4 flex items-center gap-2">
            <User size={20} className="text-primary" />
            Información Personal
          </h3>
          <div className="space-y-3">
            <div className="flex justify-between py-2 border-b border-border">
              <span className="text-muted-foreground">Edad</span>
              <span className="font-medium text-foreground">28 años</span>
            </div>
            <div className="flex justify-between py-2 border-b border-border">
              <span className="text-muted-foreground">Nivel de actividad</span>
              <span className="font-medium text-foreground">Intermedio</span>
            </div>
            <div className="flex justify-between py-2 border-b border-border">
              <span className="text-muted-foreground">Meta diaria</span>
              <span className="font-medium text-foreground">30 min ejercicio</span>
            </div>
            <div className="flex justify-between py-2">
              <span className="text-muted-foreground">Hidratación</span>
              <span className="font-medium text-foreground">8 vasos/día</span>
            </div>
          </div>
          <Button
            variant="outline"
            onClick={() => navigate("/edit-profile")}
            className="w-full mt-4 border-primary text-primary hover:bg-primary hover:text-white"
          >
            Editar perfil
          </Button>
        </Card>

        {/* Notifications */}
        <Card className="p-6 shadow-soft border-0">
          <h3 className="font-semibold text-foreground mb-4 flex items-center gap-2">
            <Bell size={20} className="text-primary" />
            Notificaciones
          </h3>
          <div className="space-y-4">
            <div className="flex items-center justify-between">
              <div className="space-y-0.5">
                <Label htmlFor="notifications-exercise" className="text-foreground">
                  Recordatorios de ejercicio
                </Label>
                <p className="text-sm text-muted-foreground">
                  Recibe alertas para tu rutina diaria
                </p>
              </div>
              <Switch id="notifications-exercise" defaultChecked />
            </div>
            <div className="flex items-center justify-between">
              <div className="space-y-0.5">
                <Label htmlFor="notifications-water" className="text-foreground">
                  Recordatorios de agua
                </Label>
                <p className="text-sm text-muted-foreground">
                  Mantente hidratado durante el día
                </p>
              </div>
              <Switch id="notifications-water" defaultChecked />
            </div>
            <div className="flex items-center justify-between">
              <div className="space-y-0.5">
                <Label htmlFor="notifications-achievements" className="text-foreground">
                  Logros y medallas
                </Label>
                <p className="text-sm text-muted-foreground">
                  Celebra tus victorias
                </p>
              </div>
              <Switch id="notifications-achievements" defaultChecked />
            </div>
          </div>
        </Card>

        {/* Logout */}
        <Button
          onClick={handleLogout}
          variant="destructive"
          className="w-full rounded-xl py-6 font-semibold shadow-soft hover:shadow-medium transition-smooth"
        >
          <LogOut size={20} className="mr-2" />
          Cerrar Sesión
        </Button>
      </main>
    </div>
  );
};

export default Profile;
