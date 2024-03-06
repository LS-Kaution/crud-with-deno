type TypographyH1Props = {
  textContent: string;
  styles?: string
};

export function TypographyH1({ textContent, styles }: TypographyH1Props) {
  return (
    <h1 className={styles}>
      {textContent}
    </h1>
  );
}
