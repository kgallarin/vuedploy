<template>
  <FeaturesWrapper>
    <FeaturesLTR slot="feature" class="has-abs-img"> <!-- LEFT(texts) TO RIGHT(image) -->
      <!-- contents -->
      <h3 slot="header-text" class="header-texts">Encuentra tus relaciones</h3>
      <p slot="subtexts" class="subtexts">
        Tanto si solo quieres ligar, como si buscas <br />
        hacer amigos o incluso encontrar algo <br />
        más, es lo que tu prefieras.
      </p>
      <a slot="button" href="#" class="mbtn btn-primary btn-smoo-primary">unirme gratis</a>

      <!-- image -->
      <img slot="image" class="img-fluid absolute-for-size" src="@images/icon_group.png" alt="card">

    </FeaturesLTR>
    <FeaturesRTL slot="feature"> <!-- RIGHT(texts) TO LEFT(image) -->
      <!-- contents -->
      <h3 slot="header-text" class="header-texts">Tú decides que buscas</h3>
      <p slot="subtexts" class="subtexts">
        ¿Hablar, quedar o hacer amigos? Déjate<br />
        llevar, elige quien te guste y ¡dile algo! <br />
        Más de la mitad de nuestros usuarios <br />
        tienen una cita durante la primera <br />
        semana… Prueba suerte!
      </p>
      <a slot="button" href="#" class="mbtn btn-primary btn-smoo-primary">unirme gratis</a>

      <!-- image -->
      <img slot="image" class="img-fluid" src="@images/mobile.png" alt="card">

    </FeaturesRTL>
    <FeaturesLTR slot="feature"> <!-- LEFT(texts) TO RIGHT(image) -->
      <!-- contents -->
      <h3 slot="header-text" class="header-texts">Contacta con personas <br />como tú</h3>
      <p slot="subtexts" class="subtexts">
        Conecta con gente de tu ciudad. No lo <br />
        pienses más y entra al fenómeno social<br />
        del momento. Cada día miles de usuarios<br />
        como tú se unen buscando todo tipo de<br />
        relaciones.
      </p>
      <a slot="button" href="#" class="mbtn btn-primary btn-smoo-primary">unirme gratis</a>

      <!-- image -->
      <img slot="image" class="img-fluid" src="@images/cards.png" alt="card">

    </FeaturesLTR>
  </FeaturesWrapper>
</template>

<script>
  import FeaturesWrapper from './FeaturesWrapper.vue'
  import FeaturesRTL from './FeaturesRTL.vue'
  import FeaturesLTR from './FeaturesLTR.vue'
  export default{
    name:'Features',
    components: {
      FeaturesWrapper,
      FeaturesRTL,
      FeaturesLTR
    }
  }
</script>
