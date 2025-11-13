import { useNavigate } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { ArrowLeft, Clock, User } from "lucide-react";

const blogPosts = [
  {
    id: 1,
    title: "5 Beneficios del Ejercicio Regular",
    excerpt: "Descubre cómo el ejercicio regular puede transformar tu vida física y mental...",
    image: "https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?w=800&h=400&fit=crop&crop=center",
    author: "Dr. Carlos Pérez",
    date: "15 de Mayo, 2024",
    readTime: "5 min",
    category: "Ejercicio",
    content: `El ejercicio regular es una de las mejores inversiones que puedes hacer para tu salud. No se trata solo de verse bien, sino de sentirse bien y vivir una vida más larga y saludable.

## Beneficios Físicos

1. **Fortalece el corazón**: El ejercicio cardiovascular regular fortalece el músculo cardíaco, mejora la circulación y reduce el riesgo de enfermedades cardíacas.

2. **Fortalece los huesos**: Los ejercicios de carga como caminar, correr y levantar pesas ayudan a mantener la densidad ósea y prevenir la osteoporosis.

3. **Mejora la flexibilidad**: Los estiramientos regulares mantienen las articulaciones flexibles y reducen el riesgo de lesiones.

4. **Control del peso**: El ejercicio quema calorías y ayuda a mantener un peso saludable cuando se combina con una dieta balanceada.

5. **Mejora la resistencia**: Con el tiempo, el ejercicio regular aumenta tu capacidad pulmonar y resistencia muscular.

## Beneficios Mentales

El ejercicio no solo beneficia tu cuerpo, sino también tu mente. Libera endorfinas, las "hormonas de la felicidad", que pueden mejorar tu estado de ánimo y reducir el estrés y la ansiedad.

## Recomendaciones

La Organización Mundial de la Salud recomienda al menos 150 minutos de actividad física moderada por semana, o 75 minutos de actividad vigorosa.

¡Comienza con pequeños pasos y construye una rutina que funcione para ti!`
  },
  {
    id: 2,
    title: "Hidratación: Más Importante de lo que Piensas",
    excerpt: "El agua es esencial para tu salud. Aprende cuánto necesitas realmente...",
    image: "https://detrujillo.com/wp-content/uploads/2016/08/beneficios-correcta-hidratacion.jpg",
    author: "Nutricionista Ana López",
    date: "12 de Mayo, 2024",
    readTime: "4 min",
    category: "Hidratación",
    content: `La hidratación adecuada es fundamental para el funcionamiento óptimo de nuestro cuerpo. El agua representa aproximadamente el 60% del peso corporal en adultos y participa en prácticamente todos los procesos fisiológicos.

## ¿Por qué es tan importante el agua?

1. **Regulación de la temperatura**: El sudor es el mecanismo principal que usa nuestro cuerpo para enfriarse.

2. **Transporte de nutrientes**: El agua transporta vitaminas, minerales y otros nutrientes a las células.

3. **Eliminación de desechos**: Ayuda a los riñones a filtrar y eliminar toxinas del cuerpo.

4. **Lubricación de articulaciones**: Mantiene las articulaciones lubricadas y reduce el riesgo de lesiones.

5. **Función cerebral**: Incluso una deshidratación leve puede afectar la concentración y el estado de ánimo.

## ¿Cuánta agua necesitas?

La regla de los "8 vasos al día" es un buen punto de partida, pero las necesidades varían según:
- Tu nivel de actividad física
- El clima donde vives
- Tu edad y peso
- Tu estado de salud general

## Señales de deshidratación

- Sed
- Fatiga
- Mareos
- Orina oscura
- Piel seca
- Dolores de cabeza

## Consejos para mantenerse hidratado

- Lleva siempre una botella de agua
- Bebe agua antes, durante y después del ejercicio
- Consume frutas y verduras con alto contenido de agua
- Limita el consumo de alcohol y cafeína

¡Recuerda que la sed es un indicador tardío de deshidratación, así que bebe agua regularmente!`
  },
  {
    id: 3,
    title: "Nutrición Balanceada: Guía para Principiantes",
    excerpt: "Conoce los fundamentos de una alimentación equilibrada y saludable...",
    image: "https://images.unsplash.com/photo-1490645935967-10de6ba17061?w=800&h=400&fit=crop&crop=center",
    author: "Chef María Rodríguez",
    date: "10 de Mayo, 2024",
    readTime: "7 min",
    category: "Nutrición",
    content: `Una nutrición balanceada es la base de una vida saludable. No se trata de dietas restrictivas, sino de crear hábitos alimentarios sostenibles que nutran tu cuerpo y mente.

## Los macronutrientes esenciales

### 1. Carbohidratos (45-65% de las calorías)
- **Fuentes saludables**: Granos integrales, frutas, verduras, legumbres
- **Función**: Energía principal para el cerebro y músculos
- **Evitar**: Azúcares refinados, harinas blancas procesadas

### 2. Proteínas (10-35% de las calorías)
- **Fuentes**: Carnes magras, pescado, huevos, legumbres, frutos secos
- **Función**: Construcción y reparación de tejidos
- **Recomendación**: 0.8g por kg de peso corporal

### 3. Grasas (20-35% de las calorías)
- **Fuentes saludables**: Aceite de oliva, aguacate, frutos secos, pescado graso
- **Función**: Absorción de vitaminas liposolubles, energía de reserva

## Micronutrientes importantes

### Vitaminas
- **Vitamina C**: Cítricos, fresas, pimientos (sistema inmunológico)
- **Vitamina D**: Pescado graso, lácteos fortificados (huesos)
- **Vitamina B12**: Carne, pescado, lácteos (función nerviosa)

### Minerales
- **Hierro**: Carne roja, espinacas, legumbres (transporte de oxígeno)
- **Calcio**: Lácteos, vegetales de hoja verde (huesos)
- **Zinc**: Carne, mariscos, frutos secos (sistema inmunológico)

## Principios de una dieta balanceada

1. **Variedad**: Incluye alimentos de todos los grupos
2. **Moderación**: Controla las porciones
3. **Equilibrio**: No elimines grupos de alimentos completos
4. **Consistencia**: Mantén horarios regulares de comida

## Planificación de comidas

- **Desayuno**: Proteína + carbohidratos complejos + fruta
- **Almuerzo**: Vegetales + proteína + carbohidrato integral
- **Cena**: Más ligera, enfocada en proteína y vegetales
- **Snacks**: Frutas, frutos secos, yogur

## Errores comunes a evitar

- Saltarse comidas
- Eliminar grupos de alimentos completos
- Depender de suplementos en lugar de alimentos reales
- No beber suficiente agua
- Comer por emociones

¡Recuerda que la nutrición es un viaje, no un destino. Pequeños cambios consistentes generan grandes resultados!`
  },
  {
    id: 4,
    title: "Rutinas de Estiramiento para Evitar Lesiones",
    excerpt: "Protege tu cuerpo con estos estiramientos esenciales antes y después del ejercicio...",
    image: "https://images.unsplash.com/photo-1544367567-0f2fcb009e0b?w=800&h=400&fit=crop&crop=center",
    author: "Fisioterapeuta Juan Martínez",
    date: "8 de Mayo, 2024",
    readTime: "6 min",
    category: "Bienestar",
    content: `Los estiramientos son una parte fundamental de cualquier rutina de ejercicio. No solo mejoran la flexibilidad, sino que también previenen lesiones y mejoran el rendimiento deportivo.

## Tipos de estiramiento

### 1. Estiramiento estático
- Mantén la posición durante 15-30 segundos
- Ideal para enfriamiento
- Mejora la flexibilidad a largo plazo

### 2. Estiramiento dinámico
- Movimientos controlados y repetitivos
- Ideal para calentamiento
- Prepara los músculos para la actividad

### 3. Estiramiento activo
- Usas tu propia fuerza muscular
- Mejora el control neuromuscular
- Ideal para rehabilitación

## Rutina de estiramiento básica

### Para el tren superior
1. **Estiramiento de cuello**: Inclina la cabeza hacia cada lado
2. **Estiramiento de hombros**: Cruza el brazo sobre el pecho
3. **Estiramiento de tríceps**: Lleva el brazo por encima de la cabeza
4. **Estiramiento de pecho**: Extiende los brazos hacia atrás

### Para el tren inferior
1. **Estiramiento de cuádriceps**: Flexiona la pierna hacia atrás
2. **Estiramiento de isquiotibiales**: Extiende la pierna hacia adelante
3. **Estiramiento de pantorrillas**: Apoya las manos en la pared
4. **Estiramiento de glúteos**: Cruza la pierna sobre la rodilla

## Cuándo estirar

### Antes del ejercicio (calentamiento)
- Estiramientos dinámicos
- 5-10 minutos de duración
- Preparar músculos y articulaciones

### Después del ejercicio (enfriamiento)
- Estiramientos estáticos
- 10-15 minutos de duración
- Relajar músculos y prevenir rigidez

## Beneficios del estiramiento regular

- **Previene lesiones**: Reduce el riesgo de desgarros musculares
- **Mejora la flexibilidad**: Aumenta el rango de movimiento
- **Reduce el dolor**: Alivia la tensión muscular
- **Mejora la postura**: Corrige desequilibrios musculares
- **Reduce el estrés**: Relaja la mente y el cuerpo

## Consejos importantes

- Nunca estires hasta sentir dolor
- Mantén la respiración profunda y constante
- Estira ambos lados del cuerpo por igual
- Sé consistente con tu rutina
- Escucha a tu cuerpo

¡Recuerda que el estiramiento debe ser una parte regular de tu rutina de ejercicio, no un lujo opcional!`
  },
];

