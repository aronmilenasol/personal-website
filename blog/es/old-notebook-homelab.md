---
title: "Cómo usar una notebook o computadora vieja como homelab"
date: "2025-07-21"
description: "Si tenés una computadora o notebook vieja que ya no estás usando, podés transformarla en un homelab. En este artículo, te cuento cómo lo hice yo y te doy ideas para aprovecharla al máximo."
---

Tenía muchas ganas de empezar un homelab, y se me ocurrió que podía aprovechar una notebook vieja que tenía en desuso desde hacía unos diez años. Sus principales especificaciones son:

- **Modelo:** Asus X555LAB (2015)
- **CPU:** Intel Core i3-5010U (dual-core, 2.00GHz)
- **RAM:** 4GB DDR3
- **Almacenamiento:** 1TB SSD

Cualquier computadora puede servirnos para un homelab. Es una excelente manera de darle una segunda (o tercera) vida a nuestros equipos, sin desperdiciarlos.
Usos de un homelab

Podés usarlo para:

- Instalar un servidor Linux (como por ejemplo, Ubuntu Server o Fedora Server)
- Aprender sobre Docker y levantar contenedores
- Configurar Prometheus + Grafana para monitoreo
- Crear y probar tus propios scripts de automatización en Bash o Python

En mi caso, empecé por:

- Instalar Ubuntu Server
- Configurar Netplan para tener conectividad vía USB tethering para instalar drivers de red y después conectarme a WiFi
- Correr contenedores con Docker
- Levantar un stack de monitoreo con Prometheus + Grafana

En mi [repositorio de homelab](https://github.com/aronmilenait/homelab) (en progreso, pero creciendo semana a semana), podés encontrar ideas que pueden servirte si te interesa tener un “laboratorio” de DevOps y/o SRE.

## Alternativas para no depender de la terminal

No es obligatorio usar una distribución de Linux pensada como servidor. Podés aprovechar entornos de escritorio ligeros que incluyan GUI, como **Lubuntu** o **Debian con XFCE o LXDE**.

Sin embargo, una de las ventajas de no usar entorno gráfico es el menor consumo de recursos. Si tu hardware es limitado, probablemente te convenga usar una distribución sin GUI.

## Conexión por SSH

Si por algún motivo usar físicamente la computadora no te resulta cómodo, podés conectarte desde tu equipo principal usando SSH.

En mi caso, la notebook que uso como homelab ya no tiene batería (se había hinchado y tuve que sacarla) y el teclado ya no funcionaba bien. Además, su resolución me resulta incómoda comparada con mi máquina actual. Por eso, prefiero conectarme por SSH: así aprovecho su hardware sin sacrificar mi comodidad.

## Conclusión

La próxima vez que tengas una notebook o computadora que ya no uses, pensalo dos veces antes de tirarla o regalarla: puede servirte como homela. Así, su vida útil se extiende, y ganás un entorno donde practicar lo que quieras.
