FROM node:20-alpine

WORKDIR /app

# Copy application files
COPY taskboard.html .
COPY BUSINESS_TASKS.json .
COPY tasks.json .
COPY server.js .
COPY package.json .

# No dependencies needed, but install just in case
RUN npm install

# Expose port
EXPOSE 8000

# Health check
HEALTHCHECK --interval=30s --timeout=10s --start-period=5s --retries=3 \
  CMD wget --quiet --tries=1 --spider http://localhost:${PORT:-8000}/taskboard.html || exit 1

# Start server - Railway's PORT env var is respected by server.js
CMD ["node", "server.js"]
