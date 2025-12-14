import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Camera, BookOpen, MessageCircle, Leaf, LogIn, MapPin, Cloud, Smartphone, Users, Shield, Zap, Globe } from "lucide-react";
import { useNavigate } from "react-router-dom";
import logo from "@/assets/logo.png";

const Home = () => {
  const navigate = useNavigate();

  const features = [
    {
      icon: Camera,
      titleAm: "ፈጣን ምርመራ",
      descAm: "በ AI የሚተገበር የምስል ትንታኔ የእፅዋት በሽታዎችን፣ ተባዮችን እና የንጥረ ነገሮችን እጥረት ይለያል",
      color: "primary",
      link: "/diagnose"
    },
    {
      icon: BookOpen,
      titleAm: "ከመስመር ውጭ መመሪያዎች",
      descAm: "ለተለያዩ ሰብሎች የአግሮቤዮሎጂ ምክሮችን፣ የመከላከያ እርምጃዎችን እና ምርጥ ልምዶችን ያግኙ",
      color: "accent",
      link: "/guides"
    },
    {
      icon: MapPin,
      titleAm: "የአካባቢ ምክሮች",
      descAm: "በኢትዮጵያ የአየር ንብረት እና የአፈር ሁኔታዎች ላይ የተመሰረተ ምክሮች ያግኙ",
      color: "success",
      link: "/market"
    },
    {
      icon: Cloud,
      titleAm: "የአየር ሁኔታ ትንበያ",
      descAm: "የአካባቢዎን የአየር ሁኔታ ትንበያ ይከታተሉ ለማዳበሪያ አጠቃቀም ውሳኔዎች",
      color: "primary",
      link: "/weather"
    },
    {
      icon: Smartphone,
      titleAm: "ከመስመር ውጭ ድጋፍ",
      descAm: "ያለ ኢንተርኔት ግንኙነት ሁሉንም ባህሪዎች ይጠቀሙ። መረጃ ይቀመጣል እና በኋላ ይመዛመዛል",
      color: "accent",
      link: "/diagnose"
    },
    {
      icon: Users,
      titleAm: "የማስፋፊያ ሰራተኞች",
      descAm: "የማስፋፊያ ሰራተኞች የተሰበሰበ ዳታ እና ሪፖርቶችን ማየት ይችላሉ",
      color: "success",
      link: "/history"
    }
  ];

  const howItWorks = [
    {
      step: "1",
      titleAm: "ፎቶ ይውሰዱ",
      descAm: "የእፅዋትዎን ቅጠል ወይም ግንድ ፎቶ ያንሱ ወይም ከማህደር ይስቀሉ"
    },
    {
      step: "2",
      titleAm: "መረጃ ያስገቡ",
      descAm: "የሰብል አይነት፣ የአፈር አይነት እና የአካባቢ መረጃዎችን ያስገቡ"
    },
    {
      step: "3",
      titleAm: "ውጤት ያግኙ",
      descAm: "AI ምስሉን ይተነትናል እና በሽታ፣ እጥረት ወይም ተባይ ያገኛል"
    },
    {
      step: "4",
      titleAm: "ምክር ይከተሉ",
      descAm: "ለአካባቢዎ ተስማሚ ማዳበሪያ እና ሕክምና ምክሮችን ያግኙ"
    }
  ];

  const impacts = [
    { icon: Leaf, valueAm: "50+", labelAm: "የሰብል አይነቶች", descAm: "ጤፍ፣ በቆሎ፣ ቡና እና ሌሎችም" },
    { icon: Zap, valueAm: "95%", labelAm: "የትክክለኛነት መጠን", descAm: "በ AI ቴክኖሎጂ የተመሰረተ" },
    { icon: Shield, valueAm: "24/7", labelAm: "ከመስመር ውጭ", descAm: "ያለ ኢንተርኔት ይሰራል" },
    { icon: Globe, valueAm: "3+", labelAm: "ቋንቋዎች", descAm: "አማርኛ፣ ኦሮምኛ፣ ትግርኛ" }
  ];

  return (
    <div className="min-h-screen pt-20 md:pt-24 pb-24 md:pb-8">
      {/* Hero Section */}
      <section className="container mx-auto px-4 py-12 md:py-20">
        <div className="max-w-4xl mx-auto text-center space-y-6">
          <img src={logo} alt="Ethio Agri Logo" className="w-24 h-24 mx-auto mb-4" />
          
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-success/10 rounded-full mb-4">
            <Leaf className="w-4 h-4 text-success" />
            <span className="text-sm font-medium text-success ethiopic">
              AI የሚተገበር የእፅዋት ጤንነት ምርመራ
            </span>
          </div>
          
          <h1 className="text-4xl md:text-6xl font-bold ethiopic leading-tight">
            የእፅዋት ጤንነት ምርመራ
            <span className="block text-primary mt-2">በአንድ ሰከንድ ውስጥ</span>
          </h1>
          
          <p className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto ethiopic">
            ፎቶ ይውሰዱ፣ የእፅዋትዎን ጤንነት ያረጋግጡ እና የአካባቢያዊ ማዳበሪያ እና ሕክምና ምክሮችን ያግኙ። 
            Ethio Agri የኢትዮጵያ ገበሬዎችን ለመርዳት የተሰራ AI መሳሪያ ነው።
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center pt-6">
            <Button
              size="lg"
              className="w-full sm:w-auto text-lg h-14 px-8 bg-gradient-primary hover:opacity-90 shadow-medium ethiopic"
              onClick={() => navigate("/diagnose")}
            >
              <Camera className="w-5 h-5 mr-2" />
              ፊታ ይውሰዱ - ምርመራን ይጀምሩ
            </Button>
            
            <Button
              size="lg"
              variant="outline"
              className="w-full sm:w-auto text-lg h-14 px-8 ethiopic"
              onClick={() => navigate("/guides")}
            >
              <BookOpen className="w-5 h-5 mr-2" />
              መመሪያዎችን ይመልከቱ
            </Button>
            
            <Button
              size="lg"
              variant="secondary"
              className="w-full sm:w-auto text-lg h-14 px-8 ethiopic"
              onClick={() => navigate("/auth")}
            >
              <LogIn className="w-5 h-5 mr-2" />
              ይግቡ / ይመዝገቡ
            </Button>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section className="container mx-auto px-4 py-12 bg-muted/30">
        <div className="max-w-4xl mx-auto text-center space-y-6">
          <h2 className="text-3xl md:text-4xl font-bold ethiopic">ስለ Ethio Agri</h2>
          <p className="text-lg text-muted-foreground ethiopic leading-relaxed">
            Ethio Agri የኢትዮጵያ ገበሬዎችን ለመርዳት የተሰራ ዘመናዊ የምርመራ መሳሪያ ነው። 
            ይህ አፕሊኬሽን AI ቴክኖሎጂን በመጠቀም የእፅዋት በሽታዎችን፣ የንጥረ ነገር እጥረቶችን 
            እና ተባዮችን በፎቶ ትንተና ያውቃል። ከዚያም በኢትዮጵያ አፈር እና አየር ንብረት ላይ 
            የተመሰረተ ማዳበሪያ እና ሕክምና ምክሮችን ይሰጣል።
          </p>
          <div className="grid md:grid-cols-2 gap-6 mt-8">
            <Card className="p-6 text-left">
              <h3 className="text-xl font-bold ethiopic mb-2">ዓላማችን</h3>
              <p className="text-muted-foreground ethiopic">
                የኢትዮጵያ ገበሬዎች የሰብል ምርታቸውን እንዲያሳድጉ እና ወጪያቸውን እንዲቀንሱ 
                ዘመናዊ ቴክኖሎጂን ተደራሽ ማድረግ ነው።
              </p>
            </Card>
            <Card className="p-6 text-left">
              <h3 className="text-xl font-bold ethiopic mb-2">እይታችን</h3>
              <p className="text-muted-foreground ethiopic">
                እያንዳንዱ ገበሬ በስልኩ ላይ ባለሙያ ምክር እንዲያገኝ እና የምግብ ዋስትናችንን 
                ለማሻሻል አስተዋፅኦ ማድረግ።
              </p>
            </Card>
          </div>
        </div>
      </section>

      {/* How It Works */}
      <section className="container mx-auto px-4 py-12">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold ethiopic text-center mb-12">እንዴት ይሰራል?</h2>
          
          <div className="grid md:grid-cols-4 gap-6">
            {howItWorks.map((item, idx) => (
              <div key={idx} className="text-center space-y-4">
                <div className="w-16 h-16 bg-primary text-primary-foreground rounded-full flex items-center justify-center text-2xl font-bold mx-auto">
                  {item.step}
                </div>
                <h3 className="text-lg font-bold ethiopic">{item.titleAm}</h3>
                <p className="text-sm text-muted-foreground ethiopic">{item.descAm}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Features Grid */}
      <section className="container mx-auto px-4 py-12">
        <h2 className="text-3xl md:text-4xl font-bold ethiopic text-center mb-12">ዋና ባህሪዎች</h2>
        <div className="grid md:grid-cols-3 gap-6 max-w-5xl mx-auto">
          {features.map((feature, idx) => {
            const Icon = feature.icon;
            return (
              <div 
                key={idx}
                className="bg-card p-6 rounded-xl shadow-soft border border-border hover:shadow-medium transition-all cursor-pointer"
                onClick={() => navigate(feature.link)}
              >
                <div className={`w-12 h-12 bg-${feature.color}/10 rounded-lg flex items-center justify-center mb-4`}>
                  <Icon className={`w-6 h-6 text-${feature.color}`} />
                </div>
                <h3 className="text-xl font-bold mb-2 ethiopic">{feature.titleAm}</h3>
                <p className="text-muted-foreground ethiopic">{feature.descAm}</p>
              </div>
            );
          })}
        </div>
      </section>

      {/* Key Benefits */}
      <section className="container mx-auto px-4 py-12 bg-muted/30">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold ethiopic text-center mb-12">ዋና ጥቅሞች</h2>
          
          <div className="grid md:grid-cols-2 gap-8">
            <Card className="p-6">
              <h3 className="text-xl font-bold ethiopic mb-4 text-primary">ለገበሬዎች</h3>
              <ul className="space-y-3 ethiopic text-muted-foreground">
                <li className="flex items-start gap-2">
                  <Leaf className="w-5 h-5 text-success flex-shrink-0 mt-0.5" />
                  <span>የበሽታ እና የንጥረ ነገር እጥረት ፈጣን ምርመራ</span>
                </li>
                <li className="flex items-start gap-2">
                  <Leaf className="w-5 h-5 text-success flex-shrink-0 mt-0.5" />
                  <span>ለአካባቢ ተስማሚ ማዳበሪያ ምክሮች (DAP, UREA, NPSB)</span>
                </li>
                <li className="flex items-start gap-2">
                  <Leaf className="w-5 h-5 text-success flex-shrink-0 mt-0.5" />
                  <span>ተፈጥሮአዊ አማራጮች: የቡና ቅብ ኮምፖስት፣ አመድ፣ ፍግ</span>
                </li>
                <li className="flex items-start gap-2">
                  <Leaf className="w-5 h-5 text-success flex-shrink-0 mt-0.5" />
                  <span>ወጪ ቆጣቢ ስሌት በኢትዮጵያ ብር</span>
                </li>
              </ul>
            </Card>
            
            <Card className="p-6">
              <h3 className="text-xl font-bold ethiopic mb-4 text-accent">ለማስፋፊያ ሰራተኞች</h3>
              <ul className="space-y-3 ethiopic text-muted-foreground">
                <li className="flex items-start gap-2">
                  <Users className="w-5 h-5 text-accent flex-shrink-0 mt-0.5" />
                  <span>የተሰበሰበ ዳታ እና ሪፖርቶች በቀበሌ ደረጃ</span>
                </li>
                <li className="flex items-start gap-2">
                  <Users className="w-5 h-5 text-accent flex-shrink-0 mt-0.5" />
                  <span>የላይ እጥረቶች ካርታ እና ትንታኔ</span>
                </li>
                <li className="flex items-start gap-2">
                  <Users className="w-5 h-5 text-accent flex-shrink-0 mt-0.5" />
                  <span>CSV ወደ ውጭ መላክ ለፖሊሲ ውሳኔዎች</span>
                </li>
                <li className="flex items-start gap-2">
                  <Users className="w-5 h-5 text-accent flex-shrink-0 mt-0.5" />
                  <span>ከሚኒስቴር ጋር ውህደት ማድረግ ይቻላል</span>
                </li>
              </ul>
            </Card>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="container mx-auto px-4 py-12">
        <div className="max-w-4xl mx-auto bg-gradient-primary rounded-2xl p-8 md:p-12 text-primary-foreground">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
            {impacts.map((stat, idx) => {
              const Icon = stat.icon;
              return (
                <div key={idx} className="space-y-2">
                  <Icon className="w-8 h-8 mx-auto opacity-80" />
                  <div className="text-3xl md:text-4xl font-bold">{stat.valueAm}</div>
                  <div className="text-sm md:text-base opacity-90 ethiopic">{stat.labelAm}</div>
                  <div className="text-xs opacity-70 ethiopic">{stat.descAm}</div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="container mx-auto px-4 py-12">
        <Card className="max-w-4xl mx-auto p-8 md:p-12 text-center bg-accent/10 border-accent/20">
          <h2 className="text-2xl md:text-3xl font-bold ethiopic mb-4">ዛሬ ይጀምሩ!</h2>
          <p className="text-muted-foreground ethiopic mb-6 max-w-2xl mx-auto">
            የእፅዋትዎን ጤንነት ለማወቅ እና ምርታማነትዎን ለማሳደግ Ethio Agri ን ይጠቀሙ። 
            ምዝገባ ነፃ ነው እና ከመስመር ውጭም ይሰራል።
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button
              size="lg"
              className="bg-gradient-primary hover:opacity-90 shadow-medium ethiopic"
              onClick={() => navigate("/diagnose")}
            >
              <Camera className="w-5 h-5 mr-2" />
              ምርመራ ይጀምሩ
            </Button>
            <Button
              size="lg"
              variant="outline"
              onClick={() => navigate("/auth")}
              className="ethiopic"
            >
              <LogIn className="w-5 h-5 mr-2" />
              ነፃ መለያ ይፍጠሩ
            </Button>
          </div>
        </Card>
      </section>
    </div>
  );
};

export default Home;
