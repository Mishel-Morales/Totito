# 🎮 Totito (Tic Tac Toe) - Juego en JavaScript

Este es un simple pero funcional juego de **Totito** (también conocido como **Tres en línea** o **Tic Tac Toe**) implementado con **HTML, CSS (Bootstrap)** y **JavaScript puro**.

## 🧩 Descripción del Juego

El juego permite que **dos jugadores** participen turnándose para colocar sus símbolos (❌ y ⭕️) en una cuadrícula de 3x3. El objetivo es lograr una línea recta de tres símbolos (horizontal, vertical o diagonal) antes que el oponente.

---

## 🛠️ Tecnologías Utilizadas

- HTML5
- CSS3 (con Bootstrap 5 para el estilo)
- JavaScript (Vanilla JS)

---

## 🖥️ Interfaz de Usuario

- Un tablero de 3 columnas y 3 filas creado con `divs`, estilizados con Bootstrap.
- Dos contadores de jugador en la parte superior (Jugador Uno y Jugador Dos).
- Un mensaje de resultado que indica si alguien ganó o si hubo empate.
- Un botón para **reiniciar el juego** que aparece automáticamente al finalizar una partida.

---

## 🚀 ¿Cómo Funciona?

### 📌 Estructura del Tablero

Cada celda del tablero tiene un `id` del 1 al 9, representando la siguiente disposición:

- 1 | 2 | 3
- 4 | 5 | 6
- 7 | 8 | 9



### 📜 Lógica del Juego (JavaScript)

- Se detectan los clics en las celdas (`.cuadros`) usando `addEventListener`.
- Los turnos se alternan entre **Jugador Uno** (X) y **Jugador Dos** (O).
- Cada vez que un jugador selecciona una celda, su elección se guarda en un arreglo (`jugadorUno` o `jugadorDos`).
- Se compara el arreglo de cada jugador contra una lista de combinaciones ganadoras predefinidas.
- Si un jugador gana, se muestra un mensaje de victoria.
- Si se llenan todas las celdas sin ganador, se muestra un mensaje de empate.
- Al finalizar el juego, se crea dinámicamente un botón para **reiniciar la partida**, que limpia el tablero y restablece los datos.

---

## ✅ Combinaciones Ganadoras

Las combinaciones válidas para ganar están predefinidas en un array:

```js
let ganador = [
  [1, 2, 3], [4, 5, 6], [7, 8, 9],    // Horizontales
  [1, 4, 7], [2, 5, 8], [3, 6, 9],    // Verticales
  [1, 5, 9], [3, 5, 7]                // Diagonales
];
```
---
## 📝 Licencia
Este proyecto está disponible bajo la licencia MIT (puedes modificar esto si usas otra licencia).

---
## 📦 Instalación y Uso
Clona o descarga este repositorio.

Abre index.html en tu navegador.

¡Empieza a jugar con otra persona!

## 📸 Visualización del juego
<img width="1407" height="891" alt="Captura desde 2025-09-18 15-42-47" src="https://github.com/user-attachments/assets/d8086068-c177-4b33-8c86-36c00102feb4" />
