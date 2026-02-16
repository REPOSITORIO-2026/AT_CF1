<template>
  <div class="curso-main-container pb-3">
    <BannerInterno
      icono="far fa-question-circle"
      titulo="Actividad didáctica"
    ></BannerInterno>
    <div class="container tarjeta tarjeta--blanca p-4 p-md-5">
      <div
        class="row mb-5 justify-content-center align-items-center align-items-lg-stretch"
      >
        <div class="col-6 col-md-4 col-lg-3 mb-4 mb-md-0">
          <div class="tarjeta h-100 d-flex align-items-center p-4">
            <figure>
              <img
                src="@/assets/bullets/Falso_Verdadero.svg"
                alt="Texto que describa la imagen"
              />
            </figure>
          </div>
        </div>
        <div class="col-12 col-md-8 col-lg-9">
          <div class="titulo-segundo">
            <h2>
              Prueba tus conocimientos sobre Fundamentos en tecnología aplicada
              en sistemas electromecánicos e industriales
            </h2>
          </div>
          <p class="mb-4">
            Validar el conocimiento adquirido sobre Fundamentos en tecnología
            aplicada en sistemas electromecánicos e industriales. Esto se
            trabaja a partir de un conjunto de preguntas con el propósito de
            buscar una dinámica de razonamiento ágil sobre opciones cerradas y
            reafirmar un conocimiento declarado dentro del componente.
          </p>
          <div class="tarjeta actividad p-3">
            <div class="row justify-content-around align-items-center">
              <div class="col-sm mb-3 mb-sm-0">
                <p class="fw-bold mb-0">Cuestionario</p>
              </div>
              <div class="col-auto">
                <a
                  class="boton boton--b"
                  :href="obtenerLink('/actividades/story.html')"
                  target="_blank"
                  ><span>Realizar</span><i class="fas fa-puzzle-piece"></i
                ></a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  name: 'Actividad',
}
</script>

<style lang="sass"></style>
