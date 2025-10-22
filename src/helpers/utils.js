export const declension = (n, wordCases) =>
    n % 10 == 1 && n % 100 != 11
        ? wordCases[0]
        : (n % 10 >= 2 && n % 10 <= 4 && (n % 100 < 10 || n % 100 >= 20) ? wordCases[1] : wordCases[2])
    ;