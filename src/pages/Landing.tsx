import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Sparkles, Zap, Shield, Globe, Image, MessageSquare } from "lucide-react";
import { Link } from "react-router-dom";
import logoImage from "@/assets/onyxgpt-logo.jpg";

const Landing = () => {
  return (
    <div className="min-h-screen bg-background text-foreground overflow-y-auto">
      {/* Hero Section */}
      <div className="container mx-auto px-4 py-12 md:py-20">
        <div className="text-center space-y-6 animate-fade-in">
          {/* Logo */}
          <div className="flex justify-center mb-8">
            <img 
              src={logoImage} 
              alt="OnyxGPT Logo" 
              className="w-32 h-32 md:w-40 md:h-40 object-contain"
            />
          </div>

          <div className="inline-block">
            <div className="flex items-center gap-2 bg-primary/10 border border-primary/20 rounded-full px-4 py-2 glow-blue">
              <Sparkles className="w-4 h-4 text-primary" />
              <span className="text-sm font-medium text-primary">No API Keys Required</span>
            </div>
          </div>

          <h1 className="text-4xl sm:text-5xl md:text-7xl font-bold tracking-tight">
            OnyxGPT
          </h1>

          <p className="text-lg sm:text-xl md:text-2xl text-muted-foreground max-w-3xl mx-auto px-4">
            Access <span className="text-primary font-semibold">500+ AI models</span> from OpenAI, Anthropic, Google, and more.
            <br />
            Zero setup. Zero API keys. Just pure AI power.
          </p>

          <div className="flex gap-4 justify-center pt-4">
            <Link to="/chat">
              <Button size="lg" className="glow-blue-strong text-base sm:text-lg px-6 py-5 sm:px-8 sm:py-6">
                Start Chatting Free
              </Button>
            </Link>
          </div>
        </div>

        {/* Features Grid */}
        <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-4 sm:gap-6 mt-12 md:mt-20">
          <Card className="p-4 sm:p-6 border-primary/20 hover:border-primary/40 transition-all hover:glow-blue animate-slide-up">
            <MessageSquare className="w-10 h-10 sm:w-12 sm:h-12 text-primary mb-3 sm:mb-4" />
            <h3 className="text-lg sm:text-xl font-semibold mb-2">500+ Text Models</h3>
            <p className="text-muted-foreground">
              GPT-5, Claude Opus 4, Gemini 2.5 Pro, DeepSeek R1, Grok 3, Llama 4, and hundreds more
            </p>
          </Card>

          <Card className="p-4 sm:p-6 border-primary/20 hover:border-primary/40 transition-all hover:glow-blue animate-slide-up" style={{ animationDelay: '0.1s' }}>
            <Image className="w-10 h-10 sm:w-12 sm:h-12 text-primary mb-3 sm:mb-4" />
            <h3 className="text-lg sm:text-xl font-semibold mb-2">AI Image Generation</h3>
            <p className="text-muted-foreground">
              6 powerful image models including Flux, Turbo, and SeeDream. Just type /img to create
            </p>
          </Card>

          <Card className="p-4 sm:p-6 border-primary/20 hover:border-primary/40 transition-all hover:glow-blue animate-slide-up sm:col-span-2 md:col-span-1" style={{ animationDelay: '0.2s' }}>
            <Globe className="w-10 h-10 sm:w-12 sm:h-12 text-primary mb-3 sm:mb-4" />
            <h3 className="text-lg sm:text-xl font-semibold mb-2">Vision & Search</h3>
            <p className="text-muted-foreground">
              Upload images for analysis, enable web search, and use deep research on supported models
            </p>
          </Card>
        </div>

        {/* User Pays Concept */}
        <div className="mt-12 md:mt-20 max-w-4xl mx-auto">
          <Card className="p-4 sm:p-6 md:p-8 border-primary/30 bg-card/50 backdrop-blur-sm">
            <div className="flex items-start gap-3 sm:gap-4">
              <Shield className="w-6 h-6 sm:w-8 sm:h-8 text-primary flex-shrink-0 mt-1" />
              <div>
                <h2 className="text-xl sm:text-2xl font-bold mb-3 sm:mb-4">How It Works: User Pays Concept</h2>
                <div className="space-y-3 text-muted-foreground">
                  <p>
                    This app uses <strong className="text-foreground">Puter.js</strong>, which provides free access to AI models through their platform.
                    You get <strong className="text-primary">400 million tokens per month</strong> completely free.
                  </p>
                  <p>
                    <strong className="text-foreground">No credit cards.</strong> No API keys. Just sign in with a Puter account and start using world-class AI models.
                  </p>
                  <p className="flex items-center gap-2">
                    <Zap className="w-5 h-5 text-primary" />
                    <span><strong>Rate Limit Info:</strong> If you see "Failed to get response from AI", you've used your monthly quota. Simply create a new Puter account at puter.com to get another 400M tokens.</span>
                  </p>
                  <p className="text-sm bg-primary/10 border border-primary/20 rounded-lg p-3 mt-4">
                    <strong>Check Your Usage:</strong> Go to puter.com → Settings → Usage to track your token consumption
                  </p>
                </div>
              </div>
            </div>
          </Card>
        </div>

        {/* Model List */}
        <div className="mt-12 md:mt-16">
          <h2 className="text-2xl sm:text-3xl font-bold text-center mb-6 sm:mb-8">Featured AI Providers</h2>
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-3 sm:gap-4 max-w-4xl mx-auto">
            {['OpenAI', 'Anthropic', 'Google', 'DeepSeek', 'xAI', 'Meta', 'Mistral', 'Qwen', 'Perplexity', 'Microsoft'].map((provider) => (
              <div key={provider} className="bg-card border border-border rounded-lg p-3 sm:p-4 text-center hover:border-primary/40 transition-all">
                <span className="font-medium text-sm sm:text-base">{provider}</span>
              </div>
            ))}
          </div>
        </div>

        {/* CTA */}
        <div className="mt-12 md:mt-20 text-center pb-8">
          <Link to="/chat">
            <Button size="lg" className="glow-blue-strong text-base sm:text-lg px-8 py-5 sm:px-12 sm:py-6">
              Launch OnyxGPT
            </Button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Landing;
