<template>
  <div class="curso-main-container glosario">
    <BannerInterno icono="fas fa-atlas" titulo="Glosario"></BannerInterno>
    <div class="container tarjeta tarjeta--blanca p-4 p-md-5 mb-5">
      <div
        v-for="letra in orderedData"
        :key="'letra-' + letra.letra"
        class="glosario__letra-item mb-2"
      >
        <div class="glosario__letra-item__letra me-4">
          <div class="glosario__letra-item__letra__icono">
            <span>{{ letra.letra }}</span>
          </div>
        </div>
        <div class="glosario__letra-item__texto">
          <p
            v-for="termino in letra.terminos"
            :key="termino.termino"
            class="mb-3"
          >
            <strong><i class="lista-ul__vineta"></i></strong
            ><strong v-html="termino.terminoHtml || termino.termino"> </strong
            ><strong>: </strong><span v-html="termino.significado"></span>
          </p>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import plantillaMixins from '@/js/plantillaMixins'
export default {
  name: 'Glosario',
  mixins: [plantillaMixins],
  data() {
    return {
      glosarioData: [
        {
          termino: 'Arduino',
          significado:
            'Plataforma de hardware libre que facilita el desarrollo de proyectos de electrónica mediante el uso de microcontroladores y un entorno de programación accesible.',
        },
        {
          termino: 'Arranque de viruta',
          significado:
            'Proceso de fabricación en el que se elimina material de una pieza en bruto mediante corte para obtener la forma y dimensiones deseadas.',
        },
        {
          termino: 'Circuito digital',
          significado:
            'Sistema electrónico donde las señales representan datos en forma de 0 y 1 (binario), utilizado en computadoras y dispositivos digitales.',
        },
        {
          termino: 'Corriente alterna (AC)',
          significado:
            'Tipo de corriente eléctrica que cambia de dirección de forma periódica, comúnmente usada en sistemas de distribución de electricidad doméstica e industrial.',
        },
        {
          termino: 'Corriente directa (DC)',
          significado:
            'Corriente eléctrica que fluye en una sola dirección, generalmente utilizada en dispositivos electrónicos y sistemas de baterías.',
        },
        {
          termino: 'Dibujo técnico',
          significado:
            'Representación gráfica de objetos y estructuras utilizando normas específicas para transmitir información clara y precisa en ingeniería y arquitectura.',
        },
        {
          termino: 'Electrotecnia',
          significado:
            'Rama de la ingeniería que estudia la producción, distribución y uso de la electricidad y los dispositivos eléctricos.',
        },
        {
          termino: 'Mecánica y ajuste',
          significado:
            'Conjunto de operaciones y procedimientos para ensamblar, reparar y calibrar piezas mecánicas en sistemas industriales o automotrices.',
        },
        {
          termino: 'Procesos industriales',
          significado:
            'Métodos y técnicas empleados en la transformación de materias primas en productos finales mediante el uso de maquinaria y tecnología.',
        },
        {
          termino: 'Semiconductor',
          significado:
            'Material que tiene propiedades de conductividad intermedia entre conductores y aislantes, fundamental en la fabricación de dispositivos electrónicos como transistores y diodos.',
        },
        {
          termino: 'Simulación de circuitos',
          significado:
            'Herramienta que permite crear y probar circuitos electrónicos virtualmente para analizar su comportamiento antes de construirlos físicamente.',
        },
        {
          termino: 'Tolerancia',
          significado:
            'Rango permisible de variación en las dimensiones de una pieza para asegurar el funcionamiento adecuado en el ensamblaje de componentes mecánicos.',
        },
        {
          termino: 'Transistor',
          significado:
            'Componente electrónico que amplifica o conmutan señales electrónicas, siendo clave en circuitos digitales y analógicos.',
        },
      ],
    }
  },
  computed: {
    orderedData() {
      const newGlosarioData = [...this.glosarioData]
      newGlosarioData.forEach(element => {
        element.significado =
          element.significado.charAt(0).toLowerCase() +
          element.significado.slice(1)
      })

      const sortedData = [...newGlosarioData].reduce((r, e) => {
        const letra = this.quitarAcentos(e.termino.toLowerCase())[0]
        if (!r[letra]) r[letra] = { letra, terminos: [e] }
        else r[letra].terminos.push(e)
        return r
      }, {})

      const soloLetras = Object.keys(sortedData).sort()
      const newSortedData = []

      soloLetras.forEach(element => {
        const letraObj = sortedData[element]
        let terminos = letraObj.terminos

        if (terminos.length > 1) {
          const terminosOrdenados = []
          const soloTerminos = letraObj.terminos
            .map(termObj => termObj.termino)
            .sort((a, b) => {
              const an = this.quitarAcentos(a).toLowerCase()
              const bn = this.quitarAcentos(b).toLowerCase()
              if (an < bn) return -1
              if (bn < an) return 1
              return 0
            })
          soloTerminos.forEach(term => {
            terminosOrdenados.push(
              terminos.find(termino => termino.termino === term),
            )
          })
          terminos = terminosOrdenados
        }
        newSortedData.push({
          letra: letraObj.letra.toUpperCase(),
          terminos: terminos,
        })
      })
      return newSortedData
    },
  },
}
</script>

<style lang="sass">
.glosario
  &__letra-item
    display: flex
    &__texto
      padding-top: 5px
    &__letra
      &__icono
        width: 32px
        height: 32px
        position: relative
        line-height: 1em
        border-radius: 50%
        background-color: $color-sistema-d

        span
          position: absolute
          left: 50%
          top: 50%
          transform: translate(-50%,-50%)
          font-size: 1.1em
          font-weight: $base-black-font-weight
</style>
