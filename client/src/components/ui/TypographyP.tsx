type TypographyPProps = {
  textContent: string;
  style?: string;
};

export default function TypographyP({ textContent, style }: TypographyPProps) {
  return (
    <p className={style}>
        {textContent}
    </p>
  ) 
}