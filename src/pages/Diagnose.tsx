import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Label } from "@/components/ui/label";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Camera, Upload, AlertCircle } from "lucide-react";
import { useToast } from "@/hooks/use-toast";

const Diagnose = () => {
  const [selectedImage, setSelectedImage] = useState<string | null>(null);
  const [isAnalyzing, setIsAnalyzing] = useState(false);
  const { toast } = useToast();

  const handleImageUpload = (event: React.ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0];
    if (file) {
      const reader = new FileReader();
      reader.onload = (e) => {
        setSelectedImage(e.target?.result as string);
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
    // Simulate analysis
    setTimeout(() => {
      setIsAnalyzing(false);
      toast({
        title: "ምርመራ ተጠናቅቋል",
        description: "የእፅዋት ጤንነት ውጤት ዝግጁ ነው",
      });
    }, 2000);
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
                  <Select>
                    <SelectTrigger id="crop" className="ethiopic">
                      <SelectValue placeholder="ሰብል ይምረጡ" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="teff" className="ethiopic">ጤፍ</SelectItem>
                      <SelectItem value="maize" className="ethiopic">በቆሎ</SelectItem>
                      <SelectItem value="wheat" className="ethiopic">ስንዴ</SelectItem>
                      <SelectItem value="sorghum" className="ethiopic">ማሽላ</SelectItem>
                      <SelectItem value="coffee" className="ethiopic">ቡና</SelectItem>
                    </SelectContent>
                  </Select>
                </div>

                <div className="space-y-2">
                  <Label htmlFor="soil" className="ethiopic">የአፈር አይነት</Label>
                  <Select>
                    <SelectTrigger id="soil" className="ethiopic">
                      <SelectValue placeholder="አፈር ይምረጡ" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="loam" className="ethiopic">ሎም</SelectItem>
                      <SelectItem value="clay" className="ethiopic">ሸክላ</SelectItem>
                      <SelectItem value="sandy" className="ethiopic">አሸዋማ</SelectItem>
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
        </div>
      </div>
    </div>
  );
};

export default Diagnose;
