import { Card } from "@/components/ui/card";
import { 
  User, 
  Code, 
  Leaf, 
  GraduationCap,
  Heart,
  Target,
  Linkedin,
  Github,
  Mail
} from "lucide-react";
import zakirImage from "@/assets/team/zakir.png";
import nolawiImage from "@/assets/team/nolawi.jpg";

const About = () => {
  return (
    <div className="min-h-screen pt-20 md:pt-24 pb-24 md:pb-8 bg-muted/30">
      <div className="container mx-auto px-4 py-8">
        <div className="max-w-4xl mx-auto space-y-12">
          {/* Header */}
          <div className="text-center space-y-4">
            <h1 className="text-3xl md:text-4xl font-bold ethiopic flex items-center justify-center gap-3">
              <User className="w-8 h-8 text-primary" />
              ስለ ገንቢዎች
            </h1>
            <p className="text-muted-foreground ethiopic max-w-2xl mx-auto">
              About the Developers
            </p>
          </div>

          {/* Main Developer - Nolawi */}
          <Card className="p-6 md:p-8">
            <div className="flex flex-col md:flex-row gap-8 items-center md:items-start">
              <div className="w-48 h-48 md:w-64 md:h-64 rounded-2xl overflow-hidden flex-shrink-0 shadow-medium">
                <img 
                  src={nolawiImage} 
                  alt="Nolawi Hailu"
                  className="w-full h-full object-cover"
                />
              </div>
              
              <div className="flex-1 space-y-6 text-center md:text-left">
                <div>
                  <h2 className="text-2xl md:text-3xl font-bold">Nolawi Hailu</h2>
                  <p className="text-primary ethiopic font-medium mt-1">
                    AI Developer & Founder
                  </p>
                </div>

                <div className="space-y-4 text-muted-foreground">
                  <p>
                    I'm Nolawi Hailu, a student AI developer from Ethiopia with a strong passion for using technology to improve agriculture and support farmers.
                  </p>
                  
                  <p>
                    Growing up in Ethiopia, I've seen how important agriculture is to people's daily lives and how challenges like crop diseases, inefficient irrigation, and lack of timely information affect farmers. These experiences motivated me to build EthioAgri as a practical, technology-driven solution designed for real agricultural problems.
                  </p>
                  
                  <p>
                    I developed EthioAgri by combining artificial intelligence, machine learning, and web technologies to help farmers detect crop diseases, access useful insights, and make better farming decisions. My focus is on creating tools that are affordable, easy to use, and suitable for local farming conditions, especially for small-scale farmers.
                  </p>
                  
                  <p>
                    Beyond this project, I've worked on multiple AI and STEM initiatives in education, agriculture, and sustainability.
                  </p>
                </div>

                <div className="flex items-center justify-center md:justify-start gap-3 pt-2">
                  <div className="flex items-center gap-2 px-4 py-2 bg-primary/10 rounded-lg">
                    <GraduationCap className="w-5 h-5 text-primary" />
                    <span className="text-sm font-medium">Student Developer</span>
                  </div>
                  <div className="flex items-center gap-2 px-4 py-2 bg-success/10 rounded-lg">
                    <Leaf className="w-5 h-5 text-success" />
                    <span className="text-sm font-medium">AgriTech</span>
                  </div>
                  <div className="flex items-center gap-2 px-4 py-2 bg-accent/10 rounded-lg">
                    <Code className="w-5 h-5 text-accent" />
                    <span className="text-sm font-medium">AI/ML</span>
                  </div>
                </div>
              </div>
            </div>
          </Card>

          {/* Mission Statement */}
          <Card className="p-6 bg-primary/5 border-primary/20">
            <div className="flex items-start gap-4">
              <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center flex-shrink-0">
                <Target className="w-6 h-6 text-primary" />
              </div>
              <div>
                <h3 className="font-bold text-lg mb-2">Mission / ተልዕኮ</h3>
                <p className="text-muted-foreground">
                  My mission is to use intelligent, locally relevant technology to strengthen agriculture in Ethiopia and empower farmers with smart solutions.
                </p>
                <p className="text-muted-foreground ethiopic mt-2">
                  ተልዕኮዬ ብልህ እና በአካባቢ ተገቢ የሆነ ቴክኖሎጂን በመጠቀም በኢትዮጵያ ግብርናን ማጠናከር እና ገበሬዎችን በዘመናዊ መፍትሄዎች ማበረታታት ነው።
                </p>
              </div>
            </div>
          </Card>

          {/* Team Member - Zakir */}
          <div>
            <h2 className="text-2xl font-bold ethiopic mb-6 flex items-center gap-2">
              <Heart className="w-6 h-6 text-primary" />
              የቡድን አባል / Team Member
            </h2>
            
            <Card className="p-6">
              <div className="flex flex-col sm:flex-row gap-6 items-center sm:items-start">
                <div className="w-32 h-32 rounded-xl overflow-hidden flex-shrink-0 shadow-soft">
                  <img 
                    src={zakirImage} 
                    alt="Zakir"
                    className="w-full h-full object-cover"
                  />
                </div>
                
                <div className="flex-1 text-center sm:text-left">
                  <h3 className="text-xl font-bold">Zakir</h3>
                  <p className="text-primary font-medium mt-1">Team Member</p>
                  <p className="text-muted-foreground mt-3">
                    Contributing to the development and success of EthioAgri, helping bring smart agricultural solutions to Ethiopian farmers.
                  </p>
                </div>
              </div>
            </Card>
          </div>

          {/* Project Info */}
          <Card className="p-6">
            <h3 className="font-bold text-lg ethiopic mb-4">ስለ EthioAgri / About EthioAgri</h3>
            <div className="grid md:grid-cols-3 gap-6">
              <div className="text-center p-4 bg-muted/50 rounded-lg">
                <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mx-auto mb-3">
                  <Leaf className="w-6 h-6 text-primary" />
                </div>
                <h4 className="font-medium ethiopic">የሰብል ምርመራ</h4>
                <p className="text-sm text-muted-foreground">Crop Diagnosis</p>
              </div>
              <div className="text-center p-4 bg-muted/50 rounded-lg">
                <div className="w-12 h-12 bg-success/10 rounded-lg flex items-center justify-center mx-auto mb-3">
                  <Code className="w-6 h-6 text-success" />
                </div>
                <h4 className="font-medium ethiopic">AI ቴክኖሎጂ</h4>
                <p className="text-sm text-muted-foreground">AI Technology</p>
              </div>
              <div className="text-center p-4 bg-muted/50 rounded-lg">
                <div className="w-12 h-12 bg-accent/10 rounded-lg flex items-center justify-center mx-auto mb-3">
                  <Heart className="w-6 h-6 text-accent" />
                </div>
                <h4 className="font-medium ethiopic">ለገበሬዎች</h4>
                <p className="text-sm text-muted-foreground">For Farmers</p>
              </div>
            </div>
          </Card>
        </div>
      </div>
    </div>
  );
};

export default About;
