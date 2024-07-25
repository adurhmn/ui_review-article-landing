import { ReactNode } from "react";

export interface ISlide {
  key: string;
  component: ReactNode;
}
export interface ISliderProps {
  slides: ISlide[];
  activeSlide?: string;
  onNavigate?: (slideKey: string) => void;
  contentBoxClass?: string
}
