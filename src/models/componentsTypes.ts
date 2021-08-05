export interface ContainerProps {
  marginLeft?: number;
  marginTop?: number;
  height?: number | string;
  background?: string;
  padding?: string;
}
export interface TextComponentsProps {
  fontSize?: number;
  fontWeight?: number | string;
  color?: string;
  margin?: string;
  width?: string | number;
  textAlign?: string;
  flex?: number;
}
export interface GroupComponentsProps {
  flexDirection?: string;
  alignItem?: string;
  justifyContent?: string;
  marginTop?: number;
  marginLeft?: number;
  borderBottomWidth?: number;
  borderColor?: string;
  padding?: number;
  opacity?: number;
  flexWrap?: 'wrap' | 'nowrap' | 'wrap-reverse';
}
export interface TitleProps {
  color?: string;
  fontWeight?: string | number;
  fontSize?: number;
}