const Blog = () => {
  const navigate = useNavigate();

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
          <h1 className="text-3xl font-bold">Blog Educativo</h1>
          <p className="text-white/90 mt-1">Aprende sobre salud y bienestar</p>
        </div>
      </header>

      {/* Blog Posts */}
      <main className="max-w-4xl mx-auto px-6 mt-6 space-y-6">
        {blogPosts.map((post) => (
          <Card
            key={post.id}
            className="overflow-hidden shadow-soft hover:shadow-medium transition-smooth border-0 cursor-pointer"
            onClick={() => navigate(`/article/${post.id}`)}
          >
            <div className="md:flex">
              <img
                src={post.image}
                alt={post.title}
                className="w-full md:w-64 h-48 object-cover"
              />
              <div className="p-6 flex-1">
                <div className="flex items-center gap-2 mb-3">
                  <span className="px-3 py-1 bg-primary/10 text-primary rounded-full text-xs font-medium">
                    {post.category}
                  </span>
                  <div className="flex items-center gap-1 text-muted-foreground text-xs">
                    <Clock size={14} />
                    <span>{post.readTime} de lectura</span>
                  </div>
                </div>

                <h3 className="text-xl font-bold text-foreground mb-2 hover:text-primary transition-smooth">
                  {post.title}
                </h3>

                <p className="text-muted-foreground text-sm mb-4 line-clamp-2">
                  {post.excerpt}
                </p>

                <div className="flex items-center gap-2 text-sm text-muted-foreground">
                  <User size={16} />
                  <span>{post.author}</span>
                  <span>•</span>
                  <span>{post.date}</span>
                </div>
              </div>
            </div>
          </Card>
        ))}
      </main>
    </div>
  );
};

export default Blog;
