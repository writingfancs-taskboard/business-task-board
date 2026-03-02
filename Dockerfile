FROM python:3.11-slim

WORKDIR /app

# Copy application files
COPY taskboard.html .
COPY BUSINESS_TASKS.json .
COPY tasks.json .

# Expose port
EXPOSE 8000

# Health check
HEALTHCHECK --interval=30s --timeout=10s --start-period=5s --retries=3 \
  CMD python3 -c "import urllib.request; urllib.request.urlopen('http://localhost:8000/taskboard.html')"

# Start server
CMD ["python3", "-m", "http.server", "8000", "--bind", "0.0.0.0"]
