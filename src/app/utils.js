import { Client, Account, OAuthProvider } from "appwrite";


// connect next.js to appwrite account
export const connectToAppwrite = () => {
  const client = new Client();

  client
    .setEndpoint(process.env.NEXT_PUBLIC_APPWRITE_ENDPOINT)
    .setProject(process.env.NEXT_PUBLIC_APPWRITE_PROJECT);


    const account = new Account(client);

    return account
}
const signInWithGithub = () => {

  const account = connectToAppwrite()

  // Go to OAuth provider login page
  account.createOAuth2Session(
    OAuthProvider.Github, // provider
    'http://localhost:3000/welcome', // redirect here on success
    'http://localhost:3000/', // redirect here on failure
  );

}


export default signInWithGithub;
