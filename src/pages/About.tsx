import { Card } from "@/components/ui/card";
import { 
  Users, 
  Code, 
  Leaf, 
  GraduationCap,
  Heart,
  Target,
  Globe,
  Lightbulb,
  Award,
  Zap
} from "lucide-react";
import nolawiImage from "@/assets/team/nolawi.jpg";

const About = () => {
  return (
    <div className="min-h-screen pt-20 md:pt-24 pb-24 md:pb-8 bg-muted/30">
      <div className="container mx-auto px-4 py-8">
        <div className="max-w-4xl mx-auto space-y-12">
          {/* Header */}
          <div className="text-center space-y-4">
            <h1 className="text-3xl md:text-4xl font-bold flex items-center justify-center gap-3">
              <Users className="w-8 h-8 text-primary" />
              <span className="ethiopic">ስለ እኛ</span> / About Us
            </h1>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              <span className="ethiopic">EthioAgri - የኢትዮጵያ ገበሬዎችን በቴክኖሎጂ ለማገዝ የተቋቋመ</span>
              <br />
              <span className="text-sm">Empowering Ethiopian farmers through technology</span>
            </p>
          </div>

          {/* Mission Statement - Top */}
          <Card className="p-6 bg-gradient-to-r from-primary/10 via-success/10 to-accent/10 border-primary/20">
            <div className="text-center space-y-4">
              <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto">
                <Target className="w-8 h-8 text-primary" />
              </div>
              <h2 className="text-2xl font-bold">
                <span className="ethiopic">ተልዕኳችን</span> / Our Mission
              </h2>
              <div className="max-w-2xl mx-auto space-y-2">
                <p className="text-lg ethiopic text-muted-foreground">
                  ብልህ እና በአካባቢ ተገቢ የሆነ ቴክኖሎጂን በመጠቀም በኢትዮጵያ ግብርናን ማጠናከር እና ገበሬዎችን በዘመናዊ መፍትሄዎች ማበረታታት።
                </p>
                <p className="text-muted-foreground">
                  To strengthen agriculture in Ethiopia using intelligent and locally relevant technology, empowering farmers with modern solutions.
                </p>
              </div>
            </div>
          </Card>

          {/* What We Do */}
          <div className="space-y-6">
            <h2 className="text-2xl font-bold text-center">
              <span className="ethiopic">ምን እናደርጋለን?</span> / What We Do
            </h2>
            <div className="grid md:grid-cols-3 gap-6">
              <Card className="p-6 text-center hover:shadow-medium transition-shadow">
                <div className="w-14 h-14 bg-primary/10 rounded-xl flex items-center justify-center mx-auto mb-4">
                  <Leaf className="w-7 h-7 text-primary" />
                </div>
                <h3 className="font-bold mb-1">
                  <span className="ethiopic">የሰብል ምርመራ</span>
                </h3>
                <p className="text-sm font-medium text-primary mb-2">Crop Diagnosis</p>
                <p className="text-sm text-muted-foreground">
                  <span className="ethiopic">በ AI ቴክኖሎጂ የሰብል በሽታዎችን በፎቶ ብቻ እንለያለን</span>
                  <br />
                  <span className="text-xs">AI-powered disease detection from photos</span>
                </p>
              </Card>
              <Card className="p-6 text-center hover:shadow-medium transition-shadow">
                <div className="w-14 h-14 bg-success/10 rounded-xl flex items-center justify-center mx-auto mb-4">
                  <Lightbulb className="w-7 h-7 text-success" />
                </div>
                <h3 className="font-bold mb-1">
                  <span className="ethiopic">ምክር እና መመሪያ</span>
                </h3>
                <p className="text-sm font-medium text-success mb-2">Advice & Guidance</p>
                <p className="text-sm text-muted-foreground">
                  <span className="ethiopic">ለገበሬዎች የሚጠቅም ባህላዊ እና ዘመናዊ የግብርና ምክር እንሰጣለን</span>
                  <br />
                  <span className="text-xs">Traditional and modern farming tips</span>
                </p>
              </Card>
              <Card className="p-6 text-center hover:shadow-medium transition-shadow">
                <div className="w-14 h-14 bg-accent/10 rounded-xl flex items-center justify-center mx-auto mb-4">
                  <Globe className="w-7 h-7 text-accent" />
                </div>
                <h3 className="font-bold mb-1">
                  <span className="ethiopic">የአየር ሁኔታ</span>
                </h3>
                <p className="text-sm font-medium text-accent mb-2">Weather Forecast</p>
                <p className="text-sm text-muted-foreground">
                  <span className="ethiopic">ለግብርና ተገቢ የሆነ የአየር ሁኔታ መረጃ እናቀርባለን</span>
                  <br />
                  <span className="text-xs">Agriculture-focused weather data</span>
                </p>
              </Card>
            </div>
          </div>

          {/* Why We Built This */}
          <Card className="p-6 md:p-8 bg-muted/50">
            <div className="space-y-4">
              <div className="flex items-center gap-3">
                <Heart className="w-6 h-6 text-destructive" />
                <h2 className="text-xl font-bold">
                  <span className="ethiopic">ለምን ይህን ፈጠርን?</span> / Why We Built This
                </h2>
              </div>
              <div className="space-y-4 text-muted-foreground">
                <div className="ethiopic space-y-2">
                  <p>
                    ኢትዮጵያ ውስጥ ግብርና ለብዙ ሰዎች ዋና የገቢ ምንጭ ነው። ነገር ግን ብዙ ገበሬዎች በሰብል በሽታ፣ ባልተገቢ ውሃ አጠቃቀም እና የአየር ሁኔታ ችግሮች ይጎዳሉ።
                  </p>
                  <p>
                    እነዚህን ችግሮች ለመፍታት EthioAgri ን ፈጠርን - ገበሬዎች በቴክኖሎጂ እንዲጠቀሙ፣ ችግሮችን ቀድመው እንዲያውቁ እና ምርታማነታቸውን እንዲጨምሩ ለመርዳት።
                  </p>
                </div>
                <div className="border-t border-border pt-4 space-y-2">
                  <p>
                    In Ethiopia, agriculture is the primary source of income for millions of people. However, many farmers suffer from crop diseases, inefficient water usage, and unpredictable weather conditions.
                  </p>
                  <p>
                    We built EthioAgri to solve these problems - helping farmers leverage technology to identify issues early, make informed decisions, and increase their productivity.
                  </p>
                </div>
              </div>
            </div>
          </Card>

          {/* Founder Section */}
          <div className="space-y-6">
            <h2 className="text-2xl font-bold text-center">
              <span className="ethiopic">መስራች</span> / Founder
            </h2>
            <Card className="p-6 md:p-8">
              <div className="flex flex-col md:flex-row gap-8 items-center md:items-start">
                <div className="w-40 h-40 md:w-48 md:h-48 rounded-2xl overflow-hidden flex-shrink-0 shadow-medium">
                  <img 
                    src={nolawiImage} 
                    alt="Nolawi Hailu"
                    className="w-full h-full object-cover"
                  />
                </div>
                
                <div className="flex-1 space-y-4 text-center md:text-left">
                  <div>
                    <h3 className="text-2xl font-bold">
                      <span className="ethiopic">ኖላዊ ኃይሉ</span> / Nolawi Hailu
                    </h3>
                    <p className="text-primary font-medium mt-1">
                      <span className="ethiopic">AI ገንቢ እና መስራች</span> / AI Developer & Founder
                    </p>
                  </div>

                  <div className="space-y-4 text-muted-foreground">
                    <div className="ethiopic">
                      <p>
                        ኖላዊ በኢትዮጵያ ውስጥ የተማረ ተማሪ AI ገንቢ ሲሆን ቴክኖሎጂን ተጠቅሞ ግብርናን ለማሻሻል እና ገበሬዎችን ለመደገፍ ትልቅ ፍላጎት አለው።
                      </p>
                    </div>
                    <div className="border-t border-border pt-3 space-y-2">
                      <p>
                        I'm Nolawi Hailu, a student AI developer from Ethiopia with a strong passion for using technology to improve agriculture and support farmers.
                      </p>
                      <p>
                        Growing up in Ethiopia, I've seen how important agriculture is to people's daily lives and how challenges like crop diseases, inefficient irrigation, and lack of timely information affect farmers. These experiences motivated me to build EthioAgri.
                      </p>
                      <p>
                        I developed this platform by combining artificial intelligence, machine learning, and web technologies to help farmers detect crop diseases, access useful insights, and make better farming decisions. My focus is on creating tools that are affordable, easy to use, and suitable for local farming conditions.
                      </p>
                      <p>
                        Beyond this project, I've worked on multiple AI and STEM initiatives in education, agriculture, and sustainability.
                      </p>
                    </div>
                  </div>

                  <div className="flex items-center justify-center md:justify-start gap-3 pt-2 flex-wrap">
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
          </div>

          {/* Our Values */}
          <div className="space-y-6">
            <h2 className="text-2xl font-bold text-center">
              <span className="ethiopic">እሴቶቻችን</span> / Our Values
            </h2>
            <div className="grid md:grid-cols-2 gap-4">
              <Card className="p-5 flex items-start gap-4">
                <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center flex-shrink-0">
                  <Zap className="w-6 h-6 text-primary" />
                </div>
                <div>
                  <h3 className="font-bold mb-1">
                    <span className="ethiopic">ፈጠራ</span> / Innovation
                  </h3>
                  <p className="text-sm text-muted-foreground">
                    Using cutting-edge technology to provide better solutions for farmers
                  </p>
                </div>
              </Card>
              <Card className="p-5 flex items-start gap-4">
                <div className="w-12 h-12 bg-success/10 rounded-lg flex items-center justify-center flex-shrink-0">
                  <Heart className="w-6 h-6 text-success" />
                </div>
                <div>
                  <h3 className="font-bold mb-1">
                    <span className="ethiopic">ቁርጠኝነት</span> / Commitment
                  </h3>
                  <p className="text-sm text-muted-foreground">
                    Dedicated to continuously improving farmers' lives and livelihoods
                  </p>
                </div>
              </Card>
              <Card className="p-5 flex items-start gap-4">
                <div className="w-12 h-12 bg-accent/10 rounded-lg flex items-center justify-center flex-shrink-0">
                  <Globe className="w-6 h-6 text-accent" />
                </div>
                <div>
                  <h3 className="font-bold mb-1">
                    <span className="ethiopic">ተደራሽነት</span> / Accessibility
                  </h3>
                  <p className="text-sm text-muted-foreground">
                    Making technology simple and affordable for all farmers
                  </p>
                </div>
              </Card>
              <Card className="p-5 flex items-start gap-4">
                <div className="w-12 h-12 bg-destructive/10 rounded-lg flex items-center justify-center flex-shrink-0">
                  <Award className="w-6 h-6 text-destructive" />
                </div>
                <div>
                  <h3 className="font-bold mb-1">
                    <span className="ethiopic">ጥራት</span> / Quality
                  </h3>
                  <p className="text-sm text-muted-foreground">
                    Prioritizing accurate and reliable information for better decisions
                  </p>
                </div>
              </Card>
            </div>
          </div>

          {/* Contact CTA */}
          <Card className="p-6 text-center bg-gradient-to-r from-primary/5 to-success/5">
            <h3 className="font-bold text-lg mb-2">
              <span className="ethiopic">ጥያቄ ወይም አስተያየት አለዎት?</span>
            </h3>
            <p className="text-muted-foreground">
              Have questions or feedback? We'd love to hear from you!
            </p>
          </Card>
        </div>
      </div>
    </div>
  );
};

export default About;
