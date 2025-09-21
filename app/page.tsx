"use client"

import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import {
  Leaf,
  Heart,
  Zap,
  Users,
  Star,
  ArrowRight,
  Brain,
  Sparkles,
  ChevronDown,
  Phone,
  Mail,
  MapPin,
  X,
  Target,
  Apple,
} from "lucide-react"
import { useEffect, useState } from "react"
import Link from "next/link"
import { LanguageSelector } from "@/components/language-selector"
import { ServiceCard } from "@/components/service-card"
import { TestimonialCard } from "@/components/testimonial-card"
import { TeamMemberCard } from "@/components/team-member-card"

const translations = {
  zh: {
    siteName: "人和禅茶养生",
    tagline: "传统养生 · 现代生活",
    heroTitle: "在茶香中",
    heroSubtitle: "寻找内心的宁静",
    heroDescription:
      "我们提供人和禅茶体验、点穴疗法、静坐冥想、水晶钵疗愈、饮食疗法、瑜伽养生、心理辅导等七大养生服务，融合传统智慧与现代科学，为您打造身心灵和谐的养生之旅。",
    startJourney: "开始您的养生之旅",
    learnMore: "了解更多",
    bookConsultation: "预约咨询",
    nav: {
      home: "首页",
      about: "关于我们",
      services: "服务项目",
      products: "茶品推荐",
      contact: "联系我们",
    },
    whyChoose: "为什么选择人和禅茶养生",
    whyChooseDesc: "我们将传统茶道文化与现代健康理念完美结合，为您提供全方位的养生体验",
    features: {
      title: "人和禅茶养生，焕发身心活力",
      subtitle: "七大养生服务，身心灵全面呵护",
      feature1: { title: "身心平衡", description: "茶道冥想，内外和谐" },
      feature2: { title: "穴位调理", description: "点穴按摩，气血调和" },
      feature3: { title: "自然疗愈", description: "身心放松，回归自然" },
    },
    services: {
      title: "七大养生服务",
      subtitle: "传统智慧与现代科学的结合",
      tea: { title: "人和禅茶体验", description: "品茗静心，感悟生活", price: "¥299/次" },
      acupressure: {
        title: "点穴疗法",
        description: "传统点穴按摩，疏通经络，调和气血，缓解身心疲劳",
        price: "¥399/次",
      },
      meditation: { title: "静坐冥想", description: "放松身心，提升专注", price: "¥199/次" },
      crystal: { title: "水晶钵疗愈", description: "声波疗愈，深度放松", price: "¥499/次" },
      nutrition: {
        title: "饮食疗法",
        description: "个性化营养指导，食疗养生，调理体质，提升健康水平",
        price: "¥299/次",
      },
      yoga: { title: "瑜伽养生", description: "舒展身心，增强柔韧", price: "¥299/次" },
      psychology: { title: "心理辅导", description: "情绪疏导，心灵成长", price: "¥399/次" },
    },
    bookNow: "立即预约",
    testimonials: {
      title: "学员评价",
      subtitle: "人和禅茶养生，身心受益",
      testimonial1: {
        name: "李女士",
        role: "企业高管",
        content: "人和禅茶体验让我找到了内心的平静，工作压力得到了很好的缓解。",
      },
      testimonial2: {
        name: "王先生",
        role: "退休教师",
        content: "点穴疗法和水晶钵疗愈让我的身体状况有了明显改善，睡眠质量也提高了很多。",
      },
      testimonial3: {
        name: "张小姐",
        role: "设计师",
        content: "静坐冥想课程帮助我提升了专注力和创造力，现在工作效率比以前高了很多。",
      },
    },
    team: {
      title: "专业团队",
      subtitle: "资深导师，用心服务",
      member1: {
        name: "陈雅茗",
        role: "茶道导师",
        description: "20年茶道经验，国家级茶艺师",
      },
      member2: {
        name: "李静心",
        role: "冥想导师",
        description: "禅修导师，心理咨询师",
      },
      member3: {
        name: "王养生",
        role: "养生专家",
        description: "中医世家，点穴疗法专家",
      },
    },
    faq: "常见问题",
    faqDesc: "解答您的疑虑",
    ctaTitle: "开始您的人和禅茶养生之旅",
    ctaDesc: "让身心在茶香中得到滋养与平静",
    freeExperience: "免费体验",
    contactUs: "联系我们",
    contactInfo: "联系信息",
    businessHours: "营业时间：9:00-21:00",
    openDaily: "每日开放",
    copyright: "© 2024 人和株式会社. 保留所有权利.",
    footer: {
      description: "人和禅茶养生致力于传承传统茶道文化，结合现代健康理念，为您提供身心灵和谐的养生体验。",
      quickLinks: "快速链接",
      contactInfo: "联系信息",
      followUs: "关注我们",
      copyright: "© 2024 人和株式会社. 保留所有权利.",
    },
    wisdom: {
      title: "禅修智慧",
      subtitle: "一行禅师的智慧启发",
      quote:
        "不要错过坐下来、无须担忧或思虑做任何事情的机会。放下你的包袱、担忧和项目。只是坐着，感受你活着。与你的儿女、伴侣和朋友坐着。这足以快乐。",
      author: "— 一行禅师",
    },
    booking: {
      title: "预约服务",
      name: "姓名",
      phone: "电话",
      email: "邮箱",
      service: "选择服务",
      date: "预约日期",
      time: "预约时间",
      message: "留言",
      submit: "提交预约",
      cancel: "取消",
      selectService: "请选择服务",
      messagePlaceholder: "请告诉我们您的需求或特殊要求...",
    },
  },
  "zh-TW": {
    siteName: "人和禪茶養生",
    tagline: "傳統養生 · 現代生活",
    heroTitle: "在茶香中",
    heroSubtitle: "尋找內心的寧靜",
    heroDescription:
      "我們提供人和禪茶體驗、點穴療法、靜坐冥想、水晶缽療癒、飲食療法、瑜伽養生、心理輔導等七大養生服務，融合傳統智慧與現代科學，為您打造身心靈和諧的養生之旅。",
    startJourney: "開始您的養生之旅",
    learnMore: "了解更多",
    bookConsultation: "預約諮詢",
    nav: {
      home: "首頁",
      about: "關於我們",
      services: "服務項目",
      products: "茶品推薦",
      contact: "聯絡我們",
    },
    whyChoose: "為什麼選擇人和禪茶養生",
    whyChooseDesc: "我們將傳統茶道文化與現代健康理念完美結合，為您提供全方位的養生體驗",
    features: {
      title: "人和禪茶養生，煥發身心活力",
      subtitle: "七大養生服務，身心靈全面呵護",
      feature1: { title: "身心平衡", description: "茶道冥想，內外和諧" },
      feature2: { title: "穴位調理", description: "點穴按摩，氣血調和" },
      feature3: { title: "自然療癒", description: "身心放鬆，回歸自然" },
    },
    services: {
      title: "七大養生服務",
      subtitle: "傳統智慧與現代科學的結合",
      tea: { title: "人和禪茶體驗", description: "品茗靜心，感悟生活", price: "¥299/次" },
      acupressure: {
        title: "點穴療法",
        description: "傳統點穴按摩，疏通經絡，調和氣血，緩解身心疲勞",
        price: "¥399/次",
      },
      meditation: { title: "靜坐冥想", description: "放鬆身心，提升專注", price: "¥199/次" },
      crystal: { title: "水晶缽療癒", description: "聲波療癒，深度放鬆", price: "¥499/次" },
      nutrition: {
        title: "飲食療法",
        description: "個性化營養指導，食療養生，調理體質，提升健康水平",
        price: "¥299/次",
      },
      yoga: { title: "瑜伽養生", description: "舒展身心，增強柔韌", price: "¥299/次" },
      psychology: { title: "心理輔導", description: "情緒疏導，心靈成長", price: "¥399/次" },
    },
    bookNow: "立即預約",
    testimonials: {
      title: "學員評價",
      subtitle: "人和禪茶養生，身心受益",
      testimonial1: {
        name: "李女士",
        role: "企業高管",
        content: "人和禪茶體驗讓我找到了內心的平靜，工作壓力得到了很好的緩解。",
      },
      testimonial2: {
        name: "王先生",
        role: "退休教師",
        content: "點穴療法和水晶缽療癒讓我的身體狀況有了明顯改善，睡眠質量也提高了很多。",
      },
      testimonial3: {
        name: "張小姐",
        role: "設計師",
        content: "靜坐冥想課程幫助我提升了專注力和創造力，現在工作效率比以前高了很多。",
      },
    },
    team: {
      title: "專業團隊",
      subtitle: "資深導師，用心服務",
      member1: {
        name: "陳雅茗",
        role: "茶道導師",
        description: "20年茶道經驗，國家級茶藝師",
      },
      member2: {
        name: "李靜心",
        role: "冥想導師",
        description: "禪修導師，心理諮詢師",
      },
      member3: {
        name: "王養生",
        role: "養生專家",
        description: "中醫世家，點穴療法專家",
      },
    },
    faq: "常見問題",
    faqDesc: "解答您的疑慮",
    ctaTitle: "開始您的人和禪茶養生之旅",
    ctaDesc: "讓身心在茶香中得到滋養與平靜",
    freeExperience: "免費體驗",
    contactUs: "聯絡我們",
    contactInfo: "聯絡資訊",
    businessHours: "營業時間：9:00-21:00",
    openDaily: "每日開放",
    copyright: "© 2024 人和株式会社. 保留所有權利.",
    footer: {
      description: "人和禪茶養生致力於傳承傳統茶道文化，結合現代健康理念，為您提供身心靈和諧的養生體驗。",
      quickLinks: "快速連結",
      contactInfo: "聯絡資訊",
      followUs: "關注我們",
      copyright: "© 2024 人和株式会社. 保留所有權利.",
    },
    wisdom: {
      title: "禪修智慧",
      subtitle: "一行禪師的智慧啟發",
      quote:
        "不要錯過坐下來、無須擔憂或思慮做任何事情的機會。放下你的包袱、擔憂和項目。只是坐著，感受你活著。與你的兒女、伴侶和朋友坐著。這足以快樂。",
      author: "— 一行禪師",
    },
    booking: {
      title: "預約服務",
      name: "姓名",
      phone: "電話",
      email: "電子郵箱",
      service: "選擇服務",
      date: "預約日期",
      time: "預約時間",
      message: "留言",
      submit: "提交預約",
      cancel: "取消",
      selectService: "請選擇服務",
      messagePlaceholder: "請告訴我們您的需求或特殊要求...",
    },
  },
  ja: {
    siteName: "人和禅茶養生",
    tagline: "伝統養生 · 現代生活",
    heroTitle: "茶の香りの中で",
    heroSubtitle: "心の平穏を見つける",
    heroDescription:
      "私たちは人和禅茶体験、ツボ療法、瞑想、クリスタルボウル療法、食事療法、ヨガ養生、心理カウンセリングなど7つの養生サービスを提供し、伝統的な知恵と現代の科学を融合させ、心身の調和を実現します。",
    startJourney: "養生の旅を始める",
    learnMore: "詳しくはこちら",
    bookConsultation: "予約する",
    nav: {
      home: "ホーム",
      about: "私たちについて",
      services: "サービス",
      products: "お茶のおすすめ",
      contact: "お問い合わせ",
    },
    whyChoose: "なぜ人和禅茶養生を選ぶのか",
    whyChooseDesc: "伝統茶道文化と現代の健康理念を完璧に融合し、包括的な養生体験を提供します。",
    features: {
      title: "人和禅茶養生で心身の活力を取り戻す",
      subtitle: "7つの養生サービスで心身をトータルケア",
      feature1: { title: "心身のバランス", description: "茶道瞑想で内外の調和" },
      feature2: { title: "ツボ調整", description: "ツボマッサージで気血を調整" },
      feature3: { title: "自然療法", description: "心身をリラックスさせ自然に回帰" },
    },
    services: {
      title: "7つの養生サービス",
      subtitle: "伝統知識と現代科学の融合",
      tea: { title: "人和禅茶体験", description: "お茶を楽しみながら心を落ち着ける", price: "¥299/回" },
      acupressure: { title: "ツボ療法", description: "伝統的なツボマッサージで体の調整", price: "¥399/回" },
      meditation: { title: "瞑想", description: "心身をリラックス、集中力を高める", price: "¥199/回" },
      crystal: { title: "クリスタルボウル療法", description: "音波療法で深いリラクゼーション", price: "¥499/回" },
      nutrition: { title: "食事療法", description: "個別栄養指導、体質改善、健康増進", price: "¥299/回" },
      yoga: { title: "ヨガ養生", description: "身体を伸ばし柔軟性を向上", price: "¥299/回" },
      psychology: { title: "心理カウンセリング", description: "感情の整理、心の成長", price: "¥399/回" },
    },
    bookNow: "今すぐ予約",
    testimonials: {
      title: "お客様の声",
      subtitle: "人和禅茶養生で心身に効果",
      testimonial1: { name: "李さん", role: "企業幹部", content: "人和禅茶体験で心の平穏を得ることができ、仕事のストレスが大幅に軽減されました。" },
      testimonial2: { name: "王さん", role: "退職教師", content: "ツボ療法とクリスタルボウル療法で身体の調子が改善し、睡眠の質も向上しました。" },
      testimonial3: { name: "張さん", role: "デザイナー", content: "瞑想クラスで集中力と創造力が向上し、仕事の効率が格段に上がりました。" },
    },
    team: {
      title: "プロチーム",
      subtitle: "経験豊富なインストラクター",
      member1: { name: "陳雅茗", role: "茶道インストラクター", description: "茶道歴20年、国家級茶芸師" },
      member2: { name: "李静心", role: "瞑想インストラクター", description: "禅修インストラクター、心理カウンセラー" },
      member3: { name: "王養生", role: "養生専門家", description: "中医学家系、ツボ療法専門家" },
    },
    faq: "よくある質問",
    faqDesc: "疑問にお答えします",
    ctaTitle: "人和禅茶養生の旅を始めましょう",
    ctaDesc: "茶の香りで心身を養い、平穏を感じる",
    freeExperience: "無料体験",
    contactUs: "お問い合わせ",
    contactInfo: "連絡先情報",
    businessHours: "営業時間：9:00-21:00",
    openDaily: "毎日営業",
    copyright: "© 2024 人和株式会社. All rights reserved.",
    footer: {
      description: "人和禅茶養生は伝統茶道文化を継承し、現代の健康理念と融合させ、心身の調和を提供します。",
      quickLinks: "クイックリンク",
      contactInfo: "連絡先情報",
      followUs: "フォローする",
      copyright: "© 2024 人和株式会社. All rights reserved.",
    },
    wisdom: {
      title: "禅の知恵",
      subtitle: "一行禅師の教え",
      quote: "座って、何も心配せず、ただ生きていることを感じる時間を逃さないでください。",
      author: "— 一行禅師",
    },
    booking: {
      title: "予約サービス",
      name: "名前",
      phone: "電話番号",
      email: "メール",
      service: "サービス選択",
      date: "予約日",
      time: "予約時間",
      message: "メッセージ",
      submit: "送信",
      cancel: "キャンセル",
      selectService: "サービスを選択",
      messagePlaceholder: "ご要望や特別なリクエストをお知らせください...",
    },
  },
  en: {
    siteName: "HitoWa Zen Tea Wellness",
    tagline: "Traditional Wellness · Modern Life",
    heroTitle: "Amidst the Aroma of Tea",
    heroSubtitle: "Find Inner Peace",
    heroDescription:
      "We provide HitoWa Zen Tea experiences, acupressure therapy, meditation, crystal bowl therapy, nutritional guidance, yoga wellness, and psychological counseling. Combining traditional wisdom with modern science, we offer a journey towards mind-body harmony.",
    startJourney: "Start Your Wellness Journey",
    learnMore: "Learn More",
    bookConsultation: "Book a Consultation",
    nav: {
      home: "Home",
      about: "About Us",
      services: "Services",
      products: "Tea Selection",
      contact: "Contact",
    },
    whyChoose: "Why Choose HitoWa Zen Tea Wellness",
    whyChooseDesc: "We perfectly blend traditional tea culture with modern health concepts, offering a comprehensive wellness experience.",
    features: {
      title: "HitoWa Zen Tea Wellness, Revitalize Your Mind & Body",
      subtitle: "Seven wellness services for full mind-body care",
      feature1: { title: "Mind-Body Balance", description: "Tea meditation for inner and outer harmony" },
      feature2: { title: "Acupressure Therapy", description: "Massage to balance Qi and blood flow" },
      feature3: { title: "Natural Healing", description: "Relax your mind and body, return to nature" },
    },
    services: {
      title: "Seven Wellness Services",
      subtitle: "Combining traditional wisdom with modern science",
      tea: { title: "HitoWa Zen Tea Experience", description: "Enjoy tea and calm your mind", price: "$45/session" },
      acupressure: { title: "Acupressure Therapy", description: "Traditional acupressure massage to relieve fatigue", price: "$60/session" },
      meditation: { title: "Meditation", description: "Relax body and mind, enhance focus", price: "$30/session" },
      crystal: { title: "Crystal Bowl Therapy", description: "Sound therapy for deep relaxation", price: "$70/session" },
      nutrition: { title: "Nutritional Guidance", description: "Personalized diet and wellness advice", price: "$45/session" },
      yoga: { title: "Yoga Wellness", description: "Stretch and improve flexibility", price: "$45/session" },
      psychology: { title: "Psychological Counseling", description: "Emotional support and personal growth", price: "$60/session" },
    },
    bookNow: "Book Now",
    testimonials: {
      title: "Testimonials",
      subtitle: "Beneficial Mind-Body Experiences at HitoWa Zen Tea Wellness",
      testimonial1: { name: "Ms. Li", role: "Corporate Executive", content: "The HitoWa Zen Tea experience brought me inner peace and reduced work stress." },
      testimonial2: { name: "Mr. Wang", role: "Retired Teacher", content: "Acupressure and crystal bowl therapy improved my health and sleep quality." },
      testimonial3: { name: "Ms. Zhang", role: "Designer", content: "Meditation sessions improved my focus and creativity, boosting work efficiency." },
    },
    team: {
      title: "Professional Team",
      subtitle: "Experienced mentors, dedicated service",
      member1: { name: "Chen Yaming", role: "Tea Instructor", description: "20 years of tea experience, national tea master" },
      member2: { name: "Li Jingxin", role: "Meditation Instructor", description: "Zen meditation teacher, psychological counselor" },
      member3: { name: "Wang Yangsheng", role: "Wellness Expert", description: "Traditional Chinese medicine family, acupressure specialist" },
    },
    faq: "FAQ",
    faqDesc: "Answers to your questions",
    ctaTitle: "Start Your HitoWa Zen Tea Wellness Journey",
    ctaDesc: "Nourish your mind and body amidst the aroma of tea",
    freeExperience: "Free Trial",
    contactUs: "Contact Us",
    contactInfo: "Contact Info",
    businessHours: "Business Hours: 9:00-21:00",
    openDaily: "Open Daily",
    copyright: "© 2024 HitoWa Co., Ltd. All rights reserved.",
    footer: {
      description: "HitoWa Zen Tea Wellness inherits traditional tea culture and integrates modern health concepts to offer mind-body harmony.",
      quickLinks: "Quick Links",
      contactInfo: "Contact Info",
      followUs: "Follow Us",
      copyright: "© 2024 HitoWa Co., Ltd. All rights reserved.",
    },
    wisdom: {
      title: "Zen Wisdom",
      subtitle: "Insights from Thich Nhat Hanh",
      quote: "Don't miss the chance to sit without worry or planning. Simply sit and feel alive.",
      author: "— Thich Nhat Hanh",
    },
    booking: {
      title: "Book a Service",
      name: "Name",
      phone: "Phone",
      email: "Email",
      service: "Select Service",
      date: "Booking Date",
      time: "Booking Time",
      message: "Message",
      submit: "Submit",
      cancel: "Cancel",
      selectService: "Please select a service",
      messagePlaceholder: "Tell us your needs or special requests...",
    },
  },
};

