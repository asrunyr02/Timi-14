type ProfileCardProps = {
  name: string;
  role?: string;
  age?: number;
  isleader: boolean;
};

function ProfileCard({
  name,
  role = "Astoð",
  age,
  isleader,
}: ProfileCardProps) {
  return (
    <article className="card">
      <div className="avatar">{name[0]}</div>
      <h2>{name}</h2>
      {isleader && <span className="badge">Hópstjóri</span>}
      <p>{role}</p>
      {age && <p className="age">{age} ára</p>}
    </article>
  );
}

export default ProfileCard;
