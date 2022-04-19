### Megjegyzések:
#### Github:

``` html
<!-- Code -->
<!-- Lekérdezése a git bállításonak -->
git config --global --list

rmdir filenév

git init reporitoryName

<!-- Filoállapotának lekérdezése -->
git status

<!-- fileok hozzáadása a felvitelre kerülő fileok közé -->
git add fileName

git add ./git add--all

$ git commit -m 'megjegyzés hozzáadása'

<!-- Add és commit egyben -->
$ git commit -am 'add és commit egyben'

<!-- Megjegyzés a felvitelhez -->
git commit -m 'megjegyzés' --all

<!-- Megnézhetjük mit változtattunk -->
git add --patch

<!-- Miket commitoltunk -->
git log --oneline

<!-- Ablakban mutatja -->
gitk

<!-- Visszaállítása egy korábbi verziónak -->
git checkout commithash fileName

gi commit -m "text"

<!-- Stageing area visszavonása -->
git checkout Head fileName
<!-- vagy -->
git reset HEAD filename

<!-- Egyel korábbi commitra térjen vissza -->
git checkout HEAD~1

<!-- Ág létrehozása -->
git checkout -b elnevezés

<!-- Visszatérés a master-re -->
git checkout master

<!-- Ágak összeolvasztása -->
git merge ágelnevezés

<!-- vagy -->
git rebase ágneve
```
