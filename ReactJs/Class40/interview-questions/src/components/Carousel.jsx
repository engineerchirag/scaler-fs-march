const { useState, useEffect, useRef } = require("react");

const Carousel = () => {
  const [activeImageIndex, setActiveImageIndex] = useState(0);
  const [images, setImages] = useState([
    {
      id: 1,
      imageUrl:
        "https://images.pexels.com/photos/14286166/pexels-photo-14286166.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
      title: "Item 1",
      description: "Description of item 1",
    },
    {
      id: 2,
      imageUrl:
        "https://images.pexels.com/photos/13455799/pexels-photo-13455799.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
      title: "Item 2",
      description: "Description of item 2",
    },
    {
      id: 3,
      imageUrl:
        "https://images.pexels.com/photos/15582923/pexels-photo-15582923.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
      title: "Item 3",
      description: "Description of item 3",
    },
  ]);

  const timer = useRef();

  const setPrevious = () => {
    setActiveImageIndex((currentIndex) =>
      currentIndex === 0 ? images.length - 1 : currentIndex - 1
    );
  };

  const setNext = () => {
    setActiveImageIndex((currentIndex) =>
      currentIndex === images.length - 1 ? 0 : currentIndex + 1
    );
  };

  useEffect(() => {
    timer.current = setInterval(() => {
        setNext();
    }, 5000);

    return () => {
        clearInterval(timer.current);
    }
  }, []);

  return (
    <div>
      <div>
        <img src={images[activeImageIndex].imageUrl} alt="" />
      </div>
      <div>
        <button onClick={setPrevious}>Prev</button>
        <button onClick={setNext}>Next</button>
      </div>
    </div>
  );
};

export default Carousel;
