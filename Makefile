install:
	pnpm install
clear:
	pnpm run clear

build:
	pnpm run bundle

test:
	pnpm test
	pnpm run coverage