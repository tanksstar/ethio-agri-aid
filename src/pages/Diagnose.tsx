import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Label } from "@/components/ui/label";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Camera, Upload, AlertCircle, Leaf, Bug, Droplet, Volume2, Save, Check, AlertTriangle } from "lucide-react";
import { useToast } from "@/hooks/use-toast";

interface DiagnosisResult {
  labelAm: string;
  labelEn: string;
  confidence: number;
  type: "deficiency" | "disease" | "pest";
  symptomsAm: string;
  recommendations: {
    type: string;
    nameAm: string;
    amount: string;
    costEtb: number;
  }[];
  regionAdviceAm: string;
}

const Diagnose = () => {
  const [selectedImage, setSelectedImage] = useState<string | null>(null);
  const [isAnalyzing, setIsAnalyzing] = useState(false);
  const [diagnosisResult, setDiagnosisResult] = useState<DiagnosisResult | null>(null);
  const [cropType, setCropType] = useState("");
  const [soilType, setSoilType] = useState("");
  const { toast } = useToast();

  // Sample diagnosis results for demo
  const sampleDiagnoses: DiagnosisResult[] = [
    {
      labelAm: "የናይትሮጅን እጥረት",
      labelEn: "Nitrogen Deficiency",
      confidence: 0.92,
      type: "deficiency",
      symptomsAm: "ቅጠሎች ቢጫ እና ስር ሚያሳዩ ስሜት። የታችኛው ቅጠሎች መጀመሪያ ይጎዳሉ።",
      recommendations: [
        { type: "ማዳበሪያ", nameAm: "ዩሪያ", amount: "50 kg/ha", costEtb: 450 },
        { type: "ኦርጋኒክ", nameAm: "የቡና ቅብ ኮምፖስት", amount: "5 ቶን/ha", costEtb: 200 }
      ],
      regionAdviceAm: "በከፍታ ቦታዎች ከዝናብ በኋላ ማዳበሪያውን ይተግብሩ። DAP ከ UREA ጋር በማቀላቀል የተሻለ ውጤት ያገኛሉ።"
    },
    {
      labelAm: "የቅጠል ዝገት በሽታ",
      labelEn: "Leaf Rust Disease",
      confidence: 0.87,
      type: "disease",
      symptomsAm: "በቅጠሎች ላይ ቡኒ ወይም ብርቱካንማ ነጠብጣቦች ይታያሉ። ቅጠሎች ይደርቃሉ።",
      recommendations: [
        { type: "ፀረ ፈንገስ", nameAm: "ማንኮዜብ", amount: "2.5 kg/ha", costEtb: 350 },
        { type: "ኦርጋኒክ", nameAm: "የኒም ዘይት", amount: "500 ml/ha", costEtb: 150 }
      ],
      regionAdviceAm: "ዝናባማ ወቅት ከመጀመሩ በፊት መርጫውን ያከናውኑ። የተበከሉ ቅጠሎችን ያስወግዱ።"
    },
    {
      labelAm: "አፊድ (ቅማል) ወረራ",
      labelEn: "Aphid Infestation",
      confidence: 0.94,
      type: "pest",
      symptomsAm: "ትንንሽ አረንጓዴ ወይም ጥቁር ነፍሳት በቅጠል ጀርባ ላይ ይታያሉ። ቅጠሎች ይጠመዛዛሉ።",
      recommendations: [
        { type: "ፀረ ተባይ", nameAm: "ተፈጥሮአዊ ፀረ ተባይ", amount: "1 L/ha", costEtb: 150 },
        { type: "ኦርጋኒክ", nameAm: "የነጭ ሽንኩርት መርጫ", amount: "2 L/ha", costEtb: 50 }
      ],
      regionAdviceAm: "በማለዳ ወይም ማታ ይርጩ። ተፈጥሮአዊ ጠላቶችን (ladybugs) ይጠብቁ።"
    },
    {
      labelAm: "የፎስፎረስ እጥረት",
      labelEn: "Phosphorus Deficiency",
      confidence: 0.85,
      type: "deficiency",
      symptomsAm: "ቅጠሎች ጥቁር አረንጓዴ ወይም ወይን ጠጅ ቀለም ይይዛሉ። እድገት ይቀንሳል።",
      recommendations: [
        { type: "ማዳበሪያ", nameAm: "DAP", amount: "100 kg/ha", costEtb: 550 },
        { type: "ኦርጋኒክ", nameAm: "የአጥንት ዱቄት", amount: "200 kg/ha", costEtb: 300 }
      ],
      regionAdviceAm: "በዘር ወቅት ከዘሩ ጋር ይተግብሩ። በቀዝቃዛ አፈር ውስጥ ፎስፎረስ በቀላሉ አይወሰድም።"
    },
    {
      labelAm: "የፖታሲየም እጥረት",
      labelEn: "Potassium Deficiency",
      confidence: 0.88,
      type: "deficiency",
      symptomsAm: "የቅጠሎች ጠርዝ ይቃጠላል እና ይደርቃል። ፍሬዎች ትንንሽ ይሆናሉ።",
      recommendations: [
        { type: "ማዳበሪያ", nameAm: "ሙሪያት ኦፍ ፖታሽ", amount: "50 kg/ha", costEtb: 400 },
        { type: "ኦርጋኒክ", nameAm: "የእንጨት አመድ", amount: "1 ቶን/ha", costEtb: 100 }
      ],
      regionAdviceAm: "አመድ በቀላሉ ይገኛል እና ለፖታሲየም እጥረት ጥሩ መፍትሄ ነው።"
    }
  ];

  const handleImageUpload = (event: React.ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0];
    if (file) {
      const reader = new FileReader();
      reader.onload = (e) => {
        setSelectedImage(e.target?.result as string);
        setDiagnosisResult(null);
      };
      reader.readAsDataURL(file);
    }
  };

  const handleAnalyze = () => {
    if (!selectedImage) {
      toast({
        title: "ስህተት",
        description: "እባክዎን መጀመሪያ ምስል ይምረጡ",
        variant: "destructive",
      });
      return;
    }
    
    setIsAnalyzing(true);
    
    // Simulate analysis with random result
    setTimeout(() => {
      const randomIndex = Math.floor(Math.random() * sampleDiagnoses.length);
      setDiagnosisResult(sampleDiagnoses[randomIndex]);
      setIsAnalyzing(false);
      toast({
        title: "ምርመራ ተጠናቅቋል",
        description: "የእፅዋት ጤንነት ውጤት ዝግጁ ነው",
      });
    }, 2500);
  };

  const getTypeIcon = (type: string) => {
    switch (type) {
      case "deficiency": return <Droplet className="w-5 h-5" />;
      case "disease": return <AlertTriangle className="w-5 h-5" />;
      case "pest": return <Bug className="w-5 h-5" />;
      default: return <Leaf className="w-5 h-5" />;
    }
  };

  const getTypeColor = (type: string) => {
    switch (type) {
      case "deficiency": return "text-accent bg-accent/10";
      case "disease": return "text-destructive bg-destructive/10";
      case "pest": return "text-primary bg-primary/10";
      default: return "text-success bg-success/10";
    }
  };

  const getTypeLabelAm = (type: string) => {
    switch (type) {
      case "deficiency": return "የንጥረ ነገር እጥረት";
      case "disease": return "በሽታ";
      case "pest": return "ተባይ";
      default: return "ያልታወቀ";
    }
  };

  return (
    <div className="min-h-screen pt-20 md:pt-24 pb-24 md:pb-8">
      <div className="container mx-auto px-4 py-8">
        <div className="max-w-4xl mx-auto space-y-6">
          {/* Header */}
          <div className="text-center space-y-2">
            <h1 className="text-3xl md:text-4xl font-bold ethiopic">የእፅዋት ጤንነት ምርመራ</h1>
            <p className="text-muted-foreground ethiopic">
              ፎቶን ይውሰዱ ወይም ይስቀሉ እና ስለ እፅዋትዎ ጤንነት ዝርዝር ትንተና ያግኙ
            </p>
          </div>

          {/* Image Upload Section */}
          <Card className="p-6 shadow-medium">
            <div className="space-y-4">
              <Label className="text-lg font-semibold ethiopic">ፎቶ ይምረጡ</Label>
              
              <div className="grid md:grid-cols-2 gap-4">
                <label className="cursor-pointer">
                  <input
                    type="file"
                    accept="image/*"
                    capture="environment"
                    onChange={handleImageUpload}
                    className="hidden"
                  />
                  <div className="border-2 border-dashed border-border rounded-lg p-8 hover:border-primary transition-colors text-center space-y-2">
                    <Camera className="w-12 h-12 mx-auto text-muted-foreground" />
                    <div className="ethiopic font-medium">ካሜራ ይጠቀሙ</div>
                    <div className="text-sm text-muted-foreground ethiopic">አዲስ ፎቶ ይውሰዱ</div>
                  </div>
                </label>

                <label className="cursor-pointer">
                  <input
                    type="file"
                    accept="image/*"
                    onChange={handleImageUpload}
                    className="hidden"
                  />
                  <div className="border-2 border-dashed border-border rounded-lg p-8 hover:border-primary transition-colors text-center space-y-2">
                    <Upload className="w-12 h-12 mx-auto text-muted-foreground" />
                    <div className="ethiopic font-medium">ፋይል ይስቀሉ</div>
                    <div className="text-sm text-muted-foreground ethiopic">ከመሳሪያ ውስጥ ይምረጡ</div>
                  </div>
                </label>
              </div>

              {selectedImage && (
                <div className="mt-4 relative rounded-lg overflow-hidden border border-border">
                  <img src={selectedImage} alt="Selected plant" className="w-full h-auto max-h-96 object-contain" />
                  {isAnalyzing && (
                    <div className="absolute inset-0 bg-background/80 flex items-center justify-center">
                      <div className="text-center space-y-4">
                        <div className="w-16 h-16 border-4 border-primary border-t-transparent rounded-full animate-spin mx-auto" />
                        <p className="ethiopic font-medium text-lg">ምስሉን በመተንተን ላይ...</p>
                        <p className="ethiopic text-sm text-muted-foreground">AI በሽታዎችን፣ እጥረቶችን እና ተባዮችን ይፈልጋል</p>
                      </div>
                    </div>
                  )}
                </div>
              )}
            </div>
          </Card>

          {/* Farmer Inputs */}
          <Card className="p-6 shadow-medium">
            <div className="space-y-4">
              <Label className="text-lg font-semibold ethiopic">ተጨማሪ መረጃ (አማራጭ)</Label>
              
              <div className="grid md:grid-cols-2 gap-4">
                <div className="space-y-2">
                  <Label htmlFor="crop" className="ethiopic">የሰብል አይነት</Label>
                  <Select value={cropType} onValueChange={setCropType}>
                    <SelectTrigger id="crop" className="ethiopic">
                      <SelectValue placeholder="ሰብል ይምረጡ" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="teff" className="ethiopic">ጤፍ</SelectItem>
                      <SelectItem value="maize" className="ethiopic">በቆሎ</SelectItem>
                      <SelectItem value="wheat" className="ethiopic">ስንዴ</SelectItem>
                      <SelectItem value="sorghum" className="ethiopic">ማሽላ</SelectItem>
                      <SelectItem value="coffee" className="ethiopic">ቡና</SelectItem>
                      <SelectItem value="barley" className="ethiopic">ገብስ</SelectItem>
                      <SelectItem value="enset" className="ethiopic">እንሰት</SelectItem>
                    </SelectContent>
                  </Select>
                </div>

                <div className="space-y-2">
                  <Label htmlFor="soil" className="ethiopic">የአፈር አይነት</Label>
                  <Select value={soilType} onValueChange={setSoilType}>
                    <SelectTrigger id="soil" className="ethiopic">
                      <SelectValue placeholder="አፈር ይምረጡ" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="loam" className="ethiopic">ሎም</SelectItem>
                      <SelectItem value="clay" className="ethiopic">ሸክላ</SelectItem>
                      <SelectItem value="sandy" className="ethiopic">አሸዋማ</SelectItem>
                      <SelectItem value="vertisol" className="ethiopic">ቨርቲሶል (ጥቁር አፈር)</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
              </div>

              <div className="bg-muted/50 p-4 rounded-lg flex gap-3">
                <AlertCircle className="w-5 h-5 text-accent flex-shrink-0 mt-0.5" />
                <p className="text-sm text-muted-foreground ethiopic">
                  በተጨማሪ መረጃ መስጠት የምርመራ ትክክለኛነት ይጨምራል እና ለአካባቢዎ ተስማሚ ምክሮችን ያገኛሉ
                </p>
              </div>
            </div>
          </Card>

          {/* Analyze Button */}
          <Button
            size="lg"
            className="w-full h-14 text-lg bg-gradient-primary hover:opacity-90 shadow-medium ethiopic"
            onClick={handleAnalyze}
            disabled={!selectedImage || isAnalyzing}
          >
            {isAnalyzing ? "በመተንተን ላይ..." : "ምርመራ ጀምር"}
          </Button>

          {/* Diagnosis Result */}
          {diagnosisResult && (
            <Card className="p-6 shadow-medium space-y-6 border-2 border-primary/20">
              {/* Result Header */}
              <div className="flex items-start justify-between">
                <div className="flex items-center gap-3">
                  <div className={`p-3 rounded-lg ${getTypeColor(diagnosisResult.type)}`}>
                    {getTypeIcon(diagnosisResult.type)}
                  </div>
                  <div>
                    <h2 className="text-2xl font-bold ethiopic">{diagnosisResult.labelAm}</h2>
                    <p className="text-muted-foreground">{diagnosisResult.labelEn}</p>
                  </div>
                </div>
                <div className="text-right">
                  <div className="text-2xl font-bold text-primary">{Math.round(diagnosisResult.confidence * 100)}%</div>
                  <div className="text-sm text-muted-foreground ethiopic">እርግጠኝነት</div>
                </div>
              </div>

              {/* Type Badge */}
              <div className={`inline-flex items-center gap-2 px-3 py-1 rounded-full ${getTypeColor(diagnosisResult.type)}`}>
                {getTypeIcon(diagnosisResult.type)}
                <span className="ethiopic font-medium">{getTypeLabelAm(diagnosisResult.type)}</span>
              </div>

              {/* Symptoms */}
              <div>
                <h3 className="font-bold ethiopic mb-2">ምልክቶች</h3>
                <p className="text-muted-foreground ethiopic bg-muted/50 p-4 rounded-lg">{diagnosisResult.symptomsAm}</p>
              </div>

              {/* Recommendations */}
              <div>
                <h3 className="font-bold ethiopic mb-3">የምክር ዝርዝር</h3>
                <div className="space-y-3">
                  {diagnosisResult.recommendations.map((rec, idx) => (
                    <div key={idx} className="flex items-center justify-between bg-muted/50 p-4 rounded-lg">
                      <div className="flex items-center gap-3">
                        <div className="w-10 h-10 bg-primary/10 rounded-lg flex items-center justify-center">
                          <Leaf className="w-5 h-5 text-primary" />
                        </div>
                        <div>
                          <div className="font-medium ethiopic">{rec.nameAm}</div>
                          <div className="text-sm text-muted-foreground ethiopic">{rec.type} • {rec.amount}</div>
                        </div>
                      </div>
                      <div className="text-right">
                        <div className="font-bold text-primary">{rec.costEtb} ብር</div>
                        <div className="text-xs text-muted-foreground ethiopic">የግምት ዋጋ</div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Region Advice */}
              <div className="bg-accent/10 p-4 rounded-lg border border-accent/20">
                <h3 className="font-bold ethiopic mb-2 text-accent">የአካባቢ ምክር</h3>
                <p className="ethiopic text-muted-foreground">{diagnosisResult.regionAdviceAm}</p>
              </div>

              {/* Action Buttons */}
              <div className="flex flex-col sm:flex-row gap-3">
                <Button className="flex-1 ethiopic" size="lg">
                  <Volume2 className="w-5 h-5 mr-2" />
                  ድምጽ ያዳምጡ
                </Button>
                <Button variant="outline" className="flex-1 ethiopic" size="lg">
                  <Save className="w-5 h-5 mr-2" />
                  ታሪክ ላይ አስቀምጥ
                </Button>
              </div>
            </Card>
          )}

          {/* Sample Predictions Section */}
          <Card className="p-6 shadow-soft">
            <h3 className="text-xl font-bold ethiopic mb-4">ናሙና ምርመራዎች</h3>
            <p className="text-muted-foreground ethiopic mb-4">
              የምርመራ ስርዓቱ እነዚህን እና ሌሎች ችግሮችን ሊያውቅ ይችላል:
            </p>
            <div className="grid md:grid-cols-3 gap-4">
              {sampleDiagnoses.slice(0, 3).map((sample, idx) => (
                <div key={idx} className="bg-muted/50 p-4 rounded-lg space-y-2">
                  <div className={`inline-flex items-center gap-2 px-2 py-1 rounded-full text-sm ${getTypeColor(sample.type)}`}>
                    {getTypeIcon(sample.type)}
                    <span className="ethiopic">{getTypeLabelAm(sample.type)}</span>
                  </div>
                  <h4 className="font-bold ethiopic">{sample.labelAm}</h4>
                  <p className="text-xs text-muted-foreground">{sample.labelEn}</p>
                  <p className="text-sm text-muted-foreground ethiopic line-clamp-2">{sample.symptomsAm}</p>
                </div>
              ))}
            </div>
          </Card>
        </div>
      </div>
    </div>
  );
};

export default Diagnose;
