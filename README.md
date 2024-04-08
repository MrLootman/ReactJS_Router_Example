# La navigation avec react-router-dom


## Etapes de compréhensions :

1. Installe la dépendance react-router-dom avec la commande :
`npm install react-router-dom`

2. Créé un fichier Router.jsx à la racine du dossier `src/`.

3. A l'intérieur de ce fichier, tu peux invoquer la méthode createBrowserRouter(), et regarder la documentation :

[React-Router-Dom Documentation](https://reactrouter.com/en/main/routers/create-browser-router)

4. A minima,  tu devrais retrouver les lignes suivantes :

```
import { createBrowserRouter } from "react-router-dom";
import App from "./App";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
  },
]);

export default router;
```

5. Pour que le router joue le rôle d'orchestrateur, il faut l'importer dans le fichier main.jsx de la sorte :

```
import React from "react";
import ReactDOM from "react-dom/client";
import "./styles/index.css";
import { RouterProvider } from "react-router-dom";
import router from "./Router.jsx";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);

```