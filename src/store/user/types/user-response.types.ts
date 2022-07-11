export type SignInResponse = {
  user: AuthenticatedUser;
};

export type SignUpResponse = {
  user: AuthenticatedUser;
};

export type UpdateProfileResponse = {
  user: AuthenticatedUser;
};

type AuthenticatedUser = {
  name: string;
  lastName: string;
  location: string;
  email: string;
  token: string;
};
