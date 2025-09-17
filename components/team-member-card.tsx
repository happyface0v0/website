import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"

interface TeamMemberCardProps {
  member: {
    name: string
    role: string
    experience: string
    specialty: string
    image: string
  }
  index: number
}

export function TeamMemberCard({ member, index }: TeamMemberCardProps) {
  return (
    <Card
      className="text-center bg-background border-border hover:shadow-lg transition-all duration-500 group hover-lift"
      style={{ animationDelay: `${index * 0.1}s` }}
    >
      <CardHeader>
        <div className="w-24 h-24 mx-auto bg-primary/10 rounded-full overflow-hidden mb-4 hover-scale">
          <img
            src={`/images/team/member-${index + 1}.jpg`}
            alt={member.name}
            className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
          />
        </div>
        <CardTitle className="text-foreground group-hover:text-primary transition-colors duration-300">
          {member.name}
        </CardTitle>
        <CardDescription className="text-primary font-medium">{member.role}</CardDescription>
      </CardHeader>
      <CardContent className="space-y-2">
        <Badge variant="secondary" className="text-xs hover-scale">
          {member.experience}
        </Badge>
        <p className="text-sm text-muted-foreground">{member.specialty}</p>
      </CardContent>
    </Card>
  )
}
