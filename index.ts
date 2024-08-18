import { PrismaClient } from '@prisma/client' 

const prisma = new PrismaClient();
//#region Usuario
async function createUser(email: string, name?: string) {
    const user = await prisma.user.create({
      data: {
        email,
        name,
      },
    });
    console.log(user);
  }

  async function getUsers() {
    const users = await prisma.user.findMany();
    console.log(users);
  }
  
  async function updateUser(id: number, data: { email?: string; name?: string }) {
    const user = await prisma.user.update({
      where: { id },
      data,
    });
    console.log(user);
  }

  async function deleteUser(id: number) {
    const user = await prisma.user.delete({
      where: { id },
    });
    console.log(user);
  }
  
//#endregion
//#region Author
async function createAuthor(tags: string, surname: string, completeName: string, userId: number) {
    const author = await prisma.author.create({
      data: {
        tags,
        surname,
        completeName,
        userId,
      },
    });
    console.log(author);
  }

  async function getAuthors() {
    const authors = await prisma.author.findMany();
    console.log(authors);
  }

  async function updateAuthor(id: number, data: { tags?: string; surname?: string; completeName?: string }) {
    const author = await prisma.author.update({
      where: { id },
      data,
    });
    console.log(author);
  }
  
  async function deleteAuthor(id: number) {
    const author = await prisma.author.delete({
      where: { id },
    });
    console.log(author);
  }
  
//#endregion
//#region Post
async function createPost(title: string, text: string, authorId: number) {
  const post = await prisma.post.create({
    data: {
      title,
      text,
      authorId,
    },
  });
  console.log(post);
}

async function getPosts() {
  const posts = await prisma.post.findMany();
  console.log(posts);
}

async function updatePost(id: number, data: { title?: string; text?: string }) {
  const post = await prisma.post.update({
    where: { id },
    data,
  });
  console.log(post);
}

async function deletePost(id: number) {
  const post = await prisma.post.delete({
    where: { id },
  });
  console.log(post);
}

//#endregion
//#region Comment
async function createComment(text: string, postId: number, userId: number) {
  const comment = await prisma.comment.create({
    data: {
      text,
      postId,
      userId,
    },
  });
  console.log(comment);
}

async function getComments() {
  const comments = await prisma.comment.findMany();
  console.log(comments);
}

async function updateComment(id: number, data: { text?: string }) {
  const comment = await prisma.comment.update({
    where: { id },
    data,
  });
  console.log(comment);
}

async function deleteComment(id: number) {
  const comment = await prisma.comment.delete({
    where: { id },
  });
  console.log(comment);
}

//#endregion
async function main() {
  console.log("Users")
    //await createUser("lucas@secco", "Lucas Secco");
    await getUsers();
    // await updateUser(1, { name: "Lucas Nascimento Secco" });
    // await deleteUser(1);

  console.log("Authors")
    //await createAuthor("Programador","Secco","Lucas Secco",1);
    await getAuthors();
    // await updateAuthor(1, { completeName: "Lucas Nascimento Secco" });
    // await deleteAuthor(1);

    console.log("Posts")
    //await createPost("ORM","Prisma",1);
    await getPosts();
    // await updatePost(1, { title: "PrismaORM" });
    // await deletePost(1);

    console.log("Comments")
    //await createComment("Muito bom",1,1);
    await getComments();
    // await updateComment(1, { text: "Prisma é muito bom." });
    // await deleteComment(1);

  }
  
  main()
    .then(async () => {
      console.log("Sucesso");
    })
    .catch(async (e) => {
      console.error("Erro:", e);
      process.exitCode = -1;
    })
    .finally(async () => {
      console.log("Finalizado");
      await prisma.$disconnect();
      process.exit();
    });