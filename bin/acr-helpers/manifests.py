#!/usr/bin/python3

import argparse, sys, json

parser=argparse.ArgumentParser()
parser.add_argument('--manifests', help='File where manifests where output to.')
parser.add_argument('--digest', help='Digest to match.')
args=parser.parse_args()

with open(args.manifests, 'r') as file:
    data = file.read().replace('\n', '')

digest=args.digest
manifests = json.loads(data)

found=False

for m in manifests:
    m_dig = m["digest"]
    m_timestamp = m["timestamp"]
    
    if m_dig == digest:
        found=True
        break

if found == True:
    sys.exit(0)
else:
    print(f"Found no manifest with digest of {digest}")
    sys.exit(1)
