import Image from "next/image";

/**
 * Marca da Consulting Now Florianópolis.
 * - Em fundo claro (navbar): usa a versão azul da logo (logo_Blue.png),
 *   criada para fundo branco.
 * - Em fundo escuro (footer navy): usa a versão branca da logo (logo.png),
 *   que contrasta bem sobre o azul-marinho.
 */
export default function BrandMark({
  onDark = false,
}: {
  onDark?: boolean;
}) {
  return (
    <Image
      src={onDark ? "/logo.png" : "/logo_Blue.png"}
      alt="Consulting Now Florianópolis - Consultoria em Gestão Empresarial"
      width={150}
      height={102}
      priority={!onDark}
      className="h-10 w-auto"
    />
  );
}