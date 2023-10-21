export default async function POST(req) {
  try {
    const { name, email, password } = await req.body;
    console.log("Name : ", name);
    console.log("Email : ", email);
    console.log("Password :", password);
  }
  catch (error) {
    console.log(error)
  }
}