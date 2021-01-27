import * as functions from 'firebase-functions';
import * as admin from "firebase-admin";

admin.initializeApp();
export const db = admin.firestore();
const REASION = 'asia-northeast1'

type Post = {
  id: number,
  title: string,
  content: string
}

export const addPost = functions.region(REASION).https.onRequest(async (req, res) => {

  if (req.method !== 'POST') {
    res.status(400).send("Bad request")
  }

  const collectionSnap = await db.collection("posts").get()

  const body = JSON.parse(req.body)
  console.log(body)
  const post = {
    id: collectionSnap.size + 1,
    title: body.title,
    content: body.content,
  }
  await db
  .collection("posts")
  .add(post);

  res.set("Access-Control-Allow-Origin", "*");
  res.send({
    data: post,
  });
});

export const deletePost = functions.region(REASION).https.onRequest(async (req, res) => {

  if (req.method !== 'DELETE') {
    res.status(400).send("Bad request")
  }
  if (req.query.id === undefined) {
    res.status(400).send("Bad request")
  }

  const collectionSnap = await db.collection("posts").where('id', '==', Number(req.query.id)).get()

  const doc = collectionSnap.docs.pop()
  await doc?.ref.delete()

  res.set("Access-Control-Allow-Origin", "*");
  res.send();
});

export const getPosts = functions.region(REASION).https.onRequest(async (req, res) => {
  const collectionSnap = await db.collection("posts").orderBy('id', 'desc').get()

  if (req.method !== 'GET') {
    res.status(400).send("Bad request")
  }

  const posts: Post[] = []
  collectionSnap.forEach(doc => posts.push(doc.data() as Post))

  res.set("Access-Control-Allow-Origin", "*");
  res.send({
    data: posts,
  });
});

export const getPost = functions.region(REASION).https.onRequest(async (req, res) => {

  if (req.method !== 'GET') {
    res.status(400).send("Bad request")
  }
  if (req.query.id === undefined) {
    res.status(400).send("Bad request")
  }

  const collectionSnap = await db.collection("posts").where('id', '==', Number(req.query.id)).get()
  const posts: Post[] = []
  collectionSnap.forEach(doc => posts.push(doc.data() as Post))

  res.set("Access-Control-Allow-Origin", "*");
  res.send({
    data: posts[0],
  });
});
