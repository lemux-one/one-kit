echo "Post create script running..."
source .devcontainer/.env
echo "Setting up git config..."
git config --global core.autocrlf false
git config --global core.eol lf
git config --global user.name "$GIT_USER_NAME"
git config --global user.email "$GIT_USER_EMAIL"
echo "Post create script done!"