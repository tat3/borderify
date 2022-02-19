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

### first release

You have to get an uuid for add-on.
It is unique in all the add-ons and same in all the versions belonging to the add-on.
Once you got it, you save it in `addon_id` and can release later versions automatically.

In order to find uuid, follow [official instruction](https://extensionworkshop.com/documentation/publish/distribute-pre-release-versions/) and register your add-on.

Finally you can acquire uuid of add-on in [developer page](https://addons.mozilla.org/ja/developers/addons).

### second and later release

You must get API keys `JWT issuer` and `JWT secret` from [mozilla's depeloper page](https://addons.mozilla.org/ja/developers/addon/api/key/).
Then save `JWT issuer` and `JWT secret` in `API_KEY`, `API_SECRET` respectively in secret environment variables in github actions.

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
