"use client"

import { useState } from "react"
import { Globe, ChevronDown } from "lucide-react"
import { Button } from "@/components/ui/button"

interface Language {
  code: "zh-CN" | "zh-TW" | "ja" | "en"
  name: string
  flag: string
}

interface LanguageSelectorProps {
  currentLang: "zh-CN" | "zh-TW" | "ja" | "en"
  onLanguageChange: (lang: "zh-CN" | "zh-TW" | "ja" | "en") => void
}

export function LanguageSelector({ currentLang, onLanguageChange }: LanguageSelectorProps) {
  const [showLangMenu, setShowLangMenu] = useState(false)

  const languages: Language[] = [
    { code: "zh-CN", name: "简体中文", flag: "🇨🇳" },
    { code: "zh-TW", name: "繁體中文", flag: "🇹🇼" },
    { code: "ja", name: "日本語", flag: "🇯🇵" },
    { code: "en", name: "English", flag: "🇺🇸" },
  ]

  const currentLanguage = languages.find((lang) => lang.code === currentLang)

  return (
    <div className="relative">
      <Button
        variant="ghost"
        size="sm"
        onClick={() => setShowLangMenu(!showLangMenu)}
        className="flex items-center space-x-2 hover-scale"
      >
        <Globe className="h-4 w-4" />
        <span className="hidden sm:inline">{currentLanguage?.name}</span>
        <span className="sm:hidden">{currentLanguage?.flag}</span>
        <ChevronDown className="h-3 w-3" />
      </Button>

      {showLangMenu && (
        <div className="absolute right-0 mt-2 w-40 bg-card border border-border rounded-lg shadow-lg z-50 animate-fade-in">
          {languages.map((lang) => (
            <button
              key={lang.code}
              onClick={() => {
                onLanguageChange(lang.code)
                setShowLangMenu(false)
              }}
              className={`w-full px-3 py-2 text-left hover:bg-accent hover:text-accent-foreground transition-colors duration-200 first:rounded-t-lg last:rounded-b-lg flex items-center space-x-2 ${
                currentLang === lang.code ? "bg-accent text-accent-foreground" : ""
              }`}
            >
              <span>{lang.flag}</span>
              <span className="text-sm">{lang.name}</span>
            </button>
          ))}
        </div>
      )}
    </div>
  )
}
