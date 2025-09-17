import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card"
import { Star, Quote } from "lucide-react"

interface TestimonialCardProps {
  testimonial: {
    name: string
    role: string
    content: string
    rating: number
    avatar: string
  }
  index: number
}

export function TestimonialCard({ testimonial, index }: TestimonialCardProps) {
  return (
    <Card
      className="bg-background border-border hover:shadow-lg transition-all duration-500 hover-lift group"
      style={{ animationDelay: `${index * 0.1}s` }}
    >
      <CardHeader>
        <div className="flex items-center space-x-4">
          <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center overflow-hidden hover-scale">
            <img
              src={`/images/avatars/avatar-${index + 1}.jpg`}
              alt={testimonial.name}
              className="w-full h-full rounded-full object-cover transition-transform duration-500 group-hover:scale-110"
            />
          </div>
          <div>
            <CardTitle className="text-base text-foreground group-hover:text-primary transition-colors duration-300">
              {testimonial.name}
            </CardTitle>
            <CardDescription className="text-sm">{testimonial.role}</CardDescription>
          </div>
        </div>
        <div className="flex space-x-1">
          {[...Array(testimonial.rating)].map((_, i) => (
            <Star
              key={i}
              className="h-4 w-4 fill-primary text-primary animate-pulse"
              style={{ animationDelay: `${i * 0.1}s` }}
            />
          ))}
        </div>
      </CardHeader>
      <CardContent>
        <div className="relative">
          <Quote className="absolute -top-2 -left-2 h-6 w-6 text-primary/20" />
          <p className="text-sm text-muted-foreground leading-relaxed pl-4">{testimonial.content}</p>
        </div>
      </CardContent>
    </Card>
  )
}
