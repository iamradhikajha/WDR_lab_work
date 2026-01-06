import React, { useState } from "react";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Link,
  useNavigate,
} from "react-router-dom";
import axios from "axios";
import "./App.css";

// --- Navbar ---
const Navbar = () => (
  <nav className="navbar">
    <div className="logo">
      <h3>CinemaVibe</h3>
    </div>
    <div className="nav-links">
      <Link to="/">Home</Link>
      <Link to="/about">About</Link>
      <Link to="/book">Book</Link>
    </div>
  </nav>
);

const Hero = ({ title, subtitle, img }) => (
  <div
    className="hero"
    style={{
      backgroundImage: `linear-gradient(rgba(0,0,0,0.6), rgba(0,0,0,0.6)), url(${img})`,
    }}
  >
    <div className="hero-content">
      <h1>{title}</h1>
      <p>{subtitle}</p>
    </div>
  </div>
);

const Footer = () => (
  <footer className="footer">
    <p>© 2026 CineVibe Studios | Premium Movie Experiences</p>
  </footer>
);

// --- Home Page (3 Community Images) ---
const Home = () => {
  const navigate = useNavigate();
  const genres = [
    {
      name: "Action",
      img: "https://filmfare.wwmindia.com/content/2022/dec/pathaan41669878722.jpg",
      movies: ["Pathaan", "Jawan", "War", "Vikram", "KGF 2"],
    },
    {
      name: "Thriller",
      img: "https://i.ytimg.com/vi/cxA2y9Tgl7o/maxresdefault.jpg",
      movies: ["Drishyam 2", "Andhadhun", "Ratsasan", "Talaash", "Kahaani"],
    },
    {
      name: "Drama",
      img: "https://images.deccanchronicle.com/dc-Cover-9076q9vs1ti4k7gmiff7jv5ii4-20161224010017.Medi.jpeg",
      movies: ["Dangal", "Swades", "3 Idiots", "Lagaan", "Guzaarish"],
    },
    {
      name: "Mysterious",
      img: "https://m.media-amazon.com/images/I/81hb1cfz0PL._UF1000,1000_QL80_.jpg",
      movies: ["Tumbbad", "Haseen Dillruba", "Raat Akeli Hai", "Game Over"],
    },
    {
      name: "Friendship",
      img: "https://newgramophonehouse.com/wp-content/uploads/2024/12/f5d7d550-b76d-4d14-abaf-eea5a0a7e2c0.jpeg",
      movies: [
        "Zindagi Na Milegi Dobara",
        "Dil Chahta Hai",
        "Chhichhore",
        "Sholay",
      ],
    },
    {
      name: "Fiction",
      img: "https://disney.images.edge.bamgrid.com/ripcut-delivery/v2/variant/disney/019b2807-6f8a-789f-9ff4-b3300d6fd28b/compose?aspectRatio=1.78&format=webp&width=1200",
      movies: ["Brahmastra", "Robot", "Ra.One", "Koi Mil Gaya"],
    },
  ];

  return (
    <div className="page">
      <Hero
        title="Experience Every Emotion"
        subtitle="The largest movie network in the city."
        img="https://images.unsplash.com/photo-1489599849927-2ee91cede3ba?q=80&w=1500"
      />
      <div className="content">
        <h2>Choose Your Vibe</h2>
        <p>
          Our movie ticket booking platform makes it easy to book tickets
          anytime, anywhere. With real-time seat selection, secure payments, and
          the latest movie updates, we bring the cinema experience closer to
          you.
        </p>
        <div className="genre-grid">
          {genres.map((g) => (
            <div
              key={g.name}
              className="genre-card"
              style={{
                backgroundImage: `linear-gradient(rgba(0,0,0,0.5), rgba(0,0,0,0.8)), url(${g.img})`,
              }}
            >
              <h3>{g.name}</h3>
              <select
                className="movie-select"
                onChange={() => {
                  alert("Selected " + g.name);
                  navigate("/book");
                }}
              >
                <option>View Top Movies</option>
                {g.movies.map((m) => (
                  <option key={m}>{m}</option>
                ))}
              </select>
            </div>
          ))}
        </div>
        <div className="audience-section">
          <h2>Our Happy Community</h2>
          <div className="audience-images">
            <img
              src="https://img.freepik.com/free-photo/mother-with-daughter-cinema_23-2148202090.jpg"
              alt="1"
            />
            <img
              src="https://media.istockphoto.com/id/1764543793/photo/happy-asian-woman-enjoying-in-a-movie-at-cinema.jpg?s=612x612&w=0&k=20&c=_wG8yhMFwlRMWFvpBe7BM4nNKi8LgozXo19GnxR3jx8="
              alt="2"
            />
            <img
              src="https://images.indianexpress.com/2016/11/cinema_hall-759.jpg"
              alt="3"
            />
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

// --- About Page (3 Influencer Reviews) ---
const About = () => {
  const navigate = useNavigate();
  const reviews = [
    {
      name: "Prajakta Koli",
      text: "Amazing sound quality!",
      img: "https://www.cosmopolitanme.com/wp-content/uploads/sites/3/cloud/2023/04/13/indian-influencrs-1-819x1024.jpg",
    },
    {
      name: "Ranveer Allahbadia",
      text: "Premium seats are worth it.",
      img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:AND9GcSa_dQPKMscRoIoMqwXtNdROP1pDAHs1oJpyg&s",
    },
    {
      name: "Dolly Singh",
      text: "The vibes here are unmatched!",
      img: "https://www.cosmopolitanme.com/wp-content/uploads/sites/3/cloud/2023/04/13/indian-influencers-5-768x960.jpg",
    },
  ];
  const [idx, setIdx] = useState(0);

  return (
    <div className="page">
      <Hero
        title="Experience Every Emotion"
        subtitle="The largest movie network in the city."
        img="https://images.unsplash.com/photo-1489599849927-2ee91cede3ba?q=80&w=1500"
      />

      <div className="content text-center">
        <p>
          Discover the latest movies, choose your favorite seats, and enjoy a
          smooth, hassle-free booking experience.
        </p>
        <div className="slider-box">
          <div className="slider">
            <img src={reviews[idx].img} alt="user" />
            <h4>{reviews[idx].name}</h4>
            <p>"{reviews[idx].text}"</p>
            <button onClick={() => setIdx((idx + 1) % reviews.length)}>
              Next Review
            </button>
          </div>
        </div>
        <button className="book-btn-large" onClick={() => navigate("/book")}>
          Book Now
        </button>
      </div>
      <Footer />
    </div>
  );
};

// --- Book Page ---
const Book = () => {
  const [formData, setFormData] = useState({
    name: "",
    movie_type: "",
    hall: "IMAX Premium",
    time_slot: "12:00 PM",
    seat_class: "Gold",
  });

  const handleBooking = async (e) => {
    e.preventDefault();
    try {
      const res = await axios.post("http://localhost:5000/api/book", formData);
      if (res.data.success) {
        alert("🎉 Success! Your ticket is booked.");
        // RESETTING FORM HERE
        setFormData({
          name: "",
          movie_type: "",
          hall: "IMAX Premium",
          time_slot: "12:00 PM",
          seat_class: "Gold",
        });
        e.target.reset(); // This clears the visual input fields
      }
    } catch (err) {
      console.error(err);
      alert("❌ Server Error.");
    }
  };

  return (
    <div className="page">
      <Hero
        title="Experience Every Emotion"
        subtitle="The largest movie network in the city."
        img="https://images.unsplash.com/photo-1489599849927-2ee91cede3ba?q=80&w=1500"
      />

      <div className="content">
        <form className="luxury-form" onSubmit={handleBooking}>
          <h3>Pick your movie and book your seat in just a few clicks.</h3>
          <h2 style={{ color: "#d4af37" }}>Finalize Your Ticket</h2>
          <label>Full Name</label>
          <input
            type="text"
            placeholder="Enter Name"
            value={formData.name} // Added value for reset
            required
            onChange={(e) => setFormData({ ...formData, name: e.target.value })}
          />

          <label>Movie Name</label>
          <input
            type="text"
            placeholder="Type Movie"
            value={formData.movie_type} // Added value for reset
            required
            onChange={(e) =>
              setFormData({ ...formData, movie_type: e.target.value })
            }
          />

          <label>Select Cinema Hall</label>
          <select
            className="movie-select"
            value={formData.hall}
            onChange={(e) => setFormData({ ...formData, hall: e.target.value })}
          >
            <option value="IMAX Premium">IMAX Premium</option>
            <option value="Dolby Atmos Screen 1">Dolby Atmos Screen 1</option>
            <option value="Gold Class Suite">Gold Class Suite</option>
            <option value="Standard Screen 4">Standard Screen 4</option>
          </select>

          <label>Select Show Time</label>
          <select
            className="movie-select"
            value={formData.time_slot}
            onChange={(e) =>
              setFormData({ ...formData, time_slot: e.target.value })
            }
          >
            <option value="9:00 AM">9:00 AM</option>
            <option value="12:00 PM">12:00 PM</option>
            <option value="3:30 PM">3:30 PM</option>
            <option value="7:00 PM">7:00 PM</option>
            <option value="10:45 PM">10:45 PM</option>
          </select>

          <label>Seat Luxury</label>
          <div
            className="radio-group"
            style={{ display: "flex", gap: "10px", marginTop: "10px" }}
          >
            {["Basic", "Gold", "Premium", "Recliner"].map((s) => (
              <label key={s}>
                <input
                  type="radio"
                  name="seat"
                  value={s}
                  checked={formData.seat_class === s}
                  onChange={(e) =>
                    setFormData({ ...formData, seat_class: e.target.value })
                  }
                />{" "}
                {s}
              </label>
            ))}
          </div>
          <button type="submit" className="submit-btn-gold">
            Confirm Booking
          </button>
        </form>
      </div>
    </div>
  );
};

export default function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/book" element={<Book />} />
      </Routes>
    </Router>
  );
}
