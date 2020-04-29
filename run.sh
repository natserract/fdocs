
#!/bin/bash

tab_name="$1"
shift

cmd=""
cdto="$PWD"
args="$@"

if [ -d "$1" ]; then
    cdto=$(cd "$1" && pwd)
    args="${@:2}"
fi

if [ -n "$args" ]; then
    cmd="; $args"
fi

osascript <<EOF
    tell application "iTerm"
        activate
        tell current window
            tell current session
                write text "npm run dev:lib-install-locally && ng serve"
            end tell
            set newTab to (create tab with default profile)
            tell current session of newTab
                write text "cd \"$cdto\"$cmd && npm run dev:watch-sass"
            end tell
             set newTab to (create tab with default profile)
            tell current session of newTab
                write text "cd \"$cdto\"$cmd && npm run dev:watch-js"
            end tell
        end tell
    end tell
EOF
