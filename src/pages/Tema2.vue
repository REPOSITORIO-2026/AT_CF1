<template>
  <div class="curso-main-container pb-3">
    <BannerInterno></BannerInterno>
    <div class="container tarjeta tarjeta--blanca p-4 p-md-5 mb-5">
      <div class="titulo-principal color-acento-contenido" data-aos="flip-up">
        <div class="titulo-principal__numero"><span>2</span></div>
        <h1>Electrónica digital y sistemas embebidos</h1>
      </div>
      <div class="row">
        <div class="col-lg" data-aos="fade-right">
          <p>
            La electrónica digital y los sistemas embebidos son fundamentales en
            el mundo de la mecatrónica y la automatización. Estos conocimientos
            permiten desarrollar y controlar dispositivos y sistemas complejos a
            través de circuitos digitales y microcontroladores. Este apartado
            tiene como propósito introducir a los conceptos clave de la
            electrónica digital y los sistemas embebidos, ofreciendo una base
            sólida tanto en teoría como en práctica. A través de actividades
            prácticas, el estudiante comprenderá cómo estos sistemas pueden
            aplicarse en la industria, incluyendo el sector agrícola, para
            mejorar la productividad y la eficiencia.
          </p>
          <div
            class="p-4 text-white"
            style="background-color:#294B6D;border-radius:7px;"
          >
            <p class="mb-0">
              En la actualidad la electrónica se ha ido transformando,
              permitiendo la evolución de los operadores tecnológicos, haciendo
              posible la aparición de equipos y máquinas que están
              revolucionando la vida del ser humano desde el ámbito industrial,
              social, económico, de educación, salud y todos aquellos que
              podamos imaginar. Es así, como la mayoría de estos artefactos
              tecnológicos en la esencia de su funcionamiento son sistemas
              digitales que todo el tiempo están haciendo operaciones lógicas
              con unos y ceros, por tanto, casi cualquier dispositivo
              electrónico en esencia lo que hace es realizar operaciones lógicas
              basadas en el álgebra.
            </p>
          </div>
        </div>
        <div class="col-lg-auto d-none d-lg-block" data-aos="fade-left">
          <figure><img src="@/assets/curso/tema2/1.png" /></figure>
        </div>
      </div>
      <Separador></Separador>
      <div class="titulo-segundo" data-aos="flip-up">
        <h2 id="t_2_1">2.1 Fundamentos teóricos a la electrónica digital</h2>
      </div>
      <div class="row mt-4">
        <div
          class="col-lg-auto d-none d-lg-block pe-lg-0"
          data-aos="fade-right"
        >
          <figure><img src="@/assets/curso/tema2/2.png" /></figure>
        </div>
        <div class="col-lg ps-lg-0" data-aos="fade-up">
          <div
            class="h-100 p-4 d-flex align-content-center flex-wrap"
            style="background-color:#CBF0F5;"
          >
            <p class="mb-0">
              La electrónica digital es una rama de la electrónica que se centra
              en el uso de señales digitales para el diseño y funcionamiento de
              circuitos y sistemas. A diferencia de la electrónica analógica,
              donde las señales varían de forma continua, la electrónica digital
              trabaja con señales que solo tienen dos niveles de voltaje,
              comúnmente llamados 1 y 0 (sistema binario). Estos niveles
              representan el encendido (1) y apagado (0) de un sistema. La
              principal ventaja de los sistemas digitales es su capacidad de ser
              exactos y resistentes a ruidos o interferencias, lo que los hace
              ideales para sistemas de control, almacenamiento de datos y
              procesamiento de información.
            </p>
          </div>
        </div>
      </div>
      <div class="cont_1_2">
        <div class="cont_decorativo mb-4 mt-5" data-aos="fade-right">
          <div class="row">
            <div class="col-auto pe-0">
              <figure><img src="@/assets/curso/tema1/3.svg" /></figure>
            </div>
            <div class="col ps-2" style="place-self:center;">
              <h3 class="mb-0 pe-4">Sistemas de numeración</h3>
            </div>
          </div>
        </div>
        <p data-aos="fade-right">
          Para trabajar en electrónica digital, es fundamental comprender los
          sistemas de numeración, ya que toda la información en un circuito
          digital se representa en forma de número.
        </p>
        <div class="row mt-4">
          <div class="col-lg mb-4 mb-lg-0" data-aos="zoom-in">
            <div
              class="bg-white p-4 h-100"
              style="box-shadow:0px 4px 20px rgba(0,0,0,.1);border-radius:14px;"
            >
              <figure class="mb-3">
                <img src="@/assets/curso/tema2/3.svg" style="max-width:76px;" />
              </figure>
              <h5>Sistema binario</h5>
              <p>
                Es el sistema numérico base de la electrónica digital. Usa solo
                dos dígitos, 0 y 1. Cada posición en un número binario
                representa una potencia de 2 (por ejemplo, 101 en binario es
                igual a 5 en decimal: 1×2² + 0×2¹ + 1×2⁰ = 4 + 0 + 1 = 5).
              </p>
            </div>
          </div>
          <div class="col-lg mb-4 mb-lg-0" data-aos="zoom-in">
            <div
              class="bg-white p-4 h-100"
              style="box-shadow:0px 4px 20px rgba(0,0,0,.1);border-radius:14px;"
            >
              <figure class="mb-3">
                <img src="@/assets/curso/tema2/4.svg" style="max-width:76px;" />
              </figure>
              <h5>Sistema decimal</h5>
              <p>
                Es el sistema numérico que usamos comúnmente, con base 10 (0 a
                9). En electrónica digital, es común tener que convertir entre
                decimal y binario.
              </p>
            </div>
          </div>
          <div class="col-lg mb-4 mb-lg-0" data-aos="zoom-in">
            <div
              class="bg-white p-4 h-100"
              style="box-shadow:0px 4px 20px rgba(0,0,0,.1);border-radius:14px;"
            >
              <figure class="mb-3">
                <img src="@/assets/curso/tema2/5.svg" style="max-width:76px;" />
              </figure>
              <h5>Sistema hexadecimal</h5>
              <p>
                Usa 16 símbolos (0 a 9 y A a F) y se utiliza en programación y
                diseño de circuitos digitales, ya que cada dígito hexadecimal
                puede representar cuatro bits binarios. Por ejemplo, el número
                hexadecimal A3 es igual a 10100011 en binario y 163 en decimal.
              </p>
            </div>
          </div>
        </div>
        <div class="cont_decorativo mb-4 mt-5" data-aos="fade-right">
          <div class="row">
            <div class="col-auto pe-0">
              <figure><img src="@/assets/curso/tema1/3.svg" /></figure>
            </div>
            <div class="col ps-2" style="place-self:center;">
              <h3 class="mb-0 pe-4">Álgebra Booleana</h3>
            </div>
          </div>
        </div>
        <p data-aos="fade-right">
          Es la base matemática de la electrónica digital. Fue desarrollada por
          el matemático George Boole y se utiliza para simplificar circuitos
          lógicos. En álgebra booleana, se usan operaciones básicas como AND, OR
          y NOT para manipular expresiones lógicas:
        </p>
        <div class="row mt-4">
          <div class="col-lg-5 mb-4 mb-lg-0" data-aos="fade-right">
            <div class="h-100 p-4" style="background-color:#CBF0F5;">
              <ul class="lista-ul mb-0">
                <li class="d-flex">
                  <i class="fas fa-check-circle" style="color:#78B62E;"></i
                  ><span
                    >Operación AND: Devuelve 1 solo si ambas entradas son
                    1.</span
                  >
                </li>
                <li class="d-flex">
                  <i class="fas fa-check-circle" style="color:#78B62E;"></i
                  ><span>Ejemplo: A·B; si A=1 y B=1, entonces A·B=1</span>
                </li>
                <li class="d-flex">
                  <i class="fas fa-check-circle" style="color:#78B62E;"></i
                  ><span
                    >Operación OR: Devuelve 1 si al menos una de las entradas es
                    1.</span
                  >
                </li>
                <li class="d-flex">
                  <i class="fas fa-check-circle" style="color:#78B62E;"></i
                  ><span>Ejemplo: A+B; si A=1 o B=1, entonces A+B=1</span>
                </li>
                <li class="d-flex">
                  <i class="fas fa-check-circle" style="color:#78B62E;"></i
                  ><span
                    >Operación NOT: Invierte el valor de la entrada; convierte
                    un 1 en 0 y un 0 en 1.</span
                  >
                </li>
                <li class="d-flex mb-0">
                  <i class="fas fa-check-circle" style="color:#78B62E;"></i
                  ><span>Ejemplo: Ā; si A=1, entonces Ā=0</span>
                </li>
              </ul>
            </div>
          </div>
          <div class="col-lg-7" data-aos="fade-left">
            <div class="h-100 p-4 text-white" style="background-color:#294B6D;">
              <p>
                <strong>Ejemplo práctico:</strong> simplificación de funciones
                lógicas
              </p>
              <p>
                Para una función lógica dada, se puede simplificar usando
                propiedades booleanas. Por ejemplo:
              </p>
              <p class="mb-0">F = A·B + A·B̄</p>
              <p>Usando simplificación: F = A</p>
              <p class="mb-0">
                <strong>Nota:</strong> Este ejemplo muestra cómo una expresión
                compleja (A·B + A·B̄) se puede reducir a una forma más simple (A)
                aplicando las leyes del álgebra booleana.
              </p>
            </div>
          </div>
        </div>
      </div>
      <div class="cont_decorativo mb-4 mt-5" data-aos="fade-right">
        <div class="row">
          <div class="col-auto pe-0">
            <figure><img src="@/assets/curso/tema1/3.svg" /></figure>
          </div>
          <div class="col ps-2" style="place-self:center;">
            <h3 class="mb-0 pe-4">Compuertas Lógicas</h3>
          </div>
        </div>
      </div>
      <p data-aos="fade-right">
        Son los bloques fundamentales de los circuitos digitales. Cada compuerta
        realiza una operación booleana y se representa en circuitos electrónicos
        mediante componentes específicos.
      </p>
      <div class="row mt-4">
        <div class="col-lg-auto d-none d-lg-block" data-aos="fade-right">
          <figure><img src="@/assets/curso/tema2/6.svg" /></figure>
        </div>
        <div class="col-lg" data-aos="fade-left">
          <AccordionRED tipo="a" clase-tarjeta="tarjeta">
            <div
              class="row col-xl-11 m-auto"
              titulo="Compuerta &lt;em&gt;AND&lt;/em&gt;"
            >
              <p>Produce una salida de 1 solo si ambas entradas son 1.</p>
              <p class="mb-0">Compuerta AND</p>
              <figure>
                <div
                  class="titulo-sexto color-acento-contenido mt-3"
                  data-aos="fade-down"
                >
                  <h5>Figura 2.</h5>
                  <span>Electrotecnia</span>
                </div>
                <img
                  src="@/assets/curso/tema2/7.svg"
                  style="max-width:150px;"
                  alt="Imagen que presenta la tabla de verdad de la compuerta AND."
                />
              </figure>
            </div>
            <div
              class="row col-xl-11 m-auto"
              titulo="Compuerta &lt;em&gt;OR&lt;/em&gt;"
            >
              <p>
                Produce una salida de 1 si al menos una de las entradas es 1.
              </p>
              <p class="mb-0">Tabla de verdad:</p>
              <div
                class="titulo-sexto color-acento-contenido mt-3"
                data-aos="fade-down"
              >
                <h5>Figura 3.</h5>
                <span>Compuerta OR</span>
              </div>
              <figure>
                <img
                  src="@/assets/curso/tema2/8.svg"
                  style="max-width:150px;"
                  alt="Imagen que presenta la tabla de verdad de la compuerta OR."
                />
              </figure>
            </div>
            <div
              class="row col-xl-11 m-auto"
              titulo="Compuerta &lt;em&gt;NOT&lt;/em&gt;"
            >
              <p>Invierte la entrada.</p>
              <p class="mb-0">Tabla de verdad:</p>
              <div
                class="titulo-sexto color-acento-contenido mt-3"
                data-aos="fade-down"
              >
                <h5>Figura 4.</h5>
                <span>Compuerta NOT</span>
              </div>
              <figure>
                <img
                  src="@/assets/curso/tema2/9.svg"
                  style="max-width:150px;"
                  alt="Imagen que presenta la tabla de verdad de la compuerta NOT."
                />
              </figure>
            </div>
            <div
              class="row col-xl-11 m-auto"
              titulo="Compuertas &lt;em&gt;NAND, NOR, XOR, XNOR&lt;/em&gt;"
            >
              <p>
                Son compuertas compuestas que combinan las funciones básicas
                para realizar operaciones más avanzadas. La compuerta
                <em>XOR</em>, por ejemplo, solo da un 1 si las entradas son
                diferentes.
              </p>
            </div>
          </AccordionRED>
        </div>
      </div>
      <div class="col-xl-10 m-auto mt-4">
        <div
          class="p-4 p-lg-3"
          style="background-color:#78B62E;border-radius:10px;"
          data-aos="fade-up"
        >
          <div class="row mt-4">
            <div
              class="col-md-auto d-none d-md-block"
              style="place-self:center;"
            >
              <figure><img src="@/assets/curso/tema2/10.svg" /></figure>
            </div>
            <div class="col-md" style="place-self:center;">
              <h4>Ejercicio práctico - compuertas lógicas</h4>
              <p>
                <strong>Ejercicio práctico:</strong> Construcción de un Circuito
                con Compuertas Lógicas
              </p>
              <p class="mb-0">
                En un simulador como <em>Tinkercad</em> o en un
                <em>protoboard</em>, conecta dos interruptores y una luz LED.
                Usa una compuerta AND para que el LED se encienda solo si ambos
                interruptores están activados.
              </p>
            </div>
          </div>
        </div>
      </div>
      <Separador></Separador>
      <div class="titulo-segundo" data-aos="flip-up">
        <h2 id="t_2_2">2.2 Definición de sistema embebido</h2>
      </div>
      <div class="row">
        <div class="col-lg pe-lg-0" data-aos="fade-up">
          <div
            class="h-100 p-4 d-flex align-content-center flex-wrap"
            style="background-color:#98E2EC;"
          >
            <p class="mb-0">
              Un sistema embebido es un sistema de computación diseñado para
              realizar una función específica dentro de un dispositivo mayor. A
              diferencia de una computadora general, los sistemas embebidos
              están optimizados para ejecutar una tarea o conjunto de tareas
              concretas, como controlar la temperatura en un horno o gestionar
              los sistemas de riego en un campo agrícola. Estos sistemas suelen
              estar compuestos por un microcontrolador o un microprocesador y se
              encuentran en aplicaciones industriales, domésticas, automotrices
              y agrícolas.
            </p>
          </div>
        </div>
        <div class="col-lg-auto d-none d-lg-block ps-lg-0" data-aos="fade-left">
          <figure><img src="@/assets/curso/tema2/11.png" /></figure>
        </div>
      </div>
      <div class="cont_2_1">
        <div class="cont_decorativo mb-4 mt-5" data-aos="fade-right">
          <div class="row">
            <div class="col-auto pe-0">
              <figure><img src="@/assets/curso/tema1/3.svg" /></figure>
            </div>
            <div class="col ps-2" style="place-self:center;">
              <h3 class="mb-0 pe-4">
                Microcontroladores vs. microprocesadores: diferencias y usos
              </h3>
            </div>
          </div>
        </div>
        <div class="col-xl-10 m-auto mt-5">
          <div class="row justify-content-center">
            <div class="col-lg mb-4 mb-lg-0 col-md-9" data-aos="zoom-in">
              <div
                class="h-100 p-4 text-center"
                style="background-color:#B0C4D7;border-radius:23px;"
              >
                <figure class="mb-3">
                  <img
                    class="d-inline"
                    src="@/assets/curso/tema2/12.svg"
                    style="max-width:88px;"
                  />
                </figure>
                <h5>Microcontroladores</h5>
                <p>
                  Incluyen CPU, memoria y periféricos en un solo chip,
                  optimizados para tareas de control y monitoreo en aplicaciones
                  específicas. Son ideales para sistemas embebidos donde se
                  necesita bajo consumo de energía y operación específica.
                  Ejemplos: Arduino, PIC.
                </p>
              </div>
            </div>
            <div class="col-lg mb-4 mb-lg-0 col-md-9" data-aos="zoom-in">
              <div
                class="h-100 p-4 text-center"
                style="background-color:#B0C4D7;border-radius:23px;"
              >
                <figure class="mb-3">
                  <img
                    class="d-inline"
                    src="@/assets/curso/tema2/13.svg"
                    style="max-width:88px;"
                  />
                </figure>
                <h5>Microprocesadores</h5>
                <p>
                  Son procesadores de propósito general que requieren
                  componentes adicionales (RAM, almacenamiento, etc.) para
                  funcionar. Son más potentes y versátiles, por lo que se usan
                  en sistemas que requieren mayor capacidad de procesamiento,
                  como computadoras y teléfonos inteligentes.
                </p>
              </div>
            </div>
          </div>
        </div>
        <div class="cont_decorativo mb-4 mt-5" data-aos="fade-right">
          <div class="row">
            <div class="col-auto pe-0">
              <figure><img src="@/assets/curso/tema1/3.svg" /></figure>
            </div>
            <div class="col ps-2" style="place-self:center;">
              <h3 class="mb-0 pe-4">
                Arquitectura básica de un sistema embebido: incluye CPU, memoria
                y dispositivos de entrada/salida
              </h3>
            </div>
          </div>
        </div>
        <div class="row mt-4">
          <div class="col-lg-auto d-none d-lg-block" data-aos="fade-right">
            <figure><img src="@/assets/curso/tema2/14.svg" /></figure>
          </div>
          <div class="col-lg" data-aos="fade-left">
            <p>La arquitectura de un sistema embebido típico incluye:</p>
            <div class="p-3 p-lg-4" style="background-color:#294B6D;">
              <ul class="lista-ul mb-0">
                <li class="d-flex bg-white p-2" style="border-radius:4px;">
                  <i class="fas fa-check-circle" style="color:#78B62E;"></i
                  ><span
                    ><strong>CPU (Unidad Central de Procesamiento):</strong>
                    Realiza las operaciones lógicas y aritméticas, y controla el
                    flujo de datos.</span
                  >
                </li>
                <li class="d-flex bg-white p-2" style="border-radius:4px;">
                  <i class="fas fa-check-circle" style="color:#78B62E;"></i
                  ><span
                    ><strong>Memoria:</strong> Usada para almacenar
                    instrucciones y datos. Puede ser memoria ROM (almacena el
                    programa de forma permanente) y RAM (memoria
                    temporal).</span
                  >
                </li>
                <li class="d-flex bg-white p-2 mb-0" style="border-radius:4px;">
                  <i class="fas fa-check-circle" style="color:#78B62E;"></i
                  ><span
                    ><strong>Dispositivos de Entrada/Salida (I/O):</strong>
                    Interfases para conectar el sistema embebido con sensores
                    (entrada) y actuadores (salida), como un sensor de
                    temperatura y una bomba de agua en un sistema de
                    riego.</span
                  >
                </li>
              </ul>
            </div>
          </div>
        </div>
        <Separador></Separador>
        <div class="titulo-segundo" data-aos="flip-up">
          <h2 id="t_2_3">
            2.3 Lenguajes de programación y entornos de desarrollo
          </h2>
        </div>
      </div>
      <div class="row">
        <div class="col-lg pe-lg-0" data-aos="fade-up">
          <div
            class="h-100 p-4 d-flex align-content-center flex-wrap"
            style="background-color:#C8E2AA;"
          >
            <p class="fw-bold">
              Lenguajes comunes: C y C++ como principales lenguajes para
              microcontroladores
            </p>
            <p class="mb-0">
              Los lenguajes de programación C y C++ son los más utilizados en la
              programación de sistemas embebidos debido a su eficiencia y
              control sobre los recursos de hardware. C es particularmente
              popular en microcontroladores debido a su simplicidad y rapidez,
              mientras que C++ se usa cuando se necesita un enfoque orientado a
              objetos
            </p>
          </div>
        </div>
        <div class="col-lg-auto d-none d-lg-block ps-lg-0" data-aos="fade-left">
          <figure><img src="@/assets/curso/tema2/15.png" /></figure>
        </div>
      </div>
      <div class="cont_decorativo mb-4 mt-5" data-aos="fade-right">
        <div class="row">
          <div class="col-auto pe-0">
            <figure><img src="@/assets/curso/tema1/3.svg" /></figure>
          </div>
          <div class="col ps-2" style="place-self:center;">
            <h3 class="mb-0 pe-4">
              Entornos de desarrollo: uso de herramientas como Arduino IDE o
              MPLAB
            </h3>
          </div>
        </div>
      </div>
      <div class="row mt-5">
        <div class="col-lg-auto d-none d-lg-block" data-aos="fade-right">
          <figure><img src="@/assets/curso/tema2/16.svg" /></figure>
        </div>
        <div class="col-lg pe-lg-0" data-aos="fade-left">
          <ul class="lista-ul">
            <li class="d-flex mb-3">
              <i class="fas fa-check-circle" style="color:#78B62E;"></i
              ><span
                ><strong>Arduino IDE:</strong> Entorno de desarrollo fácil de
                usar diseñado para programar microcontroladores Arduino. Ofrece
                una interfaz intuitiva y permite a los principiantes desarrollar
                proyectos rápidamente.</span
              >
            </li>
            <li class="d-flex">
              <i class="fas fa-check-circle" style="color:#78B62E;"></i
              ><span
                ><strong>MPLAB:</strong> Entorno de desarrollo para programar
                microcontroladores PIC. Proporciona un conjunto de herramientas
                avanzadas que permiten el desarrollo, depuración y programación
                de aplicaciones en sistemas embebidos.</span
              >
            </li>
          </ul>
          <p class="mb-0">
            Ambos entornos son utilizados para programar y probar proyectos
            embebidos que pueden aplicarse en diferentes sectores, incluyendo el
            agrícola.
          </p>
        </div>
      </div>
      <Separador></Separador>
      <div class="titulo-segundo" data-aos="flip-up">
        <h2 id="t_2_4">2.4 Aplicaciones prácticas</h2>
      </div>
      <p data-aos="fade-right">
        Las aplicaciones básicas en el apartado de
        <strong>Lenguajes de Programación y Entornos de Desarrollo</strong> para
        sistemas embebidos en el contexto de electrónica digital y sistemas
        embebidos incluyen una variedad de proyectos y funciones de control y
        monitoreo. A continuación, se describen algunas aplicaciones comunes
        usando lenguajes como C y C++, y entornos como
        <strong>Arduino IDE y MPLAB</strong> (Tabla. 3)
      </p>
      <div
        class="titulo-sexto color-acento-contenido mt-5"
        data-aos="fade-down"
      >
        <h5>Tabla 3.</h5>
        <span
          >Aplicaciones prácticas de sistemas embebidos y microcontroladores en
          control y automatización agrícola.</span
        >
      </div>
      <div class="tabla-a color-acento-botones" data-aos="fade-up">
        <table>
          <caption class="fw-normal">
            Fuente: OIT, 2024.
          </caption>
          <thead style="border:0;">
            <tr class="text-center" style="background-color:#78B62E;">
              <th>Aplicación</th>
              <th>Desarrollo</th>
              <th>Descripción</th>
            </tr>
          </thead>
          <tbody>
            <tr style="background-color:#F6F6F6;">
              <td
                class="text-center"
                style="border:0;border-right:1px #AFAFAF solid;"
              >
                Control de dispositivos de encendido y apagado
              </td>
              <td style="border:0;border-right:1px #AFAFAF solid;">
                <p>
                  <strong>Aplicación:</strong> Encender y apagar un LED o
                  cualquier dispositivo (como un motor o una bomba) en función
                  de una entrada.
                </p>
                <p><strong>Lenguaje:</strong> C o C++.</p>
                <p>
                  <strong>Entorno de Desarrollo:</strong> Arduino IDE o MPLAB.
                </p>
              </td>
              <td style="border:0;">
                <p>
                  Este es uno de los primeros ejercicios que se enseña para
                  familiarizarse con el control de salidas digitales. Se puede
                  usar para aprender a manejar entradas (como botones o
                  sensores) y cómo estas pueden activar salidas específicas.
                </p>
              </td>
            </tr>
            <tr style="background-color:#fff;">
              <td
                class="text-center"
                style="border:0;border-right:1px #AFAFAF solid;"
              >
                Lectura de sensores y actuación en función de variables
              </td>
              <td style="border:0;border-right:1px #AFAFAF solid;">
                <p>
                  <strong>Aplicación:</strong> Leer datos de sensores (como un
                  sensor de temperatura, humedad o luz) y activar un dispositivo
                  en función de esos valores.
                </p>
                <p>
                  <strong>Lenguaje:</strong> C (para microcontroladores PIC) o
                  C++ (en Arduino).
                </p>
                <p>
                  <strong>Entorno de Desarrollo:</strong> Arduino IDE o MPLAB.
                </p>
              </td>
              <td style="border:0;">
                <p>
                  Permite la implementación de sistemas de control básico. Por
                  ejemplo, se puede encender un ventilador cuando la temperatura
                  supera un límite o activar una bomba de agua cuando la humedad
                  del suelo cae por debajo de un valor específico.
                </p>
              </td>
            </tr>
            <tr style="background-color:#F6F6F6;">
              <td
                class="text-center"
                style="border:0;border-right:1px #AFAFAF solid;"
              >
                Control de motores y actuadores
              </td>
              <td style="border:0;border-right:1px #AFAFAF solid;">
                <p>
                  <strong>Aplicación:</strong> Controlar la velocidad y
                  dirección de un motor para aplicaciones como sistemas de riego
                  móviles o pequeñas plataformas de transporte automatizado.
                </p>
                <p><strong>Lenguaje:</strong> C o C++.</p>
                <p><strong>Entorno de Desarrollo:</strong> Arduino IDE.</p>
              </td>
              <td style="border:0;">
                <p>
                  En esta aplicación, los estudiantes aprenden a controlar
                  motores de corriente continua o motores paso a paso utilizando
                  módulos de control y funciones de PWM (modulación por ancho de
                  pulso), esenciales en el manejo de motores.
                </p>
              </td>
            </tr>
            <tr style="background-color:#fff;">
              <td
                class="text-center"
                style="border:0;border-right:1px #AFAFAF solid;"
              >
                Monitoreo de variables y almacenamiento de datos
              </td>
              <td style="border:0;border-right:1px #AFAFAF solid;">
                <p>
                  <strong>Aplicación:</strong> Monitorear y registrar datos de
                  sensores como temperatura, humedad, o nivel de luz en un
                  sistema de almacenamiento de datos.
                </p>
                <p><strong>Lenguaje:</strong> C o C++.</p>
                <p>
                  <strong>Entorno de Desarrollo:</strong> Arduino IDE o MPLAB.
                </p>
              </td>
              <td style="border:0;">
                <p>
                  Esta aplicación es básica en sistemas de monitoreo. Los datos
                  recolectados por los sensores se guardan en una tarjeta SD o
                  en una memoria EEPROM para un análisis posterior, permitiendo
                  el monitoreo continuo de variables importantes en sistemas
                  agrícolas.
                </p>
              </td>
            </tr>
            <tr style="background-color:#F6F6F6;">
              <td
                class="text-center"
                style="border:0;border-right:1px #AFAFAF solid;"
              >
                Sistema de alarma con sensores
              </td>
              <td style="border:0;border-right:1px #AFAFAF solid;">
                <p>
                  <strong>Aplicación:</strong> Crear un sistema de alarma que se
                  active cuando los datos de un sensor detectan condiciones
                  anormales, como una temperatura muy alta o humedad muy baja.
                </p>
                <p><strong>Lenguaje:</strong> C o C++.</p>
                <p>
                  <strong>Entorno de Desarrollo:</strong> Arduino IDE o MPLAB.
                </p>
              </td>
              <td style="border:0;">
                <p>
                  Este tipo de aplicación es útil para entornos donde es
                  necesario mantener ciertas condiciones (por ejemplo, en
                  invernaderos o almacenes). Se utiliza programación básica para
                  verificar el valor de sensores y activar alarmas visuales o
                  sonoras en caso de condiciones fuera de los límites
                  establecidos.
                </p>
              </td>
            </tr>
            <tr style="background-color:#fff;">
              <td
                class="text-center"
                style="border:0;border-right:1px #AFAFAF solid;"
              >
                Interfaz básica con usuario
              </td>
              <td style="border:0;border-right:1px #AFAFAF solid;">
                <p>
                  <strong>Aplicación:</strong> Crear una interfaz con botones o
                  una pantalla LCD para que el usuario pueda interactuar con el
                  sistema.
                </p>
                <p><strong>Lenguaje:</strong> C o C++.</p>
                <p>
                  <strong>Entorno de Desarrollo:</strong> Arduino IDE o MPLAB.
                </p>
              </td>
              <td style="border:0;">
                <p>
                  Esta aplicación permite que los estudiantes programen
                  interfaces simples, donde el usuario puede ajustar valores
                  (como el límite de temperatura para una alarma) y ver datos en
                  tiempo real. Esto introduce conceptos básicos de interacción
                  usuario-sistema en sistemas embebidos.
                </p>
              </td>
            </tr>
            <tr style="background-color:#F6F6F6;">
              <td
                class="text-center"
                style="border:0;border-right:1px #AFAFAF solid;"
              ></td>
              <td style="border:0;border-right:1px #AFAFAF solid;"></td>
              <td style="border:0;"></td>
            </tr>
            <tr style="background-color:#fff;">
              <td
                class="text-center"
                style="border:0;border-right:1px #AFAFAF solid;"
              >
                Control de sistemas de riego automatizado
              </td>
              <td style="border:0;border-right:1px #AFAFAF solid;">
                <p>
                  <strong>Aplicación:</strong> Controlar automáticamente el
                  riego de plantas en función de la humedad del suelo y el
                  horario.
                </p>
                <p><strong>Lenguaje:</strong> C o C++.</p>
                <p><strong>Entorno de Desarrollo:</strong> Arduino IDE.</p>
              </td>
              <td style="border:0;">
                <p>
                  Se programa un sistema embebido para monitorear la humedad del
                  suelo y activar una bomba de agua cuando la humedad cae por
                  debajo de un umbral. También se pueden establecer horarios
                  específicos para el riego, integrando lógica y control de
                  tiempo.
                </p>
              </td>
            </tr>
            <tr style="background-color:#F6F6F6;">
              <td
                class="text-center"
                style="border:0;border-right:1px #AFAFAF solid;"
              >
                Proyectos básicos de comunicación serial
              </td>
              <td style="border:0;border-right:1px #AFAFAF solid;">
                <p>
                  <strong>Aplicación:</strong> Enviar y recibir datos entre el
                  microcontrolador y otros dispositivos (como una computadora o
                  un módulo de comunicación).
                </p>
                <p><strong>Lenguaje:</strong> C o C++.</p>
                <p><strong>Entorno de Desarrollo:</strong> Arduino IDE.</p>
              </td>
              <td style="border:0;">
                <p>
                  Estos proyectos permiten a los estudiantes aprender sobre la
                  comunicación serial, lo cual es esencial para enviar datos del
                  microcontrolador a una computadora para su visualización o
                  control remoto. Un ejemplo podría ser enviar la lectura de un
                  sensor a una computadora para mostrar gráficos en tiempo real.
                </p>
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
  name: 'Tema2',
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
