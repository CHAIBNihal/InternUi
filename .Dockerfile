# Étape 1 : Utiliser l'image officielle Node
FROM node:18

# Créer un répertoire de travail
WORKDIR /app

# Copier les fichiers de dépendances
COPY package.json package-lock.json* ./

# Installer les dépendances
RUN npm install

# Copier le reste du code source
COPY . .

# Builder l'application (si tu veux faire un build)
RUN npm run build

# Exposer le port utilisé par Vite preview (par défaut 4173)
EXPOSE 5173

# Lancer Vite en mode preview
CMD ["npm", "run", "dev"]
