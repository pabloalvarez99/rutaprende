"use client";
import { useEffect, useState } from "react";

export default function FirebaseStatus() {
  const [hasFirebaseConfig, setHasFirebaseConfig] = useState(true);

  useEffect(() => {
    // Verificar si las variables de Firebase están configuradas
    const hasConfig = Boolean(
      process.env.NEXT_PUBLIC_FIREBASE_API_KEY && 
      process.env.NEXT_PUBLIC_FIREBASE_API_KEY !== "demo-api-key"
    );
    setHasFirebaseConfig(hasConfig);
  }, []);

  if (hasFirebaseConfig) {
    return null; // No mostrar nada si Firebase está configurado
  }

  return (
    <div className="bg-yellow-50 dark:bg-yellow-900/20 border border-yellow-200 dark:border-yellow-800 rounded-lg p-4 mb-6">
      <div className="flex items-start">
        <div className="flex-shrink-0">
          <svg className="h-5 w-5 text-yellow-400" viewBox="0 0 20 20" fill="currentColor">
            <path fillRule="evenodd" d="M8.257 3.099c.765-1.36 2.722-1.36 3.486 0l5.58 9.92c.75 1.334-.213 2.98-1.742 2.98H4.42c-1.53 0-2.493-1.646-1.743-2.98l5.58-9.92zM11 13a1 1 0 11-2 0 1 1 0 012 0zm-1-8a1 1 0 00-1 1v3a1 1 0 002 0V6a1 1 0 00-1-1z" clipRule="evenodd" />
          </svg>
        </div>
        <div className="ml-3">
          <h3 className="text-sm font-medium text-yellow-800 dark:text-yellow-200">
            Configuración de Firebase pendiente
          </h3>
          <div className="mt-2 text-sm text-yellow-700 dark:text-yellow-300">
            <p>
              La autenticación no está disponible. Para habilitar el login, configura Firebase:
            </p>
            <ol className="mt-2 ml-4 list-decimal">
              <li>Ve a <a href="https://console.firebase.google.com" target="_blank" rel="noopener noreferrer" className="underline">Firebase Console</a></li>
              <li>Crea un proyecto y habilita Authentication</li>
              <li>Agrega las variables de entorno en Vercel</li>
            </ol>
          </div>
        </div>
      </div>
    </div>
  );
} 