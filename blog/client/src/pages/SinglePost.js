import React from "react";
import { Link } from "react-router-dom";
import "../App.css";
import Menu from "../components/Menu";
import Edit from "../img/edit.png";
import Delete from "../img/delete.png";

function SinglePost() {
  return (
    <div className="singlePost">
      <div className="content">
        <img
          src="https://images.pexels.com/photos/7008010/pexels-photo-7008010.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
          className="content_pic"
          alt="user"
        />
        <div className="user">
          <img
            src="https://images.pexels.com/photos/7008010/pexels-photo-7008010.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
            className="user_pic"
            alt="user"
          />
          <div className="info">
            <span>John</span>
            <p>Posted 2 days ago</p>
          </div>
          <div className="edit">
            <Link to={`/write?edit=2`}>
              <img className="edit-img" src={Edit} alt="edit" />
            </Link>
            <Link to={`/write?edit=2`}>
              <img className="edit-img" src={Delete} alt="delete" />
            </Link>
          </div>
        </div>
        <h1 className="blog-heading">Lorem Ipsum</h1>
        <p className="blog-para">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam ut
          felis ante. Nulla euismod massa ante, vitae tempus dolor facilisis
          placerat. Pellentesque pretium, tellus tincidunt luctus condimentum,
          magna arcu accumsan augue, sed facilisis ligula enim id eros. Morbi
          vel elit et orci elementum ornare at sed dui. Praesent orci ipsum,
          varius at urna id, egestas ullamcorper odio. Aenean ipsum tortor,
          varius in malesuada nec, efficitur non nibh. Curabitur nec tristique
          diam. Nam quam leo, congue in accumsan quis, aliquet vitae risus. Ut
          nec purus libero. Quisque sed varius tellus. Suspendisse sit amet
          turpis risus. Maecenas sit amet sapien sed est venenatis ultrices. Sed
          bibendum ex ac arcu vehicula, ut ullamcorper felis gravida.
        </p>
        <p className="blog-para">
          Phasellus sollicitudin magna vel dui condimentum mattis. Sed bibendum
          posuere ultricies. Aenean nec mollis risus, sed suscipit enim.
          Pellentesque id malesuada est, quis blandit quam. Suspendisse tempus
          nibh ac nulla sollicitudin ornare. Nulla id commodo nisi, ut molestie
          lectus. Nullam elementum, felis non hendrerit mattis, velit odio
          pharetra purus, in rhoncus dolor turpis nec est. Curabitur sit amet
          condimentum libero. Cras volutpat hendrerit rhoncus. Ut suscipit
          rhoncus dolor, eu viverra nibh tempor non. Praesent at mauris lectus.
          Cras cursus euismod enim, vel pellentesque nisi dignissim in. Morbi eu
          laoreet leo, nec finibus elit. Donec mattis placerat faucibus.
        </p>
        <p className="blog-para">
          Fusce pellentesque vel urna id aliquam. Nunc semper magna lorem, nec
          faucibus lectus mattis elementum. Duis pulvinar velit et arcu
          consequat lacinia. Phasellus purus diam, porta quis mauris eu, tempus
          imperdiet enim. Fusce id blandit arcu, at rhoncus risus. Vestibulum
          dignissim malesuada suscipit. Donec luctus auctor dui ac vehicula.
          Nunc eleifend sapien id arcu porttitor vestibulum. Ut sit amet dictum
          elit. Morbi et nisi ut arcu fringilla lobortis. Donec eu velit
          vestibulum, vehicula quam vel, dignissim nisi.
        </p>
      </div>

      <Menu />
    </div>
  );
}

export default SinglePost;
