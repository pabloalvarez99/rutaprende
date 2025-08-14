"use client";
import { useState, useEffect } from "react";
import Link from "next/link";
import { auth } from "../../lib/firebase";
import { signOut, User } from "firebase/auth";
import { useRouter } from "next/navigation";

interface Material {
  id: string;
  title: string;
  description: string;
  category: string;
  level: string;
  duration: string;
  image: string;
}

const sampleMaterials: Material[] = [
  {
    id: "1",
    title: "Introducción a JavaScript",
    description: "Aprende los fundamentos de JavaScript desde cero. Perfecto para principiantes.",
    category: "Programación",
    level: "Principiante",
    duration: "4 horas",
    image: "🔤"
  },
  {
    id: "2",
    title: "Matemáticas Básicas",
    description: "Refuerza tus conocimientos en álgebra y geometría con ejercicios prácticos.",
    category: "Matemáticas",
    level: "Intermedio",
    duration: "6 horas",
    image: "📐"
  },
  {
    id: "3",
    title: "Historia Universal",
    description: "Un recorrido completo por los acontecimientos más importantes de la humanidad.",
    category: "Historia",
    level: "Intermedio",
    duration: "8 horas",
    image: "📚"
  },
  {
    id: "4",
    title: "React Avanzado",
    description: "Técnicas avanzadas de React: hooks, context, optimización y más.",
    category: "Programación",
    level: "Avanzado",
    duration: "10 horas",
    image: "⚛️"
  },
  {
    id: "5",
    title: "Biología Celular",
    description: "Descubre los secretos de la vida a nivel celular con contenido interactivo.",
    category: "Ciencias",
    level: "Intermedio",
    duration: "5 horas",
    image: "🔬"
  },
  {
    id: "6",
    title: "Inglés Conversacional",
    description: "Mejora tu fluidez en inglés con ejercicios de conversación práctica.",
    category: "Idiomas",
    level: "Intermedio",
    duration: "12 horas",
    image: "🗣️"
  }
];

export default function MaterialsPage() {
  const [user, setUser] = useState<User | null>(null);
  const [loading, setLoading] = useState(true);
  const [selectedCategory, setSelectedCategory] = useState("Todos");
  const [searchTerm, setSearchTerm] = useState("");
  const router = useRouter();

  const categories = ["Todos", "Programación", "Matemáticas", "Historia", "Ciencias", "Idiomas"];

  useEffect(() => {
    const unsubscribe = auth.onAuthStateChanged((user) => {
      setUser(user);
      setLoading(false);
    });

    return () => unsubscribe();
  }, []);

  const handleLogout = async () => {
    try {
      await signOut(auth);
      router.push("/");
    } catch (error) {
      console.error("Error al cerrar sesión:", error);
    }
  };

  const filteredMaterials = sampleMaterials.filter(material => {
    const matchesCategory = selectedCategory === "Todos" || material.category === selectedCategory;
    const matchesSearch = material.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         material.description.toLowerCase().includes(searchTerm.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  if (loading) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100 dark:from-gray-900 dark:to-gray-800 flex items-center justify-center">
        <div className="text-center">
          <div className="animate-spin rounded-full h-32 w-32 border-b-2 border-blue-600 mx-auto mb-4"></div>
          <p className="text-gray-600 dark:text-gray-300">Cargando...</p>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100 dark:from-gray-900 dark:to-gray-800">
      {/* Header */}
      <header className="bg-white/80 dark:bg-gray-800/80 backdrop-blur-sm border-b border-gray-200 dark:border-gray-700">
        <div className="container mx-auto px-4 py-4">
          <div className="flex justify-between items-center">
            <Link href="/" className="flex items-center space-x-2">
              <h1 className="text-2xl font-bold">
                <span className="text-blue-600">Rut</span>
                <span className="text-indigo-600">Aprende</span>
              </h1>
            </Link>
            
            <div className="flex items-center space-x-4">
              {user && (
                <span className="text-sm text-gray-600 dark:text-gray-300">
                  Hola, {user.email}
                </span>
              )}
              <button
                onClick={user ? handleLogout : () => router.push("/login")}
                className="bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded-lg text-sm font-medium transition-colors duration-200"
              >
                {user ? "Cerrar Sesión" : "Iniciar Sesión"}
              </button>
            </div>
          </div>
        </div>
      </header>

      <div className="container mx-auto px-4 py-8">
        {/* Page Title */}
        <div className="text-center mb-8">
          <h1 className="text-4xl font-bold text-gray-900 dark:text-white mb-4">
            Materiales Educativos
          </h1>
          <p className="text-xl text-gray-600 dark:text-gray-300">
            Descubre contenido educativo de calidad para acelerar tu aprendizaje
          </p>
        </div>

        {/* Search and Filters */}
        <div className="bg-white dark:bg-gray-800 rounded-xl shadow-lg p-6 mb-8">
          <div className="flex flex-col md:flex-row gap-4 items-center">
            <div className="flex-1">
              <input
                type="text"
                placeholder="Buscar materiales..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="w-full px-4 py-2 border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent bg-white dark:bg-gray-700 text-gray-900 dark:text-white"
              />
            </div>
            <div className="flex flex-wrap gap-2">
              {categories.map((category) => (
                <button
                  key={category}
                  onClick={() => setSelectedCategory(category)}
                  className={`px-4 py-2 rounded-lg text-sm font-medium transition-colors duration-200 ${
                    selectedCategory === category
                      ? "bg-blue-600 text-white"
                      : "bg-gray-100 dark:bg-gray-700 text-gray-700 dark:text-gray-300 hover:bg-gray-200 dark:hover:bg-gray-600"
                  }`}
                >
                  {category}
                </button>
              ))}
            </div>
          </div>
        </div>

        {/* Materials Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredMaterials.map((material) => (
            <div
              key={material.id}
              className="bg-white dark:bg-gray-800 rounded-xl shadow-lg hover:shadow-xl transition-shadow duration-200 overflow-hidden"
            >
              <div className="p-6">
                <div className="text-4xl mb-4 text-center">{material.image}</div>
                <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-2">
                  {material.title}
                </h3>
                <p className="text-gray-600 dark:text-gray-300 mb-4 text-sm">
                  {material.description}
                </p>
                <div className="flex flex-wrap gap-2 mb-4">
                  <span className="bg-blue-100 dark:bg-blue-900 text-blue-800 dark:text-blue-200 px-2 py-1 rounded-full text-xs font-medium">
                    {material.category}
                  </span>
                  <span className="bg-green-100 dark:bg-green-900 text-green-800 dark:text-green-200 px-2 py-1 rounded-full text-xs font-medium">
                    {material.level}
                  </span>
                  <span className="bg-orange-100 dark:bg-orange-900 text-orange-800 dark:text-orange-200 px-2 py-1 rounded-full text-xs font-medium">
                    {material.duration}
                  </span>
                </div>
                <button className="w-full bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-700 hover:to-indigo-700 text-white font-semibold py-2 px-4 rounded-lg transition-all duration-200 shadow-md hover:shadow-lg">
                  Comenzar Curso
                </button>
              </div>
            </div>
          ))}
        </div>

        {filteredMaterials.length === 0 && (
          <div className="text-center py-16">
            <div className="text-6xl mb-4">📚</div>
            <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-2">
              No se encontraron materiales
            </h3>
            <p className="text-gray-600 dark:text-gray-300">
              Intenta con otros términos de búsqueda o categorías
            </p>
          </div>
        )}
      </div>
    </div>
  );
} 