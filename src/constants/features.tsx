import { 
  BadgeCheck, 
  ShieldCheck, 
  Home, 
  Shield, 
} from "lucide-react";

export const features = [
    { 
      title: "Качество", 
      text: "Используем только проверенные материалы и современные технологии строительства", 
      logo: <BadgeCheck className="h-4 w-4" />
    },
    { 
      title: "Надежность", 
      text: "Все объекты сдаются в срок с полным пакетом документов и гарантией качества", 
      logo: <ShieldCheck className="h-4 w-4" />
    },
    { 
      title: "Комфорт", 
      text: "Продуманные планировки и развитая инфраструктура для комфортной жизни", 
      logo: <Home className="h-4 w-4" />
    },
    { 
      title: "Безопасность", 
      text: "Охраняемая территория и современные системы безопасности для спокойствия жильцов", 
      logo: <Shield className="h-4 w-4" />
    },
  ]
  