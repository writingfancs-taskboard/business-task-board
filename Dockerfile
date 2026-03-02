FROM python:3.11-slim

WORKDIR /app

# Copy application files
COPY taskboard.html .
COPY BUSINESS_TASKS.json .
COPY tasks.json .
COPY README.md .

# Expose port (Railway will override with $PORT)
EXPOSE 8000

# Health check
HEALTHCHECK --interval=30s --timeout=10s --start-period=5s --retries=3 \
  CMD python3 -c "import urllib.request; import os; port = os.getenv('PORT', '8000'); urllib.request.urlopen(f'http://localhost:{port}/taskboard.html')" || exit 1

# Start server - use Railway's PORT env var or default to 8000
CMD python3 -m http.server ${PORT:-8000} --bind 0.0.0.0
