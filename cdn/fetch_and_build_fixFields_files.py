import requests
import json
from bs4 import BeautifulSoup


def fetch_and_build(fix_version, fix_it_version):
    result_map = {}
    ver_no_dec = fix_version.replace('.', '')
    src_url = f'https://btobits.com/fixopaedia/fixdic{ver_no_dec}/fields_by_tag_.html'
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
    with open(f'./cdn/fixFields_{fix_version}_{fix_it_version}.js', 'w') as outfile:
        outfile.write(f'let  fix_fields_{ver_no_dec}=')
        json.dump(result_map, outfile)


if __name__ == "__main__":
    fix_it_ver = "v1"
    for version in ['4.0', '4.1', '4.2', '4.3', '4.4', '5.0']:
        fetch_and_build(version, fix_it_ver)
