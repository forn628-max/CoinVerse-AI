
export default function Home() {
  return (
    <div className="min-h-screen bg-gradient-to-r from-purple-900 to-indigo-900 text-white">
      <div className="container mx-auto px-4 py-20 text-center">
        <h1 className="text-5xl md:text-7xl font-black mb-8 bg-gradient-to-r from-yellow-400 to-orange-500 bg-clip-text text-transparent">
          CoinVerse AI 🚀
        </h1>
        <p className="text-xl md:text-2xl mb-12 text-gray-300 max-w-2xl mx-auto">
          AI-Powered Crypto Dashboard with Price Predictions & Portfolio Tracking
        </p>
        <button className="bg-gradient-to-r from-green-500 to-blue-600 px-12 py-4 rounded-full text-xl font-bold hover:scale-105 transition-all">
          Launch App
        </button>
      </div>
    </div>
  )
}
