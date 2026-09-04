import Image from "next/image";

/**
 * Marca da Consulting Now Florianópolis.
 * Usa a logo oficial (logo.jpg) tanto na navbar (fundo claro)
 * quanto no footer (fundo escuro).
 */
export default function BrandMark({
  onDark = false,
}: {
  onDark?: boolean;
}) {
  return (
    <Image
      src="/logo.jpg"
      alt="Consulting Now Florianópolis - Consultoria em Gestão Empresarial"
      width={1080}
      height={1080}
      priority={!onDark}
      className={onDark ? "h-10 w-auto rounded-md" : "h-10 w-auto"}
    />
  );
}