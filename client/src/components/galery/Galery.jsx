import ImageCard from "../imageCard/ImageCard";

const images = [
  {
    id: 1,
    url: "https://i.pinimg.com/564x/b3/c9/90/b3c99043905d61989dec7fceff09f079.jpg",
  },
  {
    id: 2,
    url: "https://img.freepik.com/vector-gratis/diseno-vectores-coloridos-manzana_341269-1123.jpg?size=338&ext=jpg&ga=GA1.1.1880011253.1704412800&semt=ais",
  },
  {
    id: 3,
    url: "https://i.pinimg.com/564x/b3/c9/90/b3c99043905d61989dec7fceff09f079.jpg",
  },
  {
    id: 4,
    url: "https://img.freepik.com/vector-gratis/diseno-vectores-coloridos-manzana_341269-1123.jpg?size=338&ext=jpg&ga=GA1.1.1880011253.1704412800&semt=ais",
  },
  {
    id: 5,
    url: "https://i.pinimg.com/564x/b3/c9/90/b3c99043905d61989dec7fceff09f079.jpg",
  },
  {
    id: 6,
    url: "https://upload.wikimedia.org/wikipedia/commons/thumb/5/55/Protonotaria-citrea-002_edit.jpg/220px-Protonotaria-citrea-002_edit.jpg",
  },
  {
    id: 7,
    url: "https://i.pinimg.com/564x/b3/c9/90/b3c99043905d61989dec7fceff09f079.jpg",
  },
  {
    id: 8,
    url: "https://upload.wikimedia.org/wikipedia/commons/thumb/5/55/Protonotaria-citrea-002_edit.jpg/220px-Protonotaria-citrea-002_edit.jpg",
  },
  {
    id: 9,
    url: "https://i.pinimg.com/564x/b3/c9/90/b3c99043905d61989dec7fceff09f079.jpg",
  },
];

const Galery = () => {
  return (
    <div>
      <h1>Galery</h1>
      {images.map((image) => {
        return <ImageCard image={image.url} key={image.id} />;
      })}
    </div>
  );
};

export default Galery;
