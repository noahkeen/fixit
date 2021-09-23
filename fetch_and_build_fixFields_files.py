import requests
import json
from bs4 import BeautifulSoup


def fetch_and_build(fix_version):
    result_map = {}
    src_url = f'https://btobits.com/fixopaedia/fixdic{fix_version}/fields_by_tag_.html'
    headers = {'User-Agent': 'Mozilla/5.0 (Windows NT 6.1; WOW64; rv:20.0) Gecko/20100101 Firefox/20.0'}
    response = requests.get(src_url, headers=headers)
    soup = BeautifulSoup(response.content, 'lxml')
    rows = soup.findAll('tr')
    for row in rows:
        name = row.find('td', class_='name')
        if name:
            field_and_name = row.find('a')
            desc = row.find('td', class_='descr')
            if field_and_name and desc:
                field_and_name = field_and_name.text
                indx = field_and_name.index(')')
                field, name = field_and_name[1:indx].strip(), field_and_name[indx + 1:].strip()
                result_map[field] = {
                    'name': name,
                    'desc': " ".join(desc.text.split())
                }
    with open(f'js/fixFields_{fix_version}.js', 'w') as outfile:
        outfile.write(f'let  fix_fields_{fix_version}=')
        json.dump(result_map, outfile)


if __name__ == "__main__":
    for version in ['40', '41', '42', '43', '44', '50']:
        fetch_and_build(version)
