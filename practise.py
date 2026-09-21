# Python Basics — Complete Beginner Reference
# =============================================
# Run this file section by section while learning.
# Python 3.x

print("Hello, Python!")

# ============================================================
# 1. COMMENTS
# ============================================================

# This is a single-line comment.

"""
This is a multi-line string.
It is commonly used as a documentation string.
"""


# ============================================================
# 2. VARIABLES
# ============================================================

name = "Nitish"
age = 22
height = 5.11
is_student = True

print(name, age, height, is_student)

# Python is dynamically typed.
x = 10
x = "hello"   # The same variable can refer to another type.

# Multiple assignment
a, b, c = 1, 2, 3

# Same value
p = q = r = 0


# ============================================================
# 3. BASIC DATA TYPES
# ============================================================

integer_value = 10          # int
float_value = 10.5         # float
complex_value = 2 + 3j     # complex
text = "Python"             # str
boolean_value = True        # bool
nothing = None              # NoneType

print(type(integer_value))
print(type(float_value))
print(type(complex_value))
print(type(text))
print(type(boolean_value))
print(type(nothing))


# ============================================================
# 4. TYPE CONVERSION / CASTING
# ============================================================

num = "100"

integer_num = int(num)
decimal_num = float("10.5")
string_num = str(100)
boolean_num = bool(1)

print(integer_num, decimal_num, string_num, boolean_num)

# Common conversions:
# int(), float(), str(), bool(), list(), tuple(), set(), dict()


# ============================================================
# 5. INPUT AND OUTPUT
# ============================================================

# input() always returns a string.
# user_name = input("Enter your name: ")
# user_age = int(input("Enter your age: "))

print("Hello", name)
print(f"Name: {name}, Age: {age}")
print("Name: {}, Age: {}".format(name, age))


# ============================================================
# 6. OPERATORS
# ============================================================

a = 10
b = 3

