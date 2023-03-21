import React from "react";
import Link from "next/link";
import { AiOutlineArrowLeft } from "react-icons/ai";

const Text = () => {
  return (
    <div className="w-screen flex flex-col items-center">
      <div className="w-screen h-[20vh] flex items-center px-4">
        <Link href="/">
          <AiOutlineArrowLeft className="text-2xl text-black" />
        </Link>
      </div>

      <div className="w-full text-justify px-4">
        <p className="font-main">Détail spectral</p>
        <br />
        <p className="font-main">
          Lorsqu’on y regarde de plus près, il y a ce détail difficile à
          décrire. Imperceptible transition de la ligne noire qui devient le
          rebord irrégulièrement découpé d’un trottoir en béton, de la surface
          grise enfumée qui glisse vers un espace réel, profond noir et mat. Les
          fragments se tordent, s’évaporent et tombent. L’image devient matière
          à l’état solide et gazeux, l’œil le témoin fasciné d’une réaction
          impénétrable.
        </p>
        <br />
        <p className="font-mani">
          Le regard qui parcourt les lignes balbutie et s’interroge sur ce qu’il
          regarde. Comme avec une langue apprise depuis peu que l’on parle en
          réfléchissant encore aux mots que l’on emploie. L’œil n’hésite pas
          seulement entre figuration et abstraction, il perd ses rudiments et
          découvre une nouvelle pesanteur, une texture jamais perçue, un espace
          dans lequel il peine à s’ancrer.
        </p>
        <br />
        <p className="font-main">
          Ce langage qui donne puissamment à voir, résulte d’un processus de
          traduction par le geste répété de la main. Il est lui-même
          reproduction des fragments d’une image recomposée via un logiciel,
          elle, encore empruntée de l’iconographie japonaise de la seconde
          moitié du vingtième siècle. Parfois, le geste littéral reproduit le
          fragment pour ce qu’il est. Parfois, le geste dérive et se cherche
          dans la main d’Elise qui s’efface. Dans un corps-à-corps minutieux
          consacré à l’étendue, ça dessine.
        </p>
        <br />
        <p className="font-main">
          « Cette énergie que tu déploies dans les micro-détails que personne ne
          regarde. Et que tu t’obliges à réaliser comme s’ils étaient chacun de
          tes enfants, c’est ça qui est incroyable. ». Lorsque ce travail de
          traduction s’achève, elle accroche au mur blanc son dessin fragile.
          Fanny Van Opstal, catalogue d’exposition ´à partir de là´. Centre
          d’Art contemporain Chanot
        </p>
      </div>

      <div className="w-full h-[80px]" />
    </div>
  );
};

export default Text;
