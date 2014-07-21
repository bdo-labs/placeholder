
#
# Environment
#

SHELL:=/bin/bash
PATH:=node_modules/.bin:$(PATH)


#
# Source
#

CSS:=$(wildcard lib/*.myth)
SRC:=$(wildcard lib/*.js) $(CSS:%.myth=%.css)


#
# Targets
#

all: build

build: node_modules $(SRC)
	atomify --output $@/$@

%.css: %.myth
	myth $< $@

node_modules: package.json
	npm install

test: all
	open test/index.html

clean:
	rm -fr build

.PHONY: clean

