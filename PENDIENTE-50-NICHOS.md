# PENDIENTE: Implementar 50 nichos al publicar

Cuando publiques tu web y quieras activar los 50 nichos, sigue estos pasos:

## Paso 1: Sustituir `lib/data.ts`

Reemplaza el contenido de `lib/data.ts` por el contenido completo de `lib/data-50-niches-PENDIENTE.ts`.

```powershell
# En PowerShell, desde la raíz del proyecto:
Copy-Item lib\data-50-niches-PENDIENTE.ts lib\data.ts -Force
```

O bien: abre ambos archivos y copia el contenido de `data-50-niches-PENDIENTE.ts` sobre `data.ts`.

## Paso 2: Actualizar `app/page.tsx`

Añade los iconos para todos los nichos en `NICHE_ICONS`. El archivo `data-50-niches-PENDIENTE.ts` incluye nichos como: medicos, dentistas, veterinarios, psicologos, farmaceuticos, fisioterapeutas, abogados, contables, periodistas, disenadores-graficos, mecanicos, electricistas, carpinteros, peluqueras, fotografos, policias, bomberos, ciclistas, runners, viajeros, amantes-vino, amantes-cafe, escritores, biologos, geologos, musicos, pintores, jardineros, cientificos, ingenieros, pilotos, azafatas, entrenadores, yoga, surferos, buzos, amantes-te, coleccionistas, astronomos, historiadores, arqueologos, actores, bailarines, artistas, profesores.

Puedes usar el mapeo genérico: `Palette`, `Heart`, `Code`, `ChefHat` o `Gamepad2` según el tipo de profesión.

## Resumen de la versión guardada

- **5 nichos Tier A** con imágenes variadas por producto: Arquitectos, Gamers, Enfermeros, Programadores, Profesores.
- **45 nichos Tier B** con una imagen representativa por profesión (12 productos cada uno).
- **Total: 50 nichos**, ~600 productos.

## Nota

El archivo `data-50-niches-PENDIENTE.ts` contiene la versión completa lista para usar. Solo hay que sustituir `data.ts` y ajustar `NICHE_ICONS` en `page.tsx` si hace falta.
