#!/bin/bash

# copy declaration file from src to build
from="./src/components/main.d.ts"
to="./build/index.d.ts"
echo "copy $from -> ${to}"
cp "$from" "$to"
