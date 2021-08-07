# atakanermis.com

My personal website written in React.

# How to develop/build/deploy to github pages

- Clone the repo: `git clone https://github.com/AtakanErmis/atakanermis.com`
- Install the dependencies: `cd atakanermis.com && npm install`

- To run and develop the project: `npm start`
- To generate production build: `npm run build`
- To deploy to github pages:
  - edit the `homepage` value in `package.json`
  - generate a production build: `npm run build`
  - deploy to gh-pages: `npm run deploy`
