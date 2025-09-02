#!/bin/bash

# Check for argument
if [ -z "$1" ]; then
  echo "Usage: ./run-ts.sh path/to/file.ts"
  exit 1
fi

# Resolve full path of TS file
TS_FILE=$(realpath "$1")

# Compile TypeScript
tsc "$TS_FILE" || { echo "Compilation failed"; exit 1; }

# Determine JS file path
JS_FILE="${TS_FILE%.ts}.js"

# Run JS file
node "$JS_FILE"

# Delete JS file
rm "$JS_FILE"
