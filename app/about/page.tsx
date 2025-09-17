"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { ArrowLeft, Leaf, Heart, Award } from "lucide-react"
import Link from "next/link"

export default function AboutPage() {
  const [currentLang, setCurrentLang] = useState<"zh" | "zh-TW" | "ja" | "en">("zh")

  const translations = {
    zh: {
      title: "关于我们",
      subtitle: "传承千年茶道智慧，融合现代养生理念",
      story: "我们的故事",
      storyContent:
        "禅茶养生馆创立于2018年，由资深茶艺师和养生专家共同创办。我们致力于将传统茶道文化与现代健康理念相结合，为都市人群提供身心灵的全方位疗愈体验。",
      mission: "我们的使命",
      missionContent:
        "通过茶道修身、静心冥想、经络调理等传统养生方法，帮助现代人在快节奏的生活中找到内心的平静与健康的生活方式。",
      values: "核心价值",
      valuesItems: [
        { title: "传统传承", desc: "保持茶道文化的纯正传承" },
        { title: "现代融合", desc: "结合现代科学养生理念" },
        { title: "个性定制", desc: "为每位客户量身定制方案" },
        { title: "专业品质", desc: "提供最专业的服务体验" },
      ],
      backHome: "返回首页",
    },
    "zh-TW": {
      title: "關於我們",
      subtitle: "傳承千年茶道智慧，融合現代養生理念",
      story: "我們的故事",
      storyContent:
        "禪茶養生館創立於2018年，由資深茶藝師和養生專家共同創辦。我們致力於將傳統茶道文化與現代健康理念相結合，為都市人群提供身心靈的全方位療癒體驗。",
      mission: "我們的使命",
      missionContent:
        "通過茶道修身、靜心冥想、經絡調理等傳統養生方法，幫助現代人在快節奏的生活中找到內心的平靜與健康的生活方式。",
      values: "核心價值",
      valuesItems: [
        { title: "傳統傳承", desc: "保持茶道文化的純正傳承" },
        { title: "現代融合", desc: "結合現代科學養生理念" },
        { title: "個性定制", desc: "為每位客戶量身定制方案" },
        { title: "專業品質", desc: "提供最專業的服務體驗" },
      ],
      backHome: "返回首頁",
    },
    ja: {
      title: "私たちについて",
      subtitle: "千年の茶道の知恵を受け継ぎ、現代の養生理念と融合",
      story: "私たちの物語",
      storyContent:
        "禅茶養生館は2018年に設立され、経験豊富な茶道師と養生専門家によって共同創設されました。伝統的な茶道文化と現代の健康理念を組み合わせ、都市部の人々に心身魂の全方位的な癒し体験を提供することに専念しています。",
      mission: "私たちの使命",
      missionContent:
        "茶道修身、静心瞑想、経絡調理などの伝統的な養生方法を通じて、現代人が忙しい生活の中で内なる平静と健康的なライフスタイルを見つけるお手伝いをします。",
      values: "核心価値",
      valuesItems: [
        { title: "伝統継承", desc: "茶道文化の純正な継承を保持" },
        { title: "現代融合", desc: "現代科学的養生理念との結合" },
        { title: "個性カスタマイズ", desc: "各お客様に合わせたプランを提供" },
        { title: "専門品質", desc: "最も専門的なサービス体験を提供" },
      ],
      backHome: "ホームに戻る",
    },
    en: {
      title: "About Us",
      subtitle: "Inheriting thousand-year tea ceremony wisdom, integrating modern wellness concepts",
      story: "Our Story",
      storyContent:
        "Zen Tea Wellness Center was founded in 2018 by experienced tea masters and wellness experts. We are dedicated to combining traditional tea ceremony culture with modern health concepts, providing comprehensive mind-body-spirit healing experiences for urban populations.",
      mission: "Our Mission",
      missionContent:
        "Through traditional wellness methods such as tea ceremony cultivation, meditation, and meridian therapy, we help modern people find inner peace and healthy lifestyles in their fast-paced lives.",
      values: "Core Values",
      valuesItems: [
        { title: "Traditional Heritage", desc: "Maintaining pure inheritance of tea ceremony culture" },
        { title: "Modern Integration", desc: "Combining modern scientific wellness concepts" },
        { title: "Personal Customization", desc: "Tailored plans for each client" },
        { title: "Professional Quality", desc: "Providing the most professional service experience" },
      ],
      backHome: "Back to Home",
    },
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

      {/* Content Sections */}
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 pb-20 space-y-16">
        {/* Story Section */}
        <Card className="overflow-hidden">
          <CardHeader className="bg-primary/5">
            <CardTitle className="flex items-center text-2xl">
              <Leaf className="mr-3 h-6 w-6 text-primary" />
              {t.story}
            </CardTitle>
          </CardHeader>
          <CardContent className="pt-6">
            <p className="text-lg text-muted-foreground leading-relaxed">{t.storyContent}</p>
          </CardContent>
        </Card>

        {/* Mission Section */}
        <Card className="overflow-hidden">
          <CardHeader className="bg-primary/5">
            <CardTitle className="flex items-center text-2xl">
              <Heart className="mr-3 h-6 w-6 text-primary" />
              {t.mission}
            </CardTitle>
          </CardHeader>
          <CardContent className="pt-6">
            <p className="text-lg text-muted-foreground leading-relaxed">{t.missionContent}</p>
          </CardContent>
        </Card>

        {/* Values Section */}
        <div>
          <h2 className="text-3xl font-bold text-center mb-12 flex items-center justify-center">
            <Award className="mr-3 h-8 w-8 text-primary" />
            {t.values}
          </h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {t.valuesItems.map((value, index) => (
              <Card key={index} className="text-center hover:shadow-lg transition-all duration-300">
                <CardHeader>
                  <CardTitle className="text-lg text-primary">{value.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription className="leading-relaxed">{value.desc}</CardDescription>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}
