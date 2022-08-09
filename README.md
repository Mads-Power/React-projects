# React-projects
portefolio for react library

installed and configured for each projects :
## 1: React with typescript: 
```
npx create-react-app my-app --template typescript
```
## 2: Prettier formatting:
```
npm install --save-dev --save-exact prettier
```
## 3: React router dom + setup:
```
npm i react-router-dom
```
then edit index.tsx file :
```
ReactDOM.render(
  <React.StrictMode>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </React.StrictMode>,
  document.getElementById("root")
);
```

also remember to add the browser router and routing in App.tsx

## Resources
1. https://beta.reactjs.org/learn/
