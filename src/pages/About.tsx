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
            <h1 className="text-3xl md:text-4xl font-bold ethiopic flex items-center justify-center gap-3">
              <Users className="w-8 h-8 text-primary" />
              ስለ እኛ
            </h1>
            <p className="text-muted-foreground ethiopic max-w-2xl mx-auto">
              EthioAgri - የኢትዮጵያ ገበሬዎችን በቴክኖሎጂ ለማገዝ የተቋቋመ
            </p>
          </div>

          {/* Mission Statement - Top */}
          <Card className="p-6 bg-gradient-to-r from-primary/10 via-success/10 to-accent/10 border-primary/20">
            <div className="text-center space-y-4">
              <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto">
                <Target className="w-8 h-8 text-primary" />
              </div>
              <h2 className="text-2xl font-bold ethiopic">ተልዕኳችን</h2>
              <p className="text-lg ethiopic text-muted-foreground max-w-2xl mx-auto">
                ብልህ እና በአካባቢ ተገቢ የሆነ ቴክኖሎጂን በመጠቀም በኢትዮጵያ ግብርናን ማጠናከር እና ገበሬዎችን በዘመናዊ መፍትሄዎች ማበረታታት።
              </p>
            </div>
          </Card>

          {/* What We Do */}
          <div className="space-y-6">
            <h2 className="text-2xl font-bold ethiopic text-center">ምን እናደርጋለን?</h2>
            <div className="grid md:grid-cols-3 gap-6">
              <Card className="p-6 text-center hover:shadow-medium transition-shadow">
                <div className="w-14 h-14 bg-primary/10 rounded-xl flex items-center justify-center mx-auto mb-4">
                  <Leaf className="w-7 h-7 text-primary" />
                </div>
                <h3 className="font-bold ethiopic mb-2">የሰብል ምርመራ</h3>
                <p className="text-sm text-muted-foreground ethiopic">
                  በ AI ቴክኖሎጂ የሰብል በሽታዎችን በፎቶ ብቻ እንለያለን
                </p>
              </Card>
              <Card className="p-6 text-center hover:shadow-medium transition-shadow">
                <div className="w-14 h-14 bg-success/10 rounded-xl flex items-center justify-center mx-auto mb-4">
                  <Lightbulb className="w-7 h-7 text-success" />
                </div>
                <h3 className="font-bold ethiopic mb-2">ምክር እና መመሪያ</h3>
                <p className="text-sm text-muted-foreground ethiopic">
                  ለገበሬዎች የሚጠቅም ባህላዊ እና ዘመናዊ የግብርና ምክር እንሰጣለን
                </p>
              </Card>
              <Card className="p-6 text-center hover:shadow-medium transition-shadow">
                <div className="w-14 h-14 bg-accent/10 rounded-xl flex items-center justify-center mx-auto mb-4">
                  <Globe className="w-7 h-7 text-accent" />
                </div>
                <h3 className="font-bold ethiopic mb-2">የአየር ሁኔታ</h3>
                <p className="text-sm text-muted-foreground ethiopic">
                  ለግብርና ተገቢ የሆነ የአየር ሁኔታ መረጃ እናቀርባለን
                </p>
              </Card>
            </div>
          </div>

          {/* Why We Built This */}
          <Card className="p-6 md:p-8 bg-muted/50">
            <div className="space-y-4">
              <div className="flex items-center gap-3">
                <Heart className="w-6 h-6 text-destructive" />
                <h2 className="text-xl font-bold ethiopic">ለምን ይህን ፈጠርን?</h2>
              </div>
              <div className="space-y-3 text-muted-foreground ethiopic">
                <p>
                  ኢትዮጵያ ውስጥ ግብርና ለብዙ ሰዎች ዋና የገቢ ምንጭ ነው። ነገር ግን ብዙ ገበሬዎች በሰብል በሽታ፣ ባልተገቢ ውሃ አጠቃቀም እና የአየር ሁኔታ ችግሮች ይጎዳሉ።
                </p>
                <p>
                  እነዚህን ችግሮች ለመፍታት EthioAgri ን ፈጠርን - ገበሬዎች በቴክኖሎጂ እንዲጠቀሙ፣ ችግሮችን ቀድመው እንዲያውቁ እና ምርታማነታቸውን እንዲጨምሩ ለመርዳት።
                </p>
              </div>
            </div>
          </Card>

          {/* Founder Section */}
          <div className="space-y-6">
            <h2 className="text-2xl font-bold ethiopic text-center">መስራች</h2>
            <Card className="p-6 md:p-8">
              <div className="flex flex-col md:flex-row gap-8 items-center md:items-start">
                <div className="w-40 h-40 md:w-48 md:h-48 rounded-2xl overflow-hidden flex-shrink-0 shadow-medium">
                  <img 
                    src={nolawiImage} 
                    alt="ኖላዊ ኃይሉ"
                    className="w-full h-full object-cover"
                  />
                </div>
                
                <div className="flex-1 space-y-4 text-center md:text-left">
                  <div>
                    <h3 className="text-2xl font-bold ethiopic">ኖላዊ ኃይሉ</h3>
                    <p className="text-primary font-medium ethiopic mt-1">
                      AI ገንቢ እና መስራች
                    </p>
                  </div>

                  <div className="space-y-3 text-muted-foreground ethiopic">
                    <p>
                      ኖላዊ በኢትዮጵያ ውስጥ የተማረ ተማሪ AI ገንቢ ሲሆን ቴክኖሎጂን ተጠቅሞ ግብርናን ለማሻሻል እና ገበሬዎችን ለመደገፍ ትልቅ ፍላጎት አለው።
                    </p>
                    <p>
                      EthioAgri ን የፈጠረው ሰው ሰራሽ ብልህነት (AI)፣ ማሽን ለርኒንግ እና የዌብ ቴክኖሎጂዎችን በማጣመር ገበሬዎች የሰብል በሽታዎችን እንዲያገኙ፣ ጠቃሚ መረጃ እንዲያገኙ እና የተሻለ የግብርና ውሳኔ እንዲያደርጉ ለመርዳት ነው።
                    </p>
                  </div>

                  <div className="flex items-center justify-center md:justify-start gap-3 pt-2 flex-wrap">
                    <div className="flex items-center gap-2 px-4 py-2 bg-primary/10 rounded-lg">
                      <GraduationCap className="w-5 h-5 text-primary" />
                      <span className="text-sm font-medium ethiopic">ተማሪ ገንቢ</span>
                    </div>
                    <div className="flex items-center gap-2 px-4 py-2 bg-success/10 rounded-lg">
                      <Leaf className="w-5 h-5 text-success" />
                      <span className="text-sm font-medium ethiopic">የግብርና ቴክ</span>
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
            <h2 className="text-2xl font-bold ethiopic text-center">እሴቶቻችን</h2>
            <div className="grid md:grid-cols-2 gap-4">
              <Card className="p-5 flex items-start gap-4">
                <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center flex-shrink-0">
                  <Zap className="w-6 h-6 text-primary" />
                </div>
                <div>
                  <h3 className="font-bold ethiopic mb-1">ፈጠራ</h3>
                  <p className="text-sm text-muted-foreground ethiopic">
                    አዳዲስ ቴክኖሎጂዎችን በመጠቀም ለገበሬዎች የተሻለ መፍትሄ ማቅረብ
                  </p>
                </div>
              </Card>
              <Card className="p-5 flex items-start gap-4">
                <div className="w-12 h-12 bg-success/10 rounded-lg flex items-center justify-center flex-shrink-0">
                  <Heart className="w-6 h-6 text-success" />
                </div>
                <div>
                  <h3 className="font-bold ethiopic mb-1">ቁርጠኝነት</h3>
                  <p className="text-sm text-muted-foreground ethiopic">
                    የገበሬዎችን ህይወት ለማሻሻል ያልተቋረጠ ጥረት ማድረግ
                  </p>
                </div>
              </Card>
              <Card className="p-5 flex items-start gap-4">
                <div className="w-12 h-12 bg-accent/10 rounded-lg flex items-center justify-center flex-shrink-0">
                  <Globe className="w-6 h-6 text-accent" />
                </div>
                <div>
                  <h3 className="font-bold ethiopic mb-1">ተደራሽነት</h3>
                  <p className="text-sm text-muted-foreground ethiopic">
                    ለሁሉም ገበሬዎች ቀላል እና ተመጣጣኝ ዋጋ ያለው መፍትሄ መስጠት
                  </p>
                </div>
              </Card>
              <Card className="p-5 flex items-start gap-4">
                <div className="w-12 h-12 bg-destructive/10 rounded-lg flex items-center justify-center flex-shrink-0">
                  <Award className="w-6 h-6 text-destructive" />
                </div>
                <div>
                  <h3 className="font-bold ethiopic mb-1">ጥራት</h3>
                  <p className="text-sm text-muted-foreground ethiopic">
                    ትክክለኛ እና አስተማማኝ መረጃ ማቅረብ ቅድሚያ እንሰጣለን
                  </p>
                </div>
              </Card>
            </div>
          </div>

          {/* Contact CTA */}
          <Card className="p-6 text-center bg-gradient-to-r from-primary/5 to-success/5">
            <h3 className="font-bold text-lg ethiopic mb-2">ጥያቄ ወይም አስተያየት አለዎት?</h3>
            <p className="text-muted-foreground ethiopic">
              ለማንኛውም ጥያቄ ወይም አስተያየት እባክዎን ያግኙን
            </p>
          </Card>
        </div>
      </div>
    </div>
  );
};

export default About;
