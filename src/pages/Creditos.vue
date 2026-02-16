<template>
  <div class="curso-main-container creditos-vista">
    <BannerInterno icono="far fa-registered" titulo="Créditos"></BannerInterno>
    <div class="container tarjeta tarjeta--blanca p-4 p-md-5">
      <div class="row mb-4 justify-content-center align-items-center">
        <div class="col-md-10 mb-4 mb-md-0">
          <div class="tarjeta p-3 text-center h-100">
            <h2>Elaborado por:</h2>
            <img
              class="mx-auto d-inline-block mb-3"
              src="@/assets/logos/logo-oit.png"
              style="width:80%;max-width:613px"
              alt="Logotipo de la Organización Internacional del Trabajo."
            />
          </div>
        </div>
      </div>
      <div class="row mb-4 mb-md-5">
        <div class="col-md-6 mb-4 mb-md-0">
          <div class="tarjeta credito p-3 text-center h-100">
            <img
              class="d-inline-block"
              src="@/assets/bullets/creditos-img.svg"
              style="width: 70px"
            />
            <p>
              Fotografías y vectores tomados de
              <a href="https://www.freepik.es/" target="_blank"
                >www.freepik.es</a
              >,
              <a href="https://www.shutterstock.com/" target="_blank"
                >www.shutterstock.com</a
              >,
              <a href="https://unsplash.com/" target="_blank">unsplash.com </a>y
              <a href="https://www.flaticon.com/" target="_blank"
                >www.flaticon.com</a
              >
            </p>
          </div>
        </div>
        <div class="col-md-6">
          <div class="tarjeta credito p-3 text-center h-100">
            <img
              class="d-inline-block"
              src="@/assets/bullets/creditos-cc.svg"
              style="width: 70px;"
            />
            <p class="mb-0">
              Licencia creative commons CC BY-NC-SA<br /><a
                href="https://creativecommons.org/licenses/by-nc-sa/2.0/"
                target="_blank"
                >ver licencia</a
              >
            </p>
          </div>
        </div>
      </div>
      <Footer all-round="all-round"></Footer>
    </div>
  </div>
</template>
