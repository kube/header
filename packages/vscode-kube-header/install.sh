
      #########.
     ########",#:
   #########',##".
  ##'##'## .##',##.
   ## ## ## # ##",#.
    ## ## ## ## ##'
     ## ## ## :##
      ## ## ##."

# A little install script to
# remember howto manually install extension
PATH=./node_modules/.bin/:$PATH

yarn
npx vsce package
code --uninstall-extension kube.vscode-kube-header
code --install-extension vscode-kube-header*.vsix
rm vscode-kube-header*.vsix
