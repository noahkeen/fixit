## fixit CDN Directory

#####  Hosts the Fix Dictionaries referenced by fixIt.html via CDN.
##### E.g.: ```<script src="https://cdn.jsdelivr.net/gh/noahkeen/fixit@main/cdn/fixFields_4.2_v1.js"></script>```


##### Additionally a python script exists to rebuild the Fix Dictionaries


To Use Script:

- run : 'pyhton3 fetch_and_build_fixFields_files.py'
- it will scrape fixopaedia at https://btobits.com/fixopaedia and build Fix Dictionaries as javascript objects
- Note - be sure to bump ``fix_it_ver`` to a new value
    - URI must be new for CDN to pick up (it caches first time and only then)
- update CDN paths to new version in ../fixIt.html
- check in 

    
    
    