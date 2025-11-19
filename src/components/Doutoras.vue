<template>
    <div id="sobre-nos" class="container">
        <div class="max_container">
            <div class="titulo__equipe">Sobre nós</div>
            <div class="wrapper__doutoras">
                <img class="doutoras" src="/img/doctors.jpeg" alt="doutoras" />
                <div class="bio">
                    A Monai Clinic nasceu do sonho compartilhado de duas profissionais que acreditam no poder do cuidado
                    feito com técnica, sensibilidade e atenção aos detalhes.
                    As idealizadoras são a Dra. Natacha Passos, cirurgiã-dentista com atuação em harmonização facial
                    avançada, e a Dra. Wllyenne Alarcão, enfermeira pós-graduada em Estética Avançada.
                    <br /> <br />
                    Elas uniram suas trajetórias, experiências e propósito para criar um espaço onde cada paciente é
                    acolhido com responsabilidade, delicadeza e excelência. Juntas, conduzem uma visão de estética
                    moderna, segura e natural, sempre valorizando a beleza única de cada rosto.
                    <br /> <br />
                    A Monai surgiu para ser mais do que uma clínica estética: nasceu para ser um ambiente de confiança,
                    naturalidade e cuidado verdadeiro com cada rosto e cada história.

                </div>
            </div>
        </div>
    </div>
</template>


<style lang="css" scoped>
.container {
    max-width: 1920px;
}

.max_container {
    padding: 0 1.3rem;
}

.titulo__equipe {
    font-size: 30px;
    font-weight: 700;
    margin-bottom: 1rem;
}

.wrapper__doutoras {
    display: flex;
    flex-direction: column;
    gap: 1rem;
}

.bio {
    width: 100%;
    font-size: 16px;
    text-align: justify;
    margin-top: 0.8rem;
}

.doutoras {
    height: 410px;
    object-fit: cover;
    border-radius: 1rem;
}

.titulo__equipe {
    margin-top: 3rem;
}

@media (min-width: 900px) {
    .max_container {
        max-width: 1440px;
        margin: 0 auto;
        padding: 0 2rem;
    }

    .doutoras{
        height: 530px;
        box-shadow: 0px 2px 16px rgba(0,0,0,0.09);
    }

    .wrapper__doutoras {
        flex-direction: row;
        overflow: hidden;
        border-radius: 20px;      
    }

    .bio {
        width: 580px;
        text-align:start;
    }
}
</style>
