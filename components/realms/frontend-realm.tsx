"use client"

import { useState } from "react"
import { motion } from "framer-motion"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Code, Gauge, Accessibility } from "lucide-react"

export default function FrontendRealm() {
  const [theme, setTheme] = useState<"light" | "dark" | "cyberpunk">("dark")

  return (
    <div className="container mx-auto py-8 px-4 h-full overflow-y-auto">
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
        <Card className="col-span-1 md:col-span-2 bg-black/60 border-cyan-800">
          <CardHeader>
            <CardTitle className="text-cyan-400">UI Playground</CardTitle>
            <CardDescription>Interactive components and design system</CardDescription>
          </CardHeader>
          <CardContent>
            <Tabs defaultValue="buttons" className="w-full">
              <TabsList className="grid grid-cols-4 mb-4">
                <TabsTrigger value="buttons">Buttons</TabsTrigger>
                <TabsTrigger value="cards">Cards</TabsTrigger>
                <TabsTrigger value="forms">Forms</TabsTrigger>
                <TabsTrigger value="modals">Modals</TabsTrigger>
              </TabsList>

              <TabsContent value="buttons" className="space-y-4">
                <div className="flex flex-wrap gap-4">
                  <Button>Default Button</Button>
                  <Button variant="secondary">Secondary</Button>
                  <Button variant="destructive">Destructive</Button>
                  <Button variant="outline">Outline</Button>
                  <Button variant="ghost">Ghost</Button>
                  <Button variant="link">Link</Button>
                </div>

                <div className="flex flex-wrap gap-4 mt-4">
                  <Button size="lg">Large</Button>
                  <Button>Default</Button>
                  <Button size="sm">Small</Button>
                  <Button size="icon">
                    <Code className="h-4 w-4" />
                  </Button>
                </div>

                <div className="mt-4 p-4 border border-cyan-800 rounded-md bg-cyan-950/20">
                  <pre className="text-xs text-cyan-300 font-mono">
                    {`<Button variant="outline" size="lg">
  Button Text
</Button>`}
                  </pre>
                </div>
              </TabsContent>

              <TabsContent value="cards">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <Card>
                    <CardHeader>
                      <CardTitle>Card Title</CardTitle>
                      <CardDescription>Card description goes here</CardDescription>
                    </CardHeader>
                    <CardContent>
                      <p>Card content and details</p>
                    </CardContent>
                    <CardFooter>
                      <Button>Action</Button>
                    </CardFooter>
                  </Card>

                  <div className="p-4 border border-cyan-800 rounded-md bg-cyan-950/20">
                    <pre className="text-xs text-cyan-300 font-mono">
                      {`<Card>
  <CardHeader>
    <CardTitle>Card Title</CardTitle>
    <CardDescription>Description</CardDescription>
  </CardHeader>
  <CardContent>
    <p>Content</p>
  </CardContent>
  <CardFooter>
    <Button>Action</Button>
  </CardFooter>
</Card>`}
                    </pre>
                  </div>
                </div>
              </TabsContent>

              <TabsContent value="forms">
                <p className="text-gray-400 mb-4">Form components coming soon...</p>
              </TabsContent>

              <TabsContent value="modals">
                <p className="text-gray-400 mb-4">Modal components coming soon...</p>
              </TabsContent>
            </Tabs>
          </CardContent>
        </Card>

        <Card className="bg-black/60 border-cyan-800">
          <CardHeader>
            <CardTitle className="text-cyan-400">Theme Switcher</CardTitle>
            <CardDescription>Toggle between different visual themes</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="flex flex-col gap-4">
              <Button
                variant={theme === "dark" ? "default" : "outline"}
                className="w-full justify-start"
                onClick={() => setTheme("dark")}
              >
                <div className="w-6 h-6 rounded-full bg-gray-900 mr-2 border border-gray-700" />
                Dark Theme
              </Button>

              <Button
                variant={theme === "light" ? "default" : "outline"}
                className="w-full justify-start"
                onClick={() => setTheme("light")}
              >
                <div className="w-6 h-6 rounded-full bg-gray-100 mr-2 border border-gray-300" />
                Light Theme
              </Button>

              <Button
                variant={theme === "cyberpunk" ? "default" : "outline"}
                className="w-full justify-start"
                onClick={() => setTheme("cyberpunk")}
              >
                <div
                  className="w-6 h-6 rounded-full bg-black mr-2 border border-pink-500"
                  style={{
                    background: "linear-gradient(45deg, #ff00ff, #00ffff)",
                  }}
                />
                Cyberpunk
              </Button>
            </div>

            <div
              className="mt-6 p-4 rounded-md"
              style={{
                backgroundColor: theme === "dark" ? "#121212" : theme === "light" ? "#f8f9fa" : "black",
                color: theme === "dark" ? "#e0e0e0" : theme === "light" ? "#212529" : "#00ffff",
                border:
                  theme === "dark" ? "1px solid #333" : theme === "light" ? "1px solid #dee2e6" : "1px solid #ff00ff",
                boxShadow: theme === "cyberpunk" ? "0 0 10px #ff00ff, 0 0 20px #00ffff" : "none",
              }}
            >
              <h3
                className="text-lg font-semibold mb-2"
                style={{
                  color: theme === "cyberpunk" ? "#ff00ff" : "inherit",
                }}
              >
                Preview
              </h3>
              <p>This is how your theme looks like.</p>
              <Button
                className="mt-2"
                style={{
                  backgroundColor: theme === "dark" ? "#333" : theme === "light" ? "#0d6efd" : "#ff00ff",
                  color: theme === "light" ? "white" : "inherit",
                  border: theme === "cyberpunk" ? "1px solid #00ffff" : "none",
                }}
              >
                Sample Button
              </Button>
            </div>
          </CardContent>
        </Card>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
        <Card className="bg-black/60 border-cyan-800">
          <CardHeader>
            <CardTitle className="text-cyan-400">
              <div className="flex items-center">
                <Gauge className="mr-2 h-5 w-5" />
                Performance Metrics
              </div>
            </CardTitle>
            <CardDescription>Lighthouse scores and optimization techniques</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              <div className="flex items-center justify-between">
                <span>Performance</span>
                <div className="flex items-center">
                  <div
                    className="w-12 h-12 rounded-full flex items-center justify-center text-black font-bold"
                    style={{ backgroundColor: "#0cce6b" }}
                  >
                    98
                  </div>
                </div>
              </div>

              <div className="flex items-center justify-between">
                <span>Accessibility</span>
                <div className="flex items-center">
                  <div
                    className="w-12 h-12 rounded-full flex items-center justify-center text-black font-bold"
                    style={{ backgroundColor: "#0cce6b" }}
                  >
                    100
                  </div>
                </div>
              </div>

              <div className="flex items-center justify-between">
                <span>Best Practices</span>
                <div className="flex items-center">
                  <div
                    className="w-12 h-12 rounded-full flex items-center justify-center text-black font-bold"
                    style={{ backgroundColor: "#0cce6b" }}
                  >
                    100
                  </div>
                </div>
              </div>

              <div className="flex items-center justify-between">
                <span>SEO</span>
                <div className="flex items-center">
                  <div
                    className="w-12 h-12 rounded-full flex items-center justify-center text-black font-bold"
                    style={{ backgroundColor: "#0cce6b" }}
                  >
                    100
                  </div>
                </div>
              </div>

              <div className="mt-4 p-3 bg-cyan-950/30 rounded-md">
                <h4 className="font-semibold mb-2">Optimization Techniques:</h4>
                <ul className="list-disc list-inside text-sm space-y-1">
                  <li>Next.js App Router with RSC</li>
                  <li>Lazy loading and code splitting</li>
                  <li>AVIF image optimization</li>
                  <li>Edge caching strategies</li>
                  <li>Minimal CSS with Tailwind</li>
                </ul>
              </div>
            </div>
          </CardContent>
        </Card>

        <Card className="bg-black/60 border-cyan-800">
          <CardHeader>
            <CardTitle className="text-cyan-400">
              <div className="flex items-center">
                <Code className="mr-2 h-5 w-5" />
                Code Demos
              </div>
            </CardTitle>
            <CardDescription>Interactive code examples and experiments</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              <div className="p-4 bg-gray-900 rounded-md">
                <div className="flex justify-between items-center mb-2">
                  <h4 className="font-mono text-cyan-400">Particle System</h4>
                  <Badge variant="outline" className="text-xs">
                    WebGL
                  </Badge>
                </div>
                <div className="aspect-video bg-black rounded-md flex items-center justify-center">
                  <p className="text-gray-500 text-sm">Interactive particle demo</p>
                </div>
                <div className="mt-2 flex justify-end">
                  <Button variant="outline" size="sm" className="text-xs">
                    View Code
                  </Button>
                </div>
              </div>

              <div className="p-4 bg-gray-900 rounded-md">
                <div className="flex justify-between items-center mb-2">
                  <h4 className="font-mono text-cyan-400">CSS Art Gallery</h4>
                  <Badge variant="outline" className="text-xs">
                    CSS
                  </Badge>
                </div>
                <div className="aspect-video bg-black rounded-md flex items-center justify-center">
                  <p className="text-gray-500 text-sm">Pure CSS artwork collection</p>
                </div>
                <div className="mt-2 flex justify-end">
                  <Button variant="outline" size="sm" className="text-xs">
                    View Code
                  </Button>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>

        <Card className="bg-black/60 border-cyan-800">
          <CardHeader>
            <CardTitle className="text-cyan-400">
              <div className="flex items-center">
                <Accessibility className="mr-2 h-5 w-5" />
                Accessibility Features
              </div>
            </CardTitle>
            <CardDescription>WCAG 2.2 compliance and inclusive design</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              <div className="flex items-center gap-2 p-3 bg-cyan-950/30 rounded-md">
                <Badge className="bg-green-600">WCAG 2.2 AA</Badge>
                <Badge variant="outline">Screen Reader Optimized</Badge>
                <Badge variant="outline">Keyboard Navigation</Badge>
              </div>

              <div className="p-4 border border-cyan-800 rounded-md">
                <h4 className="font-semibold mb-2">Accessibility Checklist:</h4>
                <ul className="space-y-2">
                  <li className="flex items-center">
                    <div className="w-5 h-5 rounded-full bg-green-600 flex items-center justify-center mr-2">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="12"
                        height="12"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      >
                        <polyline points="20 6 9 17 4 12"></polyline>
                      </svg>
                    </div>
                    Semantic HTML structure
                  </li>
                  <li className="flex items-center">
                    <div className="w-5 h-5 rounded-full bg-green-600 flex items-center justify-center mr-2">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="12"
                        height="12"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      >
                        <polyline points="20 6 9 17 4 12"></polyline>
                      </svg>
                    </div>
                    ARIA labels and landmarks
                  </li>
                  <li className="flex items-center">
                    <div className="w-5 h-5 rounded-full bg-green-600 flex items-center justify-center mr-2">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="12"
                        height="12"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      >
                        <polyline points="20 6 9 17 4 12"></polyline>
                      </svg>
                    </div>
                    Sufficient color contrast
                  </li>
                  <li className="flex items-center">
                    <div className="w-5 h-5 rounded-full bg-green-600 flex items-center justify-center mr-2">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="12"
                        height="12"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      >
                        <polyline points="20 6 9 17 4 12"></polyline>
                      </svg>
                    </div>
                    Keyboard focus indicators
                  </li>
                  <li className="flex items-center">
                    <div className="w-5 h-5 rounded-full bg-green-600 flex items-center justify-center mr-2">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="12"
                        height="12"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      >
                        <polyline points="20 6 9 17 4 12"></polyline>
                      </svg>
                    </div>
                    Reduced motion support
                  </li>
                </ul>
              </div>

              <Button variant="outline" className="w-full">
                Toggle High Contrast Mode
              </Button>
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
        <h2 className="text-xl font-orbitron mb-4 neon-text-cyan">Frontend Technologies</h2>
        <div className="flex flex-wrap justify-center gap-2">
          <Badge className="bg-cyan-900 hover:bg-cyan-800">Next.js</Badge>
          <Badge className="bg-cyan-900 hover:bg-cyan-800">React</Badge>
          <Badge className="bg-cyan-900 hover:bg-cyan-800">TypeScript</Badge>
          <Badge className="bg-cyan-900 hover:bg-cyan-800">TailwindCSS</Badge>
          <Badge className="bg-cyan-900 hover:bg-cyan-800">Framer Motion</Badge>
          <Badge className="bg-cyan-900 hover:bg-cyan-800">Three.js</Badge>
          <Badge className="bg-cyan-900 hover:bg-cyan-800">WebGL</Badge>
          <Badge className="bg-cyan-900 hover:bg-cyan-800">GSAP</Badge>
          <Badge className="bg-cyan-900 hover:bg-cyan-800">CSS Modules</Badge>
          <Badge className="bg-cyan-900 hover:bg-cyan-800">Storybook</Badge>
        </div>
      </motion.div>
    </div>
  )
}
