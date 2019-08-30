#!/bin/bash

usage() {
  echo "check_links.sh [--local]"
  echo "  --local      Use local Gatsby build and serve)"
}

if [ "$1" == "-h" -o "$1" == "--help"  ] ; then
  usage
  exit 1
fi

SITE_URL=https://jochenontour.blog
if [ "$1" == "--local" ] ; then
  SITE_URL=http://localhost:9001
fi


if [ ! -d tmp ] ; then mkdir tmp ; fi

(
# some URLs are reported as broken, even if they work (tested)
# will exclude them
blc ${SITE_URL} --recursive --ordered \
  --exclude facebook.com \
  --exclude https://www.camping.it/en/trentinoaltoadige/arco/ \
  --exclude https://gopro.com/en/us/shop/accessories/smart-remote/ARMTE-002.html
) | tee tmp/check_links.txt

(
# check on BROKEN links
cat tmp/check_links.txt | grep BROKEN
) | tee tmp/check_links_broken.txt

# cleanup
rm -f tmp/check_links*.txt
rmdir tmp
