"use client";
import { useState } from "react";
import Link from "next/link";
import { signInWithEmailAndPassword, createUserWithEmailAndPassword } from "firebase/auth";
import { auth } from "../../lib/firebase";
import { useRouter } from "next/navigation";
import FirebaseStatus from "../../components/FirebaseStatus";

export default function LoginPage() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [isLogin, setIsLogin] = useState(true);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");
  const router = useRouter();

  const isFirebaseConfigured = Boolean(
    process.env.NEXT_PUBLIC_FIREBASE_API_KEY && 
    process.env.NEXT_PUBLIC_FIREBASE_API_KEY !== "demo-api-key"
  );

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!isFirebaseConfigured) {
      setError("Firebase no está configurado. Contacta al administrador.");
      return;
    }

    setLoading(true);
    setError("");

    try {
      if (isLogin) {
        await signInWithEmailAndPassword(auth, email, password);
      } else {
        await createUserWithEmailAndPassword(auth, email, password);
      }
      router.push("/materials");
    } catch (error: unknown) {
      const firebaseError = error as { code?: string; message?: string };
      setError(
        firebaseError.code === "auth/user-not-found" ? "Usuario no encontrado" :
        firebaseError.code === "auth/wrong-password" ? "Contraseña incorrecta" :
        firebaseError.code === "auth/email-already-in-use" ? "El email ya está registrado" :
        firebaseError.code === "auth/weak-password" ? "La contraseña debe tener al menos 6 caracteres" :
        firebaseError.code === "auth/invalid-email" ? "Email inválido" :
        firebaseError.code === "auth/network-request-failed" ? "Error de conexión. Verifica tu internet." :
        firebaseError.code === "auth/too-many-requests" ? "Demasiados intentos. Espera un momento." :
        "Error al autenticar. Verifica tu configuración de Firebase."
      );
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100 dark:from-gray-900 dark:to-gray-800 flex items-center justify-center p-4">
      <div className="max-w-md w-full space-y-8">
        {/* Header */}
        <div className="text-center">
          <Link href="/" className="inline-block">
            <h1 className="text-4xl font-bold mb-2">
              <span className="text-blue-600">Rut</span>
              <span className="text-indigo-600">Aprende</span>
            </h1>
          </Link>
          <h2 className="text-2xl font-semibold text-gray-900 dark:text-white mb-2">
            {isLogin ? "Iniciar Sesión" : "Crear Cuenta"}
          </h2>
          <p className="text-gray-600 dark:text-gray-300">
            {isLogin ? "Bienvenido de vuelta" : "Únete a nuestra comunidad de aprendizaje"}
          </p>
        </div>

        {/* Firebase Status */}
        <FirebaseStatus />

        {/* Form */}
        <form className="bg-white dark:bg-gray-800 rounded-xl shadow-lg p-8 space-y-6" onSubmit={handleSubmit}>
          {error && (
            <div className="bg-red-50 dark:bg-red-900/20 border border-red-200 dark:border-red-800 text-red-600 dark:text-red-400 px-4 py-3 rounded-lg text-sm">
              {error}
            </div>
          )}

          <div>
            <label htmlFor="email" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
              Correo Electrónico
            </label>
            <input
              id="email"
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
              disabled={!isFirebaseConfigured}
              className="w-full px-3 py-2 border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent bg-white dark:bg-gray-700 text-gray-900 dark:text-white disabled:opacity-50 disabled:cursor-not-allowed"
              placeholder="tu@email.com"
            />
          </div>

          <div>
            <label htmlFor="password" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
              Contraseña
            </label>
            <input
              id="password"
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
              disabled={!isFirebaseConfigured}
              className="w-full px-3 py-2 border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent bg-white dark:bg-gray-700 text-gray-900 dark:text-white disabled:opacity-50 disabled:cursor-not-allowed"
              placeholder="••••••••"
            />
          </div>

          <button
            type="submit"
            disabled={loading || !isFirebaseConfigured}
            className="w-full bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-700 hover:to-indigo-700 disabled:opacity-50 disabled:cursor-not-allowed text-white font-semibold py-3 px-4 rounded-lg transition-all duration-200 shadow-lg hover:shadow-xl"
          >
            {loading ? "Procesando..." : 
             !isFirebaseConfigured ? "Firebase no configurado" : 
             (isLogin ? "Iniciar Sesión" : "Crear Cuenta")}
          </button>

          {isFirebaseConfigured && (
            <div className="text-center">
              <button
                type="button"
                onClick={() => setIsLogin(!isLogin)}
                className="text-blue-600 hover:text-blue-700 dark:text-blue-400 dark:hover:text-blue-300 text-sm font-medium"
              >
                {isLogin ? "¿No tienes cuenta? Crear una" : "¿Ya tienes cuenta? Iniciar sesión"}
              </button>
            </div>
          )}
        </form>

        {/* Back to home */}
        <div className="text-center">
          <Link
            href="/"
            className="text-gray-600 dark:text-gray-400 hover:text-gray-900 dark:hover:text-white text-sm transition-colors duration-200"
          >
            ← Volver al inicio
          </Link>
        </div>
      </div>
    </div>
  );
} 