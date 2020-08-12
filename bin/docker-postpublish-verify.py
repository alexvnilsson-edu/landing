#!/usr/bin/python3

def get_data_from_stdin():
    for stdin_line in sys.stdin:
        result=""
        if 'Exit' == stdin_line.rstrip():
            break

        result+=stdin_line

        return result

