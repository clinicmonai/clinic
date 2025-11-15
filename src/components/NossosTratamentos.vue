<template>

    <div class="container">
        <div class="max_container">
            <div class="title_nossos_tratamentos">
                Nossos Tratamentos
            </div>
            <CardNossoTratamento />
        </div>
    </div>

</template>

<script setup>
import CardNossoTratamento from './ui/CardNossoTratamento.vue';


</script>

<style lang="scss" scoped>
.container {
    background-color: #f7f3f2;
    max-width: 1920px;
}

.max_container {
    width: 100%;
    padding: 0 1.3rem;
}

.title_nossos_tratamentos {
    padding-top: 3rem;
    padding-bottom: 1rem;
    font-size: 30px;
    font-weight: 700;
}

@media (min-width: 900px) {
    .max_container {
        max-width: 1440px;
        margin: 0 auto;
        padding: 0;
    }
}

</style>