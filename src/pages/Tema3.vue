<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
    .titulo-principal.color-acento-contenido(data-aos="flip-up")
      .titulo-principal__numero
        span 3
      h1 Dibujo Técnico
    .row.justify-content-center.mb-5
      .col-lg-7.mb-lg-0.mb-3
        p.mb-4 El dibujo técnico es una disciplina esencial que se encuentra en la intersección del arte y la ingeniería, donde la precisión y la creatividad se unen para representar ideas, diseños y soluciones de manera clara y detallada. Dominar esta habilidad es fundamental para aquellos que buscan carreras en campos como la arquitectura, la ingeniería, la fabricación y muchas otras disciplinas técnicas.
        .p-4.rounded-3(style="background-color: #98e2ec")
          p.mb-0 Antes de embarcarnos en la exploración de los principios y técnicas del dibujo técnico asociado a las labores agrícolas, pecuarias o agroindustriales, es importante realizar una adecuada contextualización y una identificación de los conocimientos necesarios para el aprendizaje. En esta sección inicial de nuestra guía, estableceremos el escenario y sentaremos las bases para un aprendizaje efectivo y significativo.
      .col-lg-5.col-7: img(src='@/assets/curso/tema3/1.png', alt='')
    .row.justify-content-center.mb-5
      .col-lg-4.col-7.mb-lg-0.mb-3: img(src='@/assets/curso/tema3/2.png', alt='')
      .col-lg-8
        p.mb-2 El dibujo técnico es un lenguaje universal que trasciende las barreras del idioma y conecta a profesionales de diversas disciplinas en la comunicación de ideas, diseños y proyectos. Es un medio para plasmar ideas en el papel, una herramienta fundamental en la toma de decisiones y la resolución de problemas en campos tan diversos como la ingeniería, la arquitectura, la fabricación, la construcción la agricultura en muchas otras labores. Este apartado pretende dar una base en los principios esenciales del dibujo técnico, que permitirán a los aprendices traducir conceptos abstractos en representaciones visuales claras y precisas. desde la creación de dibujos bidimensionales simples hasta la comprensión de planos tridimensionales complejos conceptos básicos, como las proyecciones ortogonales, la simetría, la escala y la representación de objetos en diferentes vistas. Además, se explorará en el uso de herramientas y software de dibujo asistido por computadora (CAD) que han revolucionado la forma en que se crea y se comparte el dibujo técnico en la era digital.
        a.anexo.mb-4(href="https://www.youtube.com/watch?v=YS5cHpWLNEE" target="_blank")
          .row.justify-content-around.align-items-center
            .anexo__icono
              img(src="@/assets/bullets/icono-link.svg")
            .anexo__texto
              p Enlace web. Video introducción- Se recomienda observar el siguiente vídeo: Máquinas Agrícolas: diseño industrial (Parte 1 de 2).
    Separador
    #t_3_1.titulo-segundo.color-acento-contenido(data-aos='fade-right')
      h2 3.1	 Dibujo artístico Vs. dibujo técnico
    p.mb-4 Es fundamental entender las diferencias entre el #[b dibujo artístico] y el #[b dibujo técnico], ya que ambos son formas de expresión gráfica, pero con objetivos y enfoques distintos.
    .row.justify-content-center.mb-5
      .col-lg-6.mb-lg-0.mb-3
        .tarjeta.overflow-hidden.bg-white
          img(src='@/assets/curso/tema3/3.png', alt='').mb-4
          .p-4
            h4 Dibujo artístico
            p.mb-0 Se utiliza como medio de expresión personal y creativa. Su enfoque principal es estético, y suele estar cargado de subjetividad, pues depende de la percepción y estilo del artista. No sigue normas estrictas; el artista tiene libertad para experimentar con formas, proporciones, texturas y colores. No busca precisión, sino transmitir emociones, ideas o conceptos abstractos.
              br
              br
              |#[b Ejemplos de aplicación:] artes plásticas, diseño gráfico, ilustración, y artes visuales en general.

      .col-lg-6.mb-lg-0.mb-3
        .tarjeta.overflow-hidden.bg-white
          img(src='@/assets/curso/tema3/4.png', alt='').mb-4
          .p-4
            h4 Dibujo técnico
            p.mb-0 Tiene el objetivo de comunicar información precisa sobre un objeto o sistema. Su función es facilitar la comprensión de las características físicas y dimensionales de un objeto para su fabricación, ensamblaje o mantenimiento. Así mismo, Sigue normas y estándares que aseguran uniformidad y claridad. Se enfoca en la precisión, utilizando proyecciones, escalas y acotaciones para representar el objeto de manera objetiva.
              br
              br
              |#[b Ejemplos de aplicación:] planos de ingeniería, diseño mecánico, arquitectura, sistemas eléctricos, y planos industriales.
    .cont_decorativo.mb-4.mt-5(data-aos="fade-right")
      .row
        .col-auto.pe-0
          figure
            img(src="@/assets/curso/tema1/3.svg")
        .col.ps-2(style="place-self:center;")
          h3.mb-0.pe-4 Importancia del dibujo técnico en la industria
    p.mb-4 El dibujo técnico es esencial en múltiples campos de la industria, como la ingeniería mecánica, la arquitectura, la construcción, y la manufactura. Su importancia radica en que actúa como un lenguaje universal, que permite a profesionales de diferentes áreas entender, visualizar y construir los mismos objetos o estructuras sin margen de error.
    .row.justify-content-center.mb-5
      .col-lg-3.col-6.mb-lg-0.mb-3: img(src='@/assets/curso/tema3/5.png', alt='')
      .col-lg-9
        AccordionRED.mb-5(tipo="a" clase-tarjeta="tarjeta tarjeta--azul")
          div(titulo="Comunicación eficiente")
            .px-5
              p.mb-0 Los planos y dibujos técnicos son un medio de comunicación precisa entre diseñadores, ingenieros, operarios, y técnicos. Permiten que todos comprendan las especificaciones de un proyecto de manera uniforme, asegurando que el producto final cumpla con los requisitos deseados.
          div(titulo="Eliminación de ambigüedades")
            .px-5
              p.mb-0 Al estar normalizado, el dibujo técnico minimiza las interpretaciones subjetivas. Los detalles como dimensiones, materiales y tolerancias se representan con exactitud, lo cual reduce el riesgo de errores en la fabricación o construcción.
          div(titulo="Optimización de procesos")
            .px-5
              p.mb-0 En el ámbito de la manufactura, el dibujo técnico facilita el proceso de producción, ya que proporciona toda la información necesaria para ensamblar, mecanizar, o construir cada pieza. Esto aumenta la eficiencia y permite que los productos sean fabricados a escala con un alto nivel de precisión.
          div(titulo="Aseguramiento de calidad")
            .px-5
              p.mb-0 Al definir claramente las especificaciones de diseño, el dibujo técnico permite verificar que los productos cumplen con los estándares de calidad requeridos. Los técnicos pueden realizar controles de calidad basados en las dimensiones y tolerancias indicadas en los planos.
    p.mb-4 En el contexto de un proyecto, el dibujo técnico se convierte en un documento de referencia que guía todo el proceso, desde la fase de diseño hasta la producción y el mantenimiento.
    .cont_decorativo.mb-4.mt-5(data-aos="fade-right")
      .row
        .col-auto.pe-0
          figure
            img(src="@/assets/curso/tema1/3.svg")
        .col.ps-2(style="place-self:center;")
          h3.mb-0.pe-4 Aplicación del dibujo técnico en procesos industriales
    p.mb-4 En la industria, el dibujo técnico no solo describe las características físicas de un objeto, sino que también se integra en los procesos de producción y ensamblaje. A continuación, se describen algunas de sus aplicaciones en procesos industriales:
    .row.justify-content-center.mb-5
      .col-lg-8.mb-lg-0.mb-3
        AccordionRED.mb-5(tipo="a" clase-tarjeta="tarjeta tarjeta--azul")
            div(titulo="Diseño de componentes y productos")
              .px-5
                p.mb-0 Los ingenieros y diseñadores utilizan el dibujo técnico para detallar cada componente de un producto, especificando materiales, dimensiones y acabados. Esto permite que cada pieza encaje perfectamente en el ensamblaje final.
            div(titulo="Planificación de fabricación")
              .px-5
                p.mb-0 Los dibujos técnicos son esenciales en la planificación de la fabricación, ya que contienen toda la información que los operadores necesitan para realizar cortes, perforaciones y ensamblajes precisos. Los planos permiten que cada etapa del proceso de producción se realice de acuerdo con las especificaciones de diseño.
            div(titulo="Mantenimiento y reparación")
              .px-5
                p.mb-0 Los dibujos técnicos también son esenciales para el mantenimiento y reparación de equipos e infraestructuras. Un plano detallado permite que los técnicos identifiquen piezas específicas y realicen reparaciones de manera eficaz.
            div(titulo="Control de calidad y normatividad")
              .px-5
                p.mb-0 Los planos técnicos definen estándares y tolerancias, lo cual es fundamental para el control de calidad. En muchas industrias, los dibujos técnicos deben cumplir con normas internacionales (como ISO, ASME) para asegurar que los productos tengan una calidad uniforme y cumplan con los requisitos legales y de seguridad.
      .col-lg-4.col-7.mb-lg-0.mb-3: img(src='@/assets/curso/tema3/6.png', alt='')
    Separador
    #t_3_2.titulo-segundo.color-acento-contenido(data-aos='fade-right')
      h2 3.2	Instrumentos y manejo en el dibujo técnico
    .row.justify-content-center.mb-5
      .col-2.mb-lg-0.mb-3: img(src='@/assets/curso/tema3/7.svg', alt='')
      .col-lg-10
        p.mb-0 El dibujo técnico requiere precisión y exactitud, lo cual se logra con el uso adecuado de instrumentos específicos. Esta sección detalla los principales instrumentos empleados en el dibujo técnico, la correcta ejecución de letras técnicas para una comunicación clara, y los tipos de líneas, esenciales para representar diferentes partes y aspectos de un objeto en un plano.
    .cont_decorativo.mb-4.mt-5(data-aos="fade-right")
      .row
        .col-auto.pe-0
          figure
            img(src="@/assets/curso/tema1/3.svg")
        .col.ps-2(style="place-self:center;")
          h3.mb-0.pe-4 Instrumentos básicos del dibujo técnico
    p.mb-4 Cada instrumento de dibujo técnico tiene una función específica y su uso correcto es clave para obtener un trazado limpio y preciso. A continuación, se describen los principales instrumentos.
    .row.justify-content-center.mb-5
      .col-lg-8
        .titulo-sexto.color-acento-contenido(data-aos='fade-right')
          h5 Tabla 4.
          span Instrumentos básicos de dibujo
        .tabla-a.color-acento-botones.mb-5
          table
            caption Fuente: OIT, 2024.
            thead
              tr
                th Instrumento
                th Observación
            tbody
              tr
                td Regla
                td Se emplea para medir distancias y trazar líneas rectas. Es especialmente útil para acotar dimensiones en un dibujo.
              tr
                td Escuadra
                td Generalmente de 30 ° - 60 ° o de 45 °, permiten trazar ángulos rectos y otras inclinaciones comunes en los planos técnico.
              tr
                td Compás
                td Permite dibujar círculos y arcos precisos. También se usa para dividir longitudes en segmentos iguales.
              tr
                td Transportador
                td Se utiliza para medir y trazar ángulos. Esto es fundamental en la representación de figuras complejas que requieren precisión angular.
              tr
                td Escalímetro
                td Es una regla de secciones triangulares con diferentes escalas (1:50, 1:100, etc.) que permite representar objetos a una escala reducida o ampliada.
              tr
                td Lápices y Portaminas
                td Los lápices y portaminas de diferentes durezas (H, HB, 2B, etc.) Se utilizan para trazar líneas de distinto grosor y tonalidad, necesarios para distinguir diferentes partes del dibujo.



    .cont_decorativo.mb-4.mt-5(data-aos="fade-right")
      .row
        .col-auto.pe-0
          figure
            img(src="@/assets/curso/tema1/3.svg")
        .col.ps-2(style="place-self:center;")
          h3.mb-0.pe-4 Letras técnicas
    p.mb-4 Son un componente esencial en el dibujo técnico, ya que permiten anotar dimensiones, especificaciones y notas de forma clara y uniforme. La uniformidad y legibilidad son aspectos clave en las letras técnicas, ya que cualquier ambigüedad en la escritura podría generar errores de interpretación.
    .row.justify-content-center.mb-5
      .col-lg-4.col-7.mb-lg-0.mb-3: img(src='@/assets/curso/tema3/8.png', alt='')
      .col-lg-8
        AccordionRED.mb-5(tipo="a" clase-tarjeta="tarjeta tarjeta--azul")
          div(titulo="Estilo de letras ")
            .px-5
              p.mb-0 En el dibujo técnico, se emplean generalmente letras en mayúsculas, de trazo uniforme y claro. La estandarización en el tamaño y el estilo facilita la lectura del dibujo por diferentes personas.
          div(titulo="Altura y espaciado")
            .px-5
              p.mb-0 Las letras deben tener una altura constante, normalmente de 3 a 5 mm, dependiendo de las especificaciones del plano. El espaciado entre letras y palabras debe ser uniforme para evitar confusión.
          div(titulo="Uso de plantillas o guías")
            .px-5
              p.mb-0 Para asegurar que el trazo de cada letra sea consistente, se recomienda utilizar una plantilla de letras o guías de trazado. Las plantillas permiten realizar letras de tamaño y espaciado constantes, lo cual es especialmente útil en planos detallados con muchas anotaciones.
    .cont_decorativo.mb-4.mt-5(data-aos="fade-right")
      .row
        .col-auto.pe-0
          figure
            img(src="@/assets/curso/tema1/3.svg")
        .col.ps-2(style="place-self:center;")
          h3.mb-0.pe-4 Tipos de línea y su significado
    p.mb-4 En el dibujo técnico, existen diferentes tipos de línea, cada una con un propósito específico. Estas líneas permiten representar detalles del objeto y ayudan a evitar confusión en la interpretación del dibujo. Los principales tipos de línea son:
    .row.justify-content-center.mb-5
      .col-lg-8
        .titulo-sexto.color-acento-contenido(data-aos='fade-right')
          h5 Tabla 5.
          span Tipos de líneas en dibujo técnico
        .tabla-a.color-acento-botones.mb-5
          table
            caption Fuente: OIT, 2024.
            thead
              tr
                th Tipo de línea
                th Uso/característica
            tbody
              tr
                td Línea de contorno
                td Representa el contorno visible del objeto. Es el borde principal que define la forma y los límites del objeto en el dibujo.
                  br
                  br
                  |Se traza con líneas continuas y de grosor medio a grueso para que sean visibles de inmediato.

              tr
                td Línea de centro
                td Indica el centro de un objeto simétrico, como el centro de un círculo o el eje de una pieza.
                  br
                  br
                  |Se representa con una línea de trazos largos y cortos alternados. Este tipo de línea ayuda a identificar la simetría y los puntos centrales en el diseño.
              tr
                td Línea oculta
                td Indica las partes del objeto que están ocultas detrás de otras partes, es decir, partes no visibles desde la vista actual.
                  br
                  br
                  |Se traza con una línea de trazos cortos y equidistantes. Las líneas ocultas son útiles para visualizar el objeto completo, incluyendo los elementos que no se ven directamente en la vista principal.

              tr
                td Línea de acotación
                td Especifica dimensiones y tolerancias. Se utiliza para indicar medidas exactas del objeto, así como detalles específicos de tamaño o posición.
                  br
                  br
                  |Es una línea continua y delgada con flechas en ambos extremos, indicando el punto desde donde se toma la medida. Las cifras de acotación (medidas) se colocan sobre o junto a la línea para una interpretación clara.
              tr
                td Línea de proyección
                td Guía la ubicación de las acotaciones y señala los límites entre los que se mide. Se traza como una línea delgada y continúa desde el punto del objeto hasta la línea de acotación.
              tr
                td Línea de eje
                td Representa los ejes de simetría o el eje longitudinal de elementos cilíndricos o redondos. Es una línea delgada compuesta por trazos largos separados por un pequeño espacio.
    p.mb-4 Cada tipo de línea tiene un propósito específico en el dibujo técnico y contribuye a la claridad y precisión de la representación gráfica. Usar correctamente estos tipos de línea garantiza que el dibujo pueda ser interpretado sin ambigüedades, facilitando la comunicación de información técnica.
    .row.justify-content-center.mb-5
      .col-lg-10
        .titulo-sexto.color-acento-contenido(data-aos='fade-right')
          h5 Figura 5.
          span Tipos de línea en dibujo técnico
        .tarjeta.p-4(style="background-color: #f9f7f4 ")
          img(src='@/assets/curso/tema3/9.svg', alt='La imagen muestra una guía de tipos de líneas utilizadas en dibujo técnico, incluyendo 12 diferentes estilos desde líneas gruesas continuas hasta líneas finas con zigzag. Cada tipo se acompaña de su descripción y uso específico, como contornos visibles, líneas de cota, ejes de simetría y cortes. Al final incluye una nota sobre las proporciones de grosor (gruesa 1, media 0.5, fina 0.2) y un ejemplo de aplicación en cortes de figuras.')
    Separador
    #t_3_3.titulo-segundo.color-acento-contenido(data-aos='fade-right')
      h2 3.3	Nociones de geometría plana
    .row.justify-content-center.mb-5
      .col-2.mb-lg-0.mb-3: img(src='@/assets/curso/tema3/10.svg', alt='')
      .col-lg-10
        p.mb-0 La geometría plana es la base del dibujo técnico, ya que proporciona los elementos fundamentales para construir representaciones gráficas precisas de objetos y estructuras. La comprensión de conceptos básicos como puntos, líneas, segmentos, y ángulos es esencial para trazar figuras y estructuras en planos, y para garantizar que cada trazo y medida sea exacto.
    .cont_decorativo.mb-4.mt-5(data-aos="fade-right")
      .row
        .col-auto.pe-0
          figure
            img(src="@/assets/curso/tema1/3.svg")
        .col.ps-2(style="place-self:center;")
          h3.mb-0.pe-4 Conceptos básicos
    p.mb-4 Incluyen los elementos más simples y esenciales en el dibujo técnico, que permiten definir y estructurar figuras más complejas; entre ellos se encuentran:
    .row.justify-content-center.mb-5
      .col-lg-4.col-7.mb-lg-0.mb-3: img(src='@/assets/curso/tema3/11.png', alt='')
      .col-lg-8
        .p-3(style="background-color: #294b6d ")
          ul.lista-ul.mb-0
            li.d-flex.bg-white.p-2(style="border-radius:4px;")
              i.fas.fa-check-circle(style="color:#78B62E;")
              span #[b Punto:] es la unidad geométrica más básica y representa una ubicación exacta en el espacio, sin dimensiones ni extensión. En los planos técnicos, los puntos se usan para señalar ubicaciones precisas, como centros de círculos, vértices de figuras geométricas y puntos de intersección entre líneas. Son referencias importantes para construir otras figuras.
            li.d-flex.bg-white.p-2(style="border-radius:4px;")
              i.fas.fa-check-circle(style="color:#78B62E;")
              span #[b Línea:] es una sucesión infinita de puntos en una sola dimensión. Tiene longitud, pero no ancho ni profundidad. Se utilizan para representar los contornos de objetos, los ejes de simetría y las divisiones entre diferentes partes de un plano. Existen líneas rectas (en una sola dirección) y curvas (cambian de dirección continuamente), y su trazo es esencial en el diseño de perfiles y contornos de piezas.
            li.d-flex.bg-white.p-2(style="border-radius:4px;")
              i.fas.fa-check-circle(style="color:#78B62E;")
              span #[b Segmento:] es una porción de línea delimitada por dos puntos finales. A diferencia de una línea, un segmento tiene una longitud finita. Se usan para definir bordes y límites específicos dentro de un diseño, como los lados de un rectángulo o el radio de un círculo. Se aplican en el trazado de perfiles y la construcción de figuras geométricas.
    .row.justify-content-center.mb-5
      .col-lg-8.mb-lg-0.mb-3
        .p-3(style="background-color: #294b6d ")
          ul.lista-ul.mb-0
            li.d-flex.bg-white.p-2(style="border-radius:4px;")
              i.fas.fa-check-circle(style="color:#78B62E;")
              span #[b Ángulo:] es la medida de la apertura formada entre dos líneas o segmentos que se intersecan en un punto llamado vértice.

            li.d-flex.bg-white.p-2(style="border-radius:4px;")
              i.fas.fa-check-circle(style="color:#78B62E;")
              span #[b Tipos de ángulos:] en el dibujo técnico, se usan comúnmente.

            li.d-flex.bg-white.p-2(style="border-radius:4px;")
              i.fas.fa-check-circle(style="color:#78B62E;")
              span #[b Ángulo recto (90 °):] frecuente en esquinas y estructuras ortogonales.

            li.d-flex.bg-white.p-2(style="border-radius:4px;")
              i.fas.fa-check-circle(style="color:#78B62E;")
              span #[b Ángulo agudo (< 90 °):] común en el diseño de piezas con inclinaciones específicas.

            li.d-flex.bg-white.p-2(style="border-radius:4px;")
              i.fas.fa-check-circle(style="color:#78B62E;")
              span #[b Ángulo obtuso (> 90 ° y < 180 °):] aplicado en diseños que requieren apertura amplia.

            li.d-flex.bg-white.p-2(style="border-radius:4px;")
              i.fas.fa-check-circle(style="color:#78B62E;")
              span #[b Ángulo llano (180 °):] representa una línea recta.
      .col-lg-4.col-7: img(src='@/assets/curso/tema3/12.png', alt='')
    p.mb-4 Los ángulos permiten especificar inclinaciones y orientaciones de las diferentes partes de un objeto. Se usan para construir figuras geométricas, determinar la simetría de un diseño y definir la orientación de las piezas en planos.
    .cont_decorativo.mb-4.mt-5(data-aos="fade-right")
      .row
        .col-auto.pe-0
          figure
            img(src="@/assets/curso/tema1/3.svg")
        .col.ps-2(style="place-self:center;")
          h3.mb-0.pe-4 Figuras geométricas y trazado de figuras complejas
    .row.justify-content-center.mb-5
      .col-lg-7.mb-lg-0.mb-3
        p.mb-4 En el dibujo técnico, las figuras geométricas simples y complejas permiten representar piezas y componentes de manera precisa y estandarizada. La habilidad de trazar estas figuras con exactitud es fundamental, ya que muchas piezas y estructuras están compuestas de combinaciones de estas formas básicas.
        .p-4(style="background-color:#98e2ec ").rounded-3
          p.mb-0 Las figuras geométricas en dibujo técnico se dividen en dos categorías principales: simples y complejas. Las figuras simples incluyen formas básicas como el cuadrado, rectángulo, triángulo y círculo, que son fundamentales para la construcción de diseños más elaborados. Por otra parte, las figuras complejas abarcan hexágonos, polígonos irregulares, arcos y elipses, que requieren técnicas más avanzadas de trazado y se utilizan para representar elementos más sofisticados en los planos técnicos.
      .col-lg-5.col-7: img(src='@/assets/curso/tema3/13.png', alt='')
    Separador
    #t_3_4.titulo-segundo.color-acento-contenido(data-aos='fade-right')
      h2 3.4	Tipos de vistas y proyecciones
    p.mb-4 En el dibujo técnico, las vistas y proyecciones son métodos de representación que permiten visualizar un objeto en distintas posiciones para comunicar sus dimensiones, formas y características con exactitud. Este apartado ofrece una explicación detallada de las vistas ortogonales, las vistas isométricas y en perspectiva, así como ejercicios para interpretar estos conceptos en planos  industriales.
    .cont_decorativo.mb-4.mt-5(data-aos="fade-right")
      .row
        .col-auto.pe-0
          figure
            img(src="@/assets/curso/tema1/3.svg")
        .col.ps-2(style="place-self:center;")
          h3.mb-0.pe-4 Vista ortogonal
    .row.justify-content-center.mb-5
      .col-lg-7.mb-lg-0.mb-3
        p.mb-4 Es una técnica de dibujo técnico que representa un objeto en diferentes vistas (normalmente frontal, lateral y superior) para mostrar sus dimensiones y detalles de manera precisa. A diferencia de otras proyecciones, la ortogonal mantiene las proporciones exactas y la orientación real del objeto, sin perspectiva ni distorsión.
          br
          br
          | Descripción de las vistas ortogonales:
        .p-4(style="background-color: #e4f7fa ")
          ul.lista-ul.mb-0
            li.d-flex(style="border-radius:4px;")
              i.fas.fa-check-circle(style="color:#78B62E;")
              span #[b Vista frontal:] muestra la cara principal del objeto. Esta vista se elige para presentar la mayor cantidad de detalles posibles y se considera la vista “base”.
            li.d-flex(style="border-radius:4px;")
              i.fas.fa-check-circle(style="color:#78B62E;")
              span #[b Vista lateral:] representa uno de los lados del objeto (generalmente el derecho) y permite ver su profundidad y altura.
            li.d-flex(style="border-radius:4px;")
              i.fas.fa-check-circle(style="color:#78B62E;")
              span #[b Vista superior:] muestra el objeto desde arriba, brindando una perspectiva de su ancho y profundidad.
      .col-lg-5.col-7: img(src='@/assets/curso/tema3/14.png', alt='')
    .row.justify-content-center.mb-5
      .col-lg-5.col-7.mb-lg-0.mb-3: img(src='@/assets/curso/tema3/15.png', alt='')
      .col-lg-7
        p.mb-4 Aplicación de las vistas ortogonales en el dibujo técnico:
        .tarjeta.p-4(style="background-color:#e3f0d4 ")
          p.mb-0 La proyección ortogonal permite desglosar un objeto tridimensional en varias vistas bidimensionales, asegurando que cada dimensión del objeto se muestre sin distorsión.
            br
            br
            | Ejemplo: en el diseño de una pieza mecánica, la vista frontal puede mostrar su forma general y perforaciones, la vista lateral puede mostrar su profundidad y el espesor del material, y la vista superior permite ver su longitud y ubicación de otras características.
    .row.justify-content-center.mb-5
      .col-lg-7.mb-lg-0.mb-3
        p.mb-4 Pasos para crear vistas ortogonales:
        .tarjeta.p-4(style="background-color: #eaeff4 ")
          ol.lista-ol--cuadro
            li.d-flex
              .lista-ol--cuadro__vineta
                span(style="color: #12263F ").fw-bold a
              p.mb-0 Seleccionar la vista principal (frontal), que ofrece la mayor cantidad de información sobre el objeto.
            li.d-flex
              .lista-ol--cuadro__vineta
                span(style="color: #12263F ").fw-bold b
              p.mb-0  Dibujar las vistas restantes (lateral y superior) en correspondencia con la vista frontal, respetando las alineaciones y proporciones.
            li.d-flex
              .lista-ol--cuadro__vineta
                span(style="color: #12263F ").fw-bold c
              p.mb-0  Mantener consistencia en las líneas y detalles para que cada vista refleje las características exactas del objeto.
      .col-lg-5.col-7: img(src='@/assets/curso/tema3/16.png', alt='')
    .cont_decorativo.mb-4.mt-5(data-aos="fade-right")
      .row
        .col-auto.pe-0
          figure
            img(src="@/assets/curso/tema1/3.svg")
        .col.ps-2(style="place-self:center;")
          h3.mb-0.pe-4 Vistas isométricas y perspectiva
    .cont_1_1.mt-4.pt-4.pb-4.pb-xl-5.pt-xl-5.mb-5
      .tarjeta.bg-white.p-4.p-lg-5.pb-lg-4
        CarouselRED(tipo="b")
          .row.pt-lg-4.col-xl-11.m-auto
            .col-lg-7.mb-4.mb-lg-0(style="place-self:center;")
              h5 Vista isométrica
              p.mb-0 La vista isométrica presenta el objeto en un ángulo de 30 ° respecto a cada eje principal (x, y, z), lo que permite ver tres caras del objeto al mismo tiempo. Mantiene las dimensiones reales sin distorsión de escala, por lo que las proporciones se mantienen constantes.
                br
                br
                |Se utiliza para mostrar objetos con claridad en su volumen y estructura sin la distorsión que ocurre en una perspectiva. Es común en planos de ensamblaje y diseño de piezas, donde se necesita una representación clara y proporcional del objeto.
            .col-lg-5.col-7: img(src='@/assets/curso/tema3/17.png', alt='')
          .row.pt-lg-4.col-xl-11.m-auto
            .col-lg-7.mb-4.mb-lg-0(style="place-self:center;")
              h5 Vista en perspectiva
              p.mb-0 Esta simula cómo el ojo humano percibe un objeto en tres dimensiones, mostrando las partes más cercanas al observador más grandes y las más lejanas más pequeñas.  La vista en perspectiva ofrece una apariencia realista, ya que las líneas convergen en un punto de fuga en el horizonte, creando profundidad.
                br
                br
                |Se utiliza en presentaciones, ilustraciones y documentos donde se busca mostrar una imagen visualmente atractiva del objeto. Es menos común en dibujos técnicos detallados debido a la distorsión de las dimensiones.
            .col-lg-5.col-7: img(src='@/assets/curso/tema3/18.png', alt='')
    p.mb-4  Se utiliza en presentaciones, ilustraciones y documentos donde se busca mostrar una imagen visualmente atractiva del objeto. Es menos común en dibujos técnicos detallados debido a la distorsión de las dimensiones.
    .cont_decorativo.mb-4.mt-5(data-aos="fade-right")
      .row
        .col-auto.pe-0
          figure
            img(src="@/assets/curso/tema1/3.svg")
        .col.ps-2(style="place-self:center;")
          h3.mb-0.pe-4 Interpretación de vistas en planos industriales
    p.mb-4 La habilidad de interpretar las diferentes vistas de un plano técnico es esencial en cualquier entorno industrial. Los planos industriales combinan vistas ortogonales, isométricas y en algunos casos, perspectivas, para proporcionar una comprensión completa de un diseño. Se recomienda, llevar a cabo los siguientes ejercicios.
    .row.justify-content-center.mb-5
      .col-lg-7.mb-lg-0.mb-3
        AccordionRED.mb-5(tipo="a" clase-tarjeta="tarjeta tarjeta--azul")
          div(titulo="Ejercicio 1: identificación de vistas en un plano simple")
            .px-5
              p.mb-0 Dado un plano técnico de una pieza simple (por ejemplo, un cubo con perforaciones), identificar y nombrar cada una de las vistas (frontal, lateral, y superior).
          div(titulo="Ejercicio 2: interpretación de una vista isométrica y sus vistas ortogonales")
            .px-5
              p.mb-0 Dado un plano con una vista isométrica de una pieza y sus vistas ortogonales, analizar cómo cada vista ortogonal corresponde a las diferentes caras de la vista isométrica.
          div(titulo="Ejercicio 3: creación de un plano con vistas ortogonales e isométrica")
            .px-5
              p.mb-0 A partir de un modelo de una pieza sencilla (como un cilindro con un corte), realizar un dibujo técnico que incluya las tres vistas ortogonales y una vista isométrica.
          div(titulo="Ejercicio 4: análisis de planos industriales complejos")
            .px-5
              p.mb-0 Tomar un plano industrial que combine múltiples vistas ortogonales y al menos una vista isométrica, y analizar cómo se representan las partes ocultas, dimensiones y detalles.
      .col-lg-5.col-7: img(src='@/assets/curso/tema3/19.png', alt='')
    Separador
    #t_3_5.titulo-segundo.color-acento-contenido(data-aos='fade-right')
      h2 3.5	Interpretación de formas, acotado y lectura de planos
    .cont_decorativo.mb-4.mt-5(data-aos="fade-right")
      .row
        .col-auto.pe-0
          figure
            img(src="@/assets/curso/tema1/3.svg")
        .col.ps-2(style="place-self:center;")
          h3.mb-0.pe-4 Interpretación de formas
    p.mb-4 Consiste en identificar y analizar la estructura geométrica de los objetos representados en un plano técnico. Este proceso permite comprender cómo se representan las dimensiones y características tridimensionales de un objeto en un espacio bidimensional. En dibujo técnico, interpretar correctamente las formas es clave para visualizar la relación entre las partes y los detalles de un diseño.
    .row.justify-content-center.mb-5
      .col-lg-5.col-7.mb-lg-0.mb-3: img(src='@/assets/curso/tema3/20.png', alt='')
      .col-lg-7
        p.mb-4 Elementos básicos de la interpretación de formas:
        AccordionRED.mb-5(tipo="a" clase-tarjeta="tarjeta tarjeta--azul")
          div(titulo="Vistas")
            .px-5
              p.mb-0 Identificar y relacionar las diferentes vistas (frontal, lateral y superior) para obtener una comprensión completa de la forma.
          div(titulo="Líneas y contornos")
            .px-5
              p.mb-0 Reconocer las líneas de contorno (exteriores), las líneas ocultas y las líneas de centro para interpretar el volumen y disposición de las partes de un objeto.
          div(titulo="Proporciones y escalas")
            .px-5
              p.mb-0 Observar las proporciones entre las distintas partes del objeto y su representación a escala para tener una idea precisa del tamaño y forma en el contexto del diseño.
    .cont_decorativo.mb-4.mt-5(data-aos="fade-right")
      .row
        .col-auto.pe-0
          figure
            img(src="@/assets/curso/tema1/3.svg")
        .col.ps-2(style="place-self:center;")
          h3.mb-0.pe-4 Acotado
    p.mb-4 Es el proceso de añadir medidas y anotaciones en un dibujo técnico para especificar las dimensiones y detalles de un objeto. Esta información es esencial para que el diseño pueda ser interpretado correctamente en términos de tamaño, ubicación de características y tolerancias.
    TabsC.color-acento-contenido
      div.py-3.py-md-4(titulo="Elementos clave del acotado")
        .row.p-4.col-xl-11.m-auto
          .col-lg-4.mb-4.mb-md-0.col-7.m-auto
            figure
              img(src="@/assets/curso/tema3/21.png")
          .col-md
            h4 Elementos clave del acotado
            ul.lista-ul.mb-0
              li.d-flex(style="border-radius:4px;")
                i.fas.fa-check-circle(style="color:#01B9D1;")
                span Las dimensiones deben ser claras, y cada medida se representa solo una vez en el plano.

              li.d-flex(style="border-radius:4px;")
                i.fas.fa-check-circle(style="color:#01B9D1;")
                span Evitar que las líneas de cota y de referencia se crucen para mantener la claridad.

              li.d-flex(style="border-radius:4px;")
                i.fas.fa-check-circle(style="color:#01B9D1;")
                span Colocar las medidas más importantes primero, permitiendo que las más pequeñas y secundarias queden visibles sin sobrecargar el plano.
            p.mb-0 #[b Se recomienda:] ejercicio práctico - en un dibujo con vistas de una pieza (vista frontal y lateral), agregar cotas para especificar todas las dimensiones clave, incluyendo longitud, ancho y profundidad.
      div.py-3.py-md-4(titulo="Normas de acotado")
        .row.p-4.col-xl-11.m-auto
          .col-lg-4.mb-4.mb-md-0.col-7.m-auto
            figure
              img(src="@/assets/curso/tema3/22.png")
          .col-md
            h4 Normas de acotado
            ul.lista-ul.mb-0
              li.d-flex(style="border-radius:4px;")
                i.fas.fa-check-circle(style="color:#01B9D1;")
                span #[b Líneas de cota:] líneas que delimitan las dimensiones de cada parte del objeto. Estas líneas suelen tener flechas en los extremos y están acompañadas por cifras de medida que indican la longitud o dimensión específica.
              li.d-flex(style="border-radius:4px;")
                i.fas.fa-check-circle(style="color:#01B9D1;")
                span #[b Líneas de referencia o proyección:] estas líneas se extienden desde el objeto hasta las líneas de cota, asegurando que las dimensiones correspondan a la parte correcta del objeto.
              li.d-flex(style="border-radius:4px;")
                i.fas.fa-check-circle(style="color:#01B9D1;")
                span #[b Cifras de cota:] las medidas exactas, normalmente en milímetros, que aparecen sobre las líneas de cota. Estas cifras son precisas y deben cumplir con las normas establecidas para evitar errores en la fabricación.
              li.d-flex(style="border-radius:4px;")
                i.fas.fa-check-circle(style="color:#01B9D1;")
                span #[b Tolerancias:] se indican en las cotas y representan el margen de error permitido en las dimensiones, lo cual es fundamental en manufactura para asegurar que las piezas encajen correctamente.
    .cont_decorativo.mb-4.mt-5(data-aos="fade-right")
      .row
        .col-auto.pe-0
          figure
            img(src="@/assets/curso/tema1/3.svg")
        .col.ps-2(style="place-self:center;")
          h3.mb-0.pe-4  Lectura de planos
    p.mb-4 Se entiende como la capacidad de interpretar y comprender la información contenida en un plano técnico. Esto incluye identificar las vistas, reconocer las cotas y dimensiones, y comprender las notas o especificaciones adicionales. La lectura de planos es una habilidad esencial en el dibujo técnico, ya que permite que los diseñadores, ingenieros y técnicos trabajen en conjunto sobre un mismo diseño de manera efectiva y sin confusiones.
    .row.justify-content-center.mb-5
      .col-lg-5.col-7.mb-lg-0.mb-3: img(src='@/assets/curso/tema3/22.png', alt='')
      .col-lg-7
        h4 Componentes principales de un plano técnico:
        ul.lista-ul.mb-0
          li.d-flex(style="border-radius:4px;")
            i.fas.fa-check-circle(style="color:#01B9D1;")
            span Vistas ortogonales e isométricas: estas vistas permiten ver el objeto en diferentes ángulos para obtener una perspectiva completa de sus dimensiones y forma.
          li.d-flex(style="border-radius:4px;")
            i.fas.fa-check-circle(style="color:#01B9D1;")
            span Detalles y secciones: algunas partes complejas del objeto se muestran en detalle o seccionadas para aclarar los componentes internos o difíciles de visualizar.
          li.d-flex(style="border-radius:4px;")
            i.fas.fa-check-circle(style="color:#01B9D1;")
            span Leyenda o cuadro de especificaciones: incluye información como el nombre de la pieza, el material, la escala y las tolerancias específicas.
          li.d-flex(style="border-radius:4px;")
            i.fas.fa-check-circle(style="color:#01B9D1;")
            span Notas y anotaciones: indicaciones sobre el acabado, materiales o cualquier otra característica adicional que el plano técnico deba comunicar.
        //- a.anexo.mb-4(:href="obtenerLink('downloads/prueba.pdf')" target="_blank")
        //-   .row.justify-content-around.align-items-center
        //-     .anexo__icono
        //-       img(src="@/assets/bullets/icono-pdf.svg")
        //-     .anexo__texto
        //-       p Anexo. Tipos de línea en dibujo técnico
    .titulo-sexto.color-acento-contenido(data-aos='fade-right')
      h5 Figura 6. 
      span Dibujo técnico
    img(src='@/assets/curso/tema3/11.svg', alt='La figura muestra los componentes del capítulo de dibujo técnico: Dibujo artístico Vs. Dibujo técnico, Instrumentos y manejo en el dibujo técnico, Nociones de geometría plana, Tipos de vistas y proyecciones, Interpretación de formas, acotado y lectura de planos.')











</template>
<script>
export default {
  name: 'Tema3',
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
