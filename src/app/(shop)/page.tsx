"use client";
import { Arrows, SliderItem, SliderThumbnailItem } from "@/components";
import { useState } from "react";

export default function Home() {
  const [itemActive, setItemActive] = useState<number>(1);
  const countItems = 8;

  const onPrev = () => {
    setItemActive(itemActive - 1);
    if (itemActive === 1) {
      setItemActive(countItems);
    }
  };

  const onNext = () => {
    setItemActive(itemActive + 1);
    if (itemActive >= 8) {
      setItemActive(1);
    }
  };

  return (
    <div className="h-screen relative">
      <ul>
        <SliderItem
          itemActive={itemActive}
          id={1}
          image="/img/Pipa.jpg"
          name={"PIPAS"}
          desc={
            "Las pipas de fumar son dispositivos utilizados para consumir tabaco u otras sustancias fumables. Tradicionalmente, consisten en un recipiente conocido como cazoleta, donde se coloca el tabaco, y un tubo largo, llamado caño, a través del cual se inhala el humo. Las pipas pueden estar hechas de diversos materiales como madera, maíz, espuma de mar, metal o vidrio. "
          }
        />
        <SliderItem
          itemActive={itemActive}
          id={2}
          image="/img/Cigarro.jpg"
          name={"CIGARROS"}
          desc={
            "Los cigarros, también conocidos como puros, son productos de tabaco enrollados en una hoja de tabaco o en un papel que contiene tabaco. Se elaboran a partir de una mezcla de diferentes tipos de tabaco que se cosechan, curan, fermentan y envejecen cuidadosamente antes de ser enrollados. Los cigarros suelen ser más grandes y contener más tabaco que los cigarrillos, lo que les da un sabor más fuerte y una duración de fumada más larga."
          }
        />
        <SliderItem
          itemActive={itemActive}
          id={3}
          image="/img/Tabaco.jpg"
          name={"TABACOS"}
          desc={
            "El tabaco es una planta originaria de América que pertenece al género Nicotiana, y su especie más comúnmente cultivada es Nicotiana tabacum. Las hojas de esta planta se secan y procesan para ser usadas en diversos productos, como cigarrillos, cigarros, tabaco de pipa y tabaco de mascar."
          }
        />
        <SliderItem
          itemActive={itemActive}
          id={4}
          image="/img/Picador.jpg"
          name={"PICADORES"}
          desc={
            "Los picadores de tabaco son dispositivos diseñados para desmenuzar las hojas de tabaco en partículas más pequeñas, facilitando su uso en la preparación de cigarrillos, pipas o tabaco de mascar. Estos picadores pueden ser manuales o eléctricos y están equipados con cuchillas afiladas que cortan las hojas de tabaco de manera uniforme. "
          }
        />
        <SliderItem
          itemActive={itemActive}
          id={5}
          image="/img/Filtro.jpg"
          name={"FILTROS"}
          desc={
            "Los filtros para cigarrillos son componentes cruciales que se colocan en el extremo del cigarrillo donde se inhala. Están diseñados para reducir la cantidad de sustancias nocivas que se inhalan al fumar."
          }
        />
        <SliderItem
          itemActive={itemActive}
          id={6}
          image="/img/Papelillo.jpg"
          name={"PAPELILLOS"}
          desc={
            "Los papelillos para armar cigarrillos son pequeñas hojas de papel delgado, generalmente hechas de fibras de celulosa, lino o arroz. Están diseñados para envolver y sostener tabaco u otras hierbas para formar un cigarrillo hecho a mano. Los papelillos suelen venir en paquetes compactos, con cada hoja separada por una fina tira de goma o adhesivo natural que permite sellar el cigarrillo una vez enrollado. "
          }
        />
        <SliderItem
          itemActive={itemActive}
          id={7}
          image="/img/Encendedor.jpg"
          name={"ENCENDEDORES"}
          desc={
            "Los papelillos para armar cigarrillos son pequeñas hojas de papel delgado, generalmente hechas de fibras de celulosa, lino o arroz. Están diseñados para envolver y sostener tabaco u otras hierbas para formar un cigarrillo hecho a mano. Los papelillos suelen venir en paquetes compactos, con cada hoja separada por una fina tira de goma o adhesivo natural que permite sellar el cigarrillo una vez enrollado. "
          }
        />
        <SliderItem
          itemActive={itemActive}
          id={8}
          image="/img/Accesorio.jpg"
          name={"ACCESORIOS"}
          desc={
            "Los papelillos para armar cigarrillos son pequeñas hojas de papel delgado, generalmente hechas de fibras de celulosa, lino o arroz. Están diseñados para envolver y sostener tabaco u otras hierbas para formar un cigarrillo hecho a mano. Los papelillos suelen venir en paquetes compactos, con cada hoja separada por una fina tira de goma o adhesivo natural que permite sellar el cigarrillo una vez enrollado. "
          }
        />
      </ul>
      <ul className="absolute bottom-0 z-10 justify-center flex sm:justify-end sm:gap-3 w-screen h-[150px] lg:h-[220px] px-14 o animation-delay-3">
        <Arrows onClickPrev={() => onPrev()} onClickNext={() => onNext()} />
        <SliderThumbnailItem
          itemActive={itemActive}
          image="/img/Pipa.jpg"
          id={1}
          name="PIPAS"
          onClick={() => setItemActive(1)}
        />
        <SliderThumbnailItem
          itemActive={itemActive}
          image="/img/Cigarro.jpg"
          id={2}
          name="CIGARROS"
          onClick={() => setItemActive(2)}
        />
        <SliderThumbnailItem
          itemActive={itemActive}
          image="/img/Tabaco.jpg"
          id={3}
          name="TABACOS"
          onClick={() => setItemActive(3)}
        />
        <SliderThumbnailItem
          itemActive={itemActive}
          image="/img/Picador.jpg"
          id={4}
          name="PICADORES"
          onClick={() => setItemActive(4)}
        />
        <SliderThumbnailItem
          itemActive={itemActive}
          image="/img/Filtro.jpg"
          id={5}
          name="FILTROS"
          onClick={() => setItemActive(5)}
        />
        <SliderThumbnailItem
          itemActive={itemActive}
          image="/img/Papelillo.jpg"
          id={6}
          name="PAPELILLOS"
          onClick={() => setItemActive(6)}
        />
        <SliderThumbnailItem
          itemActive={itemActive}
          image="/img/Encendedor.jpg"
          id={7}
          name="ENCENDEDORES"
          onClick={() => setItemActive(7)}
        />
        <SliderThumbnailItem
          itemActive={itemActive}
          image="/img/Accesorio.jpg"
          id={8}
          name="ACCESORIOS"
          onClick={() => setItemActive(8)}
        />
      </ul>
    </div>
  );
}
