import { useState } from "react";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogDescription } from "@/components/ui/dialog";
import { MapPin, Phone, X, Leaf, Package, Truck, Star, Check } from "lucide-react";
import ureaFertilizer from "@/assets/products/urea-fertilizer.jpg";
import coffeeCompost from "@/assets/products/coffee-compost.jpg";
import dapFertilizer from "@/assets/products/dap-fertilizer.jpg";
import organicPesticide from "@/assets/products/organic-pesticide.jpg";
import fertilizerSpreader from "@/assets/products/fertilizer-spreader.jpg";
import waterPump from "@/assets/products/water-pump.jpg";

interface Product {
  id: number;
  nameAm: string;
  nameEn: string;
  price: number;
  unit: string;
  distance: string;
  vendor: string;
  image: string;
  category: string;
  descriptionAm: string;
  benefitsAm: string[];
  usageAm: string;
  availabilityAm: string;
  phone: string;
}

const Market = () => {
  const [selectedProduct, setSelectedProduct] = useState<Product | null>(null);

  const products: Product[] = [
    {
      id: 1,
      nameAm: "ዩሪያ ማዳበሪያ",
      nameEn: "Urea Fertilizer",
      price: 450,
      unit: "50 kg",
      distance: "2.5 ኪሜ",
      vendor: "የግብርና ድርጅት",
      image: ureaFertilizer,
      category: "ማዳበሪያ",
      descriptionAm: "ዩሪያ ከፍተኛ ናይትሮጅን ይዘት ያለው ኬሚካዊ ማዳበሪያ ነው። ለሁሉም የሰብል አይነቶች ተስማሚ ሲሆን በተለይ ለጤፍ፣ በቆሎ እና ስንዴ ጥሩ ውጤት ይሰጣል።",
      benefitsAm: ["46% ናይትሮጅን ይዘት", "ፈጣን እድገት ያስገኛል", "ቅጠሎችን አረንጓዴ ያደርጋል", "ለሁሉም ሰብሎች ተስማሚ"],
      usageAm: "በሄክታር 50-100 ኪሎ ግራም ይጠቀሙ። ከዝናብ በፊት ወይም ከመስኖ ጋር ይተግብሩ።",
      availabilityAm: "በዓመት ሙሉ ይገኛል",
      phone: "+251911234567"
    },
    {
      id: 2,
      nameAm: "የቡና ኮምፖስት",
      nameEn: "Coffee Compost",
      price: 200,
      unit: "5 ቶን",
      distance: "5 ኪሜ",
      vendor: "የአካባቢ ገበሬዎች ማህበር",
      image: coffeeCompost,
      category: "ኦርጋኒክ",
      descriptionAm: "የቡና ቅርፊት ኮምፖስት ከቡና ማቀነባበሪያ የሚመነጭ ተፈጥሮአዊ ማዳበሪያ ነው። ለአፈር ጤንነት እና ለረጅም ጊዜ ምርታማነት በጣም ጠቃሚ ነው።",
      benefitsAm: ["የአፈር መዋቅር ያሻሽላል", "ውሃ የመያዝ አቅም ይጨምራል", "ጠቃሚ ባክቴሪያዎችን ይደግፋል", "ርካሽ እና ተደራሽ"],
      usageAm: "በሄክታር 5-10 ቶን ይጠቀሙ። ከመዝራት 2-4 ሳምንታት በፊት ይተግብሩ።",
      availabilityAm: "ከቡና ወቅት በኋላ በብዛት ይገኛል",
      phone: "+251922345678"
    },
    {
      id: 3,
      nameAm: "DAP ማዳበሪያ",
      nameEn: "DAP Fertilizer",
      price: 550,
      unit: "50 kg",
      distance: "3 ኪሜ",
      vendor: "የግብርና ድርጅት",
      image: dapFertilizer,
      category: "ማዳበሪያ",
      descriptionAm: "DAP (Diammonium Phosphate) ፎስፎረስ እና ናይትሮጅን ያለው ማዳበሪያ ነው። ለስር እድገት እና ለፍሬ ማብሰል ወሳኝ ነው።",
      benefitsAm: ["18% ናይትሮጅን + 46% ፎስፎረስ", "ስርን ያጠናክራል", "ፍሬ ማብሰልን ያፋጥናል", "ለአዝርዕት ተስማሚ"],
      usageAm: "በሄክታር 100 ኪሎ ግራም በዘር ወቅት ይተግብሩ።",
      availabilityAm: "በዓመት ሙሉ ይገኛል",
      phone: "+251933456789"
    },
    {
      id: 4,
      nameAm: "ተፈጥሮአዊ ፀረ ተባይ",
      nameEn: "Organic Pesticide",
      price: 150,
      unit: "1 ሊትር",
      distance: "4 ኪሜ",
      vendor: "ኢኮ ግሪን",
      image: organicPesticide,
      category: "ፀረ ተባይ",
      descriptionAm: "ከኒም ዛፍ የተሰራ ተፈጥሮአዊ ፀረ ተባይ። ለሰው እና ለአካባቢ ደህንነቱ የተጠበቀ ሲሆን ብዙ ተባዮችን ይቆጣጠራል።",
      benefitsAm: ["100% ተፈጥሮአዊ", "ለአካባቢ ደህንነቱ የተጠበቀ", "ብዙ ተባዮችን ይቆጣጠራል", "ለኦርጋኒክ ግብርና ተስማሚ"],
      usageAm: "በ10 ሊትር ውሃ 50 ሚሊ ሊትር ቀላቅለው ይረጩ። በየ7-10 ቀን ይድገሙ።",
      availabilityAm: "ሁል ጊዜ ይገኛል",
      phone: "+251944567890"
    },
    {
      id: 5,
      nameAm: "የማዳበሪያ መርጫ",
      nameEn: "Fertilizer Spreader",
      price: 3500,
      unit: "ክፍል",
      distance: "10 ኪሜ",
      vendor: "የግብርና መሳሪያዎች",
      image: fertilizerSpreader,
      category: "መሳሪያ",
      descriptionAm: "በእጅ የሚገፋ የማዳበሪያ መርጫ። ማዳበሪያን በእኩል ለመበተን ይረዳል እና ጊዜ እና ጉልበት ይቆጥባል።",
      benefitsAm: ["ማዳበሪያን በእኩል ይበትናል", "ጊዜ እና ጉልበት ይቆጥባል", "ተንቀሳቃሽ እና ቀላል", "ለ3-5 ዓመት ይሰራል"],
      usageAm: "ከመጠቀምዎ በፊት የማዳበሪያውን መጠን ያስተካክሉ። ከተጠቀሙ በኋላ ያፅዱ።",
      availabilityAm: "በትዕዛዝ ይመጣል",
      phone: "+251955678901"
    },
    {
      id: 6,
      nameAm: "የውሃ ፓምፕ",
      nameEn: "Water Pump",
      price: 8500,
      unit: "ክፍል",
      distance: "12 ኪሜ",
      vendor: "የመስኖ መፍትሄዎች",
      image: waterPump,
      category: "መሳሪያ",
      descriptionAm: "2 ኢንች የዲዝል ውሃ ፓምፕ። ለመስኖ እና ለውሃ ማጓጓዝ ተስማሚ። በሰዓት እስከ 500 ሊትር ውሃ ይስባል።",
      benefitsAm: ["በሰዓት 500 ሊትር አቅም", "ዲዝል ነዳጅ ይጠቀማል", "ተንቀሳቃሽ ዲዛይን", "2 ዓመት ዋስትና"],
      usageAm: "በየ50 ሰዓት ነዳጅ እና ዘይት ይቀይሩ። ዝገት እንዳይዝ ያድርቁ።",
      availabilityAm: "በማከማቻ ይገኛል",
      phone: "+251966789012"
    },
    {
      id: 7,
      nameAm: "NPSB ማዳበሪያ",
      nameEn: "NPSB Fertilizer",
      price: 620,
      unit: "50 kg",
      distance: "4.5 ኪሜ",
      vendor: "የግብርና ድርጅት",
      image: dapFertilizer,
      category: "ማዳበሪያ",
      descriptionAm: "NPSB (ናይትሮጅን፣ ፎስፎረስ፣ ሰልፈር፣ ቦሮን) ለኢትዮጵያ አፈር የተመረጠ ውስብስብ ማዳበሪያ ነው።",
      benefitsAm: ["4 ንጥረ ነገሮች በአንድ", "ለኢትዮጵያ አፈር ተስማሚ", "የሰልፈር እጥረትን ያስተካክላል", "ምርትን ይጨምራል"],
      usageAm: "በሄክታር 100 ኪሎ ግራም በዘር ወቅት ይተግብሩ።",
      availabilityAm: "በዓመት ሙሉ ይገኛል",
      phone: "+251977890123"
    },
    {
      id: 8,
      nameAm: "የፍግ ማዳበሪያ",
      nameEn: "Animal Manure",
      price: 100,
      unit: "ቶን",
      distance: "2 ኪሜ",
      vendor: "የአካባቢ ገበሬዎች",
      image: coffeeCompost,
      category: "ኦርጋኒክ",
      descriptionAm: "የእንስሳት ፍግ ከብቶች የተሰበሰበ ተፈጥሮአዊ ማዳበሪያ ነው። ለአፈር ጤንነት በጣም ጠቃሚ ነው።",
      benefitsAm: ["ርካሽ እና ተደራሽ", "የአፈር መዋቅር ያሻሽላል", "ንጥረ ነገሮችን ቀስ በቀስ ይለቃል", "ለኦርጋኒክ ግብርና ተስማሚ"],
      usageAm: "በሄክታር 10-15 ቶን ከመዝራት 1 ወር በፊት ይተግብሩ።",
      availabilityAm: "ሁል ጊዜ ይገኛል",
      phone: "+251988901234"
    },
    {
      id: 9,
      nameAm: "የአፈር ፈተና መሳሪያ",
      nameEn: "Soil Testing Kit",
      price: 1200,
      unit: "ክፍል",
      distance: "8 ኪሜ",
      vendor: "ሳይንስ ቴክ",
      image: fertilizerSpreader,
      category: "መሳሪያ",
      descriptionAm: "በቀላሉ የአፈር pH እና ንጥረ ነገር ደረጃን ለመለካት የሚያገለግል መሳሪያ።",
      benefitsAm: ["ቀላል አጠቃቀም", "ፈጣን ውጤት", "ትክክለኛ መለኪያ", "20+ ፈተናዎች ይሰራል"],
      usageAm: "የአፈር ናሙና ይውሰዱ፣ ውሃ ጨምሩ እና ውጤቱን ያንብቡ።",
      availabilityAm: "በትዕዛዝ ይመጣል",
      phone: "+251999012345"
    }
  ];

  const categories = ["ሁሉም", "ማዳበሪያ", "ኦርጋኒክ", "ፀረ ተባይ", "መሳሪያ"];
  const [selectedCategory, setSelectedCategory] = useState("ሁሉም");

  const filteredProducts = selectedCategory === "ሁሉም" 
    ? products 
    : products.filter(p => p.category === selectedCategory);

  return (
    <div className="min-h-screen pt-20 md:pt-24 pb-24 md:pb-8">
      <div className="container mx-auto px-4 py-8">
        <div className="max-w-6xl mx-auto space-y-8">
          {/* Header */}
          <div className="text-center space-y-2">
            <h1 className="text-3xl md:text-4xl font-bold ethiopic">የግብርና ገበያ</h1>
            <p className="text-muted-foreground ethiopic">
              በአቅራቢያዎ ያሉ ማዳበሪያዎች፣ መሳሪያዎች እና አገልግሎቶች ያግኙ
            </p>
          </div>

          {/* Category Filter */}
          <div className="flex flex-wrap gap-2 justify-center">
            {categories.map((cat) => (
              <Button
                key={cat}
                variant={selectedCategory === cat ? "default" : "outline"}
                onClick={() => setSelectedCategory(cat)}
                className="ethiopic"
              >
                {cat}
              </Button>
            ))}
          </div>

          {/* Products Grid */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredProducts.map((product) => (
              <Card 
                key={product.id} 
                className="overflow-hidden shadow-soft hover:shadow-medium transition-all cursor-pointer"
                onClick={() => setSelectedProduct(product)}
              >
                {/* Product Image */}
                <div className="h-48 bg-muted overflow-hidden relative">
                  <img 
                    src={product.image} 
                    alt={product.nameAm}
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute top-2 right-2 bg-primary text-primary-foreground px-2 py-1 rounded text-xs ethiopic">
                    {product.category}
                  </div>
                </div>
                
                <div className="p-6 space-y-4">
                  <div>
                    <h3 className="text-xl font-bold ethiopic mb-1">{product.nameAm}</h3>
                    <p className="text-sm text-muted-foreground">{product.vendor}</p>
                  </div>

                  <div className="flex items-baseline gap-2">
                    <span className="text-2xl font-bold text-primary">{product.price}</span>
                    <span className="text-muted-foreground ethiopic">ብር</span>
                    <span className="text-sm text-muted-foreground">/ {product.unit}</span>
                  </div>

                  <div className="flex items-center gap-2 text-sm text-muted-foreground">
                    <MapPin className="w-4 h-4" />
                    <span className="ethiopic">{product.distance}</span>
                  </div>

                  <Button variant="outline" className="w-full ethiopic" size="lg">
                    <Package className="w-4 h-4 mr-2" />
                    ዝርዝሩን ይመልከቱ
                  </Button>
                </div>
              </Card>
            ))}
          </div>

          {/* Info Banner */}
          <Card className="p-6 bg-accent/10 border-accent/20">
            <div className="flex flex-col md:flex-row items-start md:items-center gap-4">
              <div className="w-12 h-12 bg-accent rounded-lg flex items-center justify-center flex-shrink-0">
                <Phone className="w-6 h-6 text-accent-foreground" />
              </div>
              <div className="flex-1">
                <h3 className="font-bold text-lg mb-1 ethiopic">የምርት ጥያቄዎች</h3>
                <p className="text-sm text-muted-foreground ethiopic">
                  ማንኛውንም ምርት ጠቅ በማድረግ ዝርዝር መረጃ እና የአቅራቢ ስልክ ቁጥር ያገኛሉ። 
                  ሁሉም የዋጋ መረጃዎች የጊዜያዊ እና በአካባቢ ይለያያሉ።
                </p>
              </div>
            </div>
          </Card>
        </div>
      </div>

      {/* Product Detail Dialog */}
      <Dialog open={!!selectedProduct} onOpenChange={() => setSelectedProduct(null)}>
        <DialogContent className="max-w-2xl max-h-[90vh] overflow-y-auto">
          {selectedProduct && (
            <>
              <DialogHeader>
                <DialogTitle className="text-2xl ethiopic">{selectedProduct.nameAm}</DialogTitle>
                <DialogDescription className="text-base">
                  {selectedProduct.nameEn}
                </DialogDescription>
              </DialogHeader>

              <div className="space-y-6">
                {/* Image */}
                <div className="h-64 rounded-lg overflow-hidden">
                  <img 
                    src={selectedProduct.image} 
                    alt={selectedProduct.nameAm}
                    className="w-full h-full object-cover"
                  />
                </div>

                {/* Price & Location */}
                <div className="flex flex-wrap gap-4">
                  <div className="flex items-center gap-2 bg-primary/10 px-4 py-2 rounded-lg">
                    <span className="text-2xl font-bold text-primary">{selectedProduct.price}</span>
                    <span className="text-muted-foreground ethiopic">ብር / {selectedProduct.unit}</span>
                  </div>
                  <div className="flex items-center gap-2 bg-muted px-4 py-2 rounded-lg">
                    <MapPin className="w-4 h-4" />
                    <span className="ethiopic">{selectedProduct.distance}</span>
                  </div>
                  <div className="flex items-center gap-2 bg-muted px-4 py-2 rounded-lg">
                    <Truck className="w-4 h-4" />
                    <span className="ethiopic">{selectedProduct.availabilityAm}</span>
                  </div>
                </div>

                {/* Description */}
                <div>
                  <h4 className="font-bold ethiopic mb-2">ዝርዝር መግለጫ</h4>
                  <p className="text-muted-foreground ethiopic">{selectedProduct.descriptionAm}</p>
                </div>

                {/* Benefits */}
                <div>
                  <h4 className="font-bold ethiopic mb-2">ጥቅሞች</h4>
                  <ul className="space-y-2">
                    {selectedProduct.benefitsAm.map((benefit, idx) => (
                      <li key={idx} className="flex items-start gap-2">
                        <Check className="w-5 h-5 text-success flex-shrink-0 mt-0.5" />
                        <span className="ethiopic text-muted-foreground">{benefit}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Usage */}
                <div>
                  <h4 className="font-bold ethiopic mb-2">የአጠቃቀም መመሪያ</h4>
                  <p className="text-muted-foreground ethiopic bg-muted p-4 rounded-lg">{selectedProduct.usageAm}</p>
                </div>

                {/* Vendor Info */}
                <Card className="p-4 bg-accent/10 border-accent/20">
                  <div className="flex items-center justify-between">
                    <div>
                      <h4 className="font-bold ethiopic">{selectedProduct.vendor}</h4>
                      <div className="flex items-center gap-1 text-sm text-muted-foreground">
                        <Star className="w-4 h-4 text-accent fill-accent" />
                        <span>4.5 (23 ግምገማዎች)</span>
                      </div>
                    </div>
                    <Button className="ethiopic" onClick={() => window.open(`tel:${selectedProduct.phone}`)}>
                      <Phone className="w-4 h-4 mr-2" />
                      ደውሉ
                    </Button>
                  </div>
                </Card>

                {/* Action Buttons */}
                <div className="flex gap-4">
                  <Button className="flex-1 ethiopic" size="lg" onClick={() => window.open(`tel:${selectedProduct.phone}`)}>
                    <Phone className="w-5 h-5 mr-2" />
                    መረጃ ጠይቅ
                  </Button>
                  <Button variant="outline" className="ethiopic" size="lg" onClick={() => setSelectedProduct(null)}>
                    <X className="w-5 h-5 mr-2" />
                    ዝጋ
                  </Button>
                </div>
              </div>
            </>
          )}
        </DialogContent>
      </Dialog>
    </div>
  );
};

export default Market;
