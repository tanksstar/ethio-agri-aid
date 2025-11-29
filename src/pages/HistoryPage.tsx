import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Calendar, Leaf, TrendingUp } from "lucide-react";

const HistoryPage = () => {
  // Mock data - will be replaced with actual data from backend
  const historyItems = [
    {
      id: 1,
      date: "ታህሳስ 15, 2016",
      crop: "ጤፍ",
      diagnosis: "የናይትሮጅን እጥረት",
      confidence: 92,
      status: "ከፍተኛ",
    },
    {
      id: 2,
      date: "ታህሳስ 10, 2016",
      crop: "በቆሎ",
      diagnosis: "የቅጠል ዝገት በሽታ",
      confidence: 88,
      status: "መካከለኛ",
    },
    {
      id: 3,
      date: "ታህሳስ 5, 2016",
      crop: "ስንዴ",
      diagnosis: "ጤናማ",
      confidence: 95,
      status: "ዝቅተኛ",
    },
  ];

  return (
    <div className="min-h-screen pt-20 md:pt-24 pb-24 md:pb-8">
      <div className="container mx-auto px-4 py-8">
        <div className="max-w-4xl mx-auto space-y-8">
          {/* Header */}
          <div className="text-center space-y-2">
            <h1 className="text-3xl md:text-4xl font-bold ethiopic">የምርመራ ታሪክ</h1>
            <p className="text-muted-foreground ethiopic">
              ያለፉትን የእፅዋት ጤንነት ምርመራዎች ይመልከቱ እና አዝማሚያዎችን ይከታተሉ
            </p>
          </div>

          {/* Stats Cards */}
          <div className="grid md:grid-cols-3 gap-4">
            <Card className="p-4 shadow-soft">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 bg-primary/10 rounded-lg flex items-center justify-center">
                  <Leaf className="w-5 h-5 text-primary" />
                </div>
                <div>
                  <div className="text-2xl font-bold">{historyItems.length}</div>
                  <div className="text-sm text-muted-foreground ethiopic">ጠቅላላ ምርመራዎች</div>
                </div>
              </div>
            </Card>

            <Card className="p-4 shadow-soft">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 bg-success/10 rounded-lg flex items-center justify-center">
                  <TrendingUp className="w-5 h-5 text-success" />
                </div>
                <div>
                  <div className="text-2xl font-bold">91%</div>
                  <div className="text-sm text-muted-foreground ethiopic">አማካይ ትክክለኛነት</div>
                </div>
              </div>
            </Card>

            <Card className="p-4 shadow-soft">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 bg-accent/10 rounded-lg flex items-center justify-center">
                  <Calendar className="w-5 h-5 text-accent" />
                </div>
                <div>
                  <div className="text-2xl font-bold">ታህሳስ</div>
                  <div className="text-sm text-muted-foreground ethiopic">የመጨረሻ ምርመራ</div>
                </div>
              </div>
            </Card>
          </div>

          {/* History List */}
          <div className="space-y-4">
            {historyItems.map((item) => (
              <Card key={item.id} className="p-6 shadow-soft hover:shadow-medium transition-all cursor-pointer">
                <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
                  <div className="flex items-start gap-4">
                    {/* Thumbnail placeholder */}
                    <div className="w-20 h-20 bg-gradient-to-br from-primary/10 to-success/10 rounded-lg flex items-center justify-center flex-shrink-0">
                      <Leaf className="w-8 h-8 text-primary" />
                    </div>

                    <div className="space-y-2">
                      <div className="flex items-center gap-2">
                        <h3 className="text-lg font-bold ethiopic">{item.diagnosis}</h3>
                        <span
                          className={`px-2 py-1 rounded-full text-xs font-medium ${
                            item.status === "ከፍተኛ"
                              ? "bg-destructive/10 text-destructive"
                              : item.status === "መካከለኛ"
                              ? "bg-accent/10 text-accent"
                              : "bg-success/10 text-success"
                          }`}
                        >
                          {item.status}
                        </span>
                      </div>
                      <div className="flex items-center gap-4 text-sm text-muted-foreground">
                        <div className="flex items-center gap-1">
                          <Leaf className="w-4 h-4" />
                          <span className="ethiopic">{item.crop}</span>
                        </div>
                        <div className="flex items-center gap-1">
                          <Calendar className="w-4 h-4" />
                          <span className="ethiopic">{item.date}</span>
                        </div>
                        <div>
                          ትክክለኛነት: <span className="font-medium">{item.confidence}%</span>
                        </div>
                      </div>
                    </div>
                  </div>

                  <Button variant="outline" className="md:flex-shrink-0 ethiopic">
                    ዝርዝር ይመልከቱ
                  </Button>
                </div>
              </Card>
            ))}
          </div>

          {/* Empty State Message */}
          {historyItems.length === 0 && (
            <Card className="p-12 text-center shadow-soft">
              <div className="w-16 h-16 bg-muted rounded-full flex items-center justify-center mx-auto mb-4">
                <Calendar className="w-8 h-8 text-muted-foreground" />
              </div>
              <h3 className="text-xl font-bold mb-2 ethiopic">ምንም ታሪክ የለም</h3>
              <p className="text-muted-foreground mb-6 ethiopic">
                የእፅዋት ጤንነት ምርመራ ይጀምሩ እና የእርስዎ ታሪክ እዚህ ይታያል
              </p>
              <Button className="ethiopic">ወደ ምርመራ ይሂዱ</Button>
            </Card>
          )}
        </div>
      </div>
    </div>
  );
};

export default HistoryPage;
