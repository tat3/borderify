version=${1:?"Error: version is not specified"}
cd borderify
zip -r -FS ../borderify.zip ./* -x '*.zip' -x '*.git*'
cd ..

echo $version