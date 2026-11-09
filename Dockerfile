# Build the static app with Bun, then serve it with nginx (which also proxies the API).
FROM oven/bun:1.4 AS build
WORKDIR /app
COPY package*.json bun.lock* ./
RUN bun install
COPY . .
RUN bun run build

FROM nginx:1.29-alpine
COPY nginx/default.conf.template /etc/nginx/templates/default.conf.template
COPY --from=build /app/dist /usr/share/nginx/html

# Override at run time to point at your API and storefront.
ENV API_UPSTREAM=http://api:8080 STOREFRONT_UPSTREAM=http://storefront:3000

EXPOSE 80

HEALTHCHECK --interval=15s --timeout=5s --start-period=5s --retries=3 CMD wget -q -O /dev/null http://127.0.0.1/ || exit 1
