"use client"

import { useState } from "react"
import { motion } from "framer-motion"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Wallet, Database, Code, Hexagon } from "lucide-react"

export default function Web3Realm() {
  const [walletConnected, setWalletConnected] = useState(false)

  const handleConnectWallet = () => {
    setWalletConnected(true)
  }

  return (
    <div className="container mx-auto py-8 px-4 h-full overflow-y-auto">
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
        <Card className="col-span-1 md:col-span-2 bg-black/60 border-purple-800">
          <CardHeader>
            <CardTitle className="text-purple-400">Dapp Showcase</CardTitle>
            <CardDescription>Interactive decentralized applications</CardDescription>
          </CardHeader>
          <CardContent>
            <Tabs defaultValue="dex" className="w-full">
              <TabsList className="grid grid-cols-2 mb-4">
                <TabsTrigger value="dex">DEX Interface</TabsTrigger>
                <TabsTrigger value="voting">DAO Voting</TabsTrigger>
              </TabsList>

              <TabsContent value="dex" className="space-y-4">
                <div className="p-6 bg-purple-950/20 rounded-lg border border-purple-800">
                  <div className="flex justify-between items-center mb-6">
                    <h3 className="text-lg font-semibold text-purple-400">Token Swap</h3>
                    <Badge variant="outline" className="border-purple-500 text-purple-400">
                      {walletConnected ? "Wallet Connected" : "Wallet Not Connected"}
                    </Badge>
                  </div>

                  <div className="space-y-4">
                    <div className="p-4 bg-black/60 rounded-lg border border-purple-700">
                      <div className="flex justify-between items-center mb-2">
                        <span className="text-sm text-gray-400">From</span>
                        <span className="text-sm text-purple-400">
                          Balance: {walletConnected ? "1.45 ETH" : "0.00"}
                        </span>
                      </div>
                      <div className="flex items-center">
                        <input
                          type="number"
                          placeholder="0.0"
                          className="bg-transparent border-none text-xl text-white focus:outline-none w-full"
                          disabled={!walletConnected}
                        />
                        <Button variant="outline" className="border-purple-600 text-purple-400">
                          ETH
                        </Button>
                      </div>
                    </div>

                    <div className="flex justify-center">
                      <Button
                        variant="ghost"
                        size="icon"
                        className="rounded-full bg-purple-900/50 text-purple-400 hover:bg-purple-800/50"
                      >
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          width="24"
                          height="24"
                          viewBox="0 0 24 24"
                          fill="none"
                          stroke="currentColor"
                          strokeWidth="2"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        >
                          <path d="m17 7-10 10" />
                          <path d="M7 7h10v10" />
                        </svg>
                      </Button>
                    </div>

                    <div className="p-4 bg-black/60 rounded-lg border border-purple-700">
                      <div className="flex justify-between items-center mb-2">
                        <span className="text-sm text-gray-400">To</span>
                        <span className="text-sm text-purple-400">
                          Balance: {walletConnected ? "0.00 USDC" : "0.00"}
                        </span>
                      </div>
                      <div className="flex items-center">
                        <input
                          type="number"
                          placeholder="0.0"
                          className="bg-transparent border-none text-xl text-white focus:outline-none w-full"
                          disabled={!walletConnected}
                        />
                        <Button variant="outline" className="border-purple-600 text-purple-400">
                          USDC
                        </Button>
                      </div>
                    </div>

                    <div className="p-3 bg-purple-950/20 rounded-md text-sm">
                      <div className="flex justify-between items-center">
                        <span className="text-gray-400">Exchange Rate</span>
                        <span className="text-white">1 ETH = 1,850 USDC</span>
                      </div>
                      <div className="flex justify-between items-center">
                        <span className="text-gray-400">Price Impact</span>
                        <span className="text-green-400">0.05%</span>
                      </div>
                      <div className="flex justify-between items-center">
                        <span className="text-gray-400">Network Fee</span>
                        <span className="text-white">~$2.50</span>
                      </div>
                    </div>

                    {walletConnected ? (
                      <Button className="w-full bg-purple-700 hover:bg-purple-600 text-white">Swap Tokens</Button>
                    ) : (
                      <Button
                        className="w-full bg-purple-700 hover:bg-purple-600 text-white"
                        onClick={handleConnectWallet}
                      >
                        <Wallet className="mr-2 h-4 w-4" />
                        Connect Wallet
                      </Button>
                    )}
                  </div>
                </div>
              </TabsContent>

              <TabsContent value="voting" className="space-y-4">
                <div className="p-6 bg-purple-950/20 rounded-lg border border-purple-800">
                  <div className="flex justify-between items-center mb-6">
                    <h3 className="text-lg font-semibold text-purple-400">DAO Governance</h3>
                    <Badge variant="outline" className="border-purple-500 text-purple-400">
                      {walletConnected ? "Wallet Connected" : "Wallet Not Connected"}
                    </Badge>
                  </div>

                  <div className="space-y-6">
                    <div className="p-4 bg-black/60 rounded-lg border border-purple-700">
                      <h4 className="font-medium text-white mb-2">Proposal #42</h4>
                      <p className="text-gray-300 text-sm mb-4">
                        Allocate 500,000 tokens from the treasury for ecosystem grants to support developer adoption.
                      </p>
                      <div className="space-y-2 mb-4">
                        <div className="w-full bg-gray-800 rounded-full h-2.5">
                          <div className="bg-green-600 h-2.5 rounded-full" style={{ width: "65%" }}></div>
                        </div>
                        <div className="flex justify-between text-xs text-gray-400">
                          <span>65% For</span>
                          <span>35% Against</span>
                        </div>
                      </div>
                      <div className="flex space-x-2">
                        <Button
                          className="flex-1 bg-green-700 hover:bg-green-600 text-white"
                          disabled={!walletConnected}
                        >
                          Vote For
                        </Button>
                        <Button
                          variant="outline"
                          className="flex-1 border-red-600 text-red-400 hover:bg-red-950/30"
                          disabled={!walletConnected}
                        >
                          Vote Against
                        </Button>
                      </div>
                    </div>

                    <div className="p-4 bg-black/60 rounded-lg border border-purple-700">
                      <h4 className="font-medium text-white mb-2">Proposal #41</h4>
                      <p className="text-gray-300 text-sm mb-4">
                        Upgrade the protocol to v2.0 with new features and security improvements.
                      </p>
                      <div className="space-y-2 mb-4">
                        <div className="w-full bg-gray-800 rounded-full h-2.5">
                          <div className="bg-green-600 h-2.5 rounded-full" style={{ width: "82%" }}></div>
                        </div>
                        <div className="flex justify-between text-xs text-gray-400">
                          <span>82% For</span>
                          <span>18% Against</span>
                        </div>
                      </div>
                      <Badge className="bg-gray-700">Closed</Badge>
                    </div>

                    {!walletConnected && (
                      <Button
                        className="w-full bg-purple-700 hover:bg-purple-600 text-white"
                        onClick={handleConnectWallet}
                      >
                        <Wallet className="mr-2 h-4 w-4" />
                        Connect Wallet to Vote
                      </Button>
                    )}
                  </div>
                </div>
              </TabsContent>
            </Tabs>
          </CardContent>
        </Card>

        <Card className="bg-black/60 border-purple-800">
          <CardHeader>
            <CardTitle className="text-purple-400">NFT Showcase</CardTitle>
            <CardDescription>Digital collectibles and tokenized achievements</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              <div className="relative aspect-square bg-gradient-to-br from-purple-900 to-indigo-900 rounded-lg overflow-hidden border border-purple-500">
                <div className="absolute inset-0 flex items-center justify-center">
                  <img
                    src="/placeholder.svg?height=300&width=300"
                    alt="NFT Artwork"
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="absolute bottom-0 left-0 right-0 bg-black/70 backdrop-blur-sm p-3">
                  <h4 className="font-medium text-white">Cosmic Coder #024</h4>
                  <div className="flex justify-between items-center mt-1">
                    <span className="text-xs text-purple-300">Collection: Digital Universe</span>
                    <Badge variant="outline" className="text-xs border-purple-500 text-purple-400">
                      Rare
                    </Badge>
                  </div>
                </div>
              </div>

              <div className="p-4 bg-purple-950/20 rounded-md">
                <div className="flex justify-between items-center mb-2">
                  <h4 className="font-medium text-purple-400">Token Details</h4>
                  <Badge variant="outline" className="text-xs">
                    ERC-721
                  </Badge>
                </div>
                <div className="space-y-1 text-sm">
                  <div className="flex justify-between">
                    <span className="text-gray-400">Token ID</span>
                    <span className="text-white font-mono">024</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-gray-400">Owner</span>
                    <span className="text-white font-mono truncate ml-2">0x1a2...3b4c</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-gray-400">Blockchain</span>
                    <span className="text-white">Polygon</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-gray-400">Minted</span>
                    <span className="text-white">2023-09-15</span>
                  </div>
                </div>
              </div>

              <div className="flex space-x-2">
                <Button className="flex-1 bg-purple-700 hover:bg-purple-600 text-white" disabled={!walletConnected}>
                  View on OpenSea
                </Button>
                <Button
                  variant="outline"
                  className="flex-1 border-purple-600 text-purple-400 hover:bg-purple-950/30"
                  disabled={!walletConnected}
                >
                  Transfer
                </Button>
              </div>

              {!walletConnected && (
                <Button className="w-full bg-purple-700 hover:bg-purple-600 text-white" onClick={handleConnectWallet}>
                  <Wallet className="mr-2 h-4 w-4" />
                  Connect Wallet
                </Button>
              )}
            </div>
          </CardContent>
        </Card>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
        <Card className="bg-black/60 border-purple-800">
          <CardHeader>
            <CardTitle className="text-purple-400">On-Chain Resume</CardTitle>
            <CardDescription>Blockchain-verified credentials and achievements</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              <div className="p-4 bg-purple-950/20 rounded-lg border border-purple-800">
                <div className="flex items-center mb-4">
                  <Hexagon className="h-6 w-6 text-purple-400 mr-2" />
                  <h3 className="text-lg font-semibold text-purple-400">Verified Credentials</h3>
                </div>

                <div className="space-y-3">
                  <div className="flex items-start">
                    <div className="w-2 h-2 rounded-full bg-green-500 mt-2 mr-2"></div>
                    <div>
                      <h4 className="font-medium text-white">Senior Blockchain Developer</h4>
                      <p className="text-sm text-gray-400">CryptoTech Solutions • 2021-Present</p>
                      <div className="flex items-center mt-1">
                        <Badge variant="outline" className="text-xs mr-2">
                          Polygon
                        </Badge>
                        <span className="text-xs text-gray-500 font-mono">0x3f4...5e6d</span>
                      </div>
                    </div>
                  </div>

                  <div className="flex items-start">
                    <div className="w-2 h-2 rounded-full bg-green-500 mt-2 mr-2"></div>
                    <div>
                      <h4 className="font-medium text-white">Web3 Certification</h4>
                      <p className="text-sm text-gray-400">Blockchain Academy • 2020</p>
                      <div className="flex items-center mt-1">
                        <Badge variant="outline" className="text-xs mr-2">
                          Ethereum
                        </Badge>
                        <span className="text-xs text-gray-500 font-mono">0x7a8...9b0c</span>
                      </div>
                    </div>
                  </div>

                  <div className="flex items-start">
                    <div className="w-2 h-2 rounded-full bg-green-500 mt-2 mr-2"></div>
                    <div>
                      <h4 className="font-medium text-white">Smart Contract Auditor</h4>
                      <p className="text-sm text-gray-400">DeFi Security Inc. • 2019-2021</p>
                      <div className="flex items-center mt-1">
                        <Badge variant="outline" className="text-xs mr-2">
                          Ethereum
                        </Badge>
                        <span className="text-xs text-gray-500 font-mono">0xd1e...2f3g</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              <div className="flex space-x-2">
                <Button className="flex-1 bg-purple-700 hover:bg-purple-600 text-white">
                  <Database className="mr-2 h-4 w-4" />
                  View on IPFS
                </Button>
                <Button variant="outline" className="flex-1 border-purple-600 text-purple-400 hover:bg-purple-950/30">
                  <Code className="mr-2 h-4 w-4" />
                  Verify on Etherscan
                </Button>
              </div>
            </div>
          </CardContent>
        </Card>

        <Card className="bg-black/60 border-purple-800">
          <CardHeader>
            <CardTitle className="text-purple-400">Blockchain Guestbook</CardTitle>
            <CardDescription>Sign the on-chain guestbook with your wallet</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              <div className="max-h-48 overflow-y-auto p-4 bg-purple-950/20 rounded-lg border border-purple-800">
                <div className="space-y-3">
                  <div className="flex items-start">
                    <div className="w-2 h-2 rounded-full bg-purple-500 mt-2 mr-2"></div>
                    <div>
                      <div className="flex items-center">
                        <span className="font-mono text-xs text-purple-400">0x742...1a3b</span>
                        <span className="mx-2 text-gray-500">•</span>
                        <span className="text-xs text-gray-500">2 days ago</span>
                      </div>
                      <p className="text-sm text-white mt-1">
                        Amazing portfolio! Love the Web3 integration and the cosmic theme.
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start">
                    <div className="w-2 h-2 rounded-full bg-purple-500 mt-2 mr-2"></div>
                    <div>
                      <div className="flex items-center">
                        <span className="font-mono text-xs text-purple-400">0x9c8...7d6e</span>
                        <span className="mx-2 text-gray-500">•</span>
                        <span className="text-xs text-gray-500">5 days ago</span>
                      </div>
                      <p className="text-sm text-white mt-1">
                        Your smart contract work is impressive. Would love to collaborate!
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start">
                    <div className="w-2 h-2 rounded-full bg-purple-500 mt-2 mr-2"></div>
                    <div>
                      <div className="flex items-center">
                        <span className="font-mono text-xs text-purple-400">0x3f5...2e1d</span>
                        <span className="mx-2 text-gray-500">•</span>
                        <span className="text-xs text-gray-500">1 week ago</span>
                      </div>
                      <p className="text-sm text-white mt-1">
                        First to sign your guestbook! The portfolio design is out of this world.
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              {walletConnected ? (
                <div>
                  <textarea
                    placeholder="Leave your message..."
                    className="w-full p-3 bg-black/60 rounded-md border border-purple-700 text-white placeholder:text-gray-500 focus:outline-none focus:ring-2 focus:ring-purple-500 mb-2"
                    rows={3}
                  ></textarea>
                  <Button className="w-full bg-purple-700 hover:bg-purple-600 text-white">Sign Guestbook</Button>
                </div>
              ) : (
                <Button className="w-full bg-purple-700 hover:bg-purple-600 text-white" onClick={handleConnectWallet}>
                  <Wallet className="mr-2 h-4 w-4" />
                  Connect Wallet to Sign
                </Button>
              )}
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
        <h2 className="text-xl font-orbitron mb-4 neon-text-purple">Web3 Technologies</h2>
        <div className="flex flex-wrap justify-center gap-2">
          <Badge className="bg-purple-900 hover:bg-purple-800">Ethereum</Badge>
          <Badge className="bg-purple-900 hover:bg-purple-800">Polygon</Badge>
          <Badge className="bg-purple-900 hover:bg-purple-800">Solidity</Badge>
          <Badge className="bg-purple-900 hover:bg-purple-800">Ethers.js</Badge>
          <Badge className="bg-purple-900 hover:bg-purple-800">Web3.js</Badge>
          <Badge className="bg-purple-900 hover:bg-purple-800">IPFS</Badge>
          <Badge className="bg-purple-900 hover:bg-purple-800">The Graph</Badge>
          <Badge className="bg-purple-900 hover:bg-purple-800">Hardhat</Badge>
          <Badge className="bg-purple-900 hover:bg-purple-800">Foundry</Badge>
          <Badge className="bg-purple-900 hover:bg-purple-800">OpenZeppelin</Badge>
          <Badge className="bg-purple-900 hover:bg-purple-800">ENS</Badge>
          <Badge className="bg-purple-900 hover:bg-purple-800">NFTs</Badge>
        </div>
      </motion.div>
    </div>
  )
}
