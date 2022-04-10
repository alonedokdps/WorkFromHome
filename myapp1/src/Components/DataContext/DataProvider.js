import react, {createContext, useEffect, useState} from "react";
export const DataContext = createContext();
export const DataProvider = (props) => {
  const [products, setProducts] = useState([
    {
      _id: "1",
      title: "Wacth Product 01",
      images: [
        "https://cdn.shopdongho.com/2018/09/AE-1200WHD-1AVDF-3-1.jpg",
        "https://cdn.shopdongho.com/2018/09/AE-1200WHD-1AVDF-1-1.jpg",
        "https://cdn.shopdongho.com/2018/09/AE-1200WHD-1AVDF-2-1.jpg",
        "https://cdn.shopdongho.com/2018/09/AE-1200WHD-1AVDF-3-2.jpg",
      ],
      description:
        "How to and tutorial videos of cool CSS effect, Web Design ideas,JavaScript libraries, Node.",
      content:
        "Welcome to our channel Dev AT. Here you can learn web designing, UI/UX designing, html css tutorials, css animations and css effects, javascript and jquery tutorials and related so on.",
      colors: ["red", "black", "teal"],
      sizes: ["XL", "L", "M", "XM", "LX"],
      price: 101,
      count: 3,
    },
    {
      _id: "2",
      title: "Wacth Product 02",
      images: [
        "https://cdn.shopdongho.com/2018/09/casio-ga-120-1adr.jpg",
        "https://cdn.shopdongho.com/2018/09/dong-ho-casio-ga-120-1adr-nam-pin-day-nhua-a-2-2.jpg",
        "https://cdn.shopdongho.com/2018/09/dong-ho-casio-ga-120-1adr-nam-pin-day-nhua-a-1.jpg",
        "https://cdn.shopdongho.com/2018/09/dong-ho-casio-ga-120-1adr-nam-pin-day-nhua-a-1.jpg",
      ],
      description:
        "How to and tutorial videos of cool CSS effect, Web Design ideas,JavaScript libraries, Node.",
      content:
        "Welcome to our channel Dev AT. Here you can learn web designing, UI/UX designing, html css tutorials, css animations and css effects, javascript and jquery tutorials and related so on.",
      colors: ["red", "black", "teal"],
      sizes: ["XL", "L", "M", "XM", "LX"],
      price: 102,
      count: 3,
    },
    {
      _id: "3",
      title: "Wacth Product 03",
      images: [
        "https://cdn.shopdongho.com/2018/09/casio-ae-1200wh-1avdf.jpg",
        "https://cdn.shopdongho.com/2018/09/dong-ho-casio-ae-1200wh-1avdf-nam-pin-day-nhua-a-hinh-1.jpg",
        "https://cdn.shopdongho.com/2018/09/dong-ho-casio-ae-1200wh-1avdf-nam-pin-day-nhua-a-hinh-2.jpg",
        "https://cdn.shopdongho.com/2018/09/dong-ho-casio-ae-1200wh-1avdf-nam-pin-day-nhua-a-1.jpg",
      ],
      description:
        "How to and tutorial videos of cool CSS effect, Web Design ideas,JavaScript libraries, Node.",
      content:
        "Welcome to our channel Dev AT. Here you can learn web designing, UI/UX designing, html css tutorials, css animations and css effects, javascript and jquery tutorials and related so on.",
      colors: ["red", "black", "teal"],
      sizes: ["XL", "L", "M", "XM", "LX"],
      price: 103,
      count: 3,
    },
    {
      _id: "4",
      title: "Wacth Product 04",
      images: [
        "https://cdn.shopdongho.com/2018/09/casio-g-shock-dw-9052-1vdr.jpg",
        "https://cdn.shopdongho.com/2018/09/dong-ho-casio-DW-9052-1VDR-11.png",
        "https://cdn.shopdongho.com/2018/09/dong-ho-casio-DW-9052-1VDR-12.png",
        "https://cdn.shopdongho.com/2018/09/dong-ho-Casio-DW-9052-1VDR-01.jpg",
      ],
      description:
        "How to and tutorial videos of cool CSS effect, Web Design ideas,JavaScript libraries, Node.",
      content:
        "Welcome to our channel Dev AT. Here you can learn web designing, UI/UX designing, html css tutorials, css animations and css effects, javascript and jquery tutorials and related so on.",
      colors: ["red", "black", "teal"],
      sizes: ["XL", "L", "M", "XM", "LX"],
      price: 104,
      count: 3,
    },
    {
      _id: "5",
      title: "Wacth Product 05",
      images: [
        "https://cdn.shopdongho.com/2018/09/casio-ae-1200whb-3bvdf.jpg",
        "https://cdn.shopdongho.com/2018/09/dong-ho-casio-ae-1200whb-3bvdf-nam-pin-day-du-a-hinh-1.jpg",
        "https://cdn.shopdongho.com/2018/09/chi-tiet-dong-ho-casio-ae-1200whb-3bvdf-nam-pin-day-du-hinh-2.jpg",
        "https://cdn.shopdongho.com/2018/09/chi-tiet-dong-ho-casio-ae-1200whb-3bvdf-nam-pin-day-du-hinh-2.jpg",
      ],
      description:
        "How to and tutorial videos of cool CSS effect, Web Design ideas,JavaScript libraries, Node.",
      content:
        "Welcome to our channel Dev AT. Here you can learn web designing, UI/UX designing, html css tutorials, css animations and css effects, javascript and jquery tutorials and related so on.",
      colors: ["red", "black", "teal"],
      sizes: ["XL", "L", "M", "XM", "LX"],
      price: 105,
      count: 3,
    },
    {
      _id: "6",
      title: "Wacth Product 06",
      images: [
        "https://cdn.shopdongho.com/2018/09/casio-ltp-v300l-4audf.jpg",
        "https://cdn.shopdongho.com/2018/09/dong-ho-casio-ltp-v300l-4audf-nu-pin-day-da-hinh-2.jpg",
        "https://cdn.shopdongho.com/2018/09/dong-ho-Casio-LTP-V300L-4AUDF-02-1.jpg",
        "https://cdn.shopdongho.com/2018/09/dong-ho-Casio-LTP-V300L-4AUDF-03-1.jpg",
      ],
      description:
        "How to and tutorial videos of cool CSS effect, Web Design ideas,JavaScript libraries, Node.",
      content:
        "Welcome to our channel Dev AT. Here you can learn web designing, UI/UX designing, html css tutorials, css animations and css effects, javascript and jquery tutorials and related so on.",
      colors: ["red", "black", "teal"],
      sizes: ["XL", "L", "M", "XM", "LX"],
      price: 106,
      count: 3,
    },
  ]);
  const [cart, setCart] = useState([]);

  const addCart = (id) => {
    const check = cart.every((item) => {
      return item._id !== id;
    });
    if (check) {
      const data = products.filter((product) => {
        return product._id === id;
      });
      setCart([...cart, ...data]);
    } else {
      alert("the product has been added to cart");
    }
  };
  useEffect(() => {
    const dataCart = JSON.parse(localStorage.getItem("dataCart"));
    if (dataCart) setCart(dataCart);
  }, []);
  useEffect(() => {
    localStorage.setItem("dataCart", JSON.stringify(cart));
  }, [cart]);
  const value = {
    products: [products, setProducts],
    cart: [cart, setCart],
    addCart: addCart,
  };

  return (
    <DataContext.Provider value={value}>{props.children}</DataContext.Provider>
  );
};