export default function ZenTeaWellnessPage() {
  const [isVisible, setIsVisible] = useState(false)
  const [currentLang, setCurrentLang] = useState<"zh" | "zh-TW" | "ja" | "en">("zh")
  const [showBookingModal, setShowBookingModal] = useState(false)

  const t = translations[currentLang] || translations.zh

  const services = [
    {
      icon: Leaf,
      title: t.services?.tea?.title || "禅茶体验",
      description: t.services?.tea?.description || "品茗静心，感悟生活",
      price: t.services?.tea?.price || "¥299/次",
      image: "zen tea ceremony meditation session",
    },
    {
      icon: Target,
      title: t.services?.acupressure?.title || "点穴疗法",
      description: t.services?.acupressure?.description || "传统点穴按摩，疏通经络，调和气血，缓解身心疲劳",
      price: t.services?.acupressure?.price || "¥399/次",
      image: "acupressure therapy healing session",
    },
    {
      icon: Brain,
      title: t.services?.meditation?.title || "静坐冥想",
      description: t.services?.meditation?.description || "放松身心，提升专注",
      price: t.services?.meditation?.price || "¥199/次",
      image: "sitting meditation zen practice",
    },
    {
      icon: Sparkles,
      title: t.services?.crystal?.title || "水晶钵疗愈",
      description: t.services?.crystal?.description || "声波疗愈，深度放松",
      price: t.services?.crystal?.price || "¥499/次",
      image: "crystal bowl sound healing therapy",
    },
    {
      icon: Apple,
      title: t.services?.nutrition?.title || "饮食疗法",
      description: t.services?.nutrition?.description || "个性化营养指导，食疗养生，调理体质，提升健康水平",
      price: t.services?.nutrition?.price || "¥299/次",
      image: "healthy nutrition diet therapy consultation",
    },
    {
      icon: Zap,
      title: t.services?.yoga?.title || "瑜伽养生",
      description: t.services?.yoga?.description || "舒展身心，增强柔韧",
      price: t.services?.yoga?.price || "¥299/次",
      image: "yoga and wellness stretching",
    },
    {
      icon: Users,
      title: t.services?.psychology?.title || "心理辅导",
      description: t.services?.psychology?.description || "情绪疏导，心灵成长",
      price: t.services?.psychology?.price || "¥399/次",
      image: "psychological counseling therapy session",
    },
  ]

  const testimonials = [
    {
      name: t.testimonials?.testimonial1?.name || "李女士",
      role: t.testimonials?.testimonial1?.role || "企业高管",
      content: t.testimonials?.testimonial1?.content || "禅茶体验让我找到了内心的平静，工作压力得到了很好的缓解。",
      rating: 5,
      avatar: "professional asian woman smiling portrait",
    },
    {
      name: t.testimonials?.testimonial2?.name || "王先生",
      role: t.testimonials?.testimonial2?.role || "退休教师",
      content:
        t.testimonials?.testimonial2?.content ||
        "点穴疗法和水晶钵疗愈让我的身体状况有了明显改善，睡眠质量也提高了很多。",
      rating: 5,
      avatar: "middle aged businessman professional headshot",
    },
    {
      name: t.testimonials?.testimonial3?.name || "张小姐",
      role: t.testimonials?.testimonial3?.role || "设计师",
      content:
        t.testimonials?.testimonial3?.content || "静坐冥想课程帮助我提升了专注力和创造力，现在工作效率比以前高了很多。",
      rating: 5,
      avatar: "young professional woman confident portrait",
    },
  ]

  const teamMembers = [
    {
      name: t.team?.member1?.name || "陈雅茗",
      role: t.team?.member1?.role || "茶道导师",
      experience: "传统茶艺、茶文化传承",
      specialty: "传统茶艺、茶文化传承",
      image: "zen tea master traditional chinese clothing",
    },
    {
      name: t.team?.member2?.name || "李静心",
      role: t.team?.member2?.role || "冥想导师",
      experience: "经络疏通、中医养生",
      specialty: "经络疏通、中医养生",
      image: "professional massage therapist wellness expert",
    },
    {
      name: t.team?.member3?.name || "王养生",
      role: t.team?.member3?.role || "养生专家",
      experience: "情绪疏导、心灵成长",
      specialty: "情绪疏导、心灵成长",
      image: "wellness expert with healing crystals",
    },
  ]

  useEffect(() => {
    setIsVisible(true)

    const observerOptions = {
      threshold: 0.1,
      rootMargin: "0px 0px -50px 0px",
    }

    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("animate-fade-in-up")
        }
      })
    }, observerOptions)

    const elementsToAnimate = document.querySelectorAll(".animate-on-scroll")
    elementsToAnimate.forEach((el) => observer.observe(el))

    return () => observer.disconnect()
  }, [])

  return (
    <div className="min-h-screen bg-background">
      <style jsx global>{`
        @keyframes fade-in {
          from { opacity: 0; transform: translateY(20px); }
          to { opacity: 1; transform: translateY(0); }
        }
        
        @keyframes slide-in-left {
          from { opacity: 0; transform: translateX(-30px); }
          to { opacity: 1; transform: translateX(0); }
        }
        
        @keyframes slide-in-right {
          from { opacity: 0; transform: translateX(30px); }
          to { opacity: 1; transform: translateX(0); }
        }
        
        @keyframes scale-in {
          from { opacity: 0; transform: scale(0.9); }
          to { opacity: 1; transform: scale(1); }
        }
        
        @keyframes fade-in-up {
          from { opacity: 0; transform: translateY(30px); }
          to { opacity: 1; transform: translateY(0); }
        }
        
        .animate-fade-in { animation: fade-in 0.6s ease-out forwards; }
        .animate-slide-in-left { animation: slide-in-left 0.8s ease-out forwards; }
        .animate-slide-in-right { animation: slide-in-right 0.8s ease-out forwards; }
        .animate-scale-in { animation: scale-in 0.5s ease-out forwards; }
        .animate-fade-in-up { animation: fade-in-up 0.6s ease-out forwards; }
        
        .animate-on-scroll {
          opacity: 0;
          transform: translateY(30px);
        }
        
        .hover-lift {
          transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
        }
        
        .hover-lift:hover {
          transform: translateY(-8px);
          box-shadow: 0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04);
        }
        
        .hover-scale {
          transition: transform 0.2s ease-in-out;
        }
        
        .hover-scale:hover {
          transform: scale(1.05);
        }
        
        .floating {
          animation: float 6s ease-in-out infinite;
        }
        
        @keyframes float {
          0%, 100% { transform: translateY(0px); }
          50% { transform: translateY(-10px); }
        }
      `}</style>

      {/* Navigation */}
      <nav
        className={`border-b border-border bg-card/50 backdrop-blur-sm sticky top-0 z-50 transition-all duration-500 ${isVisible ? "animate-slide-in-left" : "opacity-0"}`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <div className="flex items-center space-x-2 hover-scale">
              <Leaf className="h-8 w-8 text-primary transition-transform duration-300 hover:rotate-12" />
              <div>
                <h1 className="text-xl font-bold text-foreground">{t.siteName}</h1>
                <Badge className="bg-primary text-primary-foreground border-0 text-xs font-medium">{t.tagline}</Badge>
              </div>
            </div>

            <div className="hidden md:flex items-center space-x-8">
              <Link href="/" className="text-foreground hover:text-primary transition-colors duration-200 hover-scale">
                {t.nav?.home || "首页"}
              </Link>
              <Link
                href="/about"
                className="text-foreground hover:text-primary transition-colors duration-200 hover-scale"
              >
                {t.nav?.about || "关于我们"}
              </Link>
              <Link
                href="/services"
                className="text-foreground hover:text-primary transition-colors duration-200 hover-scale"
              >
                {t.nav?.services || "服务项目"}
              </Link>
              <Link
                href="/contact"
                className="text-foreground hover:text-primary transition-colors duration-200 hover-scale"
              >
                {t.nav?.contact || "联系我们"}
              </Link>
            </div>

            <LanguageSelector currentLang={currentLang} onLanguageChange={setCurrentLang} />
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="relative py-20 lg:py-32 overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div
              className={`space-y-8 transition-all duration-1000 ${isVisible ? "animate-slide-in-left" : "opacity-0 translate-x-[-30px]"}`}
            >
              <div className="space-y-4">
                <h1 className="text-4xl lg:text-6xl font-bold text-foreground leading-tight">
                  {t.heroTitle}
                  <br />
                  <span className="text-primary">{t.heroSubtitle}</span>
                </h1>
                <p className="text-lg text-muted-foreground leading-relaxed max-w-lg">{t.heroDescription}</p>
              </div>

              <div className="flex flex-col sm:flex-row gap-4">
                <Button size="lg" className="hover-scale group">
                  {t.cta?.bookNow || "立即预约"}
                  <ArrowRight className="ml-2 h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
                </Button>
                <Button variant="outline" size="lg" className="hover-scale bg-transparent">
                  {t.cta?.learnMore || "了解更多"}
                </Button>
              </div>
            </div>

            <div
              className={`relative transition-all duration-1000 delay-300 ${isVisible ? "animate-slide-in-right" : "opacity-0 translate-x-[30px]"}`}
            >
              <div className="aspect-square rounded-2xl overflow-hidden bg-card border border-border hover-lift floating">
                <img
                  src="/images/hero/zen-tea-ceremony.jpg"
                  alt={
                    currentLang === "en"
                      ? "Zen tea wellness scene"
                      : currentLang === "ja"
                        ? "禅茶養生シーン"
                        : "禅茶养生场景"
                  }
                  className="w-full h-full object-cover transition-transform duration-700 hover:scale-110"
                />
              </div>
              <div className="absolute -bottom-6 -left-6 bg-secondary text-secondary-foreground p-4 rounded-xl shadow-lg hover-scale animate-scale-in">
                <div className="flex items-center space-x-2">
                  <Star className="h-5 w-5 fill-current animate-pulse" />
                  <span className="font-semibold">4.9/5</span>
                </div>
                <p className="text-sm opacity-90">
                  {currentLang === "en" ? "Customer Rating" : currentLang === "ja" ? "お客様評価" : "客户评价"}
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 bg-muted/30">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16 animate-on-scroll">
            <h2 className="text-3xl lg:text-4xl font-bold text-foreground mb-4">
              {t.features?.title || "禅茶养生，焕发身心活力"}
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              {t.features?.subtitle || "七大养生服务，身心灵全面呵护"}
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                icon: Heart,
                title: t.features?.feature1?.title || "身心平衡",
                description: t.features?.feature1?.description || "茶道冥想，内外和谐",
              },
              {
                icon: Leaf,
                title: t.features?.feature2?.title || "穴位调理",
                description: t.features?.feature2?.description || "点穴按摩，气血调和",
              },
              {
                icon: Sparkles,
                title: t.features?.feature3?.title || "自然疗愈",
                description: t.features?.feature3?.description || "身心放松，回归自然",
              },
            ].map((feature, index) => (
              <Card
                key={index}
                className="text-center bg-background border-border hover:shadow-lg transition-all duration-500 group hover-lift animate-on-scroll"
                style={{ animationDelay: `${index * 0.2}s` }}
              >
                <CardHeader>
                  <div className="w-16 h-16 mx-auto bg-primary/10 rounded-full flex items-center justify-center mb-4 hover-scale">
                    <feature.icon className="h-8 w-8 text-primary transition-transform duration-300 group-hover:rotate-12" />
                  </div>
                  <CardTitle className="text-foreground group-hover:text-primary transition-colors duration-300">
                    {feature.title}
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground leading-relaxed">{feature.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16 animate-on-scroll">
            <h2 className="text-3xl lg:text-4xl font-bold text-foreground mb-4">
              {t.services?.title || "七大养生服务"}
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              {t.services?.subtitle || "传统智慧与现代科学的结合"}
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            {services.map((service, index) => (
              <ServiceCard key={index} service={service} index={index} />
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-20 bg-muted/30">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16 animate-on-scroll">
            <h2 className="text-3xl lg:text-4xl font-bold text-foreground mb-4">
              {t.testimonials?.title || "学员评价"}
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              {t.testimonials?.subtitle || "禅茶养生，身心受益"}
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <TestimonialCard key={index} testimonial={testimonial} index={index} />
            ))}
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16 animate-on-scroll">
            <h2 className="text-3xl lg:text-4xl font-bold text-foreground mb-4">{t.team?.title || "专业团队"}</h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              {t.team?.subtitle || "资深导师，用心服务"}
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {teamMembers.map((member, index) => (
              <TeamMemberCard key={index} member={member} index={index} />
            ))}
          </div>
        </div>
      </section>

      {/* Zen Wisdom Section */}
      <section className="py-20 bg-muted/30">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16 animate-on-scroll">
            <h2 className="text-3xl lg:text-4xl font-bold text-foreground mb-4">
              {currentLang === "en"
                ? "Zen Wisdom"
                : currentLang === "ja"
                  ? "禅の智慧"
                  : currentLang === "zh-TW"
                    ? "禪修智慧"
                    : "禅修智慧"}
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              {currentLang === "en"
                ? "Discover inner peace through the profound teachings of Thich Nhat Hanh and mindful meditation practices"
                : currentLang === "ja"
                  ? "ティク・ナット・ハンの深い教えと正念瞑想の実践を通じて内なる平和を発見する"
                  : currentLang === "zh-TW"
                    ? "通過一行禪師的深刻教導和正念冥想實踐，發現內在的平靜"
                    : "通过一行禅师的深刻教导和正念冥想实践，发现内在的平静"}
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                image: "/images/wisdom/elephant-heart-balloon.jpg",
                alt: currentLang === "en" ? "Mindful living wisdom" : "正念生活智慧",
              },
              {
                image: "/images/wisdom/butterfly-let-go.jpg",
                alt: currentLang === "en" ? "Letting go practice" : "放下修行",
              },
              {
                image: "/images/wisdom/hands-protecting-earth.jpg",
                alt: currentLang === "en" ? "Compassionate living" : "慈悲生活",
              },
              {
                image: "/images/wisdom/nature-river-mountains.jpg",
                alt: currentLang === "en" ? "Present moment awareness" : "当下觉知",
              },
              {
                image: "/images/wisdom/man-meditation-bowl.jpg",
                alt: currentLang === "en" ? "Sound meditation practice" : "声音冥想修行",
              },
              {
                image: "/images/wisdom/meditation-room-circle.jpg",
                alt: currentLang === "en" ? "Sacred meditation space" : "神圣冥想空间",
              },
            ].map((wisdom, index) => (
              <Card
                key={index}
                className="overflow-hidden bg-background border-border hover:shadow-xl transition-all duration-500 group hover-lift animate-on-scroll"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className="aspect-square overflow-hidden">
                  <img
                    src={wisdom.image || "/placeholder.svg"}
                    alt={wisdom.alt}
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                  />
                </div>
                <CardContent className="p-6">
                  <div className="flex items-center justify-center">
                    <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center hover-scale">
                      <Heart className="h-6 w-6 text-primary transition-transform duration-300 group-hover:scale-110" />
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>

          <div className="text-center mt-12 animate-on-scroll">
            <blockquote className="text-xl lg:text-2xl font-medium text-foreground italic max-w-4xl mx-auto leading-relaxed">
              {currentLang === "en"
                ? '"The present moment is the only time over which we have dominion."'
                : currentLang === "ja"
                  ? "「今この瞬間こそが、私たちが支配できる唯一の時間である。」"
                  : currentLang === "zh-TW"
                    ? "「當下是我們唯一能夠掌控的時刻。」"
                    : "「当下是我们唯一能够掌控的时刻。」"}
            </blockquote>
            <cite className="block mt-4 text-lg text-muted-foreground">
              {currentLang === "en" ? "— Thich Nhat Hanh" : "— 一行禅师"}
            </cite>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-20 bg-muted/30">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center space-y-4 mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold text-foreground text-balance">{t.faq || "常见问题"}</h2>
            <p className="text-lg text-muted-foreground text-pretty">{t.faqDesc || "解答您的疑虑"}</p>
          </div>

          <div className="space-y-4">
            {[
              {
                question:
                  currentLang === "en"
                    ? "Can beginners participate in tea art training?"
                    : currentLang === "ja"
                      ? "経絡指導に何か準備は必要ですか？"
                      : currentLang === "zh-TW"
                        ? "經絡引導需要什麼準備嗎？"
                        : "经络引导需要什么准备吗？",
                answer:
                  currentLang === "en"
                    ? "Of course! Our tea art training courses are specially designed for students of different levels, from basic tea knowledge to advanced brewing techniques, with corresponding course arrangements."
                    : currentLang === "ja"
                      ? "もちろんです！私たちの茶芸訓練コースは異なるレベルの学習者のために特別に設計されており、基本的な茶の知識から高度な淹れ方の技術まで、相応のコース配置があります。"
                      : currentLang === "zh-TW"
                        ? "當然可以！我們的茶藝培訓課程專門為不同水平的學員設計，從基礎的茶葉知識到高級的泡茶技藝，都有相應的課程安排。"
                        : "当然可以！我们的茶艺培训课程专门为不同水平的学员设计，从基础的茶叶知识到高级的泡茶技艺，都有相应的课程安排。",
              },
              {
                question:
                  currentLang === "en"
                    ? "Do I need any preparation for meridian guidance?"
                    : currentLang === "ja"
                      ? "経絡指導に何か準備は必要ですか？"
                      : currentLang === "zh-TW"
                        ? "經絡引導需要什麼準備嗎？"
                        : "经络引导需要什么准备吗？",
                answer:
                  currentLang === "en"
                    ? "No special preparation is needed, just wear loose and comfortable clothing. We will provide professional guidance and necessary supplies."
                    : currentLang === "ja"
                      ? "特別な準備は必要ありません。ゆったりとした快適な服装でお越しください。私たちが専門的な指導と必要な用品を提供します。"
                      : currentLang === "zh-TW"
                        ? "不需要特殊準備，只需穿著寬鬆舒適的衣物即可。我們會提供專業的指導和必要的用品。"
                        : "不需要特殊准备，只需穿着宽松舒适的衣物即可。我们会提供专业的指导和必要的用品。",
              },
              {
                question:
                  currentLang === "en"
                    ? "Is crystal bowl healing suitable for everyone?"
                    : currentLang === "ja"
                      ? "クリスタルボウルヒーリングは誰にでも適していますか？"
                      : currentLang === "zh-TW"
                        ? "水晶缽療癒適合所有人嗎？"
                        : "水晶钵疗愈适合所有人吗？",
                answer:
                  currentLang === "en"
                    ? "Crystal bowl healing is a gentle sound therapy suitable for most people. However, if you have special health conditions, we recommend consulting with our professional teachers first."
                    : currentLang === "ja"
                      ? "クリスタルボウルヒーリングは穏やかな音響療法で、ほとんどの人に適しています。ただし、特別な健康状態がある場合は、まず私たちの専門の先生にご相談することをお勧めします。"
                      : currentLang === "zh-TW"
                        ? "水晶缽療癒是一種溫和的聲波療法，適合大多數人。但如果您有特殊的健康狀況，建議先諮詢我們的專業老師。"
                        : "水晶钵疗愈是一种温和的声波疗法，适合大多数人。但如果您有特殊的健康状况，建议先咨询我们的专业老师。",
              },
              {
                question:
                  currentLang === "en"
                    ? "Can I try a single session?"
                    : currentLang === "ja"
                      ? "単発で体験できますか？"
                      : currentLang === "zh-TW"
                        ? "課程可以單次體驗嗎？"
                        : "课程可以单次体验吗？",
                answer:
                  currentLang === "en"
                    ? "Yes! We offer single experience sessions to let you understand our service content first. If satisfied, you can choose to purchase package courses for more favorable prices."
                    : currentLang === "ja"
                      ? "はい！私たちは単発体験コースを提供しており、まず私たちのサービス内容を理解していただけます。満足いただけましたら、パッケージコースを購入してより優遇価格をお楽しみいただけます。"
                      : currentLang === "zh-TW"
                        ? "可以的！我們提供單次體驗課程，讓您先了解我們的服務內容。如果滿意，可以選擇購買套餐課程享受更優惠的價格。"
                        : "可以的！我们提供单次体验课程，让您先了解我们的服务内容。如果满意，可以选择购买套餐课程享受更优惠的价格。",
              },
              {
                question:
                  currentLang === "en"
                    ? "How do I book a course?"
                    : currentLang === "ja"
                      ? "コースの予約方法は？"
                      : currentLang === "zh-TW"
                        ? "如何預約課程？"
                        : "如何预约课程？",
                answer:
                  currentLang === "en"
                    ? "You can make reservations through phone, WeChat, or our website booking system. We recommend booking 1-2 days in advance to ensure suitable time arrangements."
                    : currentLang === "ja"
                      ? "電話、WeChat、またはウェブサイトの予約システムで予約できます。適切な時間配置を確保するため、1-2日前の予約をお勧めします。"
                      : currentLang === "zh-TW"
                        ? "您可以通過電話、微信或者網站預約系統進行預約。我們建議提前1-2天預約以確保有合適的時間安排。"
                        : "您可以通过电话、微信或者网站预约系统进行预约。我们建议提前1-2天预约以确保有合适的时间安排。",
              },
            ].map((faq, index) => (
              <Card
                key={index}
                className="bg-background border-border hover:shadow-lg transition-all duration-500 hover-lift group"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <CardHeader className="cursor-pointer hover:bg-card/50 transition-colors duration-300">
                  <div className="flex justify-between items-center">
                    <CardTitle className="text-left text-foreground group-hover:text-primary transition-colors duration-300">
                      {faq.question}
                    </CardTitle>
                    <ChevronDown className="h-5 w-5 text-muted-foreground transition-transform duration-300 group-hover:rotate-180" />
                  </div>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground leading-relaxed">{faq.answer}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-6">
              <h2 className="text-3xl lg:text-4xl font-bold text-foreground text-balance">
                {t.ctaTitle || "开始您的禅茶养生之旅"}
              </h2>
              <p className="text-lg text-muted-foreground text-pretty">{t.ctaDesc || "让身心在茶香中得到滋养与平静"}</p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Button size="lg" className="bg-primary hover:bg-primary/90 text-primary-foreground hover-lift group">
                  {t.freeExperience || "免费体验"}
                </Button>
                <Button
                  size="lg"
                  variant="outline"
                  className="border-primary text-primary hover:bg-primary/5 bg-transparent hover-scale"
                >
                  {t.contactUs || "联系我们"}
                </Button>
              </div>
            </div>

            <div className="space-y-6">
              <Card className="bg-background border-border hover-lift group">
                <CardHeader>
                  <CardTitle className="text-foreground group-hover:text-primary transition-colors duration-300">
                    {t.contactInfo || "联系信息"}
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="flex items-center space-x-3">
                    <Phone className="h-5 w-5 text-primary transition-transform duration-300 group-hover:scale-110" />
                    <span className="text-foreground">+81 080 6816 1117</span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <Mail className="h-5 w-5 text-primary transition-transform duration-300 group-hover:scale-110" />
                    <span className="text-foreground">jiananfu6@gmail.com</span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <MapPin className="h-5 w-5 text-primary transition-transform duration-300 group-hover:scale-110" />
                    <span className="text-foreground">
                      {currentLang === "en"
                        ? "6-58-3 Higashimukojima, Sumida-ku, Tokyo"
                        : currentLang === "ja"
                          ? "東京都墨田区東向島6-58-3"
                          : currentLang === "zh-TW"
                            ? "東京都墨田區東向島6-58-3"
                            : "东京都墨田区东向岛6-58-3"}
                    </span>
                  </div>
                  <div className="pt-2">
                    <p className="text-sm text-muted-foreground">{t.businessHours || "营业时间：9:00-21:00"}</p>
                    <p className="text-sm text-muted-foreground">{t.openDaily || "每日开放"}</p>
                  </div>
                  <div className="pt-4">
                    <Button
                      onClick={() => setShowBookingModal(true)}
                      className="w-full bg-primary hover:bg-primary/90 text-primary-foreground transition-all duration-300 hover:scale-105"
                    >
                      {currentLang === "en"
                        ? "Book Appointment"
                        : currentLang === "ja"
                          ? "予約する"
                          : currentLang === "zh-TW"
                            ? "立即預約"
                            : "立即预约"}
                    </Button>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-card border-t border-border py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-4 gap-8">
            <div className="space-y-4">
              <div className="flex items-center space-x-2 hover-scale">
                <Leaf className="h-6 w-6 text-primary transition-transform duration-300 hover:rotate-12" />
                <span className="text-lg font-bold text-foreground">{t.siteName}</span>
              </div>
              <p className="text-muted-foreground text-sm">
                {currentLang === "en"
                  ? "Inheriting millennia of tea ceremony wisdom, advocating modern healthy living"
                  : currentLang === "ja"
                    ? "千年の茶道の知恵を継承し、現代の健康的な生活を提唱"
                    : currentLang === "zh-TW"
                      ? "傳承千年茶道智慧，倡導現代健康生活"
                      : "传承千年茶道智慧，倡导现代健康生活"}
              </p>
            </div>

            <div>
              <h3 className="font-semibold text-foreground mb-4">{t.services?.title || "服务"}</h3>
              <ul className="space-y-2 text-sm text-muted-foreground">
                {Object.values(t.services).map((service, index) => (
                  <li key={index}>
                    <a href="#services" className="hover:text-primary transition-colors duration-300">
                      {service?.title}
                    </a>
                  </li>
                ))}
                <li>
                  <a href="#" className="hover:text-primary transition-colors duration-300">
                    {currentLang === "en"
                      ? "Corporate Training"
                      : currentLang === "ja"
                        ? "企業研修"
                        : currentLang === "zh-TW"
                          ? "企業培訓"
                          : "企业培训"}
                  </a>
                </li>
              </ul>
            </div>

            <div>
              <h3 className="font-semibold text-foreground mb-4">{t.nav?.about || "关于我们"}</h3>
              <ul className="space-y-2 text-sm text-muted-foreground">
                <li>
                  <a href="#about" className="hover:text-primary transition-colors duration-300">
                    {currentLang === "en"
                      ? "Company Introduction"
                      : currentLang === "ja"
                        ? "会社紹介"
                        : currentLang === "zh-TW"
                          ? "公司介紹"
                          : "公司介绍"}
                  </a>
                </li>
                <li>
                  <a href="#about" className="hover:text-primary transition-colors duration-300">
                    {currentLang === "en"
                      ? "Teaching Team"
                      : currentLang === "ja"
                        ? "講師チーム"
                        : currentLang === "zh-TW"
                          ? "師資團隊"
                          : "师资团队"}
                  </a>
                </li>
                <li>
                  <a href="#about" className="hover:text-primary transition-colors duration-300">
                    {currentLang === "en"
                      ? "Client Reviews"
                      : currentLang === "ja"
                        ? "顧客評価"
                        : currentLang === "zh-TW"
                          ? "客戶評價"
                          : "客户评价"}
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-primary transition-colors duration-300">
                    {currentLang === "en"
                      ? "News & Updates"
                      : currentLang === "ja"
                        ? "ニュース・更新"
                        : currentLang === "zh-TW"
                          ? "新聞動態"
                          : "新闻动态"}
                  </a>
                </li>
              </ul>
            </div>

            <div>
              <h3 className="font-semibold text-foreground mb-4">{t.contactInfo || "联系信息"}</h3>
              <ul className="space-y-2 text-sm text-muted-foreground">
                <li>
                  {currentLang === "en"
                    ? "Phone: +81 080 6816 1117"
                    : currentLang === "ja"
                      ? "電話：+81 080 6816 1117"
                      : currentLang === "zh-TW"
                        ? "電話：+81 080 6816 1117"
                        : "电话：+81 080 6816 1117"}
                </li>
                <li>
                  {currentLang === "en"
                    ? "Email: jiananfu6@gmail.com"
                    : currentLang === "ja"
                      ? "メール：jiananfu6@gmail.com"
                      : currentLang === "zh-TW"
                        ? "郵箱：jiananfu6@gmail.com"
                        : "邮箱：jiananfu6@gmail.com"}
                </li>
                <li>
                  {currentLang === "en"
                    ? "Address: 6-58-3 Higashimukojima, Sumida-ku, Tokyo"
                    : currentLang === "ja"
                      ? "住所：東京都墨田区東向島6-58-3"
                      : currentLang === "zh-TW"
                        ? "地址：東京都墨田區東向島6-58-3"
                        : "地址：东京都墨田区东向岛6-58-3"}
                </li>
                <li>{t.businessHours || "营业时间：9:00-21:00"}</li>
              </ul>
            </div>
          </div>

          <div className="border-t border-border mt-8 pt-8 text-center text-sm text-muted-foreground">
            <p>
              &copy; 2024 {t.siteName}. {t.copyright || "保留所有权利"}
            </p>
          </div>
        </div>
      </footer>

      {showBookingModal && (
        <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50 p-4">
          <div className="bg-background rounded-lg shadow-xl max-w-md w-full max-h-[90vh] overflow-y-auto">
            <div className="p-6">
              <div className="flex justify-between items-center mb-4">
                <h2 className="text-xl font-semibold text-foreground">
                  {currentLang === "en"
                    ? "Book Appointment"
                    : currentLang === "ja"
                      ? "予約フォーム"
                      : currentLang === "zh-TW"
                        ? "預約表單"
                        : "预约表单"}
                </h2>
                <Button
                  variant="ghost"
                  size="sm"
                  onClick={() => setShowBookingModal(false)}
                  className="text-muted-foreground hover:text-foreground"
                >
                  <X className="h-4 w-4" />
                </Button>
              </div>

              <form className="space-y-4">
                <div>
                  <label className="block text-sm font-medium text-foreground mb-1">
                    {currentLang === "en"
                      ? "Full Name"
                      : currentLang === "ja"
                        ? "お名前"
                        : currentLang === "zh-TW"
                          ? "姓名"
                          : "姓名"}
                  </label>
                  <input
                    type="text"
                    className="w-full px-3 py-2 border border-border rounded-md bg-background text-foreground focus:outline-none focus:ring-2 focus:ring-primary"
                    required
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-foreground mb-1">
                    {currentLang === "en"
                      ? "Phone Number"
                      : currentLang === "ja"
                        ? "電話番号"
                        : currentLang === "zh-TW"
                          ? "電話號碼"
                          : "电话号码"}
                  </label>
                  <input
                    type="tel"
                    className="w-full px-3 py-2 border border-border rounded-md bg-background text-foreground focus:outline-none focus:ring-2 focus:ring-primary"
                    required
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-foreground mb-1">
                    {currentLang === "en"
                      ? "Email"
                      : currentLang === "ja"
                        ? "メールアドレス"
                        : currentLang === "zh-TW"
                          ? "電子郵箱"
                          : "电子邮箱"}
                  </label>
                  <input
                    type="email"
                    className="w-full px-3 py-2 border border-border rounded-md bg-background text-foreground focus:outline-none focus:ring-2 focus:ring-primary"
                    required
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-foreground mb-1">
                    {currentLang === "en"
                      ? "Service"
                      : currentLang === "ja"
                        ? "サービス"
                        : currentLang === "zh-TW"
                          ? "服務項目"
                          : "服务项目"}
                  </label>
                  <select className="w-full px-3 py-2 border border-border rounded-md bg-background text-foreground focus:outline-none focus:ring-2 focus:ring-primary">
                    <option value="">
                      {currentLang === "en"
                        ? "Select a service"
                        : currentLang === "ja"
                          ? "サービスを選択"
                          : currentLang === "zh-TW"
                            ? "選擇服務"
                            : "选择服务"}
                    </option>
                    <option value="tea-ceremony">
                      {currentLang === "en"
                        ? "Tea Ceremony"
                        : currentLang === "ja"
                          ? "茶道体験"
                          : currentLang === "zh-TW"
                            ? "茶道體驗"
                            : "茶道体验"}
                    </option>
                    <option value="meditation">
                      {currentLang === "en"
                        ? "Meditation"
                        : currentLang === "ja"
                          ? "瞑想指導"
                          : currentLang === "zh-TW"
                            ? "靜坐冥想"
                            : "静坐冥想"}
                    </option>
                    <option value="meridian">
                      {currentLang === "en"
                        ? "Meridian Guidance"
                        : currentLang === "ja"
                          ? "経絡指導"
                          : currentLang === "zh-TW"
                            ? "經絡引導"
                            : "经络引导"}
                    </option>
                    <option value="crystal-bowl">
                      {currentLang === "en"
                        ? "Crystal Bowl Healing"
                        : currentLang === "ja"
                          ? "クリスタルボウル"
                          : currentLang === "zh-TW"
                            ? "水晶缽療癒"
                            : "水晶钵疗愈"}
                    </option>
                    <option value="psychology">
                      {currentLang === "en"
                        ? "Psychological Counseling"
                        : currentLang === "ja"
                          ? "心理カウンセリング"
                          : currentLang === "zh-TW"
                            ? "心理輔導"
                            : "心理辅导"}
                    </option>
                  </select>
                </div>

                <div>
                  <label className="block text-sm font-medium text-foreground mb-1">
                    {currentLang === "en"
                      ? "Preferred Date"
                      : currentLang === "ja"
                        ? "希望日時"
                        : currentLang === "zh-TW"
                          ? "預約日期"
                          : "预约日期"}
                  </label>
                  <input
                    type="date"
                    className="w-full px-3 py-2 border border-border rounded-md bg-background text-foreground focus:outline-none focus:ring-2 focus:ring-primary"
                    required
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-foreground mb-1">
                    {currentLang === "en"
                      ? "Message"
                      : currentLang === "ja"
                        ? "メッセージ"
                        : currentLang === "zh-TW"
                          ? "留言"
                          : "留言"}
                  </label>
                  <textarea
                    rows={3}
                    className="w-full px-3 py-2 border border-border rounded-md bg-background text-foreground focus:outline-none focus:ring-2 focus:ring-primary resize-none"
                    placeholder={
                      currentLang === "en"
                        ? "Any special requirements or questions..."
                        : currentLang === "ja"
                          ? "特別なご要望やご質問があれば..."
                          : currentLang === "zh-TW"
                            ? "特殊需求或問題..."
                            : "特殊需求或问题..."
                    }
                  />
                </div>

                <div className="flex gap-3 pt-4">
                  <Button type="button" variant="outline" onClick={() => setShowBookingModal(false)} className="flex-1">
                    {currentLang === "en"
                      ? "Cancel"
                      : currentLang === "ja"
                        ? "キャンセル"
                        : currentLang === "zh-TW"
                          ? "取消"
                          : "取消"}
                  </Button>
                  <Button type="submit" className="flex-1 bg-primary hover:bg-primary/90 text-primary-foreground">
                    {currentLang === "en"
                      ? "Submit"
                      : currentLang === "ja"
                        ? "送信"
                        : currentLang === "zh-TW"
                          ? "提交"
                          : "提交"}
                  </Button>
                </div>
              </form>
            </div>
          </div>
        </div>
      )}
    </div>
  )
}
