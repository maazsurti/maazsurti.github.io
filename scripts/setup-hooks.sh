#!/bin/sh
cat > .git/hooks/pre-commit << 'EOF'
#!/bin/sh
RESUME_SRC="/Users/maaz/MEGA/Work related personal files/Resume/maaz-surti-resume.pdf"
RESUME_DEST="public/resume.pdf"

if [ -f "$RESUME_SRC" ]; then
  cp "$RESUME_SRC" "$RESUME_DEST"
  git add "$RESUME_DEST"
else
  echo "Warning: resume not found at $RESUME_SRC"
fi
EOF

chmod +x .git/hooks/pre-commit
echo "Git hooks installed."
