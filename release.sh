tag=${1:?"Error: tag is not specified"}
echo "tag: $tag"

cd borderify
zip -r -FS ../borderify_$tag.zip ./* -x '*.zip' -x '*.git*'
cd ..