print(a + b)    # Addition
print(a - b)    # Subtraction
print(a * b)    # Multiplication
print(a / b)    # Normal division
print(a // b)   # Floor division
print(a % b)    # Modulus / remainder
print(a ** b)   # Power

# Comparison
print(a == b)
print(a != b)
print(a > b)
print(a < b)
print(a >= b)
print(a <= b)

# Logical
print(True and False)
print(True or False)
print(not True)

# Assignment
x = 5
x += 2
x -= 1
x *= 2
x /= 2
x //= 2
x %= 2
x **= 2

# Membership
print("py" in "python")
print(5 in [1, 2, 3, 4, 5])

# Identity
x = [1, 2]
y = x
z = [1, 2]

print(x is y)       # Same object
print(x is z)       # Different objects


# ============================================================
# 7. STRINGS
# ============================================================

s = "Python Programming"

print(s[0])         # First character
print(s[-1])        # Last character
print(s[0:6])       # Slicing
print(s[:6])
print(s[7:])
print(s[::2])
print(s[::-1])      # Reverse

print(len(s))
print(s.lower())
print(s.upper())
print(s.title())
print(s.strip())
print(s.replace("Python", "Java"))
print(s.split())
print("-".join(["A", "B", "C"]))
print(s.startswith("Python"))
print(s.endswith("ing"))
print(s.find("Pro"))
print(s.count("m"))

# Strings are immutable.
# s[0] = "J"  # ERROR


# ============================================================
# 8. LISTS
# ============================================================

numbers = [10, 20, 30, 40]

print(numbers[0])
print(numbers[-1])
print(numbers[1:3])

numbers.append(50)
numbers.insert(1, 15)
numbers.extend([60, 70])

numbers.remove(30)
last = numbers.pop()
numbers.pop(0)

numbers.sort()
numbers.reverse()

print(numbers)
print(len(numbers))

# Copy
copy1 = numbers.copy()
copy2 = numbers[:]

# Lists can contain different types.
mixed = [1, "hello", 3.14, True]


# ============================================================
# 9. TUPLES
# ============================================================

# Tuples are ordered and immutable.
point = (10, 20)

print(point[0])
print(point[-1])

# Tuple unpacking
x, y = point

# One-element tuple
single = (10,)


# ============================================================
# 10. SETS
# ============================================================

# Sets contain unique values and are unordered.
numbers_set = {1, 2, 3, 3, 4}

print(numbers_set)

numbers_set.add(5)
numbers_set.remove(2)      # Error if 2 doesn't exist
numbers_set.discard(100)   # Safe if value doesn't exist

a = {1, 2, 3}
b = {3, 4, 5}

print(a | b)   # Union
print(a & b)   # Intersection
print(a - b)   # Difference
print(a ^ b)   # Symmetric difference


# ============================================================
# 11. DICTIONARIES
# ============================================================

person = {
    "name": "Nitish",
    "age": 22,
    "city": "Indore"
}

print(person["name"])
print(person.get("age"))
print(person.get("salary", 0))

person["age"] = 23
person["skills"] = ["Python", "JavaScript"]

del person["city"]

print(person.keys())
print(person.values())
print(person.items())

for key, value in person.items():
    print(key, value)


# ============================================================
# 12. IF / ELIF / ELSE
# ============================================================

age = 20

if age >= 18:
    print("Adult")
elif age >= 13:
    print("Teenager")
else:
    print("Child")

# Ternary expression
status = "Adult" if age >= 18 else "Minor"
print(status)


# ============================================================
# 13. FOR LOOPS
# ============================================================

for i in range(5):
    print(i)

for i in range(1, 6):
    print(i)

for i in range(0, 10, 2):
    print(i)

for char in "Python":
    print(char)

for item in [10, 20, 30]:
    print(item)

# enumerate()
for index, value in enumerate(["a", "b", "c"]):
    print(index, value)

# Dictionary loop
for key in person:
    print(key, person[key])


# ============================================================
# 14. WHILE LOOP
# ============================================================

count = 0

while count < 5:
    print(count)
    count += 1


# ============================================================
# 15. BREAK / CONTINUE / PASS
# ============================================================

for i in range(10):
    if i == 5:
        break
    print(i)

for i in range(5):
    if i == 2:
        continue
    print(i)

for i in range(3):
    pass


# ============================================================
# 16. FUNCTIONS
# ============================================================

def greet():
    print("Hello!")


greet()


def add(a, b):
    return a + b


print(add(10, 20))


# Default argument
def greet_user(name="Guest"):
    return f"Hello {name}"


print(greet_user())
print(greet_user("Nitish"))


# Keyword arguments
def introduce(name, age):
    return f"{name} is {age} years old"


print(introduce(age=22, name="Nitish"))


# *args
def total(*numbers):
    return sum(numbers)


print(total(1, 2, 3, 4))


# **kwargs
def show_info(**info):
    for key, value in info.items():
        print(key, value)


show_info(name="Nitish", age=22)


# ============================================================
# 17. SCOPE
# ============================================================

global_variable = 100


def scope_demo():
    local_variable = 10
    print(global_variable)
    print(local_variable)


scope_demo()

# local_variable cannot be accessed here.


# ============================================================
# 18. LAMBDA FUNCTIONS
# ============================================================

square = lambda x: x * x
print(square(5))

add = lambda a, b: a + b
print(add(2, 3))


# ============================================================
# 19. LIST COMPREHENSION
# ============================================================

squares = [x * x for x in range(10)]
print(squares)

even_numbers = [x for x in range(20) if x % 2 == 0]
print(even_numbers)

# Nested comprehension
matrix = [[1, 2], [3, 4]]
flattened = [value for row in matrix for value in row]
print(flattened)


# ============================================================
# 20. DICTIONARY / SET COMPREHENSION
# ============================================================

square_dict = {x: x * x for x in range(5)}
print(square_dict)

unique_squares = {x * x for x in range(5)}
print(unique_squares)


# ============================================================
# 21. BUILT-IN FUNCTIONS
# ============================================================

numbers = [5, 2, 9, 1, 7]

print(len(numbers))
print(sum(numbers))
print(min(numbers))
print(max(numbers))
print(sorted(numbers))
print(abs(-10))
print(round(3.14159, 2))

print(list(range(5)))

# any() / all()
print(any([False, False, True]))
print(all([True, True, True]))

# zip()
names = ["A", "B", "C"]
ages = [20, 21, 22]

for name, age in zip(names, ages):
    print(name, age)


# ============================================================
# 22. EXCEPTION HANDLING
# ============================================================

try:
    number = int("abc")
except ValueError:
    print("Invalid number")
except Exception as error:
    print("Unexpected error:", error)
else:
    print("No error occurred")
finally:
    print("This always executes")


# Raising an exception
def check_age(age):
    if age < 0:
        raise ValueError("Age cannot be negative")
    return age


# ============================================================
# 23. FILE HANDLING
# ============================================================

# Write:
# with open("example.txt", "w") as file:
#     file.write("Hello Python")

# Read:
# with open("example.txt", "r") as file:
#     content = file.read()
#     print(content)

# Append:
# with open("example.txt", "a") as file:
#     file.write("\nNew line")

# Common modes:
# "r"  -> read
# "w"  -> write / overwrite
# "a"  -> append
# "x"  -> create
# "b"  -> binary
# "t"  -> text


# ============================================================
# 24. MODULES AND IMPORTS
# ============================================================

import math
import random

print(math.sqrt(25))
print(math.ceil(4.2))
print(math.floor(4.8))

print(random.randint(1, 10))

# Import specific things:
# from math import sqrt
# from math import sqrt, ceil

# Alias:
# import numpy as np


# ============================================================
# 25. __name__ == "__main__"
# ============================================================

def main():
    print("Program started from main().")


if __name__ == "__main__":
    main()


# ============================================================
# 26. CLASSES AND OBJECTS — OOP BASICS
# ============================================================

class Person:
    def __init__(self, name, age):
        self.name = name
        self.age = age

    def introduce(self):
        return f"My name is {self.name} and I am {self.age}."


person1 = Person("Nitish", 22)

print(person1.name)
print(person1.introduce())


# ============================================================
# 27. INHERITANCE
# ============================================================

class Student(Person):
    def __init__(self, name, age, college):
        super().__init__(name, age)
        self.college = college

    def study(self):
        return f"{self.name} is studying at {self.college}."


student = Student("Nitish", 22, "IET DAVV")

print(student.introduce())
print(student.study())


# ============================================================
# 28. CLASS VARIABLES / STATIC METHOD / CLASS METHOD
# ============================================================

class Example:
    count = 0

    def __init__(self, value):
        self.value = value
        Example.count += 1

    @classmethod
    def get_count(cls):
        return cls.count

    @staticmethod
    def add(a, b):
        return a + b


e1 = Example(10)
e2 = Example(20)

print(Example.get_count())
print(Example.add(2, 3))


# ============================================================
# 29. ITERATORS
# ============================================================

numbers = [10, 20, 30]

iterator = iter(numbers)

print(next(iterator))
print(next(iterator))
print(next(iterator))


# ============================================================
# 30. GENERATORS
# ============================================================

def generate_numbers(limit):
    for i in range(limit):
        yield i


for number in generate_numbers(5):
    print(number)


# ============================================================
# 31. DECORATORS — BASIC IDEA
# ============================================================

def logger(function):
    def wrapper():
        print("Before function")
        function()
        print("After function")

    return wrapper


@logger
def say_hello():
    print("Hello")


say_hello()


# ============================================================
# 32. SORTING WITH KEY
# ============================================================

people = [
    {"name": "A", "age": 30},
    {"name": "B", "age": 20},
    {"name": "C", "age": 25}
]

people.sort(key=lambda person: person["age"])

print(people)


# ============================================================
# 33. SHALLOW COPY VS REFERENCE
# ============================================================

original = [[1, 2], [3, 4]]

reference = original
shallow = original.copy()

reference[0][0] = 100

print(original)
print(reference)
print(shallow)


# For a completely independent nested copy:
import copy

deep = copy.deepcopy(original)


# ============================================================
# 34. MUTABLE VS IMMUTABLE
# ============================================================

# Immutable:
# int, float, bool, str, tuple, frozenset

# Mutable:
# list, dict, set

text = "hello"
# text[0] = "H"  # ERROR

items = [1, 2]
items[0] = 100
print(items)


# ============================================================
# 35. NONE
# ============================================================

result = None

if result is None:
    print("No result")


# ============================================================
# 36. TRUTHY / FALSY VALUES
# ============================================================

# Falsy examples:
# False
# None
# 0
# 0.0
# ""
# []
# ()
# {}
# set()

if []:
    print("Truthy")
else:
    print("Falsy")


# ============================================================
# 37. UNPACKING
# ============================================================

numbers = [10, 20, 30]

first, second, third = numbers

print(first, second, third)

first, *middle, last = [1, 2, 3, 4, 5]

print(first)
print(middle)
print(last)


# ============================================================
# 38. * AND ** UNPACKING
# ============================================================

a = [1, 2]
b = [3, 4]

combined = [*a, *b]
print(combined)

dict1 = {"name": "Nitish"}
dict2 = {"age": 22}

combined_dict = {**dict1, **dict2}
print(combined_dict)


# ============================================================
# 39. WALRUS OPERATOR := BASIC
# ============================================================

# Allows assignment inside an expression.
if (length := len("Python")) > 3:
    print("Length:", length)


# ============================================================
# 40. TYPE HINTS
# ============================================================

def multiply(a: int, b: int) -> int:
    return a * b


print(multiply(3, 4))

names: list[str] = ["A", "B", "C"]


# ============================================================
# 41. DATACLASS — MODERN PYTHON
# ============================================================

from dataclasses import dataclass


@dataclass
class Product:
    name: str
    price: float
    quantity: int = 1


product = Product("Laptop", 50000, 2)

print(product)
print(product.name)


# ============================================================
# 42. ENUM
# ============================================================

from enum import Enum


class Status(Enum):
    PENDING = "pending"
    SUCCESS = "success"
    FAILED = "failed"


print(Status.SUCCESS.value)


# ============================================================
# 43. REGULAR EXPRESSIONS — BASIC
# ============================================================

import re

text = "My phone number is 9876543210"

match = re.search(r"\d+", text)

if match:
    print(match.group())


# ============================================================
# 44. JSON
# ============================================================

import json

data = {
    "name": "Nitish",
    "age": 22,
    "skills": ["Python", "React"]
}

json_string = json.dumps(data)
print(json_string)

python_object = json.loads(json_string)
print(python_object["name"])


# ============================================================
# 45. DATE AND TIME
# ============================================================

from datetime import datetime, date, timedelta

now = datetime.now()

print(now)
print(now.year)
print(now.month)
print(now.day)

today = date.today()
tomorrow = today + timedelta(days=1)

print(today)
print(tomorrow)


# ============================================================
# 46. COMMAND-LINE ARGUMENTS
# ============================================================

# import sys
# print(sys.argv)
#
# Run:
# python basics.py hello 123
#
# sys.argv[0] -> file name
# sys.argv[1] -> hello
# sys.argv[2] -> 123


# ============================================================
# 47. VIRTUAL ENVIRONMENT / PIP — CONCEPTS
# ============================================================

# Create virtual environment:
#
# Windows:
# python -m venv venv
# venv\Scripts\activate
#
# macOS/Linux:
# python3 -m venv venv
# source venv/bin/activate
#
# Install package:
# pip install requests
#
# Show installed packages:
# pip list
#
# Save dependencies:
# pip freeze > requirements.txt
#
# Install dependencies:
# pip install -r requirements.txt


# ============================================================
# 48. COMMON PYTHON DATA STRUCTURE PATTERNS
# ============================================================

# Frequency counting with dictionary
arr = [1, 2, 2, 3, 3, 3]

frequency = {}

for value in arr:
    frequency[value] = frequency.get(value, 0) + 1

print(frequency)


# Set for fast membership
seen = set()

for value in arr:
    if value in seen:
        print("Duplicate:", value)
    seen.add(value)


# Stack using list
stack = []

stack.append(10)
stack.append(20)

print(stack.pop())


# Queue using deque
from collections import deque

queue = deque()

queue.append(10)
queue.append(20)

print(queue.popleft())


# ============================================================
# 49. COLLECTIONS MODULE
# ============================================================

from collections import Counter, defaultdict, deque

values = [1, 1, 1, 2, 2, 3]

counter = Counter(values)
print(counter)
print(counter.most_common())

groups = defaultdict(list)

groups["frontend"].append("React")
groups["backend"].append("Node")

print(dict(groups))


# ============================================================
# 50. HEAP / PRIORITY QUEUE
# ============================================================

import heapq

heap = []

heapq.heappush(heap, 5)
heapq.heappush(heap, 1)
heapq.heappush(heap, 3)

print(heapq.heappop(heap))


# ============================================================
# 51. USEFUL DSA PYTHON SYNTAX
# ============================================================

# Reverse a list
arr = [1, 2, 3, 4]
print(arr[::-1])

# Sort ascending
arr.sort()

# Sort descending
arr.sort(reverse=True)

# Get index + value
for i, value in enumerate(arr):
    print(i, value)

# Frequency
from collections import Counter
freq = Counter(arr)

# Max/min
print(max(arr))
print(min(arr))

# Sum
print(sum(arr))


# ============================================================
# 52. COMMON PYTHON INTERVIEW CONCEPTS
# ============================================================

# Python uses indentation instead of {}.
#
# == checks value equality.
# is checks object identity.
#
# list is mutable.
# tuple is immutable.
#
# / gives floating-point division.
# // gives floor division.
#
# *args collects positional arguments.
# **kwargs collects keyword arguments.
#
# yield creates a generator.
# return exits a function and sends a value back.
#
# self refers to the current object.
# __init__ initializes an object.
#
# None represents absence of a value.
#
# Python uses reference semantics for variables:
# variables point to objects rather than storing values directly.


# ============================================================
# 53. COMMON ERRORS
# ============================================================

# SyntaxError      -> Invalid Python syntax
# NameError        -> Variable/function doesn't exist
# TypeError        -> Invalid operation between types
# ValueError       -> Correct type, invalid value
# IndexError       -> List index doesn't exist
# KeyError         -> Dictionary key doesn't exist
# AttributeError   -> Object doesn't have requested attribute
# ZeroDivisionError -> Division by zero
# FileNotFoundError -> File doesn't exist


# ============================================================
# 54. PYTHON LEARNING ORDER
# ============================================================

"""
Recommended order:

1. Variables and data types
2. Input/output
3. Operators
4. Strings
5. Lists
6. Tuples
7. Sets
8. Dictionaries
9. if/elif/else
10. for/while loops
11. Functions
12. Scope
13. Comprehensions
14. Exceptions
15. File handling
16. Modules/packages
17. OOP
18. Iterators/generators
19. Decorators
20. Type hints
21. Dataclasses
22. JSON
23. Regular expressions
24. datetime
25. collections
26. DSA patterns
27. Virtual environments and pip
28. Testing
29. APIs
30. Frameworks such as FastAPI/Django/Flask

For DSA/interviews, focus especially on:
- list
- tuple
- set
- dict
- Counter
- defaultdict
- deque
- heapq
- sorting
- enumerate
- zip
- comprehensions
- functions
- recursion
- classes
- time/space complexity
"""


# ============================================================
# 55. PRACTICE
# ============================================================

"""
Try implementing these yourself:

1. Reverse a string.
2. Check whether a string is a palindrome.
3. Find the largest number in a list.
4. Count character frequencies.
5. Remove duplicates from a list.
6. Find the second-largest number.
7. Two Sum.
8. Binary Search.
9. Valid Parentheses using a stack.
10. BFS using deque.
11. DFS using recursion.
12. Merge two sorted lists.
13. Find duplicate elements.
14. Count vowels.
15. Read/write a JSON file.
16. Create a Student class.
17. Create a simple BankAccount class.
18. Build a command-line calculator.
19. Call a REST API.
20. Build a small FastAPI backend.

IMPORTANT:
Don't just read this file. Type the examples yourself,
modify them, break them, and observe the errors.
That is one of the fastest ways to learn Python.
"""
