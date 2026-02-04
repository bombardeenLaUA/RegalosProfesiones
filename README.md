# GiftGenius - MVP SEO Programático

Web de ideas de regalos generada automáticamente por profesión y hobby. Construida con Next.js 14 (App Router), Tailwind CSS y Lucide React.

## Inicio rápido

```bash
npm install
npm run dev
```

Abre [http://localhost:3000](http://localhost:3000) en tu navegador.

## Estructura del proyecto

```
├── app/
│   ├── layout.tsx          # Layout raíz con Navbar y Footer
│   ├── page.tsx            # Página de inicio (Hero + Grid categorías)
│   └── regalos/[slug]/     # Páginas dinámicas por nicho
├── components/
│   ├── Navbar.tsx
│   └── Footer.tsx
├── lib/
│   └── data.ts             # Datos de nichos y productos
```

## Categorías incluidas

- Arquitectos
- Gamers
- Enfermeros
- Programadores
- Cocineros

## Añadir nuevos nichos

Edita `lib/data.ts` y agrega un nuevo objeto al array `NICHE_DATA`. Las páginas se generarán automáticamente en el próximo build gracias a `generateStaticParams`.

## Comandos

- `npm run dev` - Servidor de desarrollo
- `npm run build` - Build de producción
- `npm run start` - Servidor de producción
