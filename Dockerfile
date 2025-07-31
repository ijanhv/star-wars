# Step 1: Install dependencies and build the app
FROM node:18-alpine AS builder

WORKDIR /app

# Install dependencies based on package manager
COPY package.json package-lock.json* ./
RUN npm install

# Copy the rest of the app and build
COPY . .
RUN npm run build

# Step 2: Serve with Next.js built-in server
FROM node:18-alpine AS runner

WORKDIR /app

ENV NODE_ENV=production

# Install only production dependencies
COPY package.json package-lock.json* ./
RUN npm install --omit=dev

# Copy built files from builder
COPY --from=builder /app/public ./public
COPY --from=builder /app/.next ./.next
COPY --from=builder /app/node_modules ./node_modules
COPY --from=builder /app/package.json ./package.json

EXPOSE 3000

CMD ["npm", "start"]
