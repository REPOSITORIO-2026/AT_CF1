<template>
  <div class="curso-main-container referencias">
    <BannerInterno
      icono="fas fa-book"
      titulo="Referencias bibliográficas"
    ></BannerInterno>
    <div class="container tarjeta tarjeta--blanca p-4 p-md-5 mb-5">
      <div v-for="ref in orderedData" :key="ref.link" class="referencias__item">
        <span v-html="ref.referencia"></span
        ><a v-if="ref.link" class="ms-1" :href="ref.link" target="_blank"
          ><span v-html="ref.link"></span
          ><i class="ms-1 fas fa-external-link-alt"></i
        ></a>
        <hr class="my-3" />
      </div>
    </div>
  </div>
</template>
<script>
export default {
  name: 'Referencias',
  data: () => ({
    referencias: [
      {
        referencia:
          'Click, O. (n.d.). <em>Online circuit simulator & schematic editor.</em> CircuitLab. [Simulador]. Recuperado el 11 de junio de 2025, de',
        link: 'https://www.circuitlab.com/',
      },
      {
        referencia:
          'Edu.co. (n.d.). [Documento PDF]. Recuperado el 11 de junio de 2025, de',
        link:
          'https://repositorio.sena.edu.co/bitstream/11404/5633/1/metrologia.pdf',
      },
      {
        referencia:
          'Fernández, R., & García, M. (2021). Mecánica y mantenimiento en maquinaria agrícola: Guía práctica para técnicos y agricultores. Editorial Agrícola.',
        link: '',
      },
      {
        referencia:
          'García, T., & Rivas, L. (2016). <em>Mantenimiento preventivo y correctivo en equipos agrícolas.</em> Editorial de Tecnología Agrícola.',
        link: '',
      },
      {
        referencia:
          'González, M. (2015). Lubricación y reducción de fricción en maquinaria de campo. Editorial Ingeniería Sostenible.',
        link: '',
      },
      {
        referencia:
          'Ieszaframagon.com. (n.d.). [Documento PDF]. Recuperado el 11 de junio de 2025, de',
        link:
          'https://www.ieszaframagon.com/files/recursos_files/Unidad-Dibujo-t%C3%A9cnico.pdf',
      },
      {
        referencia:
          'Ilo.org. (n.d.). [Documento PDF]. Recuperado el 11 de junio de 2025, de',
        link:
          'https://www.ilo.org/es/publications/big-data-y-ciencia-de-datos-conceptos-oportunidades-y-desafios',
      },
      {
        referencia:
          'Jimcontent.com. (n.d.). [Documento PDF]. Recuperado el 11 de junio de 2025, de',
        link:
          'https://sfb55068d25a70fdb.jimcontent.com/download/version/1445959225/module/10625520360/name/fundamentos_de_electrotecnia_archivo1.pdf',
      },
      {
        referencia:
          'López, P., & Torres, F. (2020). <em>Conceptos avanzados de mecánica aplicada en el sector agrícola.</em> Ingeniería y Tecnología Agrícola.',
        link: '',
      },
      {
        referencia:
          'Martínez, J., & Díaz, C. (2019). <em>Ajustes y tolerancias en maquinaria agrícola pesada.</em> Ediciones Técnicas.',
        link: '',
      },
      {
        referencia:
          'MindMachineTV [@MindMachineTV]. (n.d.). <em>¿Qué es un semiconductor? - una explicación sencilla.</em> [Video]. Youtube. Recuperado el 10 de junio de 2025, de',
        link: 'https://www.youtube.com/watch?v=fFVU7-kfPe8',
      },
      {
        referencia:
          'Pujols, E. G. (n.d.). <em>Introducción a la electrónica digital.</em> [Documento PDF]. Uoc.edu. Recuperado el 11 de junio de 2025, de',
        link:
          'https://openaccess.uoc.edu/server/api/core/bitstreams/b69fc326-23b8-45b2-beef-667508ce4b34/content',
      },
      {
        referencia:
          'Ramírez, S. (2017). Transferencia de energía y sistemas de transmisión en maquinaria agrícola. Editorial Innovación en Agricultura.',
        link: '',
      },
      {
        referencia:
          'Salazar, J., & Pérez, M. (2014). <em>Métodos de unión y ensamblaje en equipos agrícolas. Ediciones del Agro.</em>',
        link: '',
      },
      {
        referencia:
          'Smith, A., & Johnson, R. (2018). <em>Dinámica y estática para maquinaria industrial y agrícola.</em> Prensa de Ingeniería Aplicada. ',
        link: '',
      },
      {
        referencia:
          '(S.f.). Candy-ho.com. Recuperado el 7 de septiembre de 2025, de',
        link:
          'https://candy-ho.com/Drivers/librodeproyectosdearduinostarterkit-151212174250.pdf?srsltid=AfmBOoqQ0zZm_YK3m_njhKi_E8eu9IwqcokHwmTnEl6-rSpkJnpvWPcq',
      },
      {
        referencia:
          'TE Ronde, J., Castillo, L. E., Cardona, A., & Vásquez Basto, R. (1978). <em>Sembradora manual de grano grueso: manual de construcción.</em> [Documento PDF].',
        link: 'https://repositorio.sena.edu.co/handle/11404/4761',
      },
      {
        referencia:
          'Tinkercad. (n.d.). Circuitos DC y AC: <em>Simulador en línea.</em> [Simulador en línea].',
        link: 'https://www.tinkercad.com/embed/g1Pvn5fI1mE',
      },
      {
        referencia:
          '<em>Vista de Evolución y utilidad del mecanizado CNC en el diseño industrial.</em> [Documento PDF]. Journalingeniar.org. Recuperado el 11 de junio de 2025, de',
        link:
          'https://www.journalingeniar.org/index.php/ingeniar/article/view/108/156',
      },
    ],
  }),
  computed: {
    orderedData() {
      return [...this.referencias].sort((a, b) => {
        const aTexto = this.limpiarHTML(a.referencia)
        const bTexto = this.limpiarHTML(b.referencia)

        const aNormal = this.quitarAcentos(aTexto.toLowerCase())
        const bNormal = this.quitarAcentos(bTexto.toLowerCase())

        if (aNormal < bNormal) return -1
        if (aNormal > bNormal) return 1
        return 0
      })
    },
  },
  methods: {
    quitarAcentos(str) {
      return str.normalize('NFD').replace(/[\u0300-\u036f]/g, '')
    },
    limpiarHTML(str) {
      // Elimina cualquier etiqueta HTML para comparar solo texto plano
      // y elimina solo los paréntesis conservando el contenido interior
      return str
        .replace(/<\/?[^>]+(>|$)/g, '') // quita etiquetas HTML
        .replace(/\(([^)]*)\)/g, '$1') // quita paréntesis pero conserva el texto dentro
        .trim()
    },
  },
}
</script>

<style lang="sass">
.referencias
  &__item
    &:last-child
      hr
        display: none
    a
      color: $blue
      text-decoration: underline
      overflow-wrap: break-word
</style>
