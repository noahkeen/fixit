# fixit_CDN

### Standalone single file FIX parser and displayer

This repo exists to update content for fixIt.html's CDN links

A simpler repo https://github.com/noahkeen/fixit has just fixIt.html and is all you need as a user

To Use:

- run : 'pyhton3 fetch_and_build_fixFields_files.py'
- it will scrape fixopaedia at https://btobits.com/fixopaedia and build js files corresponding to fix versions in js dir
- Note - be sure to change file URI (name or branch) to a new value
    - URI must be new for CDN to pick up (it caches first time and only then)
- update CDN paths to new version in fixIt.heml
- check in 
- update fixIt.html in https://github.com/noahkeen/fixit

    
    
    