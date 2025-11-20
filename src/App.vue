<template>
    <!-- https://chatgpt.com/c/68e702a2-bb70-8331-82c6-82aea24aab0e -->
    <!-- https://uxpilot.ai/a/ui-design?page=lqe4VcpSwooQoktDaHRw -->
    <NavegationSection />
    <HeroSection />
    <NossosTratamentos />
    <Doutoras />
    <br>
    <br>
</template>

<script setup>

import { onMounted } from 'vue'
import { initFlowbite } from 'flowbite'
import HeroSection from './components/HeroSection.vue'
import NavegationSection from './components/NavegationSection.vue'
import NossosTratamentos from './components/NossosTratamentos.vue'
import Doutoras from './components/Doutoras.vue'
import { useSEO } from '../composables/useSEO'
import { clinicSchema } from '../utils/schemas'


useSEO({
    title: 'Página Inicial',
    description: 'Bem-vindo ao Monai Clinic - Sistema de gestão completo',
    url: 'https://monaiclinic.com.br/',
    schema: clinicSchema
})


onMounted(() => {
    initFlowbite()
})

</script>
