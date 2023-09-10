export class Rate {
  id!: number;
  votedRateAmout!: number;
}

export enum Role {
  Admin,
  User,
}

export class User {
  id!: number;
  name!: string;
  surname!: string;
  role: string;
  rate!: Rate[];
  totalRate: any;
  isVoted: boolean;

  constructor(user: User) {
    this.id = user.id;
    this.name = user.name;
    this.surname = user.surname;
    this.role = user.role;
    this.rate = user.rate;
    this.totalRate = user.totalRate;
    this.isVoted = user.isVoted;
  }

  static jsonToModel(allUsers: User[]): User[] {
    return allUsers.map((userFromAll: User) => {
      return new User({
        id: userFromAll.id,
        name: userFromAll.name,
        surname: userFromAll.surname,
        role: userFromAll.role,
        rate: userFromAll.rate,
        totalRate: calculateRate(userFromAll.rate).toFixed(1),
        isVoted: userFromAll.isVoted,
      });
    });
  }

  static voting(allUsers: User[], currentUser: User[]): User[] {
    return allUsers.map((userFromAll) => {
      return new User({
        id: userFromAll.id,
        name: userFromAll.name,
        surname: userFromAll.surname,
        role: userFromAll.role,
        rate: userFromAll.rate,
        totalRate: calculateRate(userFromAll.rate).toFixed(1),
        isVoted: canVote(userFromAll, currentUser),
      });
    });
  }
}

function calculateRate(rates: Rate[]): number {
  const mappedRates = rates
    .map((rate: any) => {
      if (rate.votedRateAmout) {
        return rate.votedRateAmout;
      }
    })
    .filter(Boolean);

  const returnedRate = Math.fround(
    mappedRates?.reduce((acc, rate) => acc + rate, 0) / mappedRates?.length
  );
  return isNaN(returnedRate) ? 0 : returnedRate;
}

function canVote(userFromAll: User, currentUser: User[]): boolean {
  const votedUserIds = userFromAll.rate.map((rate: Rate) => rate.id);
  const currentUser_ = currentUser.find(Boolean);

  if (currentUser_?.role === Role[Role.Admin]) {
    return true;
  }
  if (userFromAll.id === (currentUser_?.id as number)) {
    return true;
  }

  if (votedUserIds?.includes(currentUser_?.id as number)) {
    return true;
  }

  return false;
}
