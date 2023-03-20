import React from "react";
import { Link } from "react-router-dom";
import "../App.css";

const posts = [
  {
    id: 1,
    title: "Cherry",
    desc: "Lorem, ipsum dolor sit amet consectetur adipisicing elit. A possimus excepturi aliquid nihil cumque ipsam facere aperiam at! Ea dolorem ratione sit debitis deserunt repellendus numquam ab vel perspiciatis corporis!",
    img: "https://images.pexels.com/photos/7008010/pexels-photo-7008010.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
  },
  {
    id: 2,
    title: "Lemon",
    desc: "Lorem, ipsum dolor sit amet consectetur adipisicing elit. A possimus excepturi aliquid nihil cumque ipsam facere aperiam at! Ea dolorem ratione sit debitis deserunt repellendus numquam ab vel perspiciatis corporis!",
    img: "https://images.pexels.com/photos/6489663/pexels-photo-6489663.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
  },
  {
    id: 3,
    title: "Pomegranate",
    desc: "Lorem, ipsum dolor sit amet consectetur adipisicing elit. A possimus excepturi aliquid nihil cumque ipsam facere aperiam at! Ea dolorem ratione sit debitis deserunt repellendus numquam ab vel perspiciatis corporis!",
    img: "https://images.pexels.com/photos/4230630/pexels-photo-4230630.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
  },
  {
    id: 4,
    title: "Avocado",
    desc: "Lorem, ipsum dolor sit amet consectetur adipisicing elit. A possimus excepturi aliquid nihil cumque ipsam facere aperiam at! Ea dolorem ratione sit debitis deserunt repellendus numquam ab vel perspiciatis corporis!",
    img: "https://images.pexels.com/photos/6157049/pexels-photo-6157049.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
  },
];

function Home() {
  return (
    <div className="posts" style={{ marginTop: 30 }}>
      {posts.map((post) => {
        return (
          <div key={post.id} className="post">
            <div className="col">
              <img
                className="post-images"
                src={post.img}
                style={{ width: 300, height: 300, objectFit: "cover" }}
                alt={post.title}
              />
            </div>
            <div className="col">
              <Link className="link" to={`/post/${post.id}`}>
                <div>{post.title}</div>
              </Link>
              <div className="desc">
                <p>{post.desc}</p>
              </div>
              <Link className="link" to={`/post/${post.id}`}>
                <button className="home-button">Read More..</button>
              </Link>
            </div>
          </div>
        );
      })}
    </div>
  );
}

export default Home;
