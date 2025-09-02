# Proyecto Base para Práctica de Git

Este proyecto es parte del Trabajo Práctico 01 – Git Básico.

Contiene archivos simples para que puedas practicar creación de ramas, commits, solución de errores y versionado.

## Estructura
- `src/app.js`: contiene un script básico.
- `data/info.txt`: contiene datos de ejemplo.


## ¿Como lo hicimos?
- Forkeamos el repositorio, clonandolo en una de las carpetas del repositorio nuestro donde trabajamos
- Somos: Arnon Namhias, Felipe Ganame, Francisco Ruibal, Nicolas Lien
- Con git branch newFeature --> creamos una nueva rama para poder realizar los dos commits atomicos
- Commit atomico 1: modificamos el 'hola mundo' por 'chau mundo' realizando git add. y git commit -m ""
- Commit atomico 2: modificamos el 'chau mundo' por 'hola universo' realizando git add. y git commit -m ""
- Crabajamos con la rama newFeature porque era una modificacion que hariamos al codigo que se encuentra en produccion, pero previo a qeu aparezca en produccion probamos todo en esta rama para posteriormente hacer un merge y dejarmo el produccion
- Realizamos esos commits ya que aportan informacion sufiente como para que cuando alguien disntinto a noosotro vea nuestro codigo pueda entender donde y como modificamos
- Lo integre al main haciendo uso de un merge que ya que el hotfix estaba probando solucionar el problema de la rama main que se mantuvo como siempre estuvo 
- https://github.com/felipeganame/2025_TP01_RepoBase/blob/main/src/app.js           En esta URL esta el repo que usamos para este tp