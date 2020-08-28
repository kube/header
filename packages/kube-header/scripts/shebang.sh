
      #########.
     ########",#:
   #########',##".
  ##'##'## .##',##.
   ## ## ## # ##",#.
    ## ## ## ## ##'
     ## ## ## :##
      ## ## ##."

CLI=dist/cli.js
SHEBANG='#!/usr/bin/env node'

# Add shebang to CLI script if not already present
if ! grep -q "$SHEBANG" $CLI
then
  echo $SHEBANG | cat - $CLI > $$
  mv $$ $CLI
fi
