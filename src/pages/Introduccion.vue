<template>
  <div class="curso-main-container introduccion">
    <BannerInterno></BannerInterno>
    <div class="container tarjeta tarjeta--blanca p-4 p-md-5 mb-5">
      <div class="titulo-principal color-acento-contenido" data-aos="flip-up">
        <div class="titulo-principal__numero">
          <span><i class="fas fa-info"></i></span>
        </div>
        <h1>Introducción</h1>
      </div>
      <div class="row">
        <div class="col-lg" data-aos="fade-right">
          <div class="row">
            <div class="col-lg-auto d-none d-lg-block pe-lg-0">
              <figure><img src="@/assets/curso/intro1.png" /></figure>
            </div>
            <div class="col-lg ps-lg-0">
              <div
                class="h-100 p-4 d-flex align-content-center flex-wrap"
                style="border:3px #01B9D1 dashed;"
              >
                <p class="mb-0">
                  En un mundo donde la tecnología y la agricultura se entrelazan
                  cada vez más, el conocimiento en electricidad y electrónica se
                  convierte en una herramienta indispensable para mejorar los
                  procesos productivos en el sector agrícola. El presente módulo
                  tiene como propósito proporcionar una base sólida en los
                  conceptos esenciales de electrónica y una orientación práctica
                  hacia su aplicación en contextos agrícolas. Lo anterior
                  permitirá, no solo comprender los principios técnicos, sino
                  también visualizar su aplicación en sistemas de
                  automatización, monitoreo y control de variables agrícolas,
                  contribuyendo a la eficiencia y sostenibilidad en las
                  actividades del sector.
                </p>
              </div>
            </div>
          </div>
        </div>
        <div class="col-lg-auto d-none d-xl-block" data-aos="fade-left">
          <figure><img src="@/assets/curso/intro2.png" /></figure>
        </div>
      </div>
      <div class="row mt-4">
        <div class="col-lg pe-lg-0" data-aos="fade-up">
          <div
            class="h-100 p-4 d-flex align-content-center flex-wrap"
            style="background-color:#F0F7E8;"
          >
            <p class="mb-0">
              Este módulo abarca temas clave como Electrotecnia en Corriente
              Directa (DC) y Electrotecnia en Corriente Alterna (AC),
              fundamentales para comprender el comportamiento de circuitos
              eléctricos básicos y avanzados. También se exploran los
              fundamentos de Electrónica Digital y Sistemas Embebidos, que son
              esenciales para el desarrollo de tecnologías de automatización y
              monitoreo en tiempo real de las variables agrícolas. Por otro
              lado, el componente de Dibujo Técnico y Procesos Industriales
              proporciona habilidades necesarias para interpretar planos y
              esquemas de sistemas eléctricos y electrónicos, competencias clave
              en el diseño y mantenimiento de infraestructuras tecnológicas en
              el campo. Finalmente, el componente de Mecánica y Ajuste se enfoca
              en la comprensión y práctica de técnicas básicas de ajuste y
              reparación, competencias que se vuelven esenciales para garantizar
              el funcionamiento continuo de la maquinaria y los equipos
              utilizados en ambientes agrícolas.
            </p>
          </div>
        </div>
        <div class="col-lg-auto d-none d-lg-block ps-lg-0" data-aos="fade-down">
          <figure><img src="@/assets/curso/intro3.svg" /></figure>
        </div>
      </div>
      <div class="row mt-4">
        <div
          class="col-md-auto d-none d-md-block"
          data-aos="fade-right"
          style="place-self:center;"
        >
          <figure><img src="@/assets/curso/intro4.svg" /></figure>
        </div>
        <div class="col-md" data-aos="fade-left" style="place-self:center;">
          <p class="mb-0">
            La estructura propuesta, brinda un enfoque integral de la
            electrónica, ofreciendo herramientas teóricas que faciliten análisis
            y aplicación de conceptos técnico en el sector agrícola respondiendo
            a condiciones y necesidades particulares, con esta preparación, los
            estudiantes estarán mejor equipados para enfrentar los desafíos de
            un mundo agrícola cada vez más mecanizado y tecnificado, donde la
            electrónica juega un papel determinante en la mejora de la
            productividad, la calidad de los productos y la sostenibilidad de
            los procesos.
          </p>
        </div>
      </div>
      <figure class="mt-4" data-aos="zoom-in-up" data-aos-duration="500">
        <div class="video">
          <iframe
            width="560"
            height="315"
            src="https://www.youtube.com/embed/QItU7hHhHjI?si=-XoBBR2HYTwUDQgQ"
            title="YouTube video player"
            frameborder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowfullscreen="allowfullscreen"
          ></iframe>
        </div>
      </figure>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Introduccion',
  data: () => ({
    // variables de vue
  }),
}
</script>

<style lang="sass"></style>
