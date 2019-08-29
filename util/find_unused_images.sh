#!/bin/bash

if [ ! -d tmp ] ; then mkdir tmp ; fi

# find all images
find ../src | egrep -i "(jpg|png|mov|svg)" | sed -e 's|^.*/||g' | sort | uniq >tmp/files_images.txt

# find all links to images in markdown
find ../src -name "*.md" -exec egrep -i "(jpg|png|mov|svg)" {} \; >tmp/files_referred.txt
cat tmp/files_referred.txt |\
  sed -e 's|^.*src="||g' -e 's|^cover: "||g' -e 's|".*$||g' -e 's|^.*/||g' | sort | uniq \
  >tmp/files_referred_filtered.txt

# changes, needs to be checked manually
diff tmp/files_images.txt tmp/files_referred_filtered.txt

# cleanup
rm tmp/files_images.txt tmp/files_referred*.txt
rmdir tmp

