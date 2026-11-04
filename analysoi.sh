#!/bin/bash

echo "Repository Analysis"
echo "==================="

echo ""
echo "Detected languages:"

find . -type f -name "*.py" | grep -q . && echo "- Python"
find . -type f -name "*.java" | grep -q . && echo "- Java"
find . -type f -name "*.js" | grep -q . && echo "- JavaScript"
find . -type f -name "*.ts" | grep -q . && echo "- TypeScript"

echo ""
echo "Design patterns detected:"

grep -Rq -E "getInstance|static instance" . --include="*.java" --include="*.js" --include="*.ts" --include="*.py" --exclude-dir=.git && echo "- Singleton"

grep -Rq -E "create[A-Z]|factory" . --include="*.java" --include="*.js" --include="*.ts" --include="*.py" --exclude-dir=.git && echo "- Factory Method"

grep -Rq "Strategy" . --include="*.java" --include="*.js" --include="*.ts" --include="*.py" --exclude-dir=.git && echo "- Strategy"

grep -Rq -E "notify|subscribe|observer" . --include="*.java" --include="*.js" --include="*.ts" --include="*.py" --exclude-dir=.git && echo "- Observer"

grep -Rq -E "Decorator|wrap" . --include="*.java" --include="*.js" --include="*.ts" --include="*.py" --exclude-dir=.git && echo "- Decorator"

echo ""
echo "Analysis completed."
