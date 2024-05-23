export async function run(req) {
  const listOfJokes = [
    "Tu connais la blague du petit dej ? Pas de bol !",
    "C'est l'histoire d'un pingouin qui respire par les fesses. Un jour il s’assoit et il meurt.",
    "Comment appelle-t-on une chauve-souris avec une perruque ? Une souris.",
    "Que dit un escargot quand il croise une limace ? Oh la belle décapotable !",
    "Pourquoi les plongeurs plongent-ils toujours en arrière et jamais en avant ? Parce que sinon ils tombent dans le bateau.",
    "Pourquoi les canards sont toujours à l'heure ? Parce qu'ils sont toujours dans l'étang.",
    "Avec quoi ramasse-t-on la papaye ? Avec une foufourche.",
    "Quel est le comble pour un électricien ? De ne pas être au courant.",
    "Que fait une fraise sur un cheval ? Tagada tagada tagada.",
    "Qu'est ce qui n'est pas un steak ? Une pastèque.",
  ]

  const joke = listOfJokes[Math.floor(Math.random() * listOfJokes.length)];
  return {status:200,headers: {}, body:{ "message" : joke}}
}