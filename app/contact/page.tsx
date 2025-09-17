"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { ArrowLeft, MapPin, Phone, Mail, Clock, Send } from "lucide-react"
import Link from "next/link"

export default function ContactPage() {
  const [currentLang, setCurrentLang] = useState<"zh" | "zh-TW" | "ja" | "en">("zh")

  const translations = {
    zh: {
      title: "联系我们",
      subtitle: "欢迎咨询预约，开启您的养生之旅",
      contactInfo: "联系信息",
      address: "地址",
      addressText: "东京都墨田区东向岛6-58-3",
      phone: "电话",
      phoneText: "+81 080 6816 1117",
      email: "邮箱",
      emailText: "jiananfu6@gmail.com",
      hours: "营业时间",
      hoursText: "周一至周日 9:00-21:00",
      contactForm: "预约咨询",
      name: "姓名",
      namePlaceholder: "请输入您的姓名",
      emailPlaceholder: "请输入您的邮箱",
      service: "感兴趣的服务",
      servicePlaceholder: "请选择您感兴趣的服务",
      message: "留言",
      messagePlaceholder: "请告诉我们您的需求或问题...",
      submit: "提交预约",
      backHome: "返回首页",
      formDescription: "填写下方表单，我们将尽快与您联系",
    },
    "zh-TW": {
      title: "聯繫我們",
      subtitle: "歡迎諮詢預約，開啟您的養生之旅",
      contactInfo: "聯繫資訊",
      address: "地址",
      addressText: "東京都墨田區東向島6-58-3",
      phone: "電話",
      phoneText: "+81 080 6816 1117",
      email: "郵箱",
      emailText: "jiananfu6@gmail.com",
      hours: "營業時間",
      hoursText: "週一至週日 9:00-21:00",
      contactForm: "預約諮詢",
      name: "姓名",
      namePlaceholder: "請輸入您的姓名",
      emailPlaceholder: "請輸入您的郵箱",
      service: "感興趣的服務",
      servicePlaceholder: "請選擇您感興趣的服務",
      message: "留言",
      messagePlaceholder: "請告訴我們您的需求或問題...",
      submit: "提交預約",
      backHome: "返回首頁",
      formDescription: "填寫下方表單，我們將盡快與您聯繫",
    },
    ja: {
      title: "お問い合わせ",
      subtitle: "ご相談・ご予約をお待ちしております。健康の旅を始めましょう",
      contactInfo: "連絡先情報",
      address: "住所",
      addressText: "東京都墨田区東向島6-58-3",
      phone: "電話",
      phoneText: "+81 080 6816 1117",
      email: "メール",
      emailText: "jiananfu6@gmail.com",
      hours: "営業時間",
      hoursText: "月曜日〜日曜日 9:00-21:00",
      contactForm: "予約相談",
      name: "お名前",
      namePlaceholder: "お名前を入力してください",
      emailPlaceholder: "メールアドレスを入力してください",
      service: "ご興味のあるサービス",
      servicePlaceholder: "ご興味のあるサービスを選択してください",
      message: "メッセージ",
      messagePlaceholder: "ご要望やご質問をお聞かせください...",
      submit: "予約を送信",
      backHome: "ホームに戻る",
      formDescription: "下記のフォームにご記入ください。お早めにご連絡いたします",
    },
    en: {
      title: "Contact Us",
      subtitle: "Welcome to inquire and book, start your wellness journey",
      contactInfo: "Contact Information",
      address: "Address",
      addressText: "6-58-3 Higashimukojima, Sumida City, Tokyo, Japan",
      phone: "Phone",
      phoneText: "+81 080 6816 1117",
      email: "Email",
      emailText: "jiananfu6@gmail.com",
      hours: "Business Hours",
      hoursText: "Monday to Sunday 9:00-21:00",
      contactForm: "Appointment Consultation",
      name: "Name",
      namePlaceholder: "Please enter your name",
      emailPlaceholder: "Please enter your email",
      service: "Service of Interest",
      servicePlaceholder: "Please select the service you're interested in",
      message: "Message",
      messagePlaceholder: "Please tell us your needs or questions...",
      submit: "Submit Appointment",
      backHome: "Back to Home",
      formDescription: "Fill out the form below and we will contact you as soon as possible",
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

      {/* Contact Content */}
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 pb-20">
        <div className="grid lg:grid-cols-2 gap-12">
          {/* Contact Info */}
          <div className="space-y-8">
            <Card>
              <CardHeader>
                <CardTitle className="text-2xl">{t.contactInfo}</CardTitle>
              </CardHeader>
              <CardContent className="space-y-6">
                <div className="flex items-start space-x-4">
                  <MapPin className="h-6 w-6 text-primary mt-1" />
                  <div>
                    <h3 className="font-semibold text-foreground">{t.address}</h3>
                    <p className="text-muted-foreground">{t.addressText}</p>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <Phone className="h-6 w-6 text-primary mt-1" />
                  <div>
                    <h3 className="font-semibold text-foreground">{t.phone}</h3>
                    <p className="text-muted-foreground">{t.phoneText}</p>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <Mail className="h-6 w-6 text-primary mt-1" />
                  <div>
                    <h3 className="font-semibold text-foreground">{t.email}</h3>
                    <p className="text-muted-foreground">{t.emailText}</p>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <Clock className="h-6 w-6 text-primary mt-1" />
                  <div>
                    <h3 className="font-semibold text-foreground">{t.hours}</h3>
                    <p className="text-muted-foreground">{t.hoursText}</p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Contact Form */}
          <Card>
            <CardHeader>
              <CardTitle className="text-2xl">{t.contactForm}</CardTitle>
              <CardDescription>{t.formDescription}</CardDescription>
            </CardHeader>
            <CardContent>
              <form className="space-y-6">
                <div>
                  <label className="text-sm font-medium text-foreground mb-2 block">{t.name}</label>
                  <Input placeholder={t.namePlaceholder} />
                </div>

                <div>
                  <label className="text-sm font-medium text-foreground mb-2 block">{t.email}</label>
                  <Input type="email" placeholder={t.emailPlaceholder} />
                </div>

                <div>
                  <label className="text-sm font-medium text-foreground mb-2 block">{t.service}</label>
                  <Input placeholder={t.servicePlaceholder} />
                </div>

                <div>
                  <label className="text-sm font-medium text-foreground mb-2 block">{t.message}</label>
                  <Textarea placeholder={t.messagePlaceholder} rows={4} />
                </div>

                <Button className="w-full bg-primary hover:bg-primary/90 text-primary-foreground">
                  <Send className="mr-2 h-4 w-4" />
                  {t.submit}
                </Button>
              </form>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  )
}
