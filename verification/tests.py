"""
TESTS is a dict with all you tests.
Keys for this will be categories' names.
Each test is dict with
    "input" -- input data for user function
    "answer" -- your right answer
    "explanation" -- not necessary key, it's using for additional info in animation.
"""


def checkio(str_number, radix):
    return -1

#These "asserts" using only for self-checking and not necessary for auto-testing
if __name__ == '__main__':
    assert checkio("AF", 16) == 176, "Hex"
    assert checkio("101", 2) == 5, "Bin"
    assert checkio("101", 5) == 126, "5 base"
    assert checkio("Z", 36) == 35, "Z base"
    assert checkio("AB", 10) == -1, "B > A > 10"

TESTS = {
    "Basics": [
        {
            "input": ["AF", 16],
            "answer": 176,
        },
        {
            "input": ["101", 2],
            "answer": 5,
        },
        {
            "input": ["101", 5],
            "answer": 126,
        },
        {
            "input": ["Z", 36],
            "answer": 35,
        },
        {
            "input": ["AB", 10],
            "answer": -1,
        },

    ],
    "Extra": [
        {"input": ['F0', 16],
         "answer": 240
        },

        {"input": ['1111111111', 2],
         "answer": 1023
        },

        {"input": ['255', 7],
         "answer": 138
        },

        {"input": ['IDDQD', 30],
         "answer": 14943493
        },

        {"input": ['1000', 10],
         "answer": 1000
        },

        {"input": ['ASD', 15],
         "answer": -1
        },

        {"input": ['222', 3],
         "answer": 26
        },

        {"input": ['XYZ', 36],
         "answer": 44027
        },

        {"input": ['909', 9],
         "answer": -1
        },

        {"input": ['1234567890', 11],
         "answer": 2853116695
        },

        {"input": ['5A6E', 10],
         "answer": -1
        },

        {"input": ['1000000', 31],
         "answer": 887503681
        },
    ]
}
