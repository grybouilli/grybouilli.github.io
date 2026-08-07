Title: Introduction to Programming
Date: 2026-09-07
Category: Courses

# About

"Introduction to Programming" is a class I teach at the Université Jean Monnet de Saint-Étienne, to first year Master students in the [Digicrea Master](https://master-digicrea.univ-st-etienne.fr/en/index.html) and the [RIM Master](https://www.univ-st-etienne.fr/fr/formation/master-XB/master-XB/master-arts-parcours-creation-contemporaine-et-nouvelles-technologies-option-realisateur-en-informatique-musicale-option-arts-numeriques-KX4SMCQZ.html). The students primarily come from an artistic background and have supposedly no knowledge in computing, and very light brackground in mathematics.

The class aims to introduce the foundation of programming by learning the basics of C++. The class tackles notions of variables, types and scope, boolean operations and logic, conditional statements and loops, functions, as well as data structure such as matrices, arrays and vectors. A part of the class focuses on developers' tools such as compilation with clang, library linking, and build system with cmake as an example. Scripting languages are lightly covered, with Javascript as an example.

The practise examples and assignment revolve around image processing and audio / music, so as to make a direct link with the rest of their curriculum.

# Course content
## Lectures  

|Slides | Exercises | Assignment|
|------|------|------|
|[Lecture 1]()| [Exercises 1]()| [Assignment 1]()|

## Extras 
#### Exercises resources
| Practise | Problem | Resource |
| ---------- | -------- | -------- |
| Practise 9 | Problem 1.3 | [Archive]({static}courses/intro_to_programming/p9/1.3.alice.zip) | 
| Practise 9 | Problem 2.2 | [Archive]({static}courses/intro_to_programming/p9/2.2.alice.zip) | 
| Practise 9 | Problem 3.1 | [Archive]({static}courses/intro_to_programming/p9/3.1.alice.zip) | 
| Practise 9 | Problem 4.1 | [Archive]({static}courses/intro_to_programming/p9/4.1.alice.zip) | 

<br>
#### Assignment resources
| Assignment      | Resource       |
| --------------- | ---------------- |
| Assignment 4: Exercise 1 | [Windows]({static}courses/intro_to_programming/a4/windows/problem1.zip) [MacOS]({static}courses/intro_to_programming/a4/macos/problem1.zip) [Linux]({static}courses/intro_to_programming/a4/macos/problem1.zip)|
| Assignment 4: Exercise 2 | [Windows]({static}courses/intro_to_programming/a4/windows/problem2.zip) [MacOS]({static}courses/intro_to_programming/a4/macos/problem2.zip) [Linux]({static}courses/intro_to_programming/a4/macos/problem2.zip)|

<br>
#### Documentation

* [Guide to install CLang and CMake on Windows]({static}courses/intro_to_programming/windows_build_tools_installation_steps.pdf)

#### Programs

* [image_exporter](): a small companion program to convert image files to .xlsx files and back.
    * **On MacOS**: after downloading the program, open a terminal and type:<br>
  ```
  chmod +x ~/Downloads/image_exporter
  ``` <br>
  ```
  ./Downloads/image_exporter
  ```
  
|Windows 11| MacOS | Linux|
|------|------|------|
|[image_exporter for Windows]()| [image_exporter for MacOS](https://filesender.renater.fr/download.php?token=10850b44-f11f-4290-a2ce-eca4dd51bcb3&files_ids=76091335)| [image_exporter for Linux](https://filesender.renater.fr/download.php?token=f0ba5af4-ee99-45b1-9627-38a456fb5678&files_ids=76090705)|

------

* [img_visualizer](https://grybouilli.github.io/extra/img_visualizer.html): a web interface to visualize images from their pixel values. B/W and RGB mode available.