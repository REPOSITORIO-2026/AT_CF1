<template>
  <div class="curso-main-container complementario">
    <BannerInterno
      icono="far fa-folder-open"
      titulo="Material complementario"
    ></BannerInterno>
    <div class="container tarjeta tarjeta--blanca p-4 p-md-5 mb-5">
      <div class="table-responsive">
        <table>
          <thead>
            <tr>
              <th colspan="3" scope="col">Tema</th>
              <th colspan="5" scope="col">Referencia APA del material</th>
              <th colspan="2" scope="col">Tipo</th>
              <th colspan="2" scope="col">Enlace</th>
            </tr>
          </thead>
          <tbody>
            <tr
              v-for="(item, index) in computedData"
              :key="'complementario-' + index"
            >
              <td
                class="text-start"
                colspan="3"
                scope="row"
                v-html="item.tema"
              ></td>
              <td
                class="text-start"
                colspan="5"
                scope="row"
                v-html="item.referencia"
              ></td>
              <td colspan="2" v-html="item.tipo"></td>
              <td colspan="2">
                <div class="complementario__enlaces">
                  <a
                    v-for="(link, linkIndex) of item.link"
                    :key="linkIndex"
                    class="complementario__btn"
                    :href="link"
                    target="_blank"
                    ><i class="fas fa-external-link-alt"></i
                  ></a>
                </div>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  name: 'MaterialComplementario',
  computed: {
    complementarioData() {
      return [
        {
          tema: 'Arduino',
          referencia: '(S.f.).Candy-ho.com.',
          tipo: 'Documento',
          link:
            'https://candy-ho.com/Drivers/librodeproyectosdearduinostarterkit-151212174250.pdf?srsltid=AfmBOoqQ0zZm_YK3m_njhKi_E8eu9IwqcokHwmTnEl6-rSpkJnpvWPcq',
        },
        {
          tema: 'Circuitos DC y AC',
          referencia:
            'Circuit design Sensores y Actuadores. (n.d.). <em>Tinkercad.</em> [Simulador en linea].',
          tipo: 'Simulador en línea',
          link: 'https://www.tinkercad.com/embed/g1Pvn5fI1mE',
        },
        {
          tema: '“Máquinas Agrícolas: diseño industrial”',
          referencia:
            'Nardon, G. “bocha” [@gustavonardon3873]. (n.d.).<em>Máquinas Agrícolas: diseño industrial (Parte 1 de 2).</em> [Video]. Youtube.',
          tipo: 'Video',
          link: 'https://www.youtube.com/watch?v=YS5cHpWLNEE ',
        },
        {
          tema: '“Máquinas Agrícolas: diseño industrial”',
          referencia:
            'Nardon, G. “bocha” [@gustavonardon3873]. (s/f-b).<em>Máquinas Agrícolas: diseño industrial (Parte 2 de 2).</em> [Video]. Youtube.',
          tipo: 'Video',
          link: 'https://www.youtube.com/watch?v=mxsKI3NCQlY',
        },
        {
          tema: 'Electrónica digital',
          referencia:
            'Ciencia-Edu [@CienciaEdu]. (s/f). <em>Lo que debes saber de la Electrónica Digital.</em> [Video]. Youtube.',
          tipo: 'Video',
          link: 'https://www.youtube.com/watch?v=MPEHYhKQztQ',
        },
        {
          tema: 'TRANSISTORIZED! La Historia De: El Transistor',
          referencia:
            'MILLERTRON [@MILLERTRON]. (n.d.). <em>TRANSISTORIZED! La historia DE: El transistor.</em> [Video]. Youtube.',
          tipo: 'Video',
          link: 'https://www.youtube.com/watch?v=f3IUVvJ2XgI&t=1899s',
        },
        {
          tema: 'Diferencias entre corriente alterna y corriente directa',
          referencia:
            'Cogollo, J. [@JorgeCogollo]. (n.d.). <em>Diferencia entre CORRIENTE ALTERNA y CORRIENTE CONTINUA.</em> [Video]. Youtube.',
          tipo: 'Video',
          link: 'https://www.youtube.com/watch?v=BPaIiaoYkNY',
        },
        {
          tema: '¿Cómo funciona el transistor',
          referencia:
            'CuriosaMente [@curiosamente]. (n.d.). <em>¿Cómo funciona el TRANSISTOR?.</em> [Video]. Youtube.',
          tipo: 'Video',
          link: 'https://www.youtube.com/watch?v=ljSdrYmdF44',
        },
        {
          tema: 'Qué es un semiconductor',
          referencia:
            'MindMachineTV [@MindMachineTV]. (n.d.). <em>¿Qué es un semiconductor? - una explicación sencilla.</em> [Video]. Youtube.',
          tipo: 'Video',
          link: 'https://www.youtube.com/watch?v=fFVU7-kfPe8',
        },
        {
          tema: 'Electrotecnia (AC, DC)',
          referencia: 'Jimcontent.com.(n.d.). [Libro].',
          tipo: 'Libro',
          link:
            'https://sfb55068d25a70fdb.jimcontent.com/download/version/1445959225/module/10625520360/name/fundamentos_de_electrotecnia_archivo1.pdf',
        },
        {
          tema: 'Electrónica Digital',
          referencia:
            'Pujols, E. G. (n.d.). <em>Introducción a la electrónica digital.</em> [Documento PDF] Uoc.edu.',
          tipo: 'Libro',
          link:
            'https://openaccess.uoc.edu/server/api/core/bitstreams/b69fc326-23b8-45b2-beef-667508ce4b34/content',
        },
        {
          tema: 'Sistemas de Control',
          referencia:
            'Click, O. (n.d.). <em>Online circuit simulator & schematic editor.</em> CircuitLab. [Simulador].',
          tipo: 'Simulador',
          link: 'https://www.circuitlab.com/',
        },
        {
          tema: 'Dibujo Técnico',
          referencia: 'Ieszaframagon.com. (n.d.). [Documento PDF].',
          tipo: 'Manual',
          link:
            'https://www.ieszaframagon.com/files/recursos_files/Unidad-Dibujo-t%C3%A9cnico.pdf',
        },
        {
          tema: 'Procesos Industriales',
          referencia:
            '<em>Vista de Evolución y utilidad del mecanizado CNC en el diseño industrial.</em> (n.d.). [Documento PDF]. Journalingeniar.org',
          tipo: 'Artículo',
          link:
            'https://www.journalingeniar.org/index.php/ingeniar/article/view/108/156',
        },
      ]
    },
    computedData() {
      const data = this.complementarioData
      return data.map(item => {
        let nuevoLink = []
        if (item.link) {
          if (typeof item.link === 'string') {
            nuevoLink.push(item.link)
          } else {
            nuevoLink = item.link
          }
        } else if (item.descarga) {
          if (typeof item.descarga === 'string') {
            nuevoLink.push(this.obtenerLink(item.descarga))
          } else {
            item.descarga.forEach(link => {
              nuevoLink.push(this.obtenerLink(link))
            })
          }
        }
        return {
          ...item,
          link: nuevoLink,
        }
      })
    },
  },
}
</script>

<style lang="sass">
.complementario
  &__enlaces
    display: flex
    justify-content: center
    flex-wrap: wrap
    a
      margin: 0 5px
  &__btn
    font-size: 1.5em
    line-height: 1em
table
  width: calc(100% - 1px)
  min-width: 800px
  thead
    background-color: $color-sistema-e
    th
      border-color: $color-sistema-e
  th, td
    padding: 25px 20px
    text-align: center
</style>
