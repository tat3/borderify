# borderify

https://developer.mozilla.org/ja/docs/Mozilla/Add-ons/WebExtensions/Your_first_WebExtension

## how to create release binary

Assume the tag for release is `v0.1.0`, run

```bash
$ bash release.sh v0.1.0
```

Then publish `borderify_v0.1.0.zip`.

## how to release

for developer

1. add a tag to the commit in main branch with git cli
  ```
  $ git tag v0.1.0
  ```
2. reflect remote repository, github
  ```
  $ git push --tags
  ```
3. github workflow creates a draft of release corresponding to the tag
4. approve it
