# Getting Your ENV set up

## Requirements
1. VS Code


## Steps
1. Install nvm, npm 
2. Create env.sh file. If this is an existing project populate with appropriate keys and secrets.
2. This projects prettier setup: https://www.robinwieruch.de/how-to-use-prettier-vscode/
3. Eslint plugin embedded in next is used: https://nextjs.org/docs/basic-features/eslint


# Troubleshooting
1. `Error: error:0308010C:digital envelope routines::unsupported` - Next.js [duplicate]
    Documentation: https://stackoverflow.com/questions/71033802/error-error0308010cdigital-envelope-routinesunsupported-next-js
    Solution: 
2. `ESLint needs to be installed` error, even though it is already installed
    Documentation: https://github.com/vercel/next.js/issues/30182
    Solution: Downgrade eslint version to 7.32.0
3. When in doubt run `nvm use`
4. ECMAScriptModules & Jest: 
    Documentation: https://jestjs.io/docs/ecmascript-modules
    Solution: `package.json.type = "module"` && `NODE_OPTIONS=--experimental-vm-modules jest`
5. Jest matchers 
    Documentation: https://jestjs.io/docs/using-matchers 
