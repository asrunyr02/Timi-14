import "./App.css";
import Header from "./components/Header";
import ProfileCard from "./components/ProfileCard";

const team = [
  { id: 1, name: "Anna", role: "Hönnuður", age: 29, isleader: false },
  { id: 2, name: "Jón", role: "Forritari", isleader: false },
  { id: 3, name: "Kinga", role: "Forritari", isleader: true },
  { id: 4, name: "Hjalti", age: 33, isleader: false },
];

function App() {
  return (
    <main>
      <Header />
      <section className="team">
        {team.map((person) => (
          <ProfileCard
            key={person.id}
            name={person.name}
            age={person?.age}
            role={person?.role}
            isleader={person.isleader}
          />
        ))}
      </section>
    </main>
  );
}

export default App;
