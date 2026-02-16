<template>
  <div class="curso-main-container pb-3">
    <BannerInterno></BannerInterno>
    <div class="container tarjeta tarjeta--blanca p-4 p-md-5 mb-5">
      <div class="titulo-principal color-acento-contenido" data-aos="flip-up">
        <div class="titulo-principal__numero"><span>4</span></div>
        <h1>Mecánica y ajuste</h1>
      </div>
      <div class="row">
        <div class="col-lg" data-aos="fade-right">
          <p>
            La maquinaria agrícola es la columna vertebral de la agricultura
            moderna. Desde tractores y cosechadoras hasta sistemas de riego e
            implementos especializados, estos equipos desempeñan un papel
            crítico en la producción de alimentos y materias primas esenciales
            para el mundo. Sin embargo, para que esta maquinaria funcione de
            manera eficaz y sin problemas, es imperativo comprender en
            profundidad su mecánica y cómo ajustar sus piezas de manera
            adecuada.
          </p>
          <div class="p-4" style="background-color:#98E2EC;border-radius:9px;">
            <p class="mb-0">
              El presente apartado se presenta como herramienta conceptual
              esencial para agricultores, técnicos y entusiastas de la
              agricultura que desean profundizar en el mecanizado y ajuste de
              piezas. Se explorará a fondo los principios fundamentales de la
              mecánica aplicada y sobre el ajuste, mantenimiento y optimización
              de componentes para la fabricación de piezas.
            </p>
          </div>
        </div>
        <div
          class="col-lg-auto d-none d-lg-block"
          data-aos="fade-left"
          style="place-self:center;"
        >
          <figure><img src="@/assets/curso/tema4/1.png" /></figure>
        </div>
      </div>
      <Separador></Separador>
      <div class="titulo-segundo" data-aos="flip-up">
        <h2 id="t_4_1">4.1 Fundamentos Teóricos</h2>
      </div>
      <div class="cont_decorativo mb-4 mt-5" data-aos="fade-right">
        <div class="row">
          <div class="col-auto pe-0">
            <figure><img src="@/assets/curso/tema1/3.svg" /></figure>
          </div>
          <div class="col ps-2" style="place-self:center;">
            <h3 class="mb-0 pe-4">
              Principios de mecánica aplicada a la maquinaria agrícola
            </h3>
          </div>
        </div>
      </div>
      <div class="row">
        <div
          class="col-md-auto d-none d-md-block"
          data-aos="fade-right"
          style="place-self:center;"
        >
          <figure><img src="@/assets/curso/tema4/2.svg" /></figure>
        </div>
        <div class="col-md" data-aos="fade-left" style="place-self:center;">
          <p class="mb-0">
            <strong>Mecánica en maquinaria agrícola:</strong> La mecánica
            aplicada a la maquinaria agrícola es la disciplina que estudia los
            principios de funcionamiento de las máquinas utilizadas en el campo,
            tales como tractores, cosechadoras, sembradoras y arados. Estas
            máquinas están compuestas de componentes mecánicos esenciales, como
            ejes, engranajes, rodamientos, sistemas de transmisión y piezas
            móviles que requieren ajustes y mantenimientos periódicos para
            funcionar de manera óptima.
          </p>
        </div>
      </div>
      <div class="col-xl-8 m-auto mt-5">
        <div
          class="titulo-sexto color-acento-contenido mt-5"
          data-aos="fade-down"
        >
          <h5>Tabla 6.</h5>
          <span>Componentes mecánicos clave</span>
        </div>
        <div class="tabla-a color-acento-botones" data-aos="fade-up">
          <table>
            <caption class="fw-normal">
              Fuente: OIT, 2024.
            </caption>
            <thead style="border:0;">
              <tr class="text-center" style="background-color:#78B62E;">
                <th>Imagen</th>
                <th>Componente</th>
                <th>Uso</th>
              </tr>
            </thead>
            <tbody class="text-center">
              <tr style="background-color:#F6F6F6;">
                <td style="border:0;border-right:1px #AFAFAF solid;">
                  <figure>
                    <img
                      class="d-inline"
                      src="@/assets/curso/tema4/3.png"
                      style="max-width:170px;"
                    />
                  </figure>
                </td>
                <td style="border:0;border-right:1px #AFAFAF solid;">Ejes</td>
                <td style="border:0;border-right:1px #AFAFAF solid;">
                  Transmiten el movimiento rotatorio desde el motor a otras
                  partes de la máquina. Su correcta alineación y ajuste son
                  esenciales para evitar el desgaste.
                </td>
              </tr>
              <tr style="background-color:#fff;">
                <td style="border:0;border-right:1px #AFAFAF solid;">
                  <figure>
                    <img
                      class="d-inline"
                      src="@/assets/curso/tema4/4.png"
                      style="max-width:170px;"
                    />
                  </figure>
                </td>
                <td style="border:0;border-right:1px #AFAFAF solid;">
                  Engranajes
                </td>
                <td style="border:0;border-right:1px #AFAFAF solid;">
                  Utilizados para cambiar la velocidad o el par de fuerza, los
                  engranajes necesitan un ajuste preciso para evitar desajustes
                  o deslizamientos.
                </td>
              </tr>
              <tr style="background-color:#F6F6F6;">
                <td style="border:0;border-right:1px #AFAFAF solid;">
                  <figure>
                    <img
                      class="d-inline"
                      src="@/assets/curso/tema4/5.png"
                      style="max-width:170px;"
                    />
                  </figure>
                </td>
                <td style="border:0;border-right:1px #AFAFAF solid;">
                  Rodamientos
                </td>
                <td style="border:0;border-right:1px #AFAFAF solid;">
                  Facilitan el movimiento suave de componentes giratorios, como
                  los ejes. Requieren de un monitoreo y ajuste constante para
                  evitar daños por fricción excesiva.
                </td>
              </tr>
              <tr style="background-color:#fff;">
                <td style="border:0;border-right:1px #AFAFAF solid;">
                  <figure>
                    <img
                      class="d-inline"
                      src="@/assets/curso/tema4/discoarado.png"
                      style="max-width:170px;"
                    />
                  </figure>
                </td>
                <td style="border:0;border-right:1px #AFAFAF solid;">
                  Discos de Arado
                </td>
                <td style="border:0;border-right:1px #AFAFAF solid;">
                  Estos son responsables de penetrar el suelo y girar la tierra
                  para prepararla para la siembra. Su desgaste influye
                  directamente en la eficiencia del trabajo agrícola, y
                  necesitan ajustes frecuentes para mantener su efectividad.
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
      <div class="cont_decorativo mb-4 mt-5" data-aos="fade-right">
        <div class="row">
          <div class="col-auto pe-0">
            <figure><img src="@/assets/curso/tema1/3.svg" /></figure>
          </div>
          <div class="col ps-2" style="place-self:center;">
            <h3 class="mb-0 pe-4">Metrología y su importancia en el ajuste</h3>
          </div>
        </div>
      </div>
      <p data-aos="fade-left">
        La metrología es la ciencia de la medición y juega un rol fundamental en
        la precisión del ajuste de piezas. Una medición precisa permite el
        control de las tolerancias, lo cual asegura que los componentes encajen
        correctamente, evitando así el desgaste prematuro y fallos en las
        máquinas.
      </p>
      <div class="cont_1_1 mt-4 pt-4 pb-4 pb-xl-5 pt-xl-5">
        <div class="tarjeta bg-white p-4 p-lg-5 pb-lg-4">
          <CarouselRED tipo="b">
            <div class="row pt-lg-4 col-xl-11 m-auto">
              <div class="col-lg-7 mb-4 mb-lg-0" style="place-self:center;">
                <h5>Instrumentos de medición comunes</h5>
                <ul class="lista-ul mb-0 mt-4 ps-4">
                  <li class="d-flex mb-3">
                    <i class="fas fa-check-circle" style="color:#78B62E;"></i
                    ><span
                      ><strong>Calibradores:</strong> utilizados para medir
                      dimensiones externas e internas con precisión. Los
                      calibradores permiten tomar medidas de hasta milímetros o
                      fracciones de milímetro.</span
                    >
                  </li>
                  <li class="d-flex mb-3">
                    <i class="fas fa-check-circle" style="color:#78B62E;"></i
                    ><span
                      ><strong>Micrómetros:</strong> ideales para medir
                      dimensiones pequeñas con gran precisión, especialmente
                      útiles para verificar el espesor y diámetro de
                      piezas.</span
                    >
                  </li>
                  <li class="d-flex mb-0">
                    <i class="fas fa-check-circle" style="color:#78B62E;"></i
                    ><span
                      ><strong>Indicadores de carátula o comparadores:</strong>
                      se emplean para verificar la alineación y la
                      concentricidad de los componentes ensamblados.</span
                    >
                  </li>
                </ul>
              </div>
              <div class="col-lg-5">
                <figure class="m-auto col-12 col-md-8 col-lg-12">
                  <img src="@/assets/curso/tema4/7.png" />
                </figure>
              </div>
            </div>
            <div class="row pt-lg-4 col-xl-11 m-auto">
              <div class="col-lg-7 mb-4 mb-lg-0" style="place-self:center;">
                <h5>Conceptos clave en metrología</h5>
                <ul class="lista-ul mb-0 mt-4 ps-4">
                  <li class="d-flex mb-3">
                    <i class="fas fa-check-circle" style="color:#78B62E;"></i
                    ><span
                      ><strong>Exactitud y precisión:</strong> la exactitud se
                      refiere a qué tan cerca está una medición del valor real,
                      mientras que la precisión indica la consistencia en las
                      mediciones repetidas.</span
                    >
                  </li>
                  <li class="d-flex mb-3">
                    <i class="fas fa-check-circle" style="color:#78B62E;"></i
                    ><span
                      ><strong>Tolerancia:</strong> margen de error permitido en
                      las medidas. Para maquinaria agrícola, las tolerancias
                      pueden variar según el tipo de componente y su función en
                      la máquina.</span
                    >
                  </li>
                  <li class="d-flex mb-0">
                    <i class="fas fa-check-circle" style="color:#78B62E;"></i
                    ><span
                      ><strong>Calibración:</strong> proceso para garantizar que
                      los instrumentos de medición ofrezcan resultados
                      confiables comparándolos con patrones de referencia.</span
                    >
                  </li>
                </ul>
              </div>
              <div class="col-lg-5">
                <figure class="m-auto col-12 col-md-8 col-lg-12">
                  <img src="@/assets/curso/tema4/8.png" />
                </figure>
              </div>
            </div>
          </CarouselRED>
        </div>
      </div>
      <div class="cont_decorativo mb-4 mt-5" data-aos="fade-right">
        <div class="row">
          <div class="col-auto pe-0">
            <figure><img src="@/assets/curso/tema1/3.svg" /></figure>
          </div>
          <div class="col ps-2" style="place-self:center;">
            <h3 class="mb-0 pe-4">Procesos de mecanizado y ajuste</h3>
          </div>
        </div>
      </div>
      <p data-aos="fade-left">
        El mecanizado es un conjunto de procesos de fabricación en los cuales se
        utiliza una máquina-herramienta para dar forma y ajuste a una pieza.
        Existen distintos tipos de procesos de mecanizado utilizados para los
        ajustes, entre ellos:
      </p>
      <div class="row mt-4">
        <div class="col-lg" data-aos="fade-right">
          <div
            class="p-3 p-lg-4"
            style="background-color:#01B9D1;border-radius:5px;"
          >
            <ul class="lista-ul mb-0">
              <li class="d-flex bg-white p-2" style="border-radius:4px;">
                <i class="fas fa-check-circle" style="color:#78B62E;"></i
                ><span
                  ><strong>Torneado:</strong> ideal para piezas cilíndricas,
                  donde se controla el diámetro y la forma mediante el corte en
                  un torno.</span
                >
              </li>
              <li class="d-flex bg-white p-2" style="border-radius:4px;">
                <i class="fas fa-check-circle" style="color:#78B62E;"></i
                ><span
                  ><strong>Fresado:</strong> proceso para crear superficies
                  planas o ranuras, utilizado comúnmente en la fabricación y
                  ajuste de piezas de maquinaria.</span
                >
              </li>
              <li class="d-flex bg-white p-2 mb-0" style="border-radius:4px;">
                <i class="fas fa-check-circle" style="color:#78B62E;"></i
                ><span
                  ><strong>Taladrado:</strong> proceso de perforación que
                  permite realizar agujeros precisos en piezas, esencial para la
                  colocación de pernos o ensamblajes.</span
                >
              </li>
            </ul>
          </div>
        </div>
        <div class="col-lg-auto d-none d-lg-block" data-aos="fade-left">
          <figure><img src="@/assets/curso/tema4/9.png" /></figure>
        </div>
      </div>
      <div class="row mt-4">
        <div class="col-lg-auto d-none d-lg-block" data-aos="fade-right">
          <figure><img src="@/assets/curso/tema4/10.png" /></figure>
        </div>
        <div class="col-lg" data-aos="fade-left">
          <p class="fw-bold">Parámetros de mecanizado relevantes</p>
          <div
            class="p-3 p-lg-4"
            style="background-color:#01B9D1;border-radius:5px;"
          >
            <ul class="lista-ul mb-0">
              <li class="d-flex bg-white p-2" style="border-radius:4px;">
                <i class="fas fa-check-circle" style="color:#78B62E;"></i
                ><span
                  ><strong>Velocidad de corte:</strong> se refiere a la rapidez
                  con la que la herramienta de corte atraviesa la superficie de
                  la pieza. Esta depende del tipo de material y de la
                  herramienta utilizada.</span
                >
              </li>
              <li class="d-flex bg-white p-2" style="border-radius:4px;">
                <i class="fas fa-check-circle" style="color:#78B62E;"></i
                ><span
                  ><strong>Avance:</strong> cantidad de material que la
                  herramienta de corte elimina en cada pasada.</span
                >
              </li>
              <li class="d-flex bg-white p-2 mb-0" style="border-radius:4px;">
                <i class="fas fa-check-circle" style="color:#78B62E;"></i
                ><span
                  ><strong>Profundidad de corte:</strong> influye en la cantidad
                  de material que se elimina y afecta la precisión y acabado de
                  la pieza.</span
                >
              </li>
            </ul>
          </div>
        </div>
      </div>
      <Separador></Separador>
      <div class="titulo-segundo" data-aos="flip-up">
        <h2 id="t_4_2">
          4.2 Identificación y diagnóstico de componentes mecánicos
        </h2>
      </div>
      <div class="cont_decorativo mb-4 mt-5" data-aos="fade-right">
        <div class="row">
          <div class="col-auto pe-0">
            <figure><img src="@/assets/curso/tema1/3.svg" /></figure>
          </div>
          <div class="col ps-2" style="place-self:center;">
            <h3 class="mb-0 pe-4">Inspección y diagnóstico de piezas</h3>
          </div>
        </div>
      </div>
      <p data-aos="fade-left">
        La identificación y diagnóstico de componentes mecánicos son
        fundamentales para detectar problemas antes de que se conviertan en
        fallos mayores. Un diagnóstico detallado comienza con la selección de
        una pieza específica, como un eje o un disco de arado, que muestra
        signos de desgaste o daños.
      </p>
      <div class="row mt-4">
        <div class="col-lg" data-aos="fade-right">
          <AccordionRED tipo="a" clase-tarjeta="tarjeta">
            <div class="row col-xl-11 m-auto" titulo="Inspección visual">
              <p>
                Se revisan aspectos como desgaste, fisuras, corrosión o
                cualquier desalineación evidente. Estas inspecciones ayudan a
                identificar problemas a tiempo, evitando reparaciones mayores.
              </p>
            </div>
            <div class="row col-xl-11 m-auto" titulo="Mediciones de precisión">
              <p>
                Utilizando herramientas como calibradores y micrómetros, se
                toman mediciones de la pieza y se comparan con las
                especificaciones del fabricante. Esto permite saber si la pieza
                aún cumple con las tolerancias permitidas.
              </p>
            </div>
          </AccordionRED>
          <div
            class="p-4 mt-3 text-white"
            style="background-color:#294B6D;border-radius:11px;"
          >
            <h5>Ejemplo práctico de diagnóstico</h5>
            <p class="mb-0">
              <strong>Selección de un eje de transmisión en un tractor:</strong>
              se inspecciona visualmente el estado exterior e interior del eje,
              verificando alineación, desgaste en los rodamientos y posibles
              fracturas o grietas. Las mediciones de diámetro se comparan con el
              estándar para evaluar la necesidad de ajustes.
            </p>
          </div>
        </div>
        <div class="col-lg-auto d-none d-lg-block" data-aos="fade-left">
          <figure><img src="@/assets/curso/tema4/11.png" /></figure>
        </div>
      </div>
      <Separador></Separador>
      <div class="titulo-segundo" data-aos="flip-up">
        <h2 id="t_4_3">4.3 Técnicas de mecanizado para ajuste</h2>
      </div>
      <div class="cont_decorativo mb-4 mt-5" data-aos="fade-right">
        <div class="row">
          <div class="col-auto pe-0">
            <figure><img src="@/assets/curso/tema1/3.svg" /></figure>
          </div>
          <div class="col ps-2" style="place-self:center;">
            <h3 class="mb-0 pe-4">Aplicación de métodos de mecanizado</h3>
          </div>
        </div>
      </div>
      <div class="row mt-4">
        <div class="col-lg" data-aos="fade-right">
          <AccordionRED tipo="a" clase-tarjeta="tarjeta">
            <div class="row col-xl-11 m-auto" titulo="Torneado">
              <p>
                Es uno de los procesos más utilizados para dar forma a piezas
                cilíndricas. En el torno, la pieza gira y la herramienta de
                corte elimina material para conseguir el diámetro y acabado
                necesarios.
              </p>
            </div>
            <div class="row col-xl-11 m-auto" titulo="Fresado">
              <p>
                Útil para piezas planas o ranuradas, el fresado elimina material
                mediante una fresa giratoria que se mueve sobre la superficie de
                la pieza.
              </p>
            </div>
            <div class="row col-xl-11 m-auto" titulo="Taladrado y refrentado">
              <p>
                Son técnicas usadas para crear orificios precisos y preparar
                superficies planas. El refrentado permite obtener un acabado
                superficial liso en los bordes de las piezas.
              </p>
            </div>
          </AccordionRED>
          <div
            class="p-4 mt-3 text-white"
            style="background-color:#294B6D;border-radius:11px;"
          >
            <h5>Ejemplo práctico de mecanizado en ajustes</h5>
            <p class="mb-0">
              <strong>Ajuste de una cuchilla de arado:</strong> Primero, se mide
              la longitud y el grosor de la cuchilla con un micrómetro para
              determinar su desgaste. Luego, se aplica el proceso de fresado
              para restaurar su borde y asegurar una mayor penetración en el
              suelo. Finalmente, se vuelve a medir la pieza para asegurar que
              cumple con las especificaciones necesarias.
            </p>
          </div>
        </div>
        <div class="col-lg-auto d-none d-lg-block" data-aos="fade-left">
          <figure><img src="@/assets/curso/tema4/12.png" /></figure>
        </div>
      </div>
      <div class="cont_decorativo mb-4 mt-5" data-aos="fade-right">
        <div class="row">
          <div class="col-auto pe-0">
            <figure><img src="@/assets/curso/tema1/3.svg" /></figure>
          </div>
          <div class="col ps-2" style="place-self:center;">
            <h3 class="mb-0 pe-4">
              Procedimientos de ajuste y pruebas de tolerancia
            </h3>
          </div>
        </div>
      </div>
      <TabsC class="color-acento-contenido">
        <div
          class="py-3 py-md-4"
          titulo="Tolerancias y ajustes en el mecanizado"
        >
          <div class="row p-4 col-xl-11 m-auto">
            <div class="col-md-auto mb-4 mb-md-0 col-7 m-auto">
              <figure><img src="@/assets/curso/tema4/13.svg" /></figure>
            </div>
            <div class="col-md">
              <p class="fw-bold">Tolerancias y ajustes en el mecanizado</p>
              <p class="mb-0">
                Las tolerancias son márgenes de error permitidos en las
                dimensiones de una pieza. En maquinaria agrícola, las
                tolerancias deben ser precisas para asegurar que las piezas
                puedan montarse sin juego excesivo ni tensión indebida.
              </p>
            </div>
          </div>
        </div>
        <div class="py-3 py-md-4" titulo="Métodos de ajuste">
          <div class="row p-4 col-xl-11 m-auto">
            <div class="col-md-auto mb-4 mb-md-0 col-7 m-auto">
              <figure><img src="@/assets/curso/tema4/14.svg" /></figure>
            </div>
            <div class="col-md">
              <p class="fw-bold">Métodos de ajuste</p>
              <p class="mb-0">
                Existen distintos métodos para ajustar las tolerancias en el
                mecanizado, como el ajuste por rozamiento, el ajuste deslizante
                y el ajuste de interferencia. Estos métodos se eligen en función
                del tipo de pieza y de su aplicación en la maquinaria.
              </p>
            </div>
          </div>
        </div>
        <div
          class="py-3 py-md-4"
          titulo="Pruebas de precisión y documentación del ajuste"
        >
          <div class="row p-4 col-xl-11 m-auto">
            <div class="col-md-auto mb-4 mb-md-0 col-7 m-auto">
              <figure><img src="@/assets/curso/tema4/15.svg" /></figure>
            </div>
            <div class="col-md">
              <p class="fw-bold">
                Pruebas de precisión y documentación del ajuste
              </p>
              <p class="mb-0">
                Después del mecanizado, se realizan pruebas de precisión para
                asegurar que la pieza ajustada cumpla con los estándares
                requeridos. Estas pruebas incluyen el uso de indicadores de
                carátula para verificar alineaciones y comparadores para
                confirmar la concentricidad.
              </p>
            </div>
          </div>
        </div>
        <div class="py-3 py-md-4" titulo="Registro del proceso de ajuste">
          <div class="row p-4 col-xl-11 m-auto">
            <div class="col-md-auto mb-4 mb-md-0 col-7 m-auto">
              <figure><img src="@/assets/curso/tema4/16.svg" /></figure>
            </div>
            <div class="col-md">
              <p class="fw-bold">Registro del proceso de ajuste</p>
              <p class="mb-0">
                La documentación de los hallazgos y ajustes realizados es
                fundamental para asegurar un historial de mantenimiento de cada
                pieza, lo cual facilita futuros ajustes y verificaciones.
              </p>
            </div>
          </div>
        </div>
      </TabsC>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Tema4',
  data: () => ({
    // variables de vue
  }),
  mounted() {
    this.$nextTick(() => {
      this.$aosRefresh()
    })
  },
  updated() {
    this.$aosRefresh()
  },
}
</script>

<style lang="sass"></style>
