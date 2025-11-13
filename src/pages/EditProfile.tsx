import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Card } from "@/components/ui/card";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Textarea } from "@/components/ui/textarea";
import { ArrowLeft, Save, Camera, User, Mail, MapPin, Calendar, Target, Droplets, Activity } from "lucide-react";
import { toast } from "sonner";

const EditProfile = () => {
  const navigate = useNavigate();
  const [profileData, setProfileData] = useState({
    firstName: "María",
    lastName: "Rodríguez",
    email: "maria@ejemplo.com",
    birthDate: "1996-05-15",
    city: "Jamundí, Valle del Cauca",
    bio: "Apasionada por el deporte y la vida saludable. Me encanta correr y practicar yoga.",
    activityLevel: "moderate",
    dailyGoal: "30",
    hydrationGoal: "8",
    phone: "+57 300 123 4567",
    emergencyContact: "Juan Rodríguez - +57 301 987 6543"
  });

  const handleInputChange = (field: string, value: string) => {
    setProfileData(prev => ({
      ...prev,
      [field]: value
    }));
  };

  const handleSave = () => {
    // Validaciones básicas
    if (!profileData.firstName || !profileData.lastName || !profileData.email) {
      toast.error("Por favor completa los campos obligatorios");
      return;
    }

    // Validación de email
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(profileData.email)) {
      toast.error("Por favor ingresa un correo electrónico válido");
      return;
    }

    // Simulación de guardado exitoso
    toast.success("Perfil actualizado exitosamente", {
      description: "Tus cambios se han guardado correctamente"
    });
    setTimeout(() => {
      navigate("/profile");
    }, 1000);
  };

  return (
    <div className="min-h-screen bg-background pb-6">
      {/* Header */}
      <header className="gradient-hero text-white p-6 shadow-medium">
        <div className="max-w-4xl mx-auto">
          <Button
            variant="ghost"
            size="icon"
            onClick={() => navigate("/profile")}
            className="text-white hover:bg-white/20 mb-4"
          >
            <ArrowLeft size={24} />
          </Button>
          <h1 className="text-3xl font-bold">Editar Perfil</h1>
          <p className="text-white/90 mt-1">Actualiza tu información personal</p>
        </div>
      </header>

      <main className="max-w-4xl mx-auto px-6 mt-6 space-y-6">
        {/* Foto de perfil */}
        <Card className="p-6 shadow-medium border-0">
          <div className="flex items-center gap-6">
            <div className="relative">
              <div className="w-24 h-24 rounded-full bg-gradient-to-br from-primary to-accent flex items-center justify-center text-white text-3xl font-bold shadow-large">
                M
              </div>
              <Button
                size="icon"
                className="absolute -bottom-2 -right-2 w-8 h-8 rounded-full bg-primary hover:bg-accent shadow-medium"
                onClick={() => toast.info("Función de cámara próximamente")}
              >
                <Camera size={16} />
              </Button>
            </div>
            <div className="flex-1">
              <h3 className="text-xl font-bold text-foreground mb-2">
                Foto de Perfil
              </h3>
              <p className="text-muted-foreground mb-3">
                Toca la cámara para cambiar tu foto
              </p>
              <Button
                variant="outline"
                size="sm"
                onClick={() => toast.info("Función de galería próximamente")}
              >
                Cambiar foto
              </Button>
            </div>
          </div>
        </Card>

        {/* Información personal */}
        <Card className="p-6 shadow-medium border-0">
          <h3 className="text-xl font-bold text-foreground mb-6 flex items-center gap-2">
            <User className="text-primary" size={24} />
            Información Personal
          </h3>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="space-y-2">
              <Label htmlFor="firstName">Nombre *</Label>
              <Input
                id="firstName"
                value={profileData.firstName}
                onChange={(e) => handleInputChange("firstName", e.target.value)}
                className="h-12"
              />
            </div>
            
            <div className="space-y-2">
              <Label htmlFor="lastName">Apellido *</Label>
              <Input
                id="lastName"
                value={profileData.lastName}
                onChange={(e) => handleInputChange("lastName", e.target.value)}
                className="h-12"
              />
            </div>
            
            <div className="space-y-2">
              <Label htmlFor="email">Correo electrónico *</Label>
              <div className="relative">
                <Mail className="absolute left-3 top-1/2 transform -translate-y-1/2 text-muted-foreground" size={20} />
                <Input
                  id="email"
                  type="email"
                  value={profileData.email}
                  onChange={(e) => handleInputChange("email", e.target.value)}
                  className="h-12 pl-10"
                />
              </div>
            </div>
            
            <div className="space-y-2">
              <Label htmlFor="phone">Teléfono</Label>
              <Input
                id="phone"
                value={profileData.phone}
                onChange={(e) => handleInputChange("phone", e.target.value)}
                className="h-12"
                placeholder="+57 300 123 4567"
              />
            </div>
            
            <div className="space-y-2">
              <Label htmlFor="birthDate">Fecha de nacimiento</Label>
              <div className="relative">
                <Calendar className="absolute left-3 top-1/2 transform -translate-y-1/2 text-muted-foreground" size={20} />
                <Input
                  id="birthDate"
                  type="date"
                  value={profileData.birthDate}
                  onChange={(e) => handleInputChange("birthDate", e.target.value)}
                  className="h-12 pl-10"
                />
              </div>
            </div>
            
            <div className="space-y-2">
              <Label htmlFor="city">Ciudad</Label>
              <div className="relative">
                <MapPin className="absolute left-3 top-1/2 transform -translate-y-1/2 text-muted-foreground" size={20} />
                <Input
                  id="city"
                  value={profileData.city}
                  onChange={(e) => handleInputChange("city", e.target.value)}
                  className="h-12 pl-10"
                />
              </div>
            </div>
          </div>

          <div className="mt-6 space-y-2">
            <Label htmlFor="bio">Biografía</Label>
            <Textarea
              id="bio"
              placeholder="Cuéntanos sobre ti..."
              value={profileData.bio}
              onChange={(e) => handleInputChange("bio", e.target.value)}
              className="min-h-[100px] resize-none"
            />
          </div>
        </Card>

        {/* Objetivos y metas */}
        <Card className="p-6 shadow-medium border-0">
          <h3 className="text-xl font-bold text-foreground mb-6 flex items-center gap-2">
            <Target className="text-primary" size={24} />
            Objetivos y Metas
          </h3>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="space-y-2">
              <Label htmlFor="activityLevel">Nivel de actividad física</Label>
              <Select 
                value={profileData.activityLevel} 
                onValueChange={(value) => handleInputChange("activityLevel", value)}
              >
                <SelectTrigger className="h-12">
                  <SelectValue placeholder="Selecciona tu nivel" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="sedentary">Sedentario</SelectItem>
                  <SelectItem value="light">Ligero</SelectItem>
                  <SelectItem value="moderate">Moderado</SelectItem>
                  <SelectItem value="active">Activo</SelectItem>
                  <SelectItem value="very-active">Muy activo</SelectItem>
                </SelectContent>
              </Select>
            </div>
            
            <div className="space-y-2">
              <Label htmlFor="dailyGoal">Meta diaria de ejercicio (minutos)</Label>
              <div className="relative">
                <Activity className="absolute left-3 top-1/2 transform -translate-y-1/2 text-muted-foreground" size={20} />
                <Input
                  id="dailyGoal"
                  type="number"
                  value={profileData.dailyGoal}
                  onChange={(e) => handleInputChange("dailyGoal", e.target.value)}
                  className="h-12 pl-10"
                  min="5"
                  max="300"
                />
              </div>
            </div>
            
            <div className="space-y-2">
              <Label htmlFor="hydrationGoal">Meta diaria de hidratación (vasos)</Label>
              <div className="relative">
                <Droplets className="absolute left-3 top-1/2 transform -translate-y-1/2 text-muted-foreground" size={20} />
                <Input
                  id="hydrationGoal"
                  type="number"
                  value={profileData.hydrationGoal}
                  onChange={(e) => handleInputChange("hydrationGoal", e.target.value)}
                  className="h-12 pl-10"
                  min="1"
                  max="20"
                />
              </div>
            </div>
          </div>
        </Card>

        {/* Contacto de emergencia */}
        <Card className="p-6 shadow-medium border-0">
          <h3 className="text-xl font-bold text-foreground mb-6 flex items-center gap-2">
            <User className="text-primary" size={24} />
            Contacto de Emergencia
          </h3>
          
          <div className="space-y-4">
            <div className="space-y-2">
              <Label htmlFor="emergencyContact">Contacto de emergencia</Label>
              <Input
                id="emergencyContact"
                value={profileData.emergencyContact}
                onChange={(e) => handleInputChange("emergencyContact", e.target.value)}
                className="h-12"
                placeholder="Nombre - Teléfono"
              />
            </div>
          </div>
        </Card>

        {/* Botones de acción */}
        <div className="flex gap-4">
          <Button
            variant="outline"
            onClick={() => navigate("/profile")}
            className="flex-1 h-12"
          >
            <ArrowLeft className="mr-2" size={20} />
            Cancelar
          </Button>
          <Button
            onClick={handleSave}
            className="flex-1 h-12 bg-primary hover:bg-accent text-white font-semibold rounded-xl transition-smooth"
          >
            <Save className="mr-2" size={20} />
            Guardar Cambios
          </Button>
        </div>
      </main>
    </div>
  );
};

export default EditProfile;



