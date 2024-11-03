import { useEffect, useRef, useState } from 'react';

export function useIntersection(threshold: number = 0.5) {
  // `isVisible` mantém o estado de visibilidade do elemento.
  const [isVisible, setIsVisible] = useState(false);
  // `elementRef` é uma referência para o elemento DOM que queremos observar.
  const elementRef = useRef<HTMLDivElement>(null);

  // `useEffect` para configurar o IntersectionObserver quando o componente é montado.
  useEffect(() => {
    // Cria uma instância de `IntersectionObserver` para monitorar a visibilidade do elemento.
    const observer = new IntersectionObserver(
      (entries) => {
        // `entries` é uma lista de todos os elementos sendo observados, embora este código observe apenas um.
        entries.forEach((entry) => {
          // `entry.isIntersecting` será `true` se o elemento estiver visível na viewport.
          if (entry.isIntersecting) {
            // Define `isVisible` como `true` quando o elemento entra na viewport.
            setIsVisible(true);
          } else {
            // Define `isVisible` como `false` quando o elemento sai da viewport.
            setIsVisible(false);
          }
        });
      },
      // Configurações do observador: `threshold` define o quanto do elemento precisa estar visível na viewport.
      { threshold }
    );

    // Verifica se `elementRef.current` está definido antes de iniciar a observação.
    if (elementRef.current) {
      // Observa o elemento referenciado por `elementRef`.
      observer.observe(elementRef.current);
    }

    // Função de limpeza executada quando o componente é desmontado ou `threshold` muda.
    return () => {
      // Verifica se `elementRef.current` está definido antes de parar a observação.
      if (elementRef.current) {
        // Para de observar o elemento, evitando leaks de memória e observação desnecessária
        observer.unobserve(elementRef.current);
      }
    };
  }, [threshold]); // `useEffect` será reexecutado sempre que `threshold` mudar

  // Retorna o estado de visibilidade e a referência ao elemento para uso em componentes
  return { isVisible, elementRef };
}
