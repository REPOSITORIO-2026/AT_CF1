<template>
  <section class="inicio">
    <BannerPrincipal class="mb-5"></BannerPrincipal>
    <div
      id="contenidos"
      class="container tarjeta tarjeta__template--azul-claro px-3 py-4 px-sm-5 pb-sm-5 mb-5"
    >
      <div class="titulo__template--a mb-4">
        <h3>Desarrollo<br />de contenidos</h3>
      </div>
      <div class="tarjeta--blanca p-3 p-sm-4">
        <div class="desarrollo-contenidos">
          <router-link
            v-for="item of desarrolloContenidosData"
            :key="'desarrollo-' + item.nombreRuta"
            class="desarrollo-contenidos__item"
            :to="{ name: item.nombreRuta }"
          >
            <div class="desarrollo-contenidos__item__texto">
              <span
                v-if="item.hasOwnProperty('numero')"
                class="desarrollo-contenidos__item__icono"
                >{{ item.numero }}</span
              ><i
                v-else
                class="desarrollo-contenidos__item__icono"
                :class="item.icono"
              ></i
              ><span v-html="item.titulo"></span>
            </div>
            <a class="boton--sm"
              ><span class="d-none d-md-block">Ver contenido</span
              ><span class="d-md-none">Ver</span></a
            >
          </router-link>
        </div>
      </div>
    </div>
    <div
      class="container tarjeta tarjeta__template--azul-claro creditos-inicio px-3 py-4 px-sm-5"
    >
      <div v-if="creditosInicio" class="creditos-inicio__container">
        <div
          v-for="(row, index) in creditosInicio"
          :key="index"
          class="creditos-inicio__item"
        >
          <div class="row">
            <div class="creditos-inicio__titulo col-md-3 col-lg-2 mb-3 mb-md-0">
              <h5 class="mb-0" v-html="row.titulo"></h5>
            </div>
            <div class="creditos-inicio__imagenes col">
              <img
                v-for="imagen in row.contenido"
                :key="imagen"
                :src="imagen"
              />
            </div>
          </div>
          <hr v-if="index != creditosInicio.length - 1" />
        </div>
      </div>
      <div v-else class="text-center">
        <img
          class="d-inline-block mb-2"
          src="@/assets/bullets/logo-sena.svg"
          style="width: 100px"
        />
        <h5 class="mb-0">Ecosistema de Recursos Educativos Digitales</h5>
      </div>
    </div>
    <Footer></Footer>
  </section>
</template>
<script>
export default {
  name: 'Inicio',
  computed: {
    menuPrincipalData() {
      return this.$config.menuPrincipal
    },
    creditosInicio() {
      return this.$config.creditosInicio
    },
    desarrolloContenidosData() {
      const allMenuData = [
        ...this.menuPrincipalData.menu,
        ...this.menuPrincipalData.subMenu,
      ]
      return allMenuData.filter(item => item.desarrolloContenidos)
    },
  },
}
</script>

<style lang="sass">
.inicio
  .footer
    border-radius: 0 !important
.resultados-aprendizaje
  &__item
    margin-bottom: 20px
    &:last-child
      margin-bottom: 0

.desarrollo-contenidos
  &__item
    display: flex
    align-items: center
    justify-content: space-between
    margin-bottom: 25px
    padding: 5px
    border-radius: $base-border-radius

    &__texto
      display: flex
      align-items: center
      color: $color-sistema-texto

    &__icono
      display: block
      background-color: $color-sistema-g
      font-size: 20px
      font-weight: $base-black-font-weight
      text-align: center
      padding: 10px
      line-height: 1em
      width: 40px
      margin-right: 15px

    &:last-child
      margin-bottom: 0

    &:hover
      background-color: $color-sistema-g
      font-weight: $base-black-font-weight
      color: $color-sistema-a

.creditos-inicio
  border-bottom-left-radius: 0 !important
  border-bottom-right-radius: 0 !important
  &__container
    hr
      margin: 15px 0
  &__titulo
    display: flex
    align-items: center
  &__item
  &__imagenes
    display: flex
    flex-wrap: wrap
    img
      width: auto
      max-height: 60px
      margin-right: 15px
      margin-top: 5px
      margin-bottom: 5px
</style>
