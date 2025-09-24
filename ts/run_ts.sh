#!/bin/bash

# Check for argument
if [ -z "$1" ]; then
  echo "Usage: ./run-ts.sh path/to/file.ts"
  exit 1
fi

# Resolve full path of TS file
TS_FILE=$(realpath "$1")

# Compile TypeScript using tsconfig.json settings but only the specific file  
tsc --target es2015 --module commonjs --strict --esModuleInterop --skipLibCheck --forceConsistentCasingInFileNames --outDir ../dist --rootDir . "$TS_FILE" || { echo "Compilation failed"; exit 1; }

# Determine JS file path in dist folder
RELATIVE_PATH="${TS_FILE#$(pwd)/}"
JS_FILE="../dist/${RELATIVE_PATH%.ts}.js"

# Run JS file
node "$JS_FILE"

# Delete the specific JS file
rm -f "$JS_FILE"

# Clean up empty directories in dist folder
if [ -d "../dist" ]; then
  find "../dist" -type d -empty -delete 2>/dev/null || true
fi
