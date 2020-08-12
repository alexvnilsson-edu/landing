#!/usr/bin/python3

import argparse, sys, json

def get_data_from_stdin():
    for stdin_line in sys.stdin:
        result=""
        if 'Exit' == stdin_line.rstrip():
            break

        result+=stdin_line

        return result

parser=argparse.ArgumentParser()
parser.add_argument('--repo', help='Repo to find.')
args=parser.parse_args()

if args.repo is None:
    sys.exit(1)

repo = args.repo
data = get_data_from_stdin()

repos = json.loads(data)

found=False
found_repo=None

for r in repos:
    if r == repo:
        found=True
        found_repo=r

if found == True:
    print(r)
    sys.exit(0)
else:
    print("No result.")
    sys.exit(1)
