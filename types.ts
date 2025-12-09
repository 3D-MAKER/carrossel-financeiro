export interface Slide {
  title: string;
  content: string;
  highlight?: string;
  footer?: string;
  bgColor?: string;
  textColor?: string;
}

export interface CarouselData {
  topic: string;
  slides: Slide[];
  createdAt: string;
}

export type FinancialTopic = 
  | 'educacao_financeira'
  | 'investimentos'
  | 'dividas'
  | 'credito'
  | 'renda_extra'
  | 'organizacao';