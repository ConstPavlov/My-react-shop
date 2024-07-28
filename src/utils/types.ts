export const enum EnumRole {
  USER,
  ADMIN,
}
export type TypeUser = {
  email: string;
  fullName: string;
  exp: number;
  iat: number;
  id: number;
  role: string;
};
