import User from './user.model';

const rootEndpoint = 'https://notreapi';

export interface CurrentUser {
  CurrentUserId: number;
  CurrentUserPseudo: string;
  CurrentUserMdp: string;
  CurrentUserEmail: string;
}

class UserDbApi {

  connexion(name: string,mdp:string): Promise<User> {
    return this.fetchFromApi(`${rootEndpoint}/api/UtilisateursApi${name.trim()}`).then((CurrentUser) =>
      this.createCurrentUser(CurrentUser)
    );
  }

  private fetchFromApi(query: string): Promise<User> {
    return (
      fetch(query)
        // FIXME: JSON parse error when ingredient is not found
        .then((response) => response.json())
        .then((jsonResponse) => jsonResponse.CurrentUser || [])
        .catch((error) => {
          console.error(error);
        })
    );
  }


  private createCurrentUser (CurrentUser):User {
    return new User(CurrentUser.CurrentUserId,CurrentUser.CurrentUserPseudo,CurrentUser.CurrentUserMdp,CurrentUser.CurrentUserEmail)
  }
}

export default new UserDbApi();