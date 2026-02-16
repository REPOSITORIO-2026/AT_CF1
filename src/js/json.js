export default {
  menuPrincipal: {
    menu: [
      {
        nombreRuta: 'inicio',
        icono: 'fas fa-home',
        titulo: 'Volver al inicio',
      },
      {
        nombreRuta: 'introduccion',
        icono: 'fas fa-info-circle',
        titulo: 'Introducción',
        desarrolloContenidos: true,
      },
      {
        nombreRuta: 'tema1',
        numero: '1',
        titulo: 'Introducción la electrotecnia',
        desarrolloContenidos: true,
        subMenu: [
          {
            numero: '1.1',
            titulo: 'Electrotecnia DC',
            hash: 't_1_1',
          },
          {
            numero: '1.2',
            titulo: 'Electrotecnia AC',
            hash: 't_1_2',
          },
        ],
      },
      {
        nombreRuta: 'tema2',
        numero: '2',
        titulo: 'Electrónica digital y sistemas embebidos',
        desarrolloContenidos: true,
        subMenu: [
          {
            numero: '2.1',
            titulo: 'Fundamentos teóricos a la electrónica digital',
            hash: 't_2_1',
          },
          {
            numero: '2.2',
            titulo: 'Definición de sistema embebido',
            hash: 't_2_2',
          },
          {
            numero: '2.3',
            titulo: 'Lenguajes de programación y entornos de desarrollo',
            hash: 't_2_3',
          },
          {
            numero: '2.4',
            titulo: 'Aplicaciones prácticas',
            hash: 't_2_4',
          },
        ],
      },
      {
        nombreRuta: 'tema3',
        numero: '3',
        titulo: 'Dibujo Técnico',
        desarrolloContenidos: true,
        subMenu: [
          {
            numero: '3.1',
            titulo: 'Dibujo artístico Vs. Dibujo técnico',
            hash: 't_3_1',
          },
          {
            numero: '3.2',
            titulo: 'Instrumentos y manejo en el dibujo técnico',
            hash: 't_3_2',
          },
          {
            numero: '3.3',
            titulo: 'Nociones de geometría plana',
            hash: 't_3_3',
          },
          {
            numero: '3.4',
            titulo: 'Tipos de vistas y proyecciones',
            hash: 't_3_4',
          },
          {
            numero: '3.5',
            titulo: 'Interpretación de formas, acotado y lectura de planos',
            hash: 't_3_5',
          },
        ],
      },
      {
        nombreRuta: 'tema4',
        numero: '4',
        titulo: 'Mecánica y ajuste',
        desarrolloContenidos: true,
        subMenu: [
          {
            numero: '4.1',
            titulo: 'Fundamentos Teóricos',
            hash: 't_4_1',
          },
          {
            numero: '4.2',
            titulo: 'Identificación y diagnóstico de componentes mecánicos',
            hash: 't_4_2',
          },
          {
            numero: '4.3',
            titulo: 'Técnicas de mecanizado para ajuste',
            hash: 't_4_3',
          },
        ],
      },
      {
        nombreRuta: 'tema5',
        numero: '5',
        titulo: 'Herramientas y sistema de montajes',
        desarrolloContenidos: true,
        subMenu: [
          {
            numero: '5.1',
            titulo: 'Fundamentos teóricos de las herramientas de montaje',
            hash: 't_5_1',
          },
          {
            numero: '5.2',
            titulo: 'Sistemas de montaje',
            hash: 't_5_2',
          },
          {
            numero: '5.3',
            titulo: 'Procedimientos de montaje y ajuste',
            hash: 't_5_3',
          },
          {
            numero: '5.4',
            titulo: 'Seguridad y mantenimiento de herramientas',
            hash: 't_5_4',
          },
        ],
      },
    ],
    subMenu: [
      {
        icono: 'fas fa-sitemap',
        titulo: 'Síntesis',
        nombreRuta: 'sintesis',
        desarrolloContenidos: true,
      },
      {
        nombreRuta: 'actividad',
        icono: 'far fa-question-circle',
        titulo: 'Actividad didáctica',
        desarrolloContenidos: true,
      },
      {
        nombreRuta: 'glosario',
        icono: 'fas fa-sort-alpha-down',
        titulo: 'Glosario',
      },
      {
        nombreRuta: 'complementario',
        icono: 'far fa-folder-open',
        titulo: 'Material complementario',
      },
      {
        icono: 'fas fa-book',
        titulo: 'Referencias bibliográficas',
        nombreRuta: 'referencias',
      },
      {
        icono: 'fas fa-file-pdf',
        titulo: 'Descargar PDF',
        download: 'downloads/232100_CF01_DU.pdf',
      },
      {
        icono: 'fas fa-download',
        titulo: 'Descargar material',
        download: 'downloads/material.zip',
      },
      {
        icono: 'far fa-registered',
        titulo: 'Créditos',
        nombreRuta: 'creditos',
      },
    ],
  },
  global: {
    Name:
      'Fundamentos en tecnología aplicada en sistemas electromecánicos e industriales',
    Description:
      'El componente brinda formación integral en desarrollo, análisis y monitoreo de sistemas productivos. Abarca áreas clave como electrotecnia DC, electrónica digital, sistemas embebidos, dibujo técnico y caracterización de variables en procesos. Prepara a principiantes y técnicos para enfrentar los desafíos técnicos de la industria con visión analítica y operativa.',
    imagenBannerPrincipal: require('@/assets/curso/portada/banner-principal.png'),
    fondoBannerPrincipal: require('@/assets/curso/portada/fondo-banner-principal.png'),
    imagenesDecorativasBanner: [
      {
        clases: ['banner-principal-decorativo-1', 'd-none', 'd-lg-block'],
        imagen: require('@/assets/curso/portada/banner-principal-decorativo-1.png'),
      },
      {
        clases: ['banner-principal-decorativo-2'],
        imagen: require('@/assets/curso/portada/banner-principal-decorativo-2.png'),
      },
      {
        clases: ['banner-principal-decorativo-3'],
        imagen: require('@/assets/curso/portada/banner-principal-decorativo-3.png'),
      },
    ],
  },
}
