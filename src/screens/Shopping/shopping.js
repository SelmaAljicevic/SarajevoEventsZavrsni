import React from "react";
import Card from "../../components/Card/card";

const Shopping = () => {
  return (
    <div>
      Shopping
      <div className="shopping-wrapper">
        <Card
          title="Sarajevo City Center"
          imageUrl="https://cdn.scc.ba/tekstovi/2014/11/slika_scc_front.jpg"
          body="neki sadrzaj... "
        />
        <Card
          title="BBI Center"
          imageUrl="https://upload.wikimedia.org/wikipedia/commons/9/98/BBI_Shopping_and_Business_Center.jpg"
          body="neki sadrzaj .... "
        />
        <Card
          title="Alta Shopping Center"
          imageUrl="http://s-one.ba/assets/Images/alta.jpg"
          body="neki sadrzaj .... "
        />
        <Card
          title="Bingo Shopping Center"
          imageUrl="https://media-cdn.tripadvisor.com/media/photo-m/1280/1c/04/80/24/main-entrance.jpg"
          body="neki sadrzaj .... "
        />
        <Card
          title="Bingo Shopping Center"
          imageUrl="https://www.rama-glas.com/wp-content/uploads/2017/11/Importanne-02.jpg"
          body="neki sadrzaj .... "
        />
      </div>
    </div>
  );
};

export default Shopping;
