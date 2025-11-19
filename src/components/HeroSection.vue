<template>
  <div id="inicio" class="container">
    <div class="content">
      <div class="left">
        <h1 class="titulo--principal">
          Beleza em cada <span>detalhe</span>
        </h1>
        <p class="paragrafo">
          Na Monai, acreditamos que cuidar do rosto é valorizar sua história. Unimos técnicas avançadas, precisão e
          naturalidade para oferecer os melhores tratamentos em rejuvenescimento facial, harmonização e revitalização da
          pele.
          Aqui, cada detalhe importa — e cada paciente é acolhido com atenção, conforto e resultados que elevam a
          autoestima com elegância.
        </p>
        <div class="btn_agenda"><button @click="abrirWhatsapp" href="#">Agende sua Consulta</button></div>
      </div>
      <div class="right">
        <img src="/img/09.jpg" alt="Tratamento facial">
      </div>
    </div>
  </div>
</template>

<script setup>
const abrirWhatsapp = () => {
  const numero = '5561995002107';
  const mensagem = encodeURIComponent('Olá! Tenho interesse em marcar uma consulta na Monai.');
  const url = `https://wa.me/${numero}?text=${mensagem}`;
  window.open(url, '_blank');
};
</script>

<style scoped lang="scss">
// ========== MOBILE FIRST ==========
.container {
  width: 100%;
  margin: 0 auto;
  padding: 2rem 0;
  background: linear-gradient(105deg, #f5e9b841 0%, #FFFFFF 100%);
  overflow-x: hidden;
}

.content {
  display: flex;
  flex-direction: column;
  width: 100%;
  gap: 2rem;
}

.left {
  width: 100%;
  padding: 0 20px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  gap: 1rem;
}

.titulo--principal {
  font-size: 2.4rem;
  font-weight: bold;
  line-height: 110%;
  text-align: start;
  color: #333333;

  span {
    color: #7e7d7b;
    font-weight: bold;
  }
}

.paragrafo {
  font-size: 1rem;
  color: #333333;
  text-align: start;
  line-height: 1.6;
}

.btn_agenda button {
  background-color: #0f0a09;
  color: #f7f3f2;
  padding: 0.8rem;
  border-radius: 0.8rem;
  min-width: 200px;
  font-weight: 700 !important;
  cursor: pointer;
}

.right {
  width: 100%;
  position: relative;

  img {
    width: 100%;
    height: auto;
    min-height: 300px;
    max-height: 500px;
    object-fit: cover;
    display: block;
    padding: 0 1.3rem;
    border-radius: 0.5rem;
  }
}

// ========== TABLET ==========
@media screen and (min-width: 768px) {
  .container {
    padding: 3rem 0;
  }

  .content {
    gap: 2.5rem;
  }

  .left {
    padding: 0 40px;
  }

  .titulo--principal {
    font-size: 3rem;
  }

  .paragrafo {
    font-size: 1.3rem;
  }

  .right img {
    min-height: 400px;
    max-height: 600px;
  }
}

// ========== DESKTOP ==========
@media screen and (min-width: 1001px) {
  .container {
    max-width: 1920px;
    padding: 6rem 50px 6rem 36px;
  }

  .content {
    flex-direction: row;
    align-items: center;
    gap: 2.5rem;
    max-width: 1440px;
    margin: 0 auto;
  }

  .left {
    width: 50%;
    height: 400px;
    padding: 0;
    justify-content: center;
    gap: 1.5rem;
  }

  .titulo--principal {
    font-size: 4rem;
    text-align: left;
    line-height: 100%;
  }

  .paragrafo {
    font-size: 1.45rem;
    text-align: start;
  }

  .right {
    width: 50%;
    height: 400px;

    img {
      width: 100%;
      height: 100%;
      border-radius: 1rem;
      min-height: unset;
      max-height: unset;
    }
  }
}

// ========== LARGE DESKTOP ==========
@media screen and (min-width: 1440px) {
  .titulo--principal {
    font-size: 4.5rem;
  }

  .paragrafo {
    font-size: 1.6rem;
  }

  .left,
  .right {
    height: 500px;
  }
}
</style>
