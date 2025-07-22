> # Carlos M. Bravo A.

## portfolio + personal

![Astro v5](https://img.shields.io/badge/Astro-v5-blueviolet)
![ReactJS](https://img.shields.io/badge/React-18-blue)
![Vue.js](https://img.shields.io/badge/Vue-3-green)
![TailwindCSS v4](https://img.shields.io/badge/TailwindCSS-v4-teal)

## stack

- typescript
  -  reactjs
  -  vue
  -  astro
- css nativo
  - tailwindcss v4
- adaptors
  - @astrojs/vercel
  - @astrojs/netlify 
- biome
  - eslint
  - prettier
  
 
## deployments at platform as an service
 
> <a href="https://portfolio-cmba.vercel.app/">Deploy at Vercel</a>
---
> <a href="https://cmba.netlify.app/">Deploy at Netlify</a>
---
 
## directories

```bash
.
├── astro.config.mjs
├── components.json
├── deploy.sh
├── LICENSE
├── package.json
├── pnpm-lock.yaml
├── public
│   ├── assets
│   │   ├── avatar
│   │   ├── projects
│   │   └── techs
│   ├── favicon.svg
│   └── fonts
│       └── Montserrat-Regular.ttf
├── README.md
├── src
│   ├── components
│   │   ├── AvatarGenerated.astro
│   │   ├── CallToAction.vue
│   │   ├── CardProject.tsx
│   │   ├── Contacto.tsx
│   │   ├── Footer.astro
│   │   ├── Hero.tsx
│   │   ├── LinkBar.jsx
│   │   ├── Projects.tsx
│   │   ├── Technologies.tsx
│   │   ├── TitleBar.tsx
│   │   ├── Titles.tsx
│   │   └── WSButton.vue
│   ├── constants
│   │   └── constants.ts
│   ├── layouts
│   │   └── main.astro
│   ├── lib
│   │   ├── fetchAPi.ts
│   │   └── utils.ts
│   ├── pages
│   │   ├── api
│   │   └── index.astro
│   ├── services
│   │   ├── iconos.jsx
│   │   └── LinkSocial.vue.txt
│   ├── styles
│   │   └── global.css
│   ├── tests
│   │   └── xiaomiNote10.ts
│   └── types
│       └── types.d.ts
└── tsconfig.json
```

> ## Version & Deploy Personal Script - CI/CD  

```bash
#!/bin/bash

# Verifica si hay cambios sin commitear
if git diff-index --quiet HEAD --; then
    echo "No hay cambios para agregar."
    exit 0
fi

# Verifica si estás en la rama main
current_branch=$(git branch --show-current)
if [[ "$current_branch" != "main" ]]; then
    echo "⚠️  Estás en la rama '$current_branch'. Cambia a 'main' antes de continuar."
    exit 1
fi

# Muestra el historial reciente
git log --pretty=format:"%h, %ar : %s"

# Agrega los cambios
git add .

# Solicita información del usuario
fecha_actual=$(LC_TIME=es_ES.UTF-8 date +"%Y%b%d" | awk '{print toupper($0)}')
read -p "Introduce la versión del commit: " commit_version
read -p "Introduce el mensaje del commit: " commit_message

# Valida entradas vacías
if [ -z "$commit_version" ] || [ -z "$commit_message" ]; then
  echo "⚠️ La versión y el mensaje no pueden estar vacíos."
  exit 1
fi

# Confirma el mensaje final
mensaje_final="$fecha_actual: $commit_version: $commit_message"
echo ""
echo "🔐 Mensaje final del commit:"
echo "$mensaje_final"
read -p "¿Confirmar commit? (s/n): " confirm
if [[ "$confirm" != "s" ]]; then
    echo "Commit cancelado."
    exit 0
fi

# Hace el commit y realiza push
git commit -m "$mensaje_final"
git push -ufv main main

# Feedback visual
echo "✅ Commit --MAIN-- correcto"
sleep 1
clear
git log -1 --oneline
```

> JULIO 2.025
