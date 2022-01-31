# [Learning TypeScript. Classes & Interfaces. Singletons](https://www.codewars.com/kata/591445324670baed3200008d)

# Learning TypeScript. Classes & Interfaces. Singletons

## Overview

In software engineering, the singleton pattern is a software design pattern that restricts the instantiation of a class to one object. This is useful when exactly one object is needed to coordinate actions across the system. The concept is sometimes generalized to systems that operate more efficiently when only one object exists, or that restrict the instantiation to a certain number of objects.

An implementation of the singleton pattern must:
* ensure that only one instance of the singleton class ever exists;
* and provide global access to that instance.

Typically, this is done by:
* declaring all constructors of the class to be private (or throw an error in constructor); and
* providing a static method that returns a reference to the instance.

## Task

Your task is to implement <code>SingletonCounter</code> class with static method <code>getInstance</code> that returns instance of <code>SingletonCounter</code>. Constructor of this class must be declared as private. This class should have <code>inc()</code> which increments the value of the counter (default value of the counter is zero).


**P.S.** Solved this kata? Take a look at other katas in "<a href="https://www.codewars.com/collections/learning-typescript">Learning TypeScript</a>" collection.
