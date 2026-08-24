import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

interface Proyecto {
  titulo: string;
  descripcion: string;
  enlace: string;
  imagen: string;
}

@Component({
  selector: 'portfolio-body-text',
  imports: [CommonModule],
  templateUrl: './body-text.component.html',
  styleUrl: './body-text.component.css'
})
export class BodyTextComponent {
  habilidadesTecnicas: string[] = [
    'Desarrollo en el lenguaje Java en campos tales como el Frontend, o el desarrollo de soluciones informáticas.',
    'Desarrollo de plataformas Frontend en Angular y NextJS',
    'Despliegue de servicios a través de la nube',
    'Implementación de servidores locales, que se conecte al internet y despliegue servicios a través de dominios, mediante una conexión segura',
    'Creación de proyectos de API REST mediante el framework de ASP .NET CORE en el lenguaje de C#; y FastAPI de Python',
    'Análisis, procesamiento y visualización de datos con el uso de librerías como pandas, selenium, matplotlib y sqlalchemy en Python usando Anaconda; y manejando el uso de PowerBI.',
    'Creación de videojuegos en las plataformas de escritorio y móvil, con el uso del motor gráfico de Unity.',
    'Uso de C++ a nivel intermedio.',
    'Uso de Python a nivel intermediario, enfocado a la ciencia de datos'
  ];

  habilidadesBlandas: string[] = ['Colaborador', 'Amistoso', 'Serio', 'Flexible', 'Empático'];

  proyectos: Proyecto[] = [
    {
      titulo: 'Banguelia Karamanos',
      descripcion: 'Desarrollo de una plataforma web para el salón de belleza de Banguelia Karamanos\nTrabajando como analista QA, encargandose del control de calidad, y de que las funcionalidades backend y frontend estuvieran alineados con los requisitos.\nDesarrollador backend, trabajando en una API monolítica modular en ASP CORE .NET',
      enlace: '',
      imagen: 'banguelia.png'
    },
    {
      titulo: 'Inteligencia Artificial experta en Ferretería Industrial',
      descripcion: 'Sistema de Agente Inteligente que responda consultas a los clientes en tiempo real sobre una empresa, trabajando con documentación normada.\nTrabajando como líder del proyecto, asegurando una correcta gestión, coordinación, e implementación del agente.',
      enlace: 'https://drive.google.com/file/d/1nQcUKaKaF5lhDudJp2o8uu7zT5A7VPoq/view?usp=sharing',
      imagen: 'IA.png'
    },
    {
      titulo: 'Asteroid Survivor',
      descripcion: 'Trabajando como Líder programador, coordinando en la etapa conceptual y lógica usando Unity\nComo encargado de sonidos, verificando la integración correcta de las pistas de música y efectos de sonido',
      enlace: 'https://github.com/AlbertoLyonsZambra/Proyecto-progra-avanzada.git',
      imagen: 'asteroid_survivor.png'
    },
    {
      titulo: 'Meteor Survivor',
      descripcion: 'Trabajando como Líder programador, coordinando en la etapa conceptual y lógica usando Unity.',
      enlace: 'https://github.com/AlbertoLyons/PII_DigitalDreamTeam.git',
      imagen: 'meteor_survivor.png'
    },
    {
      titulo: 'Brazo de Teleoperación Enfocado a las Técnicas de Aprendizaje por Imitación',
      descripcion: 'Como ejecutor del proyecto de investigación liderado por el Dr. Álvaro Prado, se trabajó en la creación, desarrollo e implementación de un sistema de teleoperación para el brazo robótico UFactory xArm5, enfocado a las técnicas de aprendizaje por imitación, para poder entrenar una inteligencia artificial para el movimiento autónomo del brazo',
      enlace: 'https://github.com/AlbertoLyons/gello_software_xarm5',
      imagen: 'gello_portrait.gif'
    },
  ];
}
