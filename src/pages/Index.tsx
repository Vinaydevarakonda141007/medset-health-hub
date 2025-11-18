import { useNavigate } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Activity, Pill, FileText, Brain, CheckCircle } from "lucide-react";

const Index = () => {
  const navigate = useNavigate();

  const features = [
    {
      icon: Pill,
      title: "Medicine Reminders",
      description: "Never miss a dose with smart prescription scheduling",
      color: "text-primary",
    },
    {
      icon: Activity,
      title: "Fitness Tracking",
      description: "Connect with Google Fit and monitor your activities",
      color: "text-medical-green",
    },
    {
      icon: FileText,
      title: "Document Storage",
      description: "Securely store prescriptions, reports, and scans",
      color: "text-secondary",
    },
    {
      icon: Brain,
      title: "AI Health Coach",
      description: "Get personalized workout and diet suggestions",
      color: "text-accent",
    },
  ];

  const benefits = [
    "Secure and private data storage",
    "Medication adherence tracking",
    "Health condition monitoring",
    "Personalized AI recommendations",
    "Easy document management",
    "Activity insights and trends",
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-medical-blue/10 via-background to-medical-green/10">
      {/* Hero Section */}
      <section className="container mx-auto px-4 py-16 md:py-24">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="flex justify-center mb-6">
            <div className="w-20 h-20 rounded-full bg-primary flex items-center justify-center shadow-lg">
              <Activity className="w-10 h-10 text-primary-foreground" />
            </div>
          </div>
          <h1 className="text-4xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
            Your Complete Medical Management Solution
          </h1>
          <p className="text-xl text-muted-foreground mb-8">
            MedSet helps you manage medications, track fitness, store medical documents, 
            and get AI-powered health recommendations—all in one secure platform.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" onClick={() => navigate("/auth")} className="text-lg px-8">
              Get Started
            </Button>
            <Button size="lg" variant="outline" onClick={() => navigate("/auth")} className="text-lg px-8">
              Sign In
            </Button>
          </div>
        </div>

        {/* Features Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
          {features.map((feature, index) => (
            <Card key={index} className="hover:shadow-xl transition-all hover:-translate-y-1">
              <CardContent className="pt-6">
                <div className={`w-12 h-12 rounded-lg bg-muted flex items-center justify-center mb-4 ${feature.color}`}>
                  <feature.icon className="w-6 h-6" />
                </div>
                <h3 className="font-semibold text-lg mb-2">{feature.title}</h3>
                <p className="text-sm text-muted-foreground">{feature.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Benefits Section */}
        <Card className="max-w-2xl mx-auto">
          <CardContent className="pt-6">
            <h2 className="text-2xl font-bold mb-6 text-center">Why Choose MedSet?</h2>
            <div className="grid sm:grid-cols-2 gap-4">
              {benefits.map((benefit, index) => (
                <div key={index} className="flex items-start gap-3">
                  <CheckCircle className="w-5 h-5 text-medical-green flex-shrink-0 mt-0.5" />
                  <span className="text-sm">{benefit}</span>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>
      </section>
    </div>
  );
};

export default Index;
