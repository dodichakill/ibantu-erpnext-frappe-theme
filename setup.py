from setuptools import setup, find_packages

with open("requirements.txt") as f:
	install_requires = f.read().strip().split("\n")

# get version from __version__ variable in ibantu_theme/__init__.py
from ibantu_theme import __version__ as version

setup(
	name="ibantu_theme",
	version=version,
	description="Ibantu Modern Yellow Theme for ERPNext",
	author="Ibantu Team",
	author_email="admin@ibantu.com",
	packages=find_packages(),
	zip_safe=False,
	include_package_data=True,
	install_requires=install_requires
)
