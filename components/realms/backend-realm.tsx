"use client"

import { useState } from "react"
import { motion } from "framer-motion"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Database, Server, Activity, Cpu } from "lucide-react"

export default function BackendRealm() {
  const [activeNode, setActiveNode] = useState<string | null>(null)

  return (
    <div className="container mx-auto py-8 px-4 h-full overflow-y-auto">
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
        <Card className="col-span-1 md:col-span-2 bg-black/60 border-green-800">
          <CardHeader>
            <CardTitle className="text-green-400">Architecture Visualizer</CardTitle>
            <CardDescription>Interactive system architecture diagram</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="relative aspect-video bg-black rounded-lg border border-green-900 p-4 overflow-hidden">
              {/* Central API Node */}
              <div
                className={`absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-24 h-24 rounded-full flex items-center justify-center cursor-pointer transition-all duration-300 ${activeNode === "api" ? "bg-green-700" : "bg-green-900"}`}
                onClick={() => setActiveNode("api")}
              >
                <div className="text-center">
                  <Server className="h-8 w-8 mx-auto mb-1 text-green-400" />
                  <span className="text-xs font-mono text-green-400">API Gateway</span>
                </div>
                <div className="absolute w-full h-full rounded-full border-2 border-green-500 animate-pulse-glow" />
              </div>

              {/* Database Node */}
              <div
                className={`absolute top-3/4 left-1/4 transform -translate-x-1/2 -translate-y-1/2 w-20 h-20 rounded-full flex items-center justify-center cursor-pointer transition-all duration-300 ${activeNode === "db" ? "bg-green-700" : "bg-green-900"}`}
                onClick={() => setActiveNode("db")}
              >
                <div className="text-center">
                  <Database className="h-6 w-6 mx-auto mb-1 text-green-400" />
                  <span className="text-xs font-mono text-green-400">Database</span>
                </div>
              </div>

              {/* Cache Node */}
              <div
                className={`absolute top-1/4 left-1/4 transform -translate-x-1/2 -translate-y-1/2 w-20 h-20 rounded-full flex items-center justify-center cursor-pointer transition-all duration-300 ${activeNode === "cache" ? "bg-green-700" : "bg-green-900"}`}
                onClick={() => setActiveNode("cache")}
              >
                <div className="text-center">
                  <Activity className="h-6 w-6 mx-auto mb-1 text-green-400" />
                  <span className="text-xs font-mono text-green-400">Cache</span>
                </div>
              </div>

              {/* Microservice 1 */}
              <div
                className={`absolute top-1/4 right-1/4 transform translate-x-1/2 -translate-y-1/2 w-20 h-20 rounded-full flex items-center justify-center cursor-pointer transition-all duration-300 ${activeNode === "ms1" ? "bg-green-700" : "bg-green-900"}`}
                onClick={() => setActiveNode("ms1")}
              >
                <div className="text-center">
                  <Cpu className="h-6 w-6 mx-auto mb-1 text-green-400" />
                  <span className="text-xs font-mono text-green-400">Auth Service</span>
                </div>
              </div>

              {/* Microservice 2 */}
              <div
                className={`absolute top-3/4 right-1/4 transform translate-x-1/2 -translate-y-1/2 w-20 h-20 rounded-full flex items-center justify-center cursor-pointer transition-all duration-300 ${activeNode === "ms2" ? "bg-green-700" : "bg-green-900"}`}
                onClick={() => setActiveNode("ms2")}
              >
                <div className="text-center">
                  <Cpu className="h-6 w-6 mx-auto mb-1 text-green-400" />
                  <span className="text-xs font-mono text-green-400">Data Service</span>
                </div>
              </div>

              {/* Connection lines */}
              <svg className="absolute inset-0 w-full h-full" style={{ zIndex: -1 }}>
                {/* API to DB */}
                <line
                  x1="50%"
                  y1="50%"
                  x2="25%"
                  y2="75%"
                  stroke="#00ff00"
                  strokeWidth="2"
                  strokeOpacity="0.5"
                  strokeDasharray="5,5"
                />

                {/* API to Cache */}
                <line
                  x1="50%"
                  y1="50%"
                  x2="25%"
                  y2="25%"
                  stroke="#00ff00"
                  strokeWidth="2"
                  strokeOpacity="0.5"
                  strokeDasharray="5,5"
                />

                {/* API to MS1 */}
                <line
                  x1="50%"
                  y1="50%"
                  x2="75%"
                  y2="25%"
                  stroke="#00ff00"
                  strokeWidth="2"
                  strokeOpacity="0.5"
                  strokeDasharray="5,5"
                />

                {/* API to MS2 */}
                <line
                  x1="50%"
                  y1="50%"
                  x2="75%"
                  y2="75%"
                  stroke="#00ff00"
                  strokeWidth="2"
                  strokeOpacity="0.5"
                  strokeDasharray="5,5"
                />
              </svg>
            </div>

            {/* Node details */}
            {activeNode && (
              <motion.div
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                className="mt-4 p-4 bg-green-950/30 border border-green-900 rounded-md"
              >
                <div className="flex justify-between items-start">
                  <h3 className="text-lg font-semibold text-green-400">
                    {activeNode === "api" && "API Gateway"}
                    {activeNode === "db" && "Database Cluster"}
                    {activeNode === "cache" && "Redis Cache"}
                    {activeNode === "ms1" && "Authentication Service"}
                    {activeNode === "ms2" && "Data Processing Service"}
                  </h3>
                  <Button
                    variant="ghost"
                    size="sm"
                    onClick={() => setActiveNode(null)}
                    className="text-green-400 hover:text-green-300 hover:bg-green-950/50"
                  >
                    Close
                  </Button>
                </div>

                <div className="mt-2 space-y-2">
                  <div className="flex items-center gap-2">
                    <Badge variant="outline" className="text-green-400 border-green-600">
                      {activeNode === "api" && "Node.js"}
                      {activeNode === "db" && "PostgreSQL"}
                      {activeNode === "cache" && "Redis"}
                      {activeNode === "ms1" && "Fastify"}
                      {activeNode === "ms2" && "Deno"}
                    </Badge>
                    <Badge variant="outline" className="text-green-400 border-green-600">
                      {activeNode === "api" && "Express"}
                      {activeNode === "db" && "Sharded"}
                      {activeNode === "cache" && "In-Memory"}
                      {activeNode === "ms1" && "OAuth"}
                      {activeNode === "ms2" && "TypeScript"}
                    </Badge>
                  </div>

                  <p className="text-sm text-gray-300">
                    {activeNode === "api" &&
                      "Central API gateway that routes requests to appropriate microservices. Handles rate limiting, authentication verification, and request logging."}
                    {activeNode === "db" &&
                      "Sharded PostgreSQL database cluster for persistent data storage. Optimized with indexes and partitioning for high-performance queries."}
                    {activeNode === "cache" &&
                      "Redis in-memory cache for frequently accessed data. Reduces database load and improves response times for common requests."}
                    {activeNode === "ms1" &&
                      "Handles user authentication, OAuth integration, and user management operations."}
                    {activeNode === "ms2" &&
                      "Processes and transforms data from various sources. Implements complex business logic and data aggregation."}
                  </p>

                  <div className="p-3 bg-black/50 rounded border border-green-900 font-mono text-xs text-green-300 mt-2">
                    {activeNode === "api" &&
                      `app.use(cors());
app.use(rateLimit({ windowMs: 15 * 60 * 1000, max: 100 }));
app.use(helmet());
app.use(express.json());

app.use('/auth', authRoutes);
app.use('/data', verifyAuth, dataRoutes);`}
                    {activeNode === "db" &&
                      `CREATE TABLE users (
  id UUID PRIMARY KEY,
  username VARCHAR(50) UNIQUE NOT NULL,
  email VARCHAR(255) UNIQUE NOT NULL,
  password_hash VARCHAR(255) NOT NULL,
  created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW()
);

CREATE INDEX idx_users_email ON users(email);`}
                    {activeNode === "cache" &&
                      `// Cache middleware
const cacheMiddleware = (req, res, next) => {
  const key = req.originalUrl;
  redisClient.get(key, (err, data) => {
    if (err) return next();
    if (data) return res.json(JSON.parse(data));
    next();
  });
};`}
                    {activeNode === "ms1" &&
                      `// OAuth authentication
const authenticateUser = async (provider, code) => {
  const tokenResponse = await fetchAccessToken(provider, code);
  const userInfo = await fetchUserInfo(provider, tokenResponse.access_token);
  
  // Find or create user in database
  return findOrCreateUser(userInfo);
};`}
                    {activeNode === "ms2" &&
                      `// Data processing pipeline
async function processData(rawData) {
  const validated = await validateSchema(rawData);
  const transformed = await transformData(validated);
  const enriched = await enrichWithMetadata(transformed);
  return enriched;
}`}
                  </div>
                </div>
              </motion.div>
            )}
          </CardContent>
        </Card>

        <Card className="bg-black/60 border-green-800">
          <CardHeader>
            <CardTitle className="text-green-400">API Playground</CardTitle>
            <CardDescription>Test and explore API endpoints</CardDescription>
          </CardHeader>
          <CardContent>
            <Tabs defaultValue="rest" className="w-full">
              <TabsList className="grid grid-cols-2 mb-4">
                <TabsTrigger value="rest">REST API</TabsTrigger>
                <TabsTrigger value="graphql">GraphQL</TabsTrigger>
              </TabsList>

              <TabsContent value="rest" className="space-y-4">
                <div className="space-y-2">
                  <div className="flex items-center gap-2">
                    <Badge className="bg-green-700">GET</Badge>
                    <code className="text-sm text-gray-300">/api/users</code>
                  </div>
                  <div className="p-3 bg-black rounded border border-green-900 font-mono text-xs text-green-300">
                    {`// Response
{
  "users": [
    {
      "id": "550e8400-e29b-41d4-a716-446655440000",
      "username": "techuser",
      "email": "user@example.com"
    },
    // More users...
  ],
  "total": 42,
  "page": 1,
  "limit": 10
}`}
                  </div>
                </div>

                <div className="space-y-2">
                  <div className="flex items-center gap-2">
                    <Badge className="bg-blue-700">POST</Badge>
                    <code className="text-sm text-gray-300">/api/auth/login</code>
                  </div>
                  <div className="p-3 bg-black rounded border border-green-900 font-mono text-xs text-green-300">
                    {`// Request
{
  "email": "user@example.com",
  "password": "********"
}

// Response
{
  "success": true,
  "user": {
    "id": "550e8400-e29b-41d4-a716-446655440000",
    "username": "techuser"
  }
}`}
                  </div>
                </div>

                <Button className="w-full mt-4 bg-green-800 hover:bg-green-700 text-white">Try API Endpoint</Button>
              </TabsContent>

              <TabsContent value="graphql" className="space-y-4">
                <div className="p-3 bg-black rounded border border-green-900 font-mono text-xs text-green-300">
                  {`// Query
query GetUserWithProjects {
  user(id: "550e8400-e29b-41d4-a716-446655440000") {
    id
    username
    email
    projects {
      id
      name
      description
    }
  }
}

// Response
{
  "data": {
    "user": {
      "id": "550e8400-e29b-41d4-a716-446655440000",
      "username": "techuser",
      "email": "user@example.com",
      "projects": [
        {
          "id": "1",
          "name": "API Gateway",
          "description": "Central API gateway service"
        }
      ]
    }
  }
}`}
                </div>

                <Button className="w-full mt-4 bg-green-800 hover:bg-green-700 text-white">
                  Open GraphQL Playground
                </Button>
              </TabsContent>
            </Tabs>
          </CardContent>
        </Card>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
        <Card className="bg-black/60 border-green-800">
          <CardHeader>
            <CardTitle className="text-green-400">Performance Benchmarks</CardTitle>
            <CardDescription>System performance metrics and load testing results</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              <div className="p-4 bg-green-950/20 rounded-md">
                <h4 className="font-semibold mb-2 text-green-400">API Gateway</h4>
                <div className="space-y-2">
                  <div className="flex justify-between items-center">
                    <span className="text-sm">Requests/sec</span>
                    <span className="font-mono text-green-400">12,450</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-sm">Avg. Latency</span>
                    <span className="font-mono text-green-400">24ms</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-sm">p95 Latency</span>
                    <span className="font-mono text-green-400">42ms</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-sm">p99 Latency</span>
                    <span className="font-mono text-green-400">78ms</span>
                  </div>
                </div>
              </div>

              <div className="p-4 bg-green-950/20 rounded-md">
                <h4 className="font-semibold mb-2 text-green-400">Database Cluster</h4>
                <div className="space-y-2">
                  <div className="flex justify-between items-center">
                    <span className="text-sm">Queries/sec</span>
                    <span className="font-mono text-green-400">8,320</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-sm">Avg. Query Time</span>
                    <span className="font-mono text-green-400">3.2ms</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-sm">Cache Hit Ratio</span>
                    <span className="font-mono text-green-400">94.7%</span>
                  </div>
                </div>
              </div>

              <div className="mt-4">
                <Button variant="outline" className="w-full border-green-600 text-green-400 hover:bg-green-950/30">
                  Download Full Benchmark Report
                </Button>
              </div>
            </div>
          </CardContent>
        </Card>

        <Card className="bg-black/60 border-green-800">
          <CardHeader>
            <CardTitle className="text-green-400">Dockerized Demo</CardTitle>
            <CardDescription>Live containerized backend services</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              <div className="p-4 bg-black rounded-md border border-green-800">
                <h4 className="font-semibold mb-2 text-green-400">Microservices Stack</h4>
                <div className="space-y-2 text-sm">
                  <div className="flex items-center">
                    <div className="w-3 h-3 rounded-full bg-green-500 mr-2"></div>
                    <span>API Gateway (Node.js)</span>
                    <Badge className="ml-auto" variant="outline">
                      Running
                    </Badge>
                  </div>
                  <div className="flex items-center">
                    <div className="w-3 h-3 rounded-full bg-green-500 mr-2"></div>
                    <span>Auth Service (Fastify)</span>
                    <Badge className="ml-auto" variant="outline">
                      Running
                    </Badge>
                  </div>
                  <div className="flex items-center">
                    <div className="w-3 h-3 rounded-full bg-green-500 mr-2"></div>
                    <span>Data Service (Deno)</span>
                    <Badge className="ml-auto" variant="outline">
                      Running
                    </Badge>
                  </div>
                  <div className="flex items-center">
                    <div className="w-3 h-3 rounded-full bg-green-500 mr-2"></div>
                    <span>PostgreSQL Database</span>
                    <Badge className="ml-auto" variant="outline">
                      Running
                    </Badge>
                  </div>
                  <div className="flex items-center">
                    <div className="w-3 h-3 rounded-full bg-green-500 mr-2"></div>
                    <span>Redis Cache</span>
                    <Badge className="ml-auto" variant="outline">
                      Running
                    </Badge>
                  </div>
                </div>
              </div>

              <div className="p-4 bg-black rounded-md border border-green-800 font-mono text-xs text-green-300">
                <div className="flex justify-between items-center mb-2">
                  <span>docker-compose.yml</span>
                </div>
                {`version: '3'

services:
  api-gateway:
    build: ./api-gateway
    ports:
      - "3000:3000"
    environment:
      - NODE_ENV=production
      - AUTH_SERVICE_URL=http://auth-service:4000
      - DATA_SERVICE_URL=http://data-service:5000
      - REDIS_URL=redis://redis:6379
    depends_on:
      - auth-service
      - data-service
      - redis

  auth-service:
    build: ./auth-service
    environment:
      - NODE_ENV=production
      - DB_CONNECTION=postgres://user:pass@postgres:5432/auth
    depends_on:
      - postgres

  data-service:
    build: ./data-service
    environment:
      - DENO_ENV=production
      - DB_CONNECTION=postgres://user:pass@postgres:5432/data
    depends_on:
      - postgres

  postgres:
    image: postgres:14
    volumes:
      - postgres-data:/var/lib/postgresql/data
    environment:
      - POSTGRES_USER=user
      - POSTGRES_PASSWORD=pass
      - POSTGRES_MULTIPLE_DATABASES=auth,data

  redis:
    image: redis:alpine
    volumes:
      - redis-data:/data

volumes:
  postgres-data:
  redis-data:`}
              </div>

              <div className="flex space-x-2">
                <Button className="flex-1 bg-green-800 hover:bg-green-700 text-white">Access Demo API</Button>
                <Button variant="outline" className="flex-1 border-green-600 text-green-400 hover:bg-green-950/30">
                  View Source
                </Button>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.3 }}
        className="text-center mt-8"
      >
        <h2 className="text-xl font-orbitron mb-4 neon-text-green">Backend Technologies</h2>
        <div className="flex flex-wrap justify-center gap-2">
          <Badge className="bg-green-900 hover:bg-green-800">Node.js</Badge>
          <Badge className="bg-green-900 hover:bg-green-800">Deno</Badge>
          <Badge className="bg-green-900 hover:bg-green-800">Express</Badge>
          <Badge className="bg-green-900 hover:bg-green-800">Fastify</Badge>
          <Badge className="bg-green-900 hover:bg-green-800">PostgreSQL</Badge>
          <Badge className="bg-green-900 hover:bg-green-800">MongoDB</Badge>
          <Badge className="bg-green-900 hover:bg-green-800">Redis</Badge>
          <Badge className="bg-green-900 hover:bg-green-800">GraphQL</Badge>
          <Badge className="bg-green-900 hover:bg-green-800">Docker</Badge>
          <Badge className="bg-green-900 hover:bg-green-800">Kubernetes</Badge>
          <Badge className="bg-green-900 hover:bg-green-800">Kafka</Badge>
          <Badge className="bg-green-900 hover:bg-green-800">gRPC</Badge>
        </div>
      </motion.div>
    </div>
  )
}
