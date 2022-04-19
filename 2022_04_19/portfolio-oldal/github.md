# Github 
>A GitHub, Inc. egy egyesült államokbeli nemzetközi vállalat, amely a Git segítségével szoftverfejlesztési verziókövetés-szolgáltatást nyújt. 2018-ban a Microsoft leányvállalata lett 7,5 milliárd dollárért. Saját funkcióin felül a Git elosztott verziókövetését és forráskódkezelését teszi elérhetővé.
# Alap:

Num|description|Code|
----------|----------|----------
1.|Lekérdezése a git bállításonak|git config --global --list
2.|Git beállítása|git init repositoryName
3.|Git állapot lekérdezés|git status

# Update, Commit Git

Num|description|Code|
----------|----------|----------
1.|Lekérdezése a git bállításonak|git config --global --list
2.|fileok hozzáadása a felvitelre kerülő fileok közé|git add fileName
2.1|összes hozzáadása a felvitelre kerülő fileok közé|git add ./git add--all
3.|Megjegyzés hozzáadása|git commit -m 'megjegyzés' --all
3.1|Megjegyzés hozzáadása|gi commit -m "text"
4.|<b>Egyben a hozzáadás és commitálás|<b>git commit -am 'add és commit egyben'</b>
5.|Megnézhetjük mit változtattunk|git add --patch
6.|Miket commitoltunk|git log --oneline
7.|<b> Ablakban részletesen megtekinthetőek az ágak stb.</b>|<b>gitk</b>
8.| Stage ing area visszavonása|git checkout Head fileName
9.| Stage ing area visszavonása ( ezt inkább ne mert resetel )|git reset HEAD filename
10.| Egyel korábbi commitra térjen vissza|git checkout HEAD~1 
11.| <b>Ág létrehozása</b>|<b>git checkout -b elnevezés</b>
11.| Visszatérés a master-re |git checkout master
12.| Ágak összeolvasztása |git merge "ágelnevezés"
13.|vagy|git rebase ágneve



