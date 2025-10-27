const wordList = [
  // === BEGINNER LEVEL (Grades 1-6) ===
  // Arithmetic & Basic Operations
  { word: "addition", hint: "The process of combining numbers to find their total.", level: "easy" },
  { word: "subtraction", hint: "The process of taking one number away from another.", level: "easy" },
  { word: "multiplication", hint: "Repeated addition of the same number.", level: "easy" },
  { word: "division", hint: "Splitting into equal parts or groups.", level: "easy" },
  { word: "sum", hint: "The result of adding numbers together.", level: "easy" },
  { word: "difference", hint: "The result of subtracting one number from another.", level: "easy" },
  { word: "product", hint: "The result of multiplying numbers.", level: "easy" },
  { word: "quotient", hint: "The result of dividing one number by another.", level: "easy" },
  { word: "equals", hint: "Having the same value or amount.", level: "easy" },
  
  // Numbers & Place Value
  { word: "whole numbers", hint: "Numbers without fractions or decimals; 0, 1, 2, 3...", level: "easy" },
  { word: "digits", hint: "The symbols 0-9 used to write numbers.", level: "easy" },
  { word: "place value", hint: "The value of a digit based on its position in a number.", level: "easy" },
  { word: "ones", hint: "The place value for single items.", level: "easy" },
  { word: "tens", hint: "The place value representing groups of ten.", level: "easy" },
  { word: "hundreds", hint: "The place value representing groups of one hundred.", level: "easy" },
  { word: "greater than", hint: "A comparison showing one quantity is larger than another.", level: "easy" },
  { word: "less than", hint: "A comparison showing one quantity is smaller than another.", level: "easy" },
  { word: "even numbers", hint: "Numbers divisible by 2; they end in 0, 2, 4, 6, or 8.", level: "easy" },
  { word: "odd numbers", hint: "Numbers not divisible by 2; they end in 1, 3, 5, 7, or 9.", level: "easy" },
  { word: "number line", hint: "A straight line with numbers placed at equal intervals.", level: "easy" },
  
  // Fractions & Decimals
  { word: "fraction", hint: "A part of a whole, written as one number over another.", level: "easy" },
  { word: "numerator", hint: "The top number in a fraction showing how many parts are taken.", level: "easy" },
  { word: "denominator", hint: "The bottom number in a fraction showing total equal parts.", level: "easy" },
  { word: "unit fraction", hint: "A fraction with numerator 1, such as 1/2 or 1/3.", level: "easy" },
  { word: "vulgar fraction", hint: "Another name for common fractions written as a/b.", level: "easy" },
  { word: "like fractions", hint: "Fractions that have the same denominator.", level: "easy" },
  { word: "proper fraction", hint: "A fraction where the numerator is less than the denominator.", level: "easy" },
  { word: "improper fraction", hint: "A fraction where the numerator is greater than or equal to the denominator.", level: "easy" },
  { word: "mixed number", hint: "A whole number combined with a fraction.", level: "easy" },
  { word: "reciprocal", hint: "The inverse of a fraction, obtained by swapping numerator and denominator.", level: "easy" },
  { word: "decimal", hint: "A number that uses a decimal point to show parts of a whole.", level: "easy" },
  { word: "decimal point", hint: "The dot separating the whole number from fractional parts.", level: "easy" },
  { word: "equivalent fractions", hint: "Different fractions that represent the same value.", level: "easy" },
  { word: "simplest form", hint: "A fraction where numerator and denominator have no common factors except 1.", level: "easy" },
  
  // Basic Geometry & Measurement
  { word: "triangle", hint: "A polygon with three sides and three angles.", level: "easy" },
  { word: "square", hint: "A quadrilateral with four equal sides and four right angles.", level: "easy" },
  { word: "rectangle", hint: "A quadrilateral with four right angles and opposite sides equal.", level: "easy" },
  { word: "circle", hint: "A round shape where all points are equidistant from the center.", level: "easy" },
  { word: "pentagon", hint: "A polygon with five sides.", level: "easy" },
  { word: "hexagon", hint: "A polygon with six sides.", level: "easy" },
  { word: "octagon", hint: "A polygon with eight sides.", level: "easy" },
  { word: "symmetry", hint: "When one half of a shape is a mirror image of the other half.", level: "easy" },
  { word: "perimeter", hint: "The distance around the outside of a shape.", level: "easy" },
  { word: "area", hint: "The amount of space inside a 2D shape.", level: "easy" },
  { word: "volume", hint: "The amount of space occupied by a 3D object.", level: "easy" },
  { word: "length", hint: "The measurement of something from end to end.", level: "easy" },
  { word: "width", hint: "The measurement from side to side.", level: "easy" },
  { word: "height", hint: "The measurement from bottom to top.", level: "easy" },
  
  // === INTERMEDIATE LEVEL (Grades 7-9) ===
  // Algebra & Equations
  { word: "algebra", hint: "Branch of mathematics using symbols and letters to represent numbers.", level: "medium" },
  { word: "variable", hint: "A symbol, usually a letter, that represents an unknown number.", level: "medium" },
  { word: "equation", hint: "A mathematical statement that two expressions are equal.", level: "medium" },
  { word: "expression", hint: "A combination of numbers, variables, and operations.", level: "medium" },
  { word: "solve", hint: "To find the value of a variable that makes an equation true.", level: "medium" },
  { word: "coefficient", hint: "A number multiplying a variable in an algebraic expression.", level: "medium" },
  { word: "constant", hint: "A fixed value that does not change.", level: "medium" },
  { word: "linear equation", hint: "An equation whose graph is a straight line.", level: "medium" },
  
  // Advanced Fractions & Ratios
  { word: "ratio", hint: "A comparison of two quantities by division.", level: "medium" },
  { word: "proportion", hint: "An equation stating that two ratios are equal.", level: "medium" },
  { word: "percentage", hint: "A ratio expressed as a fraction of 100.", level: "medium" },
  { word: "tower fraction", hint: "A complex fraction where numerator or denominator contains fractions.", level: "medium" },
  
  // Geometry & Measurement
  { word: "angle", hint: "The figure formed by two rays sharing a common endpoint.", level: "medium" },
  { word: "acute angle", hint: "An angle measuring less than 90 degrees.", level: "medium" },
  { word: "obtuse angle", hint: "An angle measuring more than 90 but less than 180 degrees.", level: "medium" },
  { word: "right angle", hint: "An angle measuring exactly 90 degrees.", level: "medium" },
  { word: "straight angle", hint: "An angle measuring exactly 180 degrees.", level: "medium" },
  { word: "parallel lines", hint: "Lines in the same plane that never intersect.", level: "medium" },
  { word: "perpendicular lines", hint: "Lines that intersect at right angles.", level: "medium" },
  { word: "polygon", hint: "A closed shape with straight sides.", level: "medium" },
  { word: "quadrilateral", hint: "A polygon with four sides.", level: "medium" },
  { word: "parallelogram", hint: "A quadrilateral with opposite sides parallel.", level: "medium" },
  { word: "trapezoid", hint: "A quadrilateral with at least one pair of parallel sides.", level: "medium" },
  { word: "rhombus", hint: "A parallelogram with all sides equal.", level: "medium" },
  { word: "diameter", hint: "A line through the center of a circle touching two points on circumference.", level: "medium" },
  { word: "radius", hint: "A line from the center to any point on a circle.", level: "medium" },
  { word: "circumference", hint: "The distance around a circle.", level: "medium" },
  { word: "pi", hint: "The ratio of a circle's circumference to its diameter, approximately 3.14159.", level: "medium" },
  
  // Statistics & Probability
  { word: "average", hint: "The sum of numbers divided by how many numbers there are.", level: "medium" },
  { word: "mean", hint: "Another word for average.", level: "medium" },
  { word: "median", hint: "The middle value in a sorted list of numbers.", level: "medium" },
  { word: "mode", hint: "The value that appears most frequently in a data set.", level: "medium" },
  { word: "range", hint: "The difference between the highest and lowest values.", level: "medium" },
  { word: "probability", hint: "The measure of how likely an event is to occur.", level: "medium" },
  
  // Number Theory
  { word: "prime number", hint: "A number greater than 1 with exactly two factors: 1 and itself.", level: "medium" },
  { word: "composite number", hint: "A number with more than two factors.", level: "medium" },
  { word: "factor", hint: "A number that divides another number exactly.", level: "medium" },
  { word: "multiple", hint: "A number that can be divided by another number without remainder.", level: "medium" },
  { word: "prime factorization", hint: "Expressing a number as a product of its prime factors.", level: "medium" },
  
  // === ADVANCED LEVEL (Grades 10-12) ===
  // Advanced Algebra
  { word: "quadratic equation", hint: "An equation of the form ax² + bx + c = 0.", level: "hard" },
  { word: "polynomial", hint: "An expression with multiple terms involving variables and exponents.", level: "hard" },
  { word: "exponent", hint: "A small number indicating how many times to multiply a base by itself.", level: "hard" },
  { word: "logarithm", hint: "The exponent to which a base must be raised to produce a given number.", level: "hard" },
  { word: "function", hint: "A relation where each input has exactly one output.", level: "hard" },
  { word: "domain", hint: "The set of all possible input values for a function.", level: "hard" },
  { word: "range", hint: "The set of all possible output values of a function.", level: "hard" },
  
  // Trigonometry
  { word: "sine", hint: "Trigonometric ratio of opposite side to hypotenuse in a right triangle.", level: "hard" },
  { word: "cosine", hint: "Trigonometric ratio of adjacent side to hypotenuse in a right triangle.", level: "hard" },
  { word: "tangent", hint: "Trigonometric ratio of opposite side to adjacent side in a right triangle.", level: "hard" },
  { word: "pythagorean theorem", hint: "In a right triangle, a² + b² = c² where c is the hypotenuse.", level: "hard" },
  { word: "hypotenuse", hint: "The longest side of a right triangle, opposite the right angle.", level: "hard" },
  
  // Coordinate Geometry
  { word: "coordinate plane", hint: "A plane with x and y axes for graphing points and lines.", level: "hard" },
  { word: "slope", hint: "The steepness of a line, calculated as rise over run.", level: "hard" },
  { word: "y-intercept", hint: "The point where a line crosses the y-axis.", level: "hard" },
  { word: "parabola", hint: "The U-shaped graph of a quadratic function.", level: "hard" },
  
  // Calculus
  { word: "derivative", hint: "Measures how a function changes as its input changes.", level: "hard" },
  { word: "integral", hint: "Represents the area under a curve or accumulation of quantities.", level: "hard" },
  { word: "limit", hint: "The value a function approaches as the input approaches some value.", level: "hard" },
  
  // Advanced Geometry
  { word: "theorem", hint: "A mathematical statement that has been proven true.", level: "hard" },
  { word: "proof", hint: "A logical argument demonstrating the truth of a statement.", level: "hard" },
  { word: "congruent", hint: "Figures that have the same shape and size.", level: "hard" },
  { word: "similar", hint: "Figures that have the same shape but not necessarily the same size.", level: "hard" },
  
  // Sets & Logic
  { word: "set", hint: "A collection of distinct objects.", level: "hard" },
  { word: "union", hint: "The set containing all elements from given sets.", level: "hard" },
  { word: "intersection", hint: "The set containing elements common to all given sets.", level: "hard" },
  
  // Complex Numbers
  { word: "complex number", hint: "A number with real and imaginary parts.", level: "hard" },
  { word: "imaginary number", hint: "A number that when squared gives a negative result.", level: "hard" },
  
  // Sequences & Series
  { word: "sequence", hint: "An ordered list of numbers following a pattern.", level: "hard" },
  { word: "series", hint: "The sum of the terms of a sequence.", level: "hard" },
  { word: "arithmetic sequence", hint: "A sequence with constant difference between terms.", level: "hard" },
  { word: "geometric sequence", hint: "A sequence with constant ratio between terms.", level: "hard" },
  { word: "combinatorics", hint: "The branch of mathematics dealing with combinations, permutations and counting principles.", level: "hard" },
  { word: "permutations", hint: "Arrangements of objects where order matters.", level: "hard" },
  { word: "combinations", hint: "Selections of objects where order does not matter.", level: "hard" },
  
  { word: "vectors", hint: "Quantities having both magnitude and direction, represented by arrows.", level: "hard" },
  { word: "magnitude", hint: "The length or size of a vector.", level: "hard" },
  { word: "direction", hint: "The orientation of a vector in space.", level: "hard" },
  { word: "scalar", hint: "A quantity having only magnitude, no direction.", level: "hard" },
  
  { word: "matrices", hint: "Rectangular arrays of numbers arranged in rows and columns.", level: "hard" },
  { word: "determinant", hint: "A scalar value that can be computed from a square matrix.", level: "hard" },
  { word: "inverse matrix", hint: "A matrix that when multiplied by the original gives the identity matrix.", level: "hard" },
  
  { word: "calculus", hint: "The mathematical study of continuous change.", level: "hard" },
  { word: "derivative", hint: "Measures the rate of change of a function.", level: "hard" },
  { word: "integral", hint: "Represents accumulation or area under a curve.", level: "hard" },
  { word: "limit", hint: "The value a function approaches as input approaches some value.", level: "hard" },
  
  { word: "bearing", hint: "The direction or position relative to a fixed point, measured in degrees from north.", level: "hard" },
  { word: "true bearing", hint: "Bearing measured clockwise from true north.", level: "hard" },
  { word: "compass bearing", hint: "Bearing measured using compass directions like N30°E.", level: "hard" },
  
  { word: "complex numbers", hint: "Numbers with real and imaginary parts.", level: "hard" },
  { word: "real part", hint: "The non-imaginary component of a complex number.", level: "hard" },
  { word: "imaginary part", hint: "The component of a complex number multiplied by i.", level: "hard" },
  { word: "conjugate", hint: "A complex number with the same real part but opposite imaginary part.", level: "hard" },
  
  { word: "probability distributions", hint: "Functions describing likelihood of different outcomes.", level: "hard" },
  { word: "normal distribution", hint: "Bell-shaped curve describing many natural phenomena.", level: "hard" },
  { word: "binomial distribution", hint: "Distribution of number of successes in fixed trials.", level: "hard" },
  
  { word: "differential equations", hint: "Equations involving derivatives describing change.", level: "hard" },
  { word: "ordinary differential equation", hint: "DE with one independent variable.", level: "hard" },
  { word: "partial differential equation", hint: "DE with multiple independent variables.", level: "hard" },
  
  { word: "linear algebra", hint: "Study of vectors, vector spaces and linear transformations.", level: "hard" },
  { word: "vector space", hint: "Collection of vectors that can be added and scaled.", level: "hard" },
  { word: "linear transformation", hint: "Function between vector spaces preserving vector operations.", level: "hard" },
  
  { word: "trigonometric identities", hint: "Equations true for all values of trigonometric variables.", level: "hard" },
  { word: "pythagorean identity", hint: "sin²θ + cos²θ = 1", level: "hard" },
  { word: "double angle formula", hint: "Identities for sin(2θ) and cos(2θ).", level: "hard" }
];