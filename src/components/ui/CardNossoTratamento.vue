<template>
    <section class="tratamentos-grid">
      <article
        v-for="(item, index) in tratamentos"
        :key="index"
        class="tratamento-card"
      >
        <h3 class="tratamento-title">{{ item.titulo }}</h3>
        <p class="tratamento-desc">{{ item.descricao }}</p>
      </article>
    </section>
  </template>
  
  <script setup>
  import { tratamentos } from '@/function/tratamento';
  </script>
  
  <style lang="scss" scoped>
  .tratamentos-grid {
    display: grid;
    grid-template-columns: 1fr;
    gap: 1rem;
    width: 100%; 
  
    @media (min-width: 900px) {
      grid-template-columns: repeat(3, 1fr);
      gap: 2rem;
    }
  }
  
  .tratamento-card {
    background: #f1f2f3;
    border: 1px solid #ccc;
    border-radius: 0.5rem;
    padding: 1rem;
    box-shadow: 0 2px 6px #0001;
    transition: box-shadow 0.2s;
  
    &:hover {
      box-shadow: 0 4px 14px #0002;
    }
  }
  
  .tratamento-title {
    margin: 0;
    font-size: 1.15rem;
    font-weight: 700;
    color: #222;
  }
  
  .tratamento-desc {
    margin: 0.5rem 0 0 0;
    font-size: 1rem;
    color: #444;
    line-height: 1.45;
  }
  </style>
  