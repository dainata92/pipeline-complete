FROM selenium/standalone-chrome:latest

USER root
RUN apt-get update && apt-get install -y curl gnupg \
    && curl -fsSL https://deb.nodesource.com/setup_18.x | bash - \
    && apt-get install -y nodejs \
    && apt-get clean && rm -rf /var/lib/apt/lists/*

# Définir le repertoire de travail
WORKDIR /app

# Copier les fichiers vers le repertoire de travail
COPY . .

# Installer selenium-webdriver + http-server
RUN npm install selenium-webdriver 
RUN npm install --global http-server

# Exposer le port 
EXPOSE 8080

# Démarrer le serveur statique + attendre + lancer les tests
CMD ["/bin/sh", "-c", "http-server -p 8080 & sleep 5 && node test_calculatrice.js"]
