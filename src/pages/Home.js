import React from "react";
import Articles from "../components/Articles";
import Modal from "../components/modal/Modal";

const Home = () => {
  return (
    <div>
      <Modal
        header="Modal Title"
        content="Lorem ipsum dolor sit amet consectetur adipisicing elit. Praesentium 
        quod quasi libero soluta provident doloremque ipsa reiciendis, facere 
        accusamus nesciunt sint tempora quas, perferendis dolorem quaerat
        animi repudiandae maxime voluptas! Lorem ipsum dolor sit amet,
        consectetur adipisicing elit. Quisquam pariatur, molestiae laboriosam
        provident omnis vitae delectus ut dolores dignissimos, fuga tenetur in
        distinctio reiciendis deleniti itaque animi suscipit consectetur iure?
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Est magnam
        eius iusto id vero, dolore iste delectus necessitatibus commodi odit
        laboriosam sunt, facere fuga. Ratione ipsum expedita quia fugiat
        voluptatibus! Lorem ipsum dolor sit amet consectetur, adipisicing
        elit. Illum eum fugiat minima assumenda. Nemo, modi doloremque
        architecto rerum praesentium excepturi, consequatur, eaque accusantium
        ipsa dolorem quidem."
        footer="&copy;2022 Hans"
      />
      <Articles />
    </div>
  );
};

export default Home;
