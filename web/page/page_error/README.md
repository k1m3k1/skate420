# Pages d'Erreur HTTP

Ce projet utilise des pages d'erreur HTTP standard pour communiquer avec les utilisateurs lorsqu'une situation anormale se produit.

## Erreurs du client (4xx)

- **400 Bad Request**: Le serveur n'a pas pu comprendre la requête.
- **401 Unauthorized**: Accès refusé en raison d'informations d'identification invalides.
- **403 Forbidden**: Accès refusé en raison de permissions insuffisantes.
- **404 Not Found**: La ressource demandée est introuvable.
- **405 Method Not Allowed**: La méthode de la requête n'est pas autorisée pour la ressource spécifiée.
- **406 Not Acceptable**: La ressource demandée n'est pas disponible dans un format qui respecte les en-têtes "Accept" de la requête.
- **407 Proxy Authentication Required**: Authentification du proxy requise.
- **408 Request Timeout**: La requête a expiré.
- **409 Conflict**: La requête ne peut pas être complétée en raison d'un conflit avec l'état actuel de la ressource cible.
- **410 Gone**: La ressource n'est plus disponible et aucune redirection n'est connue.
- **411 Length Required**: La longueur requise de la requête HTTP est inconnue.
- **412 Precondition Failed**: Une ou plusieurs conditions de la requête ont échoué.
- **413 Payload Too Large**: La taille de la requête dépasse la taille maximale autorisée.
- **414 URI Too Long**: L'URI de la requête est trop long pour être traité par le serveur.
- **415 Unsupported Media Type**: Le format des données de la requête n'est pas supporté.
- **416 Range Not Satisfiable**: L'étendue spécifiée dans l'en-tête Range de la requête ne peut pas être satisfaite par le serveur.
- **417 Expectation Failed**: Le serveur ne peut pas satisfaire les attentes de l'en-tête Expect de la requête.
- **418 I'm a teapot**: Je suis une théière. C'est un code d'état HTTP en plaisanterie avec la valeur non standard. 

## Erreurs du serveur (5xx)

- **421 Misdirected Request**: La requête a été dirigée vers un serveur qui n'est pas capable de produire une réponse (par exemple, parce qu'une connexion a été réutilisée).
- **422 Unprocessable Entity**: L'entité fournie avec la requête est incompréhensible ou incorrecte.
- **423 Locked**: La ressource est verrouillée.
- **424 Failed Dependency**: La requête échoue en raison d'une dépendance.
- **426 Upgrade Required**: Le client doit passer à un protocole différent. 
- **429 Too Many Requests**: Le client a envoyé trop de requêtes dans un délai donné.
- **431 Request Header Fields Too Large**: Les champs d'en-tête de la requête sont trop grands.

## Autres Erreurs

- **451 Unavailable For Legal Reasons**: La ressource est inaccessible pour des raisons légales.
- **500 Internal Server Error**: Erreur interne du serveur.
- **501 Not Implemented**: La fonctionnalité demandée n'est pas implémentée.
- **502 Bad Gateway**: Le serveur a reçu une réponse non valide depuis un serveur en amont.
- **503 Service Unavailable**: Le serveur n'est pas prêt à gérer la requête. Cela peut être dû à une surcharge temporaire.
- **504 Gateway Timeout**: Le serveur en amont n'a pas répondu dans le délai imparti.
- **505 HTTP Version Not Supported**: La version HTTP de la requête n'est pas gérée par le serveur.
- **506 Variant Also Negotiates**: Le serveur a détecté une boucle de négociation pour la variante.
- **507 Insufficient Storage**: L'espace de stockage du serveur est épuisé.
- **508 Loop Detected**: La requête ne peut pas être complétée en raison d'une boucle infinie.
- **509 Bandwidth Limit Exceeded**: La bande passante du serveur a été dépassée.
- **510 Not Extended**: Les informations additionnelles nécessaires pour compléter la requête ne sont pas fournies.
- **511 Network Authentication Required**: Le client doit s'authentifier pour obtenir l'accès au
