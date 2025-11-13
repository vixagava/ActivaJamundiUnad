import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Card } from "@/components/ui/card";
import { ArrowLeft, Mail, ArrowRight, CheckCircle } from "lucide-react";
import { toast } from "sonner";

const ForgotPassword = () => {
  const navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [step, setStep] = useState(1); // 1: email, 2: verification, 3: success
  const [verificationCode, setVerificationCode] = useState("");
  const [newPassword, setNewPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");

  const handleSendEmail = (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!email) {
      toast.error("Por favor ingresa tu correo electrónico");
      return;
    }

    // Validación básica de email
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      toast.error("Por favor ingresa un correo electrónico válido");
      return;
    }

    toast.success("Código de verificación enviado", {
      description: `Revisa tu correo: ${email}`
    });
    setStep(2);
  };

  const handleVerifyCode = (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!verificationCode) {
      toast.error("Por favor ingresa el código de verificación");
      return;
    }

    if (verificationCode.length !== 6) {
      toast.error("El código debe tener 6 dígitos");
      return;
    }

    // Simulación de verificación exitosa
    toast.success("Código verificado correctamente");
    setStep(3);
  };

  const handleResetPassword = (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!newPassword || !confirmPassword) {
      toast.error("Por favor completa todos los campos");
      return;
    }

    if (newPassword !== confirmPassword) {
      toast.error("Las contraseñas no coinciden");
      return;
    }

    if (newPassword.length < 6) {
      toast.error("La contraseña debe tener al menos 6 caracteres");
      return;
    }

    // Simulación de cambio exitoso
    toast.success("Contraseña actualizada exitosamente", {
      description: "Ya puedes iniciar sesión con tu nueva contraseña"
    });
    setTimeout(() => {
      navigate("/login");
    }, 1500);
  };

  const renderStep1 = () => (
    <form onSubmit={handleSendEmail} className="space-y-6">
      <div className="text-center mb-6">
        <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
          <Mail className="text-primary" size={32} />
        </div>
        <h2 className="text-2xl font-bold text-foreground mb-2">
          ¿Olvidaste tu contraseña?
        </h2>
        <p className="text-muted-foreground">
          No te preocupes, te enviaremos un código de verificación a tu correo
        </p>
      </div>

      <div className="space-y-2">
        <Label htmlFor="email">Correo electrónico</Label>
        <div className="relative">
          <Mail className="absolute left-3 top-1/2 transform -translate-y-1/2 text-muted-foreground" size={20} />
          <Input
            id="email"
            type="email"
            placeholder="tu@email.com"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="h-12 pl-10"
          />
        </div>
      </div>

      <Button
        type="submit"
        className="w-full h-12 bg-primary hover:bg-accent text-white font-semibold rounded-xl transition-smooth"
      >
        Enviar Código de Verificación
        <ArrowRight className="ml-2" size={20} />
      </Button>
    </form>
  );

  const renderStep2 = () => (
    <form onSubmit={handleVerifyCode} className="space-y-6">
      <div className="text-center mb-6">
        <div className="w-16 h-16 bg-secondary/10 rounded-full flex items-center justify-center mx-auto mb-4">
          <Mail className="text-secondary" size={32} />
        </div>
        <h2 className="text-2xl font-bold text-foreground mb-2">
          Verifica tu código
        </h2>
        <p className="text-muted-foreground">
          Ingresa el código de 6 dígitos que enviamos a{" "}
          <span className="font-medium text-foreground">{email}</span>
        </p>
      </div>

      <div className="space-y-2">
        <Label htmlFor="verificationCode">Código de verificación</Label>
        <Input
          id="verificationCode"
          placeholder="123456"
          value={verificationCode}
          onChange={(e) => setVerificationCode(e.target.value.replace(/\D/g, '').slice(0, 6))}
          className="h-12 text-center text-2xl tracking-widest"
          maxLength={6}
        />
      </div>

      <div className="flex gap-3">
        <Button
          type="button"
          variant="outline"
          onClick={() => setStep(1)}
          className="flex-1 h-12"
        >
          <ArrowLeft className="mr-2" size={20} />
          Volver
        </Button>
        <Button
          type="submit"
          className="flex-1 h-12 bg-primary hover:bg-accent text-white font-semibold rounded-xl transition-smooth"
        >
          Verificar
          <ArrowRight className="ml-2" size={20} />
        </Button>
      </div>

      <div className="text-center">
        <p className="text-sm text-muted-foreground">
          ¿No recibiste el código?{" "}
          <button
            onClick={() => {
              toast.info("Reenviando código...");
              setVerificationCode("");
            }}
            className="text-primary font-semibold hover:underline"
          >
            Reenviar
          </button>
        </p>
      </div>
    </form>
  );

  const renderStep3 = () => (
    <form onSubmit={handleResetPassword} className="space-y-6">
      <div className="text-center mb-6">
        <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
          <CheckCircle className="text-green-600" size={32} />
        </div>
        <h2 className="text-2xl font-bold text-foreground mb-2">
          Crea tu nueva contraseña
        </h2>
        <p className="text-muted-foreground">
          Ingresa una nueva contraseña segura para tu cuenta
        </p>
      </div>

      <div className="space-y-4">
        <div className="space-y-2">
          <Label htmlFor="newPassword">Nueva contraseña</Label>
          <Input
            id="newPassword"
            type="password"
            placeholder="••••••••"
            value={newPassword}
            onChange={(e) => setNewPassword(e.target.value)}
            className="h-12"
          />
        </div>

        <div className="space-y-2">
          <Label htmlFor="confirmPassword">Confirmar nueva contraseña</Label>
          <Input
            id="confirmPassword"
            type="password"
            placeholder="••••••••"
            value={confirmPassword}
            onChange={(e) => setConfirmPassword(e.target.value)}
            className="h-12"
          />
        </div>
      </div>

      <div className="space-y-3">
        <Button
          type="button"
          variant="outline"
          onClick={() => setStep(2)}
          className="w-full h-12"
        >
          <ArrowLeft className="mr-2" size={20} />
          Volver
        </Button>
        <Button
          type="submit"
          className="w-full h-12 bg-primary hover:bg-accent text-white font-semibold rounded-xl transition-smooth"
        >
          Actualizar Contraseña
          <CheckCircle className="ml-2" size={20} />
        </Button>
      </div>
    </form>
  );

  return (
    <div className="min-h-screen bg-background flex items-center justify-center p-6">
      <div className="w-full max-w-md">
        <Button
          variant="ghost"
          size="icon"
          onClick={() => navigate("/login")}
          className="mb-4 text-muted-foreground hover:text-foreground"
        >
          <ArrowLeft size={24} />
        </Button>

        <Card className="p-8 shadow-medium border-0">
          <div className="text-center mb-8">
            <h1 className="text-3xl font-bold gradient-text mb-2">
              Activa Jamundí
            </h1>
            <p className="text-muted-foreground">
              Recupera tu cuenta de forma segura
            </p>
          </div>

          {/* Indicador de progreso */}
          <div className="flex justify-center mb-8">
            <div className="flex items-center space-x-2">
              {[1, 2, 3].map((stepNumber) => (
                <div key={stepNumber} className="flex items-center">
                  <div
                    className={`w-8 h-8 rounded-full flex items-center justify-center text-sm font-semibold ${
                      step >= stepNumber
                        ? "bg-primary text-white"
                        : "bg-muted text-muted-foreground"
                    }`}
                  >
                    {stepNumber}
                  </div>
                  {stepNumber < 3 && (
                    <div
                      className={`w-12 h-1 mx-2 ${
                        step > stepNumber ? "bg-primary" : "bg-muted"
                      }`}
                    />
                  )}
                </div>
              ))}
            </div>
          </div>

          {step === 1 && renderStep1()}
          {step === 2 && renderStep2()}
          {step === 3 && renderStep3()}
        </Card>
      </div>
    </div>
  );
};

export default ForgotPassword;



