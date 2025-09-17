"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { ArrowLeft, ArrowRight, Leaf, Waves, Brain, Sparkles, Heart, Users, Clock } from "lucide-react"
import Link from "next/link"

export default function ServicesPage() {
  const [currentLang, setCurrentLang] = useState<"zh" | "zh-TW" | "ja" | "en">("zh")

  const translations = {
    zh: {
      title: "我们的服务",
      subtitle: "专业的身心灵疗愈体验",
      bookNow: "立即预约",
      duration: "时长",
      backHome: "返回首页",
      services: [
        {
          title: "茶艺培训",
          desc: "学习传统茶道，掌握泡茶技艺，感受茶文化的深厚底蕴。从基础的茶叶识别到高级的茶艺表演，全方位提升您的茶道修养。",
          price: "¥299/课时",
          duration: "90分钟",
          icon: Leaf,
          features: ["茶叶知识", "泡茶技艺", "茶道礼仪", "文化传承"],
        },
        {
          title: "经络引导",
          desc: "专业经络疏通指导，结合茶疗养生，调理气血循环，恢复身体活力。通过传统中医理论指导，达到身心平衡。",
          price: "¥399/次",
          duration: "60分钟",
          icon: Waves,
          features: ["经络疏通", "气血调理", "茶疗配合", "个性化方案"],
        },
        {
          title: "静坐冥想",
          desc: "在茶香中静心冥想，释放压力，寻找内心的平静与安宁，提升专注力。结合呼吸法和正念练习。",
          price: "¥199/次",
          duration: "45分钟",
          icon: Brain,
          features: ["正念冥想", "呼吸调节", "压力释放", "专注力提升"],
        },
        {
          title: "水晶钵疗愈",
          desc: "水晶钵音疗结合茶道体验，通过声波振动净化身心，达到深度放松。独特的声音疗法带来内在和谐。",
          price: "¥499/次",
          duration: "75分钟",
          icon: Sparkles,
          features: ["声波疗愈", "深度放松", "能量净化", "茶道结合"],
        },
        {
          title: "养生咨询",
          desc: "个性化养生方案定制，根据体质推荐适合的茶品和养生方法。专业营养师和中医师联合指导。",
          price: "¥199/次",
          duration: "30分钟",
          icon: Heart,
          features: ["体质分析", "方案定制", "茶品推荐", "专业指导"],
        },
        {
          title: "禅修体验",
          desc: "综合茶道、冥想、经络调理的全方位禅修体验，身心灵的完整疗愈。适合寻求深度内在成长的朋友。",
          price: "¥699/次",
          duration: "120分钟",
          icon: Users,
          features: ["综合体验", "深度疗愈", "内在成长", "全方位调理"],
        },
        {
          title: "心理辅导",
          desc: "专业心理咨询师结合茶道疗愈，帮助您处理情绪困扰，重建内心平衡与自信。温馨安全的环境中获得支持。",
          price: "¥399/次",
          duration: "50分钟",
          icon: Brain,
          features: ["专业咨询", "情绪疏导", "茶道疗愈", "内心重建"],
        },
      ],
    },
    // ... 其他语言翻译类似结构
  }

  const t = translations[currentLang]

  return (
    <div className="min-h-screen bg-gradient-to-br from-amber-50 via-cream-50 to-lavender-50">
      {/* Header */}
      <header className="bg-background/80 backdrop-blur-md border-b border-border sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
          <div className="flex items-center justify-between">
            <Link href="/">
              <Button variant="ghost" className="hover:bg-primary/10">
                <ArrowLeft className="mr-2 h-4 w-4" />
                {t.backHome}
              </Button>
            </Link>

            {/* Language Selector */}
            <div className="flex items-center space-x-2">
              {(["zh", "zh-TW", "ja", "en"] as const).map((lang) => (
                <Button
                  key={lang}
                  variant={currentLang === lang ? "default" : "ghost"}
                  size="sm"
                  onClick={() => setCurrentLang(lang)}
                  className="text-xs"
                >
                  {lang === "zh" ? "简中" : lang === "zh-TW" ? "繁中" : lang === "ja" ? "日本語" : "EN"}
                </Button>
              ))}
            </div>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section className="py-20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl lg:text-5xl font-bold text-foreground mb-6 text-balance">{t.title}</h1>
          <p className="text-xl text-muted-foreground text-pretty">{t.subtitle}</p>
        </div>
      </section>

      {/* Services Grid - 并列排版 */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pb-20">
        <div className="grid md:grid-cols-2 xl:grid-cols-3 gap-8">
          {t.services.map((service, index) => (
            <Card key={index} className="overflow-hidden hover:shadow-xl transition-all duration-500 group">
              <div className="aspect-video bg-gradient-to-br from-primary/10 to-primary/5 relative overflow-hidden">
                <div className="absolute inset-0 flex items-center justify-center">
                  <service.icon className="h-16 w-16 text-primary/60 group-hover:scale-110 transition-transform duration-300" />
                </div>
                <div className="absolute top-4 right-4">
                  <Badge className="bg-primary text-primary-foreground">{service.price}</Badge>
                </div>
              </div>

              <CardHeader>
                <div className="flex justify-between items-start mb-2">
                  <CardTitle className="text-xl text-foreground group-hover:text-primary transition-colors">
                    {service.title}
                  </CardTitle>
                  <div className="flex items-center text-sm text-muted-foreground">
                    <Clock className="h-4 w-4 mr-1" />
                    {service.duration}
                  </div>
                </div>
                <CardDescription className="leading-relaxed">{service.desc}</CardDescription>
              </CardHeader>

              <CardContent>
                <div className="space-y-4">
                  <div className="flex flex-wrap gap-2">
                    {service.features.map((feature, idx) => (
                      <Badge key={idx} variant="secondary" className="text-xs">
                        {feature}
                      </Badge>
                    ))}
                  </div>

                  <Button className="w-full bg-primary hover:bg-primary/90 text-primary-foreground group">
                    {t.bookNow}
                    <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
                  </Button>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </div>
  )
}
