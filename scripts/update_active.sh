#!/bin/bash

# Updates the results for the active tournaments

OLDIFS=$IFS
IFS=";"
while read name id file
 do
    # curl to lichess

    echo -e "$name \
    ======================\n\
    ID :\t $id\n" > $file
    
 done < $1
 IFS=$OLDIFS