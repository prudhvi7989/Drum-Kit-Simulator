# Drum 🥁 Kit

A sleek, web-based virtual drum kit that allows you to play drum sounds using your keyboard or mouse.

![Screenshot of the Drum Kit project](image_b3a8f9.png)
*(Note: You should replace `image_b3a8f9.png` with the actual path to the screenshot in your repository for it to display correctly.)*

## Description

This project is a fun, interactive front-end application that simulates a real drum kit. It features a clean, dark-mode interface with 7 different drum components. Each component is mapped to a specific key on the keyboard (W, A, S, D, J, K, L), allowing users to create rhythms and beats right from their browser.

## Features

* **Keyboard Interaction:** Play drum sounds by pressing the corresponding keys (`W`, `A`, `S`, `D`, `J`, `K`, `L`).
* **Mouse Interaction:** Click on any of the drum images to play its sound.
* **Audio Feedback:** Instant sound playback for each drum component.
* **Visual Feedback:** (Likely) CSS animations or style changes to indicate which drum is being played.
* **Simple UI:** A minimalist and visually appealing layout that's easy to use.

## Technologies Used

This project is built using standard web technologies:

* **HTML:** For the structure of the page and the drum "pad" elements.
* **CSS:** For styling the drum components, layout, background, and visual effects.
* **JavaScript:** For all the interactive logic:
    * Adding event listeners for `keydown` (keyboard presses) and `click` events.
    * Mapping specific keys to their corresponding audio files.
    * Creating and playing `Audio` objects to produce the sounds.
    * (Optionally) Adding/removing CSS classes for visual feedback.

## How to Use

1.  **Open the Game:** 
2.  **Play with Keyboard:** Press any of the keys shown on the drum pads (`W`, `A`, `S`, `D`, `J`, `K`, `L`) to hear the drum sounds.
3.  **Play with Mouse:** Click on any of the drum images to play the corresponding sound.
