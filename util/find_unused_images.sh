#!/bin/bash

if [ ! -d tmp ] ; then mkdir tmp ; fi

# find all images
find ../src | egrep -i "(jpg|png|mov|svg)" | sed -e 's|^.*/||g' | sort | uniq >tmp/files_images.txt

# find all links to images in markdown
find ../src -name "*.md" -exec egrep -i "(jpg|png|mov|svg)" {} \; >tmp/files_referred.txt
(
echo "WE KNOW: src=\"./src/static/license.svg\" is used"
echo "WE KNOW: src=\"./src/favicon.png\" is used"
echo "WE KNOW: src=\"./src/md/dogsledding-2018/summary/2018-04-11_IMG_0992.JPG\" is used os original for cover.jpg"
echo "WE KNOW: src=\"./src/md/dogsledding-2018/day-03/IMG_0697.JPG\" is used as cover.jpg"
echo "WE KNOW: src=\"./src/md/dogsledding-2018/day-06/IMG_0971.JPG\" is used as cover.jpg"
echo "WE KNOW: src=\"./src/md/dogsledding-2018/day-07/IMG_1094.JPG\" is used as cover.jpg"
echo "WE KNOW: src=\"./src/md/dogsledding-2018/day-09/IMG_1408.JPG\" is used as cover.jpg"
echo "WE KNOW: src=\"./src/md/dogsledding-2018/day-01/dog-sledding-camp-trip-luxury-tourism-active-tromso-mountain-square-1-1024x1024.jpg\" is used as cover.jpg"
) >>tmp/files_referred.txt


cat tmp/files_referred.txt |\
  sed -e 's|http.*\.jpg||g' -e 's|^.*src="||g' -e 's|^cover: "||g' -e 's|".*$||g' -e 's|^.*/||g' | sort | uniq | \
  egrep -i "(jpg|png|mov|svg)" \
  >tmp/files_referred_filtered.txt

# changes, needs to be checked manually
(
diff tmp/files_images.txt tmp/files_referred_filtered.txt
) | tee tmp/files_not_used.txt

# cleanup
rm -f tmp/files_images.txt tmp/files_referred*.txt tmp/files_not_used.txt
rmdir tmp
