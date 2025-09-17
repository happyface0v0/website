import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import type { LucideIcon } from "lucide-react"

interface ServiceCardProps {
  service: {
    icon: LucideIcon
    title: string
    description: string
    price: string
    image: string
  }
  index: number
}

export function ServiceCard({ service, index }: ServiceCardProps) {
  return (
    <Card
      className="group bg-background border-border hover:shadow-xl transition-all duration-500 hover-lift animate-on-scroll overflow-hidden"
      style={{ animationDelay: `${index * 0.1}s` }}
    >
      <div className="aspect-square bg-card relative overflow-hidden">
        <img
          src={`/images/services/service-${index + 1}.jpg`}
          alt={service.title}
          className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
        />
        <div className="absolute top-3 left-3 bg-primary/10 backdrop-blur-sm rounded-lg p-2 hover-scale">
          <service.icon className="h-4 w-4 text-primary transition-transform duration-300 group-hover:rotate-12" />
        </div>
        <div className="absolute top-3 right-3">
          <Badge className="bg-primary text-primary-foreground border-0 font-medium text-xs">{service.price}</Badge>
        </div>
      </div>
      <CardHeader className="pb-3">
        <CardTitle className="text-base text-foreground group-hover:text-primary transition-colors duration-300">
          {service.title}
        </CardTitle>
      </CardHeader>
      <CardContent>
        <p className="text-sm text-muted-foreground leading-relaxed">{service.description}</p>
      </CardContent>
    </Card>
  )
}
