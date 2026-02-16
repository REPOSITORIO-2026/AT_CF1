<template>
  <div class="curso-main-container pb-3">
    <BannerInterno icono="fas fa-sitemap" titulo="Síntesis"></BannerInterno>
    <div class="container tarjeta tarjeta--blanca p-4 p-md-5">
      <p class="mb-5" data-aos="fade-down" data-aos-duration="750">
        El siguiente diagrama proporciona una visión general sintetizada de los
        principales temas abordados en el componente formativo sobre Tecnología
        Aplicada en Sistemas Electromecánicos e Industriales. Este mapa
        conceptual ha sido diseñado para ayudar al lector a comprender la
        interrelación entre los diversos conceptos que sustentan la tecnología
        aplicada al sector agrícola.
      </p>
      <div class="row">
        <div class="col-lg-auto d-none d-lg-block" data-aos="fade-right">
          <figure><img src="@/assets/curso/sintesis1.png" /></figure>
        </div>
        <div class="col-lg" data-aos="fade-left">
          <p>
            El núcleo del diagrama se centra en el concepto principal de los
            “Fundamentos en tecnología aplicada en sistemas electromecánicos e
            industriales”, del cual se desprenden áreas clave de aprendizaje:
            electrotecnia, electrónica digital, sistemas embebidos, dibujo
            técnico, y mecánica y ajuste. Estas áreas se subdividen en temas
            específicos que reflejan la estructura del componente, abarcando
            desde principios básicos hasta aplicaciones prácticas en contextos
            agroindustriales.
          </p>
          <div class="p-4" style="background-color:#F0F7E8;border-radius:12px;">
            <figure class="mb-2">
              <img src="@/assets/curso/sintesis2.svg" style="max-width:85px;" />
            </figure>
            <p class="mb-0">
              Este diagrama sirve como una guía visual que resume la amplitud y
              profundidad de los temas cubiertos en el componente. Permite al
              estudiante comprender rápidamente las relaciones entre los
              conceptos y aplicarlos en su contexto profesional. Le invitamos a
              utilizar este mapa como un complemento al contenido detallado,
              sirviendo como una referencia rápida y un recordatorio visual de
              los aspectos fundamentales de la Tecnología Aplicada en Sistemas
              Electromecánicos e Industriales en la Agricultura.
            </p>
          </div>
        </div>
      </div>
      <div class="mt-5 row justify-content-center">
        <div class="col-lg-10 mb-5">
          <figure data-aos="fade-up" data-aos-duration="800">
            <img
              src="@/assets/curso/sintesis.svg"
              alt="La síntesis como mapa conceptual ilustra los fundamentos en tecnología aplicada en sistemas electromecánicos e industriales, ramificándose en cuatro áreas principales: importancia de la tecnología agrícola, propósito del módulo, temas clave (incluyendo electrotecnia DC/AC, electrónica digital, dibujo técnico, mecánica y herramientas), y el enfoque integral de la electrónica en el sector agrícola, cada uno con sus respectivos subtemas y aplicaciones específicas."
            />
          </figure>
          <figcaption class="mt-5">Fuente. OIT, 2024.</figcaption>
        </div>
        <div class="col-auto">
          <a
            class="anexo mb-5"
            :href="obtenerLink('/downloads/Sintesis.pdf')"
            target="_blank"
          >
            <div class="anexo__icono">
              <img src="@/assets/bullets/icono-pdf.svg" />
            </div>
            <div class="anexo__texto">
              <p>Anexo. Síntesis</p>
            </div></a
          >
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Sintesis',
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
