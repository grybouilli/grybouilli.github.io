Title: Introduction to Programming
Date: 2026-09-07
Category: Courses

# About

"Introduction to Programming" is a class I teach at the Université Jean Monnet de Saint-Étienne, to first year Master students in the [Digicrea Master](https://master-digicrea.univ-st-etienne.fr/en/index.html) and the [RIM Master](https://www.univ-st-etienne.fr/fr/formation/master-XB/master-XB/master-arts-parcours-creation-contemporaine-et-nouvelles-technologies-option-realisateur-en-informatique-musicale-option-arts-numeriques-KX4SMCQZ.html). The students primarily come from an artistic background and have supposedly no knowledge in computing, and very light background in mathematics.

The class aims to introduce the foundation of programming by learning the basics of C++. The class tackles notions of variables, types and scope, boolean operations and logic, conditional statements and loops, functions, as well as data structure such as matrices, arrays and vectors. A part of the class focuses on developers' tools such as compilation with clang, library linking, and build system with cmake as an example. Scripting languages are lightly covered, with Javascript as an example.

The practise examples and assignment revolve around image processing and audio / music, so as to make a direct link with the rest of their curriculum.

# Course content
## Exam info
### Class of 2026/2027

The exam will take place on **Tuesday the 20th of October 2026.** It will **start at 9.00am and end at 12.00pm.**

The topics to review for the exams are:
 * All of lecture 1: variables, booleans, if-else if-else, switch-case, for-loop, while-loop, etc
 * All of lecture 2: functions, functions signature, functions arguments, functions overloads, reference vs copy, default arguments, returning from a function, the main function, etc 
 * Lecture 3: arrays, matrices, vectors; what they are, how to declare them, how to index them, how to add and remove elements from a ``std::vector``, be able to read nested for-loops and write code in nested for-loops.  
 * Lecture 4: be familiar with paths, know the difference between relative and absolute path, understand basic cmake commands.
  
The conditions in which the exam will take place:
 * You are allowed the use of a self prepared cheat sheet: the cheat sheet must be **handwritten**. You can use front **and** back. Prepare the cheat sheet at home, bring it for the exam.
 * The exam will be on paper.
 * There will be MCQ, code understanding questions and code completions questions. All of them will be written in the style of the practise exercises seen in class and the style of assignment 2 and 3 (you will not be prompted to write code from scratch, but rather complete things like in 2 and 3).


## Lectures  

|Slides | Exercises | Assignment|
|------|------|------|
|[Lecture 1]({static}courses/intro_to_programming/l1/main.pdf)|  [Sheet 1]({static}courses/intro_to_programming/p1/1_about_variables.pdf) [Sheet 2]({static}courses/intro_to_programming/p1/2_booleans.pdf) [Sheet 3]({static}courses/intro_to_programming/p1/3_cond_statements.pdf) [Sheet 4]({static}courses/intro_to_programming/p1/4_switch_enum.pdf) [Sheet 5]({static}courses/intro_to_programming/p1/5_loops.pdf) |[Assignment 1]({static}courses/intro_to_programming/a1/assignment.pdf)|
|[Lecture 2]({static}courses/intro_to_programming/l2/main.pdf)|  [Sheet 1]({static}courses/intro_to_programming/p2/1_functions.pdf) [Sheet 2]({static}courses/intro_to_programming/p2/2_main_global_and_local.pdf) |[Assignment 2]({static}courses/intro_to_programming/a2/assignment.pdf)|
|[Lecture 3 (UPDATED MACOS COMMANDS (12/10/26 18:21))]({static}courses/intro_to_programming/l3/main.pdf)|  [Sheet 1]({static}courses/intro_to_programming/p3/1_matrices.pdf) |[Assignment 3]({static}courses/intro_to_programming/a3/assignment.pdf)|
|[Lecture 4 (UPDATED ASSIGNMENT 3 SOLUTION (12/10/26 18:21)]({static}courses/intro_to_programming/l4/main.pdf)|  [Sheet 1]({static}courses/intro_to_programming/p4/1_exercises.pdf) |[Assignment 4]({static}courses/intro_to_programming/a4/assignment.pdf)|
|[Lecture 5]({static}courses/intro_to_programming/l5/main.pdf)|  [Sheet 1]({static}courses/intro_to_programming/p5/1_pointers.pdf) [Sheet 2]({static}courses/intro_to_programming/p5/2_stl_iterators.pdf) [Sheet 3]({static}courses/intro_to_programming/p5/3_txtfiles.pdf) [Sheet 4]({static}courses/intro_to_programming/p5/4_audio_files.pdf) |[Assignment 5]({static}courses/intro_to_programming/a5/assignment.pdf)|
|[Lecture 6]({static}courses/intro_to_programming/l6/main.pdf)|  [Sheet 1]({static}courses/intro_to_programming/p6/1_classes.pdf) [Sheet 2]({static}courses/intro_to_programming/p6/2_generic_functions.pdf) |[Assignment 6]({static}courses/intro_to_programming/a6/assignment.pdf)|




## Extras 
#### Exercises resources
| Practise | Problem | Resource |
| ---------- | -------- | -------- |
| Practise 8 | Problem B.1 | [landscape.xlsx]({static}courses/intro_to_programming/p3/landscape.xlsx) | 
| Practise 9 | Problem 1.3 | [Archive]({static}courses/intro_to_programming/p9/1.3.alice.zip) | 
| Practise 9 | Problem 2.2 | [Archive]({static}courses/intro_to_programming/p9/2.2.alice.zip) | 
| Practise 9 | Problem 3.1 | [Archive]({static}courses/intro_to_programming/p9/3.1.alice.zip) | 
| Practise 9 | Problem 4.1 | [Archive]({static}courses/intro_to_programming/p9/4.1.alice.zip) | 
| Practise 13 | Whole sheet | [Archive]({static}courses/intro_to_programming/p5/practise13.zip) | 

<br>
#### Assignment resources
| Assignment      | Resource       |
| --------------- | ---------------- |
| Assignment 4: Exercise 1 | [Windows]({static}courses/intro_to_programming/a4/windows/problem1.zip) [MacOS]({static}courses/intro_to_programming/a4/macos/problem1.zip) [Linux]({static}courses/intro_to_programming/a4/linux/problem1.zip)|
| Assignment 4: Exercise 2 | [Windows]({static}courses/intro_to_programming/a4/windows/problem2.zip) [MacOS]({static}courses/intro_to_programming/a4/macos/problem2.zip) [Linux]({static}courses/intro_to_programming/a4/linux/problem2.zip)|
| Assignment 5 | [Resource]({static}courses/intro_to_programming/a5/assignment5.zip)|

<br>
#### Documentation

* [Guide to install CLang and CMake on Windows]({static}courses/intro_to_programming/windows_build_tools_installation_steps.pdf)

#### Programs

* [image_exporter](https://grybouilli.github.io/extra/image_exporter.html): a web interface to convert image files to .xlsx files and back.
* [img_visualizer](https://grybouilli.github.io/extra/img_visualizer.html): a web interface to visualize images from their pixel values. B/W and RGB mode available